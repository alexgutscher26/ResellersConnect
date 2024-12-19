"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Full-time Reseller",
    image: "/testimonials/sarah.jpg",
    content: "ResellersConnect has completely transformed how I manage my reselling business. I used to spend hours cross-posting items, but now it's all automated. The time I save goes straight into sourcing more inventory.",
  },
  {
    name: "Michael Chen",
    title: "Vintage Clothing Seller",
    image: "/testimonials/michael.jpg",
    content: "The inventory sync feature is a game-changer. No more overselling or having to manually update quantities across platforms. It's like having a virtual assistant managing all my listings.",
  },
  {
    name: "Emily Rodriguez",
    title: "Boutique Owner",
    image: "/testimonials/emily.jpg",
    content: "As someone who sells on multiple platforms, the analytics help me understand which items perform best where. The smart pricing suggestions have also helped increase my profit margins significantly.",
  },
]

export default function Testimonials() {
  return (
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Loved by resellers
        </h2>
        <p className="text-lg text-muted-foreground">
          Here's what our customers have to say about their experience with ResellersConnect.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card 
            key={testimonial.name}
            className="bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-muted-foreground mb-6">
                {testimonial.content}
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-4">
                <div className="relative w-10 h-10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
