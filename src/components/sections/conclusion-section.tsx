"use client"

import { Section } from "@/components/icons"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export function ConclusionSection() {
    return (
        <Section id="contact" className="relative overflow-hidden bg-secondary">
            <div className="absolute inset-0 z-0">
                 <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
                 <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000"></div>
            </div>
             <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { transform: scale(1); opacity: 0.1; }
                    50% { transform: scale(1.1); opacity: 0.15; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
            <div className="relative z-10 text-center">
                <h2 className="section-title">A Paradigm Shift: Architecting Tomorrow</h2>
                <p className="section-subtitle">
                    This is more than an investment; it is a declaration. We are not just participating in the future of finance; we are architecting it. This partnership establishes a new center of gravity for the digital economy, built on a foundation of shared vision and unprecedented collaboration.
                </p>
            </div>

            <Card className="relative z-10 mt-12 max-w-5xl mx-auto bg-card/80 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-2xl text-center">Initiate the Shift</CardTitle>
                    <CardDescription className="text-center">The future is not waiting. Let's begin the conversation that will define it. Reach out to formalize our partnership and start building the new financial paradigm.</CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
            </Card>
        </Section>
    )
}
