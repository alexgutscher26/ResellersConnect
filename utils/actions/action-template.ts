"use server";

import { auth } from "@clerk/nextjs/server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { type Database } from "@/types/supabase";
import { type PostgrestError } from "@supabase/supabase-js";

export type ActionResponse<T> = {
  data: T | null;
  error: string | null;
};

export async function actionTemplate(): Promise<ActionResponse<Database["public"]["Tables"]["user"]["Row"][]>> {
  try {
    const { userId } = await auth();

    if (!userId) {
      return {
        data: null,
        error: "Unauthorized: You must be signed in to perform this action"
      };
    }

    const supabase = createServerComponentClient<Database>({ cookies });

    const { data, error } = await supabase
      .from("user")
      .select("*");

    if (error) {
      console.error("Database error:", error);
      return {
        data: null,
        error: error.message
      };
    }

    return {
      data,
      error: null
    };

  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      data: null,
      error: error instanceof Error ? error.message : "An unexpected error occurred"
    };
  }
}
