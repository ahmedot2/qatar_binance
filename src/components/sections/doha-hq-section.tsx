import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle2, XCircle } from "lucide-react"

const hubs = [
    { hub: 'Doha, Qatar', ownership: true, repatriation: true, tax: 'Competitive', judicial: 'English Common Law', infra: 'Cutting-Edge', incentives: true },
    { hub: 'Dubai, UAE', ownership: true, repatriation: true, tax: 'Competitive', judicial: 'Civil Law', infra: 'Advanced', incentives: true },
    { hub: 'Singapore', ownership: true, repatriation: true, tax: 'Territorial', judicial: 'English Common Law', infra: 'Advanced', incentives: false },
]

export function DohaHQSection() {
    return (
        <AnimatedSection id="doha-hq" className="bg-transparent py-24">
            <h2 className="section-title">IV. The Unbeatable Proposition: Doha as Binance&apos;s Global HQ</h2>
            <p className="section-subtitle">
                Why Doha is not just an option, but the optimal strategic choice for Binance&apos;s centralized global headquarters, offering a unique combination of regulatory clarity, strategic alignment, and unparalleled government support.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                <Card>
                    <CardHeader>
                        <CardTitle>Synergy and Mutual Benefits</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>A formal HQ in Doha aligns perfectly with Qatar&apos;s digital ambitions. It offers Binance a stable, compliant environment to expand institutional offerings and de-risk its global operations, while cementing Qatar&apos;s status as a top-tier financial hub.</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong className="text-foreground">Prestige & Soft Power:</strong> Aligns Qatar with the #1 crypto brand.</li>
                            <li><strong className="text-foreground">Economic Diversification:</strong> High-growth digital-asset exposure.</li>
                            <li><strong className="text-foreground">Tech Sovereignty:</strong> Hedges against future dollar-centric shocks.</li>
                            <li><strong className="text-foreground">Regional Leadership:</strong> Positions Doha as a leading blockchain capital.</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>De-Risking the Future</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>A centralized HQ enhances legitimacy and provides regulatory certainty. This move, backed by Qatar&apos;s commitment to &quot;digital sovereignty,&quot; builds trust among users, institutions, and governments worldwide.</p>
                         <ul className="list-disc pl-5 space-y-2">
                            <li><strong className="text-foreground">Regulatory Scrutiny:</strong> Mitigated by robust compliance framework.</li>
                            <li><strong className="text-foreground">Market Volatility:</strong> 5-year investment horizon spans market cycles.</li>
                            <li><strong className="text-foreground">Governance Concerns:</strong> Addressed via board representation and information rights.</li>
                            <li><strong className="text-foreground">Exit Liquidity:</strong> Secured through IPO / secondary sale rights after 36 months.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>The Doha Advantage: A Clear Winner</CardTitle>
                    <CardDescription>Tangible benefits of operating from Qatar versus other global hubs.</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Mobile View */}
                    <div className="grid grid-cols-1 gap-6 md:hidden">
                        {hubs.map((hub) => (
                            <div key={hub.hub} className="rounded-lg border bg-card/50 p-4">
                                <h3 className="text-lg font-bold mb-4">{hub.hub}</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">100% Foreign Ownership</span>
                                        {hub.ownership ? <CheckCircle2 className="w-5 h-5 text-green-500" aria-hidden="true" /> : <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">100% Profit Repatriation</span>
                                        {hub.repatriation ? <CheckCircle2 className="w-5 h-5 text-green-500" aria-hidden="true" /> : <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />}
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Judicial System</span>
                                        <span className="font-medium text-sm text-right">{hub.judicial}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Infrastructure</span>
                                        <span className={`font-semibold text-sm ${hub.infra === 'Cutting-Edge' ? 'text-primary' : ''}`}>{hub.infra}</span>
                                    </div>
                                     <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Govt. Incentives</span>
                                        {hub.incentives ? <CheckCircle2 className="w-5 h-5 text-green-500" aria-hidden="true" /> : <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop View */}
                    <div className="hidden md:block">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Feature</TableHead>
                                    <TableHead className="text-center uppercase tracking-wider text-xs">Doha</TableHead>
                                    <TableHead className="text-center uppercase tracking-wider text-xs">Dubai</TableHead>
                                    <TableHead className="text-center uppercase tracking-wider text-xs">Singapore</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">100% Foreign Ownership</TableCell>
                                    <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" aria-hidden="true" /></TableCell>
                                    <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" aria-hidden="true" /></TableCell>
                                    <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" aria-hidden="true" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">100% Profit Repatriation</TableCell>
                                    <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" aria-hidden="true" /></TableCell>
                                    <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" aria-hidden="true" /></TableCell>
                                    <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" aria-hidden="true" /></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Judicial System</TableCell>
                                    <TableCell className="text-center">English Common Law</TableCell>
                                    <TableCell className="text-center">Civil Law</TableCell>
                                    <TableCell className="text-center">English Common Law</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Infrastructure</TableCell>
                                    <TableCell className="text-center font-semibold text-primary">Cutting-Edge</TableCell>
                                    <TableCell className="text-center">Advanced</TableCell>
                                    <TableCell className="text-center">Advanced</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">Govt. Incentives</TableCell>
                                    <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" aria-hidden="true" /></TableCell>
                                    <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" aria-hidden="true" /></TableCell>
                                    <TableCell className="text-center"><XCircle className="w-5 h-5 text-red-500 mx-auto" aria-hidden="true" /></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

        </AnimatedSection>
    )
}
