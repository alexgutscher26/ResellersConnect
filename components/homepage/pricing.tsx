"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Loader2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { loadStripe, type Stripe } from "@stripe/stripe-js"
import { toast } from "sonner"
import { TITLE_TAILWIND_CLASS } from "@/utils/constants"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

interface Plan {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  priceIdMonthly: string;
  priceIdYearly: string;
  actionLabel: string;
  popular?: boolean;
  exclusive?: boolean;
}

interface PricingSwitchProps {
  onSwitch: (value: string) => void;
  isYearly: boolean;
}

interface PricingCardProps extends Plan {
  user: ReturnType<typeof useUser>["user"];
  handleCheckout: (priceId: string, subscription: boolean) => Promise<void>;
  isYearly: boolean;
}

interface PricingHeaderProps {
  title: string;
  subtitle: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const PricingHeader = ({ title, subtitle }: PricingHeaderProps) => (
  <motion.section 
    className="text-center max-w-3xl mx-auto mb-12"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <motion.h1 
      className={cn(
        TITLE_TAILWIND_CLASS,
        "text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400"
      )}
      variants={itemVariants}
    >
      {title}
    </motion.h1>
    <motion.p 
      className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400"
      variants={itemVariants}
    >
      {subtitle}
    </motion.p>
  </motion.section>
)

const PricingSwitch = ({ onSwitch, isYearly }: PricingSwitchProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="mb-12"
  >
    <Tabs 
      defaultValue={isYearly ? "1" : "0"} 
      className="w-52 mx-auto bg-gray-100 dark:bg-gray-800/50 rounded-full p-1"
      onValueChange={onSwitch}
    >
      <TabsList className="w-full h-10 bg-transparent">
        <TabsTrigger 
          value="0" 
          className={cn(
            "w-1/2 rounded-full text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900",
            "data-[state=active]:text-gray-900 dark:data-[state=active]:text-gray-100",
            "data-[state=inactive]:text-gray-600 dark:data-[state=inactive]:text-gray-400"
          )}
        >
          Monthly
        </TabsTrigger>
        <TabsTrigger 
          value="1" 
          className={cn(
            "w-1/2 rounded-full text-sm font-medium transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900",
            "data-[state=active]:text-gray-900 dark:data-[state=active]:text-gray-100",
            "data-[state=inactive]:text-gray-600 dark:data-[state=inactive]:text-gray-400"
          )}
        >
          Yearly
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </motion.div>
)

const PricingCard = ({ 
  user, 
  handleCheckout, 
  isYearly, 
  title, 
  priceIdMonthly, 
  priceIdYearly, 
  monthlyPrice, 
  yearlyPrice, 
  description, 
  features, 
  actionLabel, 
  popular, 
  exclusive 
}: PricingCardProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handlePurchase = async () => {
    if (!user?.id) {
      toast("Please login or sign up to purchase", {
        description: "You must be logged in to make a purchase",
        action: {
          label: "Sign Up",
          onClick: () => router.push("/sign-up"),
        },
      });
      return;
    }

    setIsLoading(true);
    try {
      await handleCheckout(isYearly ? priceIdYearly : priceIdMonthly, true);
    } catch (error) {
      toast.error("Failed to process purchase. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="h-full w-full sm:w-[350px]"
    >
      <Card
        className={cn(
          "relative h-full transition-all duration-300",
          "hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-primary/20",
          {
            "border-primary/50": popular,
            "border-gray-200 dark:border-gray-800": !popular,
            "bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800": exclusive,
          }
        )}
      >
        {popular && (
          <div className="absolute -top-3 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-primary to-primary-foreground py-1 text-center text-sm font-medium text-white shadow-lg">
            Most Popular
          </div>
        )}
        <div className="h-full flex flex-col">
          <CardHeader className="pb-8 pt-6">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl font-bold">
                  {title}
                  {exclusive && (
                    <Sparkles className="inline-block ml-2 h-4 w-4 text-yellow-500" />
                  )}
                </CardTitle>
                <CardDescription className="mt-2 min-h-[40px] text-gray-600 dark:text-gray-400">
                  {description}
                </CardDescription>
              </div>
            </div>
            <div className="mt-6 flex items-baseline gap-x-2">
              <span className="text-4xl font-bold tracking-tight">
                {yearlyPrice && isYearly ? `$${yearlyPrice}` : monthlyPrice ? `$${monthlyPrice}` : "Custom"}
              </span>
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                {yearlyPrice && isYearly ? "/year" : monthlyPrice ? "/month" : null}
              </span>
              {isYearly && yearlyPrice && monthlyPrice && (
                <span className="ml-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  Save ${monthlyPrice * 12 - yearlyPrice}
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-4">
              {features.map((feature) => (
                <CheckItem key={feature} text={feature} />
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pt-8 pb-6">
            <Button
              onClick={handlePurchase}
              className={cn(
                "relative w-full h-11 rounded-full font-medium transition-all",
                {
                  "bg-primary hover:bg-primary/90": popular,
                  "bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900": !popular,
                }
              )}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                actionLabel
              )}
            </Button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
};

const CheckItem = ({ text }: { text: string }) => (
  <motion.li 
    className="flex items-start gap-3"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3 }}
  >
    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
    <span className="text-gray-700 dark:text-gray-300">{text}</span>
  </motion.li>
);

const plans: Plan[] = [
  {
    title: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for beginners testing the platform",
    features: [
      "Up to 10 active listings",
      "Basic inventory management",
      "Manual crosslisting to 2 platforms",
      "Basic analytics dashboard",
      "Watermarked photo editor"
    ],
    priceIdMonthly: "free-tier",
    priceIdYearly: "free-tier",
    actionLabel: "Get Started",
  },
  {
    title: "Solo Reseller",
    monthlyPrice: 25,
    yearlyPrice: 250,
    description: "Ideal for casual or part-time resellers",
    features: [
      "Up to 100 active listings",
      "Crosslisting to 3 platforms",
      "Automated listing updates",
      "Integrated shipping calculators",
      "Customizable listing templates",
      "Basic performance reports"
    ],
    actionLabel: "Get Started",
    priceIdMonthly: process.env.NEXT_PUBLIC_STRIPE_SOLO_MONTHLY_PRICE_ID!,
    priceIdYearly: process.env.NEXT_PUBLIC_STRIPE_SOLO_YEARLY_PRICE_ID!,
    popular: true,
  },
  {
    title: "Power Reseller",
    monthlyPrice: 70,
    yearlyPrice: 700,
    description: "For full-time resellers and small businesses",
    features: [
      "Up to 1,000 active listings",
      "Crosslisting to 5 platforms",
      "Bulk listing import/export",
      "AI-driven pricing recommendations",
      "Real-time platform sync",
      "Advanced analytics & predictions",
      "Custom SKU & label printing",
      "Priority customer support"
    ],
    actionLabel: "Get Started",
    priceIdMonthly: process.env.NEXT_PUBLIC_STRIPE_POWER_MONTHLY_PRICE_ID!,
    priceIdYearly: process.env.NEXT_PUBLIC_STRIPE_POWER_YEARLY_PRICE_ID!,
    exclusive: true,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
      setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY));
    }
  }, []);

  const handleCheckout = async (priceId: string, subscription: boolean) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/payments/create-checkout-session", {
        userId: user?.id,
        email: user?.emailAddresses?.[0]?.emailAddress,
        priceId,
        subscription,
      });

      if (!data.sessionId) {
        throw new Error("Failed to create checkout session");
      }

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe failed to initialize");
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      toast.error("Failed to process checkout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      <PricingHeader 
        title="Choose Your Plan" 
        subtitle="Start with our free plan and upgrade as you grow" 
      />
      <PricingSwitch onSwitch={togglePricingPeriod} isYearly={isYearly} />
      <motion.section 
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 mt-8"
        variants={containerVariants}
      >
        <AnimatePresence mode="wait">
          {plans.map((plan) => (
            <PricingCard
              key={plan.title}
              {...plan}
              user={user}
              handleCheckout={handleCheckout}
              isYearly={isYearly}
            />
          ))}
        </AnimatePresence>
      </motion.section>
    </motion.div>
  );
}