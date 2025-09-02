"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
    return (
        <section className="h-screen w-full relative flex items-center justify-center text-center text-white overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-[-1] w-full h-full object-cover"
                src="/videos/hero-background.mp4"
            >
                Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-background z-0"></div>

            <div className="relative z-10 p-4">
                <h1 className="font-bold tracking-tighter leading-tight">
                    <span className="text-5xl md:text-7xl lg:text-8xl block">Qatar × Binance</span>
                    <span className="text-primary text-3xl md:text-5xl lg:text-6xl block mt-2">Forging the Future of Global Finance</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200">
                    A landmark partnership to establish Doha as the world's premier digital-asset hub and co-architect the future of the financial system.
                </p>
                <div className="mt-10">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <a href="#opportunity">
                            Explore the Opportunity
                            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
