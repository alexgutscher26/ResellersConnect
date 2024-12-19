import HeroSection from "@/components/homepage/hero-section";
import Pricing from "@/components/homepage/pricing";
import { Lights } from "@/components/ui/background-lights";
import PageWrapper from "@/components/wrapper/page-wrapper";
import config from "@/config";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col justify-center items-center w-full mt-[1rem] p-3">
        <HeroSection />
      </div>
      <div
        className={
          "absolute bottom-0 left-0 w-full h-full z-0 animate-appear opacity-0"
        }
      >
        <Lights />
      </div>
      {config.auth.enabled && config.payments.enabled && (
        <div>
          <Pricing />
        </div>
      )}
    </PageWrapper>
  );
}
