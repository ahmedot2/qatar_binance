"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
    return (
        <section className="h-screen w-full relative flex items-center justify-center text-center text-foreground overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0"></div>
            <div className="relative z-10 p-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-tight">
                    Qatar × Binance
                    <br />
                    <span className="text-primary">Forging the Future of Global Finance</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
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
