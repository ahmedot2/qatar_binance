import { Section } from "@/components/icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, BarChart, Globe } from "lucide-react"

export function StrategicOpportunitySection() {
    return (
        <Section id="opportunity">
            <div className="text-center">
                <h2 className="section-title">I. The Strategic Imperative</h2>
                <p className="section-subtitle">
                    The digital asset market is at a pivotal inflection point. As institutional capital pours in, Binance—the undisputed industry leader—is selectively opening its cap table to visionary sovereign partners. This presents a rare, time-sensitive opportunity for Qatar to secure a foundational stake in the future of finance.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                <Card className="hover:border-primary transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <DollarSign className="w-6 h-6 text-primary" />
                            The Investment
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            A <strong className="text-foreground">$10 billion</strong> investment for a strategic minority stake, positioning Qatar as a key shareholder in the world’s largest digital asset exchange.
                        </p>
                    </CardContent>
                </Card>

                <Card className="hover:border-primary transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BarChart className="w-6 h-6 text-primary" />
                            The Timing
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            The market is surging and Binance is capitalizing on this momentum. Abu Dhabi’s recent <strong className="text-foreground">$2B investment</strong> validates the model, creating a competitive dynamic and urgency to act.
                        </p>
                    </CardContent>
                </Card>

                <Card className="hover:border-primary transition-colors">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="w-6 h-6 text-primary" />
                            The Vision
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Establish Doha as the definitive <strong className="text-foreground">global hub for Web3</strong>, generating significant returns and securing unparalleled influence in the new digital economy.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </Section>
    )
}
