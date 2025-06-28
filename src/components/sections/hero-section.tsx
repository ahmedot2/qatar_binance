"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
    return (
        <section className="h-screen w-full relative flex items-center justify-center text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-black z-0">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <style jsx>{`
                    .bg-grid-pattern {
                        background-image:
                            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px);
                        background-size: 3rem 3rem;
                        animation: pan 60s linear infinite;
                    }
                    @keyframes pan {
                        0% { background-position: 0% 0%; }
                        100% { background-position: 100% 100%; }
                    }
                `}</style>
            </div>
            <div className="relative z-10 p-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter !text-white leading-tight">
                    Qatar × Binance
                    <br />
                    <span className="text-primary">Building the Digital-Finance Nexus</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
                    A $10 Billion Strategic Investment to Shape the Future of Global Digital Finance.
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
