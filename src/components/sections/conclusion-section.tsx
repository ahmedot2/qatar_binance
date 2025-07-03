"use client"

import { AnimatedSection } from "@/components/animated-section"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export function ConclusionSection() {
    return (
        <AnimatedSection id="contact" className="relative overflow-hidden bg-background/70">
            <div className="relative z-10 text-center">
                <h2 className="section-title">A Paradigm Shift: Architecting Tomorrow</h2>
                <p className="section-subtitle">
                    This is more than an investment; it is a declaration. We are not just participating in the future of finance; we are architecting it. This partnership establishes a new center of gravity for the digital economy, built on a foundation of shared vision and unprecedented collaboration.
                </p>
            </div>

            <Card className="relative z-10 mt-12 max-w-5xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Initiate the Shift</CardTitle>
                    <CardDescription className="text-center">The future is not waiting. Let's begin the conversation that will define it. Reach out to formalize our partnership and start building the new financial paradigm.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
            </Card>
        </AnimatedSection>
    )
}
