import { Section } from "@/components/icons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MarketShareChart } from "@/components/charts/market-share-chart"
import { UserGrowthChart } from "@/components/charts/user-growth-chart"
import { BitcoinIcon, BnbIcon, EthereumIcon, UsdtIcon } from "../icons"
import { Badge } from "../ui/badge"
import { BarChart, Users, ShieldCheck, Landmark } from "lucide-react"
import { TextSummarizer } from "../text-summarizer"

const complianceText = "Binance has transformed from its early decentralized roots, navigating past regulatory challenges like the $4.3 billion U.S. settlement in 2023, to embrace a proactive and robust compliance posture under CEO Richard Teng. This strategic evolution involves establishing a centralized legal entity structure to enhance global trust and operational stability. The compliance team has expanded significantly to over 650 full-time employees, a 34% increase from November 2023, with over 1,000 total staff and contractors dedicated to compliance by the end of 2024. Binance has secured 21 regulatory approvals across multiple jurisdictions, including G7 nations, responded to approximately 65,000 law enforcement requests in 2024, and supported over 14,000 officials globally. This pivot is further exemplified by Binance's proactive engagement with governments, advising them on establishing digital asset reserves, showcasing a deep commitment to formalization, collaboration, and industry leadership."


export function BinancePowerhouseSection() {
    return (
        <Section id="binance" className="bg-background">
            <h2 className="section-title">II. Binance: A Global Crypto Powerhouse</h2>
            <p className="section-subtitle">
                Conveying Binance's undisputed leadership, explosive growth, and strategic pivot towards robust compliance and formalization.
            </p>

            <div className="mt-12">
                <h3 className="text-3xl font-bold text-center mb-8">A. Unrivaled Market Dominance & Explosive Growth</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <MarketShareChart />
                    <UserGrowthChart />

                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Binance by the Numbers</CardTitle>
                            <CardDescription>An unparalleled cash-flow engine.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="stat-card">
                                <BarChart className="w-10 h-10 text-primary mb-2" />
                                <div className="text-3xl font-bold">$16.8B</div>
                                <p className="text-sm text-muted-foreground">2024 Revenue (+40% YoY)</p>
                            </div>
                            <div className="stat-card">
                                <Users className="w-10 h-10 text-primary mb-2" />
                                <div className="text-3xl font-bold">187,000</div>
                                <p className="text-sm text-muted-foreground">Daily New Registrations</p>
                            </div>
                            <div className="stat-card">
                                <Landmark className="w-10 h-10 text-primary mb-2" />
                                <div className="text-3xl font-bold">$6-7B</div>
                                <p className="text-sm text-muted-foreground">Estimated Net Profit</p>
                            </div>
                             <Card className="col-span-2 md:col-span-4">
                                <CardHeader>
                                    <CardTitle>Proof of Reserves (March 2025)</CardTitle>
                                    <CardDescription>Commitment to transparency and user fund security.</CardDescription>
                                </CardHeader>
                                <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                    <div className="flex flex-col items-center">
                                        <BitcoinIcon className="w-10 h-10 mb-2 text-primary" />
                                        <div className="font-bold text-lg">Bitcoin</div>
                                        <Badge variant="secondary" className="mt-1">100.77%</Badge>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <EthereumIcon className="w-10 h-10 mb-2 text-primary" />
                                        <div className="font-bold text-lg">Ethereum</div>
                                        <Badge variant="secondary" className="mt-1">100.00%</Badge>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <BnbIcon className="w-10 h-10 mb-2 text-primary" />
                                        <div className="font-bold text-lg">BNB</div>
                                        <Badge variant="secondary" className="mt-1">110.92%</Badge>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <UsdtIcon className="w-10 h-10 mb-2 text-primary" />
                                        <div className="font-bold text-lg">USDT</div>
                                        <Badge variant="secondary" className="mt-1">104.42%</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                </div>
            </div>
            
            <div className="mt-20">
                 <h3 className="text-3xl font-bold text-center mb-8">B. Strategic Evolution & Compliance Excellence</h3>
                 <Card className="max-w-4xl mx-auto">
                    <CardHeader>
                        <CardTitle>From Decentralized to De-Risked</CardTitle>
                        <CardDescription>A new era of compliance and global trust.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <TextSummarizer text={complianceText} />
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                            <div className="stat-card">
                                <div className="text-3xl font-bold text-accent">650+</div>
                                <p className="text-sm text-muted-foreground">Full-Time Compliance Team</p>
                            </div>
                            <div className="stat-card">
                                <div className="text-3xl font-bold text-accent">21</div>
                                <p className="text-sm text-muted-foreground">Regulatory Approvals</p>
                            </div>
                            <div className="stat-card">
                                <div className="text-3xl font-bold text-accent">~65k</div>
                                <p className="text-sm text-muted-foreground">LE Requests Responded</p>
                            </div>
                        </div>
                    </CardContent>
                 </Card>
            </div>

        </Section>
    )
}
