
"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Card } from "@/components/ui/card"
import DecryptedText from "../decrypted-text"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"

const subtitle = "Explore the complete investment proposal and strategic vision in our interactive presentation."

const slides = Array.from({ length: 17 }, (_, i) => ({
  src: `/slides/slide-${i + 1}.png`,
  alt: `Pitch Deck Slide ${i + 1}`,
}))


export function PitchDeckSection() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])


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
                
                <Card className="w-full max-w-5xl p-4 overflow-hidden">
                    <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                            {slides.map((slide, index) => (
                                <CarouselItem key={index}>
                                    <div className="aspect-[16/9] w-full relative">
                                        <Image
                                            src={slide.src}
                                            alt={slide.alt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="rounded-xl object-contain"
                                            data-ai-hint="presentation slide"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                    </Carousel>
                    <div className="py-2 text-center text-sm text-muted-foreground">
                        Slide {current} of {count}
                    </div>
                     <div className="flex justify-center gap-2 mt-2">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`h-2 w-2 rounded-full transition-all ${current === index + 1 ? 'w-4 bg-primary' : 'bg-muted'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </Card>
            </div>
        </AnimatedSection>
    )
}
