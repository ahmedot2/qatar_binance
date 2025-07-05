import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ReturnScenariosChart } from "@/components/charts/return-scenarios-chart"
import { Badge } from "@/components/ui/badge"
import { Banknote, Users, BarChart, FileText, Lock } from "lucide-react"
import { AnimatedCounter } from "../animated-counter"

const rights = [
    { icon: Users, text: "Board-observer seat" },
    { icon: FileText, text: "Quarterly Financials" },
    { icon: BarChart, text: "Pro-rata in Future Rounds" },
    { icon: Banknote, text: "Right-of-First-Offer on Secondary Sales" },
    { icon: Lock, text: "36-month Lock-up Period" },
]

export function InvestmentDeepDiveSection() {
    return (
        <AnimatedSection id="investment" className="bg-transparent py-24">
            <h2 className="section-title">V. Unlocking Value Creation</h2>
            <p className="section-subtitle">
                A strategic $10B injection designed to maximize Qatar's influence and financial upside, fortified by robust governance and investor protections.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 items-start">
                <div className="lg:col-span-2 lg:row-span-2">
                    <ReturnScenariosChart />
                </div>
                
                <Card>
                    <CardHeader>
                        <CardTitle>The Strategic Stake</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Badge variant="outline">Investment</Badge>
                            <div className="font-bold text-3xl mt-1">
                                <AnimatedCounter value={10} prefix="$" suffix=" Billion" />
                            </div>
                            <p className="text-xs text-muted-foreground">In two equal tranches (closing + 12 months)</p>
                        </div>
                        <div>
                            <Badge variant="outline">Equity Stake</Badge>
                            <div className="font-bold text-3xl mt-1">
                                <AnimatedCounter value={6.5} decimals={1} prefix="~" suffix="%" />
                            </div>
                            <p className="text-xs text-muted-foreground">at a $155B post-money valuation</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Fortified Governance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {rights.map((right, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <right.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                                <span className="text-sm text-muted-foreground">{right.text}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            <Card className="mt-8 bg-accent/10">
                <CardHeader>
                    <CardTitle className="text-center text-accent">A Partnership Built on Trust & Alignment</CardTitle>
                    <CardDescription className="text-center">Our structure ensures our interests are perfectly aligned with Qatar&apos;s success.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4">
                            <div className="font-bold text-lg">Performance-Aligned</div>
                            <p className="text-xs text-muted-foreground">Competitive, success-based model</p>
                        </div>
                        <div className="p-4">
                            <div className="font-bold text-lg">Preferred Returns</div>
                            <p className="text-xs text-muted-foreground">Ensuring Qatar&apos;s capital works first</p>
                        </div>
                        <div className="p-4">
                            <div className="font-bold text-lg">Capital Protection</div>
                            <p className="text-xs text-muted-foreground">Return of capital before profit-sharing</p>
                        </div>
                            <div className="p-4">
                            <div className="font-bold text-lg">Full Transparency</div>
                            <p className="text-xs text-muted-foreground">Standard protections and reporting</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </AnimatedSection>
    )
}
