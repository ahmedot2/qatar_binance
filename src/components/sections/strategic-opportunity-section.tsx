import { Section } from "@/components/icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, BarChart, Globe } from "lucide-react"

export function StrategicOpportunitySection() {
    return (
        <Section id="opportunity">
            <div className="text-center">
                <h2 className="section-title">I. The Strategic Opportunity</h2>
                <p className="section-subtitle">
                    The crypto market cap is back above $3.3 trillion and rising. Binance has just opened its cap-table to sovereign investors, with Abu Dhabi’s $2 billion precedent validating this strategic move.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                <Card className="hover:border-primary transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <DollarSign className="w-6 h-6 text-primary" />
                            The Ask
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Up to <strong className="text-foreground">$10 billion</strong> for a strategic minority stake in Binance – representing <strong className="text-foreground">5-7% of equity</strong> at current private-market valuations (≈ $150-200 B).
                        </p>
                    </CardContent>
                </Card>

                <Card className="hover:border-primary transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart className="w-6 h-6 text-primary" />
                            Why Now?
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            The crypto market cap is back above <strong className="text-foreground">$3.3 trillion</strong> and rising. Binance has just opened its cap-table to sovereign investors, with Abu Dhabi’s <strong className="text-foreground">$2 billion</strong> precedent validating this strategic move.
                        </p>
                    </CardContent>
                </Card>

                <Card className="hover:border-primary transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="w-6 h-6 text-primary" />
                            Our Goal
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            To position Qatar as a <strong className="text-foreground">co-architect of global Web3</strong>, targeting multi-billion-dollar upside while securing a foundational role in the future of digital finance.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </Section>
    )
}
