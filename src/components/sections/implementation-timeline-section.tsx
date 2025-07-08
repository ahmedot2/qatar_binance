import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Handshake, FileText, Banknote, Rocket, CheckCircle, Target, Flag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const timelineEvents = [
    {
        icon: Handshake,
        phase: "Phase 1: Engagement & Alignment",
        date: "July 2025",
        title: "Strategic Summit",
        description: "Leadership summit in Doha to formalize partnership vision and objectives."
    },
    {
        icon: FileText,
        phase: "Phase 2: Framework & Diligence",
        date: "Aug - Oct 2025",
        title: "Definitive Agreements",
        description: "Finalize term sheet, governance, and complete financial and legal due diligence with regulatory sign-off."
    },
    {
        icon: Banknote,
        phase: "Phase 3: Initial Investment",
        date: "Nov 2025",
        title: "Tranche 1 Closing",
        description: "Initial $5B capital injection to formalize Qatar's strategic stake."
    },
    {
        icon: Rocket,
        phase: "Phase 4: Ecosystem Activation",
        date: "Dec 2025",
        title: "Joint Initiative Kick-off",
        description: "Launch Regulatory Sandbox, Binance Academy, and announce Doha as the home for Binance Blockchain Week."
    },
    {
        icon: CheckCircle,
        phase: "Phase 5: Full Deployment",
        date: "Q2 2026",
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

            <div className="relative mt-20 container max-w-5xl mx-auto px-4">
                {/* Vertical line */}
                <div className="absolute left-6 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

                <div className="space-y-20">
                    {/* Start Point */}
                    <div className="relative">
                        <div className="md:flex md:justify-end">
                            <div className="md:w-1/2 md:pr-14">
                                <h3 className="pl-12 text-2xl font-bold text-primary md:pl-0 md:text-right">START</h3>
                            </div>
                        </div>
                        <div className="absolute left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary ring-8 ring-background md:left-1/2" />
                    </div>

                    {/* Timeline Items */}
                    {timelineEvents.map((item, index) => (
                        <div key={index} className="relative">
                            <div className={cn("md:flex items-center", index % 2 !== 0 && "md:flex-row-reverse")}>
                                <div className="md:w-1/2 md:pr-14">
                                    {index % 2 === 0 && (
                                        <Card className="ml-12 md:ml-0">
                                            <CardHeader>
                                                <p className="text-sm font-semibold text-primary">{item.phase} - <span className="text-muted-foreground">{item.date}</span></p>
                                                <CardTitle>{item.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                                <div className="md:w-1/2 md:pl-14">
                                    {index % 2 !== 0 && (
                                        <Card className="ml-12 md:ml-0">
                                            <CardHeader>
                                                <p className="text-sm font-semibold text-primary">{item.phase} - <span className="text-muted-foreground">{item.date}</span></p>
                                                <CardTitle>{item.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-1/2 -translate-x-1/2">
                                <div className="h-14 w-14 rounded-full bg-background flex items-center justify-center ring-8 ring-background">
                                    <div className="bg-primary/10 p-3 rounded-full">
                                        <item.icon strokeWidth={1.5} className="w-6 h-6 text-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Goal Point */}
                    <div className="relative">
                        <div className={cn("md:flex items-center", timelineEvents.length % 2 === 0 && "md:flex-row-reverse")}>
                             <div className="md:w-1/2 md:pr-14">
                                {timelineEvents.length % 2 !== 0 && (
                                    <h3 className="pl-12 text-2xl font-bold text-primary md:pl-0 md:text-right">GOAL</h3>
                                )}
                             </div>
                             <div className="md:w-1/2 md:pl-14">
                                {timelineEvents.length % 2 === 0 && (
                                     <h3 className="pl-12 text-2xl font-bold text-primary md:ml-0">GOAL</h3>
                                )}
                             </div>
                        </div>
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 md:left-1/2">
                            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center ring-8 ring-background">
                                <Flag strokeWidth={1.5} className="h-3 w-3 text-primary-foreground" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="md:col-span-2 border-primary/50 hover:border-primary/100 flex flex-col justify-between">
                    <CardHeader>
                         <CardTitle className="flex items-center gap-4">
                            <Rocket strokeWidth={1.5} className="w-8 h-8 text-primary" />
                            <span>Immediate Action Required</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xl text-foreground">
                            Authorize The Ark to formally present this investment proposal to Binance leadership.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <p className="text-sm text-muted-foreground">The next step in the engagement process.</p>
                    </CardFooter>
                </Card>

                <Card className="border-accent/50 hover:border-accent/100 flex flex-col justify-between">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-4">
                            <Target strokeWidth={1.5} className="w-8 h-8 text-accent" />
                            <span>Decision Point</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-foreground">The mandate to proceed with negotiations.</p>
                    </CardContent>
                    <CardFooter>
                        <Badge variant="outline" className="border-accent text-accent">Awaiting Formal Approval</Badge>
                    </CardFooter>
                </Card>
            </div>
        </AnimatedSection>
    )
}
