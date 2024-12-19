import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import NavBar from '@/components/wrapper/navbar'
import { AlertCircle, ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'

export default function Cancel() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar />
      <div className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-16">
        <Card className="w-full max-w-md p-6 text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
              <AlertCircle className="h-12 w-12 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Payment Cancelled
          </h1>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            No worries! Your payment was cancelled and you haven&apos;t been charged.
            You can try again whenever you&apos;re ready.
          </p>
          <div className="space-y-3">
            <Link href="/pricing" className="block">
              <Button className="w-full gap-2">
                <ArrowLeft className="h-4 w-4" />
                Return to Pricing
              </Button>
            </Link>
            <Link href="/" className="block">
              <Button variant="outline" className="w-full gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Need help? <Link href="/support" className="text-primary hover:underline">Contact our support team</Link>
          </p>
        </Card>
      </div>
    </main>
  )
}
