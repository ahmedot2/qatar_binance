"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
    return (
        <section className="h-screen w-full relative flex items-center justify-center text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-black z-0 overflow-hidden">
                <div className="aurora-1 absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--primary)/0.2),transparent)]"></div>
                <div className="aurora-2 absolute bottom-[-20%] right-[-20%] top-auto h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--accent)/0.2),transparent)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <style jsx>{`
                    .aurora-1 {
                        animation: move-aurora 15s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }
                    .aurora-2 {
                        animation: move-aurora 15s cubic-bezier(0.4, 0, 0.6, 1) -7.5s infinite;
                    }
                    @keyframes move-aurora {
                        0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1.0); }
                        50% { transform: translate(40px, -40px) rotate(180deg) scale(1.2); }
                    }
                `}</style>
            </div>
            <div className="relative z-10 p-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter !text-white leading-tight">
                    Qatar × Binance
                    <br />
                    <span className="text-primary">Forging the Future of Global Finance</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
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
