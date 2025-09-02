"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import DecryptedText from "../decrypted-text"

const subtitle = "This is more than an investment; it is a declaration. We are not just participating in the future of finance; we are architecting it. This partnership establishes a new center of gravity for the digital economy, built on a foundation of shared vision and unprecedented collaboration."

export function ConclusionSection() {
    return (
        <AnimatedSection id="contact" className="relative overflow-hidden bg-transparent py-24">
            <div className="relative z-10 text-center">
                <h2 className="section-title">A Paradigm Shift: Architecting Tomorrow</h2>
                <DecryptedText
                    text={subtitle}
                    parentClassName="section-subtitle"
                    animateOn="view"
                    sequential={true}
                    speed={20}
                    encryptedClassName="text-primary/50"
                />
            </div>
        </AnimatedSection>
    )
}
