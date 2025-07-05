import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Map, Landmark, Briefcase, HandCoins, ShieldCheck, Scale, DollarSign } from "lucide-react"

export function QatarVisionSection() {
    return (
        <AnimatedSection id="qatar" className="bg-transparent py-24">
            <h2 className="section-title">III. Qatar: A Visionary Digital Economy Hub</h2>
            <p className="section-subtitle">
                Qatar&apos;s ambitious National Vision 2030 provides the ideal foundation for Binance&apos;s global headquarters, creating powerful synergies for economic diversification and technological sovereignty.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <Card className="lg:col-span-3">
                     <CardHeader>
                        <CardTitle>Qatar National Vision 2030 & Digital Agenda</CardTitle>
                        <CardDescription>A leap towards a diversified, knowledge-based economy.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="stat-card">
                            <Landmark className="w-10 h-10 text-primary mb-2" aria-hidden="true" />
                            <div className="text-3xl font-bold"> &gt;$200B</div>
                            <p className="text-sm text-muted-foreground">Infrastructure Investment</p>
                        </div>
                        <div className="stat-card">
                            <DollarSign className="w-10 h-10 text-primary mb-2" aria-hidden="true" />
                            <div className="text-3xl font-bold">$11B</div>
                            <p className="text-sm text-muted-foreground">Projected Digital GDP Contribution</p>
                        </div>
                        <div className="stat-card">
                            <Briefcase className="w-10 h-10 text-primary mb-2" aria-hidden="true" />
                            <div className="text-3xl font-bold">26,000</div>
                            <p className="text-sm text-muted-foreground">New Tech Jobs by 2030</p>
                        </div>
                    </CardContent>
                </Card>
                
                <Card className="lg:col-span-2">
                     <CardHeader>
                        <CardTitle>A Future-Ready Regulatory Framework</CardTitle>
                        <CardDescription>Qatar is actively building a world-class regulatory environment designed to attract top-tier digital asset firms.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                            <div>
                                <p className="font-bold">RWA Tokenization Ambition</p>
                                <p className="text-sm text-muted-foreground">A strategic focus on tokenizing real-world assets.</p>
                            </div>
                            <div className="text-2xl font-bold text-primary">&gt;$500M</div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                             <div>
                                <p className="font-bold">Digital Assets Lab</p>
                                <p className="text-sm text-muted-foreground">Regulatory sandbox launched in Oct 2023.</p>
                            </div>
                            <div className="text-2xl font-bold text-primary">20+ Companies</div>
                        </div>
                        <div className="pt-2">
                            <h4 className="font-semibold mb-2">Unmatched Business Incentives:</h4>
                            <div className="flex flex-wrap gap-2">
                                <Badge>100% Foreign Ownership</Badge>
                                <Badge>100% Profit Repatriation</Badge>
                                <Badge>Competitive Tax System</Badge>
                                <Badge>English Common Law</Badge>
                                <Badge variant="secondary">$1B Incentives Program</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>QIA: The Patient, Strategic Investor</CardTitle>
                        <CardDescription>The ideal partner to anchor Binance&apos;s next phase of growth.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-accent">$526B</div>
                            <p className="text-sm text-muted-foreground">Assets Under Management</p>
                        </div>
                        <p className="text-sm text-center text-muted-foreground pt-2">
                            A globally-respected strategic investor with a long-term vision, actively increasing exposure to technology and AI.
                        </p>
                         <div className="p-3 bg-muted rounded-lg text-center">
                            <p className="font-bold text-sm">Sovereign Investment Precedent</p>
                            <p className="text-xs text-muted-foreground">Abu Dhabi&apos;s MGX invested $2B in Binance (May 2025), paid in stablecoins.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AnimatedSection>
    )
}
