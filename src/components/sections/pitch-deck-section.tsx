import { AnimatedSection } from "@/components/animated-section"
import { Card } from "@/components/ui/card"
import DecryptedText from "../decrypted-text"

const subtitle = "Explore the complete investment proposal and strategic vision in our interactive presentation."

export function PitchDeckSection() {
    return (
        <AnimatedSection id="pitch-deck" className="bg-transparent py-24">
            <h2 className="section-title">VIII. The Pitch Deck</h2>
            <DecryptedText
                text={subtitle}
                parentClassName="section-subtitle"
                animateOn="view"
                sequential={true}
                speed={20}
                encryptedClassName="text-primary/50"
            />

            <div className="mt-12 flex justify-center">
                <Card className="w-full max-w-5xl p-2 overflow-hidden">
                    <div className="aspect-[16/9] w-full">
                        <video
                            src="/videos/pitch-deck.mp4"
                            controls
                            className="w-full h-full object-cover rounded-xl"
                            aria-label="Pitch deck video"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Card>
            </div>
        </AnimatedSection>
    )
}
