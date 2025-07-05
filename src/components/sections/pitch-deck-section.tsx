import { AnimatedSection } from "@/components/animated-section"
import { Card } from "@/components/ui/card"

export function PitchDeckSection() {
    return (
        <AnimatedSection id="pitch-deck" className="bg-transparent py-24">
            <h2 className="section-title">VIII. The Pitch Deck</h2>
            <p className="section-subtitle">
                Explore the complete investment proposal and strategic vision in our interactive presentation.
            </p>

            <div className="mt-12 flex justify-center">
                <Card className="w-full max-w-5xl p-2">
                    <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingTop: '64.28%' }}>
                        <iframe 
                            className="absolute top-0 left-0 w-full h-full border-0"
                            src="https://gamma.app/embed/jtzn6cacnhnww0q" 
                            allow="fullscreen" 
                            title="$10 Billion Investment in Binance"
                        ></iframe>
                    </div>
                </Card>
            </div>
        </AnimatedSection>
    )
}
