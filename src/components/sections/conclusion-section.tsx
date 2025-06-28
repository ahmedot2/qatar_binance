import { Section } from "@/components/icons"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export function ConclusionSection() {
    return (
        <Section id="contact" className="bg-background">
            <div className="text-center">
                <h2 className="section-title">VIII. Charting Binance's Future from Doha</h2>
                <p className="section-subtitle">
                    A powerful summary of mutual benefits, de-risking, the precedent set for the crypto industry, and the vision for shaping global digital finance.
                </p>
            </div>

            <Card className="mt-12 max-w-5xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Partner with Us to Shape the Future of Digital Finance</CardTitle>
                    <CardDescription className="text-center">Submit your inquiry to begin the conversation.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
            </Card>
        </Section>
    )
}
