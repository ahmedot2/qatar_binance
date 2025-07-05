import { AnimatedSection } from "@/components/animated-section"
import { Card } from "@/components/ui/card"
import { PitchDeckCarousel } from "@/components/pitch-deck-carousel"

export function PitchDeckSection() {
    return (
        <AnimatedSection id="pitch-deck" className="bg-transparent py-24">
            <h2 className="section-title">VIII. The Pitch Deck</h2>
            <p className="section-subtitle">
                Explore the complete investment proposal and strategic vision in our interactive presentation.
            </p>

            <div className="mt-12 flex justify-center">
                <Card className="w-full max-w-5xl p-2">
                    <PitchDeckCarousel />
                </Card>
            </div>
        </AnimatedSection>
    )
}
