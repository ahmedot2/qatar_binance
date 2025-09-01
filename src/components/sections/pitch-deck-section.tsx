import { AnimatedSection } from "@/components/animated-section"
import { Card } from "@/components/ui/card"
import DecryptedText from "../decrypted-text"
import Image from "next/image"

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

            <div className="mt-12 flex flex-col items-center gap-8">
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
                <Card className="w-full max-w-5xl p-2 overflow-hidden">
                    <Image
                        src="/images/pitch-deck.png"
                        alt="Pitch Deck"
                        width={1280}
                        height={720}
                        className="rounded-xl"
                        data-ai-hint="presentation slide"
                    />
                </Card>
            </div>
        </AnimatedSection>
    )
}
