import { ArrowLeft, LockIcon } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function NotAuthorized() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background to-muted">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 space-y-8"
      >
        <div className="flex flex-col items-center space-y-6">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
            className="relative w-24 h-24"
          >
            <div className={cn(
              "absolute inset-0 rounded-full",
              "bg-gradient-to-br from-primary/50 to-primary",
              "animate-pulse duration-2000"
            )} />
            <div className="absolute inset-0 flex items-center justify-center">
              <LockIcon className="w-12 h-12 text-primary-foreground" aria-hidden="true" />
            </div>
          </motion.div>

          <div className="text-center space-y-4">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={cn(
                "text-4xl font-bold",
                "bg-clip-text text-transparent",
                "bg-gradient-to-r from-primary to-primary/60"
              )}
            >
              Access Restricted
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground"
            >
              This area requires additional permissions
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-muted-foreground/80"
            >
              Please upgrade your subscription to access premium features.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full space-y-4"
          >
            <Button 
              asChild
              className="w-full"
              size="lg"
            >
              <Link href="/pricing">
                Upgrade Plan
              </Link>
            </Button>

            <Button 
              variant="outline"
              className="w-full"
              size="lg"
              onClick={() => router.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}