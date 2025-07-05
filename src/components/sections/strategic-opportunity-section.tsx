import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Timer, Handshake, TrendingUp, Target, Briefcase } from "lucide-react"
import { AnimatedCounter } from "../animated-counter"

export function StrategicOpportunitySection() {
    return (
        <AnimatedSection id="opportunity" className="bg-transparent">
            <div className="text-center">
                <h2 className="section-title">I. The Strategic Opportunity</h2>
                <p className="section-subtitle">
                    The digital asset market is at a pivotal inflection point, projected to exceed $16 trillion by 2030. As institutional capital enters, Binance—the undisputed market leader—is selectively opening its equity to visionary sovereign partners. This presents a rare, time-sensitive window for Qatar to acquire a foundational stake in the future of finance.
                </p>
            </div>

            <Card className="mt-12 max-w-6xl mx-auto">
                 <CardHeader>
                    <CardTitle className="text-center">Market at an Inflection Point</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="stat-card bg-transparent border-0 shadow-none p-4">
                        <TrendingUp className="w-10 h-10 text-primary mb-2" aria-hidden="true" />
                        <div className="text-3xl font-bold">
                            <AnimatedCounter value={1.2} decimals={1} suffix="T" prefix="$" />+
                        </div>
                        <p className="text-sm text-muted-foreground">Current Digital Asset Market</p>
                    </div>
                    <div className="stat-card bg-transparent border-0 shadow-none p-4">
                        <Target className="w-10 h-10 text-primary mb-2" aria-hidden="true" />
                        <div className="text-3xl font-bold">
                            <AnimatedCounter value={16} suffix="T" prefix="$" />
                        </div>
                        <p className="text-sm text-muted-foreground">Projected Market Size by 2030</p>
                    </div>
                    <div className="stat-card bg-transparent border-0 shadow-none p-4">
                        <Briefcase className="w-10 h-10 text-primary mb-2" aria-hidden="true" />
                        <div className="text-3xl font-bold">
                            <AnimatedCounter value={90} suffix="%" />
                        </div>
                        <p className="text-sm text-muted-foreground">of Fortune 100 Exploring Blockchain</p>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <PieChart className="w-6 h-6 text-primary" aria-hidden="true" />
                            The Stake
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Acquire a <strong className="text-foreground">~6.5% equity stake</strong> with a <strong className="text-foreground">$10B investment</strong> in the world’s most critical digital asset infrastructure, positioning Qatar as a key architect of the future financial system.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Timer className="w-6 h-6 text-primary" aria-hidden="true" />
                            The Urgency
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            The market is expanding exponentially. <strong className="text-foreground">Abu Dhabi&apos;s recent $2B investment</strong> validates the model and signals a closing window for foundational partners.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Handshake className="w-6 h-6 text-primary" aria-hidden="true" />
                            The Symbiosis
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Anchor <strong className="text-foreground">Binance in Doha</strong>, creating the world's preeminent digital asset hub and generating unparalleled economic and strategic returns for Qatar.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </AnimatedSection>
    )
}
