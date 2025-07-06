import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Handshake, FileText, Banknote, Rocket, CheckCircle } from "lucide-react"

const timelineEvents = [
    {
        icon: Handshake,
        phase: "Phase 1: Engagement & Alignment (July 2025)",
        title: "Strategic Summit",
        description: "Leadership summit in Doha to formalize partnership vision and objectives."
    },
    {
        icon: FileText,
        phase: "Phase 2: Framework & Diligence (Aug - Oct 2025)",
        title: "Definitive Agreements",
        description: "Finalize term sheet, governance, and complete financial and legal due diligence with regulatory sign-off."
    },
    {
        icon: Banknote,
        phase: "Phase 3: Initial Investment (Nov 2025)",
        title: "Tranche 1 Closing",
        description: "Initial $5B capital injection to formalize Qatar's strategic stake."
    },
    {
        icon: Rocket,
        phase: "Phase 4: Ecosystem Activation (Dec 2025)",
        title: "Joint Initiative Kick-off",
        description: "Launch Regulatory Sandbox, Binance Academy, and announce Doha as the home for Binance Blockchain Week."
    },
    {
        icon: CheckCircle,
        phase: "Phase 5: Full Deployment (Q2 2026)",
        title: "Tranche 2 Closing",
        description: "Final $5B investment, cementing the long-term strategic partnership and HQ establishment."
    }
]

export function ImplementationTimelineSection() {
    return (
        <AnimatedSection id="timeline" className="bg-transparent py-24">
            <h2 className="section-title">VII. A Roadmap to Success</h2>
            <p className="section-subtitle">
                A clear, phased roadmap ensures meticulous execution, transforming vision into reality with defined milestones and clear accountability.
            </p>

            <div className="mt-16">
                 <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-8">
                        {timelineEvents.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-8">
                                <div className="p-1 h-full">
                                    <Card className="h-full flex flex-col group overflow-hidden">
                                        <CardContent className="p-6 flex-1 flex flex-col items-start relative">
                                            <div className="absolute top-4 right-6 text-7xl font-bold text-primary/10 transition-all duration-300 group-hover:text-primary/20 group-hover:scale-110">
                                                0{index + 1}
                                            </div>
                                            <div className="bg-primary/10 p-3 rounded-lg self-start z-10">
                                                <item.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                                            </div>
                                            <div className="mt-6 z-10">
                                                <p className="text-sm font-semibold text-primary">{item.phase}</p>
                                                <h4 className="mt-1 text-xl font-bold tracking-tight">{item.title}</h4>
                                                <p className="mt-2 text-muted-foreground flex-1">{item.description}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold">Decision Point</h3>
                <p className="text-lg text-muted-foreground mt-2">The mandate to proceed with negotiations.</p>
                <h3 className="text-2xl font-bold mt-8">Immediate Action</h3>
                <p className="text-lg text-muted-foreground mt-2">Authorize The Ark to formally present this proposal to Binance leadership.</p>
            </div>
        </AnimatedSection>
    )
}
