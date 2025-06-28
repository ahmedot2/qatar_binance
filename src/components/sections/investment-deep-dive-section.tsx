import { Section } from "@/components/icons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ReturnScenariosChart } from "@/components/charts/return-scenarios-chart"
import { Badge } from "@/components/ui/badge"
import { Banknote, Users, BarChart, FileText, Lock } from "lucide-react"

const rights = [
    { icon: Users, text: "Board-observer seat" },
    { icon: FileText, text: "Quarterly Financials" },
    { icon: BarChart, text: "Pro-rata in Future Rounds" },
    { icon: Banknote, text: "Right-of-First-Offer on Secondary Sales" },
    { icon: Lock, text: "36-month Lock-up Period" },
]

export function InvestmentDeepDiveSection() {
    return (
        <Section id="investment">
            <h2 className="section-title">V. The $10 Billion Strategic Investment</h2>
            <p className="section-subtitle">
                A detailed breakdown of the investment, highlighting its structure, governance, and compelling financial returns.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
                <div className="lg:col-span-3">
                    <ReturnScenariosChart />
                </div>
                <div className="lg:col-span-2 space-y-8">
                     <Card>
                        <CardHeader>
                            <CardTitle>The Deal: Structure</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Badge variant="outline">Ticket Size</Badge>
                                <p className="font-bold text-2xl mt-1">$10 Billion</p>
                                <p className="text-xs text-muted-foreground">Two equal tranches (closing + 12 months)</p>
                            </div>
                            <div>
                                <Badge variant="outline">Equity & Valuation</Badge>
                                <p className="font-bold text-2xl mt-1">~6.5% Stake</p>
                                <p className="text-xs text-muted-foreground">at $155B Post-Money Valuation</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Key Governance & Exit Rights</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                           {rights.map((right, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <right.icon className="w-5 h-5 text-primary" />
                                    <span className="text-sm text-muted-foreground">{right.text}</span>
                                </div>
                           ))}
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Card className="mt-8 bg-accent/10">
                <CardHeader>
                    <CardTitle className="text-center text-accent">The Ark: Your Aligned Investment Partner</CardTitle>
                    <CardDescription className="text-center">Precision, Performance, Partnership</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4">
                            <div className="font-bold text-lg">"X & 20" Model</div>
                            <p className="text-xs text-muted-foreground">Competitive Fees</p>
                        </div>
                        <div className="p-4">
                            <div className="font-bold text-lg">8% Hurdle Rate</div>
                            <p className="text-xs text-muted-foreground">Preferred Return</p>
                        </div>
                        <div className="p-4">
                            <div className="font-bold text-lg">Euro Waterfall</div>
                            <p className="text-xs text-muted-foreground">Capital + Hurdle First</p>
                        </div>
                         <div className="p-4">
                            <div className="font-bold text-lg">Clawback</div>
                            <p className="text-xs text-muted-foreground">Standard Protections</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </Section>
    )
}
