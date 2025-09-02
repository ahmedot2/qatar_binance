
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
    { href: "#opportunity", label: "Opportunity" },
    { href: "#binance", label: "Binance" },
    { href: "#qatar", label: "Qatar" },
    { href: "#investment", label: "Investment" },
    { href: "#initiatives", label: "Initiatives" },
    { href: "#timeline", label: "Timeline" },
    { href: "#pitch-deck", label: "Pitch Deck" },
]

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10 shadow-lg" : "bg-transparent"
        )}>
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <a href="#" className={cn(
                        "flex items-center gap-2 font-bold text-lg transition-colors",
                        scrolled ? "text-foreground" : "text-white"
                    )}>
                        <span className="text-primary">Q</span>
                        <span>×</span>
                        <span>B</span>
                    </a>
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className={cn(
                                "text-sm font-medium transition-all duration-200 hover:text-primary hover:-translate-y-0.5",
                                scrolled ? "text-foreground/80" : "text-white/80"
                            )}>
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className={cn(
                                    "transition-colors hover:bg-white/10",
                                    scrolled ? "text-foreground hover:text-foreground" : "text-white hover:text-white"
                                )}>
                                    <Menu strokeWidth={1.5} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-background/80 backdrop-blur-lg border-l border-white/10 shadow-glass-inset">
                                <SheetHeader className="sr-only">
                                  <SheetTitle>Menu</SheetTitle>
                                  <SheetDescription>Main navigation menu</SheetDescription>
                                </SheetHeader>
                                <nav className="flex flex-col space-y-4 mt-8">
                                    {navLinks.map((link) => (
                                        <a key={link.href} href={link.href} className="text-lg font-medium text-foreground transition-colors hover:text-primary">
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
