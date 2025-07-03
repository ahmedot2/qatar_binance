import { Section } from "@/components/icons"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export function ConclusionSection() {
    return (
        <Section id="contact" className="bg-background">
            <div className="text-center">
                <h2 className="section-title">VIII. Architecting the Future, Together</h2>
                <p className="section-subtitle">
                    This is more than an investment; it's a declaration of intent. A partnership between Qatar and Binance will not only generate immense value but will redefine the global financial landscape for generations to come.
                </p>
            </div>

            <Card className="mt-12 max-w-5xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Begin the Partnership</CardTitle>
                    <CardDescription className="text-center">Contact us to initiate the next steps in this landmark opportunity.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
            </Card>
        </Section>
    )
}
