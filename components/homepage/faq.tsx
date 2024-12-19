import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What platforms can I list my items on?",
        answer: "ResellersConnect supports cross-listing on major platforms including eBay, Poshmark, Mercari, Facebook Marketplace, and Depop. We're constantly adding support for new platforms to help you reach more buyers."
    },
    {
        question: "How does the automated cross-listing work?",
        answer: "Our platform uses advanced automation to create listings across multiple platforms simultaneously. Simply enter your item details once, and we'll format and optimize your listing for each platform, including proper category mapping and platform-specific requirements."
    },
    {
        question: "Can I manage my inventory across multiple platforms?",
        answer: "Yes! Our centralized inventory management system automatically syncs stock levels across all platforms. When an item sells on one platform, the quantity is updated everywhere else to prevent overselling."
    },
    {
        question: "How do you handle pricing across different platforms?",
        answer: "You can set platform-specific pricing rules to account for different fee structures and market conditions. Our smart pricing feature can also suggest optimal prices based on market data and your profit goals."
    },
    {
        question: "What happens when an item sells?",
        answer: "When an item sells on any platform, our system automatically: 1) Updates inventory across all platforms, 2) Notifies you of the sale, 3) Provides shipping details and labels if needed, and 4) Updates your analytics dashboard."
    },
    {
        question: "Is there a limit to how many items I can list?",
        answer: "Our plans are designed to scale with your business. The Basic plan supports up to 100 active listings, while our Professional and Enterprise plans offer unlimited listings with additional features for high-volume sellers."
    }
]

export function FAQ() {
    return (
        <section className="w-full max-w-4xl mx-auto py-24 px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground">
                    Everything you need to know about ResellersConnect and how it can help your business grow.
                </p>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem 
                        key={`faq-${index}`} 
                        value={`item-${index + 1}`}
                        className="border-b border-border"
                    >
                        <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}
