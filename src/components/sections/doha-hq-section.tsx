import { Section } from "@/components/icons"
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
        <Section id="doha-hq" className="bg-background">
            <h2 className="section-title">IV. Doha as Binance's Global HQ</h2>
            <p className="section-subtitle">
                Presenting the compelling case for Doha as Binance's global headquarters, emphasizing synergy, mutual benefits, and de-risking factors.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                <Card>
                    <CardHeader>
                        <CardTitle>The Perfect Match: Binance & Qatar</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>Binance's move to a formal HQ aligns perfectly with Qatar's vision. Qatar's RWA-focused framework offers a stable, compliant environment for Binance to expand institutional offerings and integrate with traditional finance.</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong className="text-foreground">Prestige & Soft Power:</strong> Aligns Qatar with the #1 crypto brand.</li>
                            <li><strong className="text-foreground">Diversification:</strong> Adds high-growth digital-asset exposure.</li>
                            <li><strong className="text-foreground">Technology Sovereignty:</strong> Hedges against future dollar-centric shocks.</li>
                            <li><strong className="text-foreground">Regional Leadership:</strong> Positions Doha as a leading blockchain capital.</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Building Trust, Mitigating Risk</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>A formal, centralized HQ in Doha centralizes risks but enhances legitimacy. The move aligns with Qatar's principle of "digital sovereignty," enhancing trust among users and governments globally.</p>
                         <ul className="list-disc pl-5 space-y-2">
                            <li><strong className="text-foreground">Regulatory Clamp-downs:</strong> Mitigated by compliance overhaul.</li>
                            <li><strong className="text-foreground">Crypto Winter:</strong> 5-year horizon spans cycles.</li>
                            <li><strong className="text-foreground">Governance Opacity:</strong> Enhanced info rights secure transparency.</li>
                            <li><strong className="text-foreground">Liquidity:</strong> IPO / secondary rights after 36 months.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>Doha vs. Other Hubs: A Comparative Look</CardTitle>
                    <CardDescription>Tangible benefits of operating from Qatar.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Feature</TableHead>
                                <TableHead className="text-center">Doha</TableHead>
                                <TableHead className="text-center">Dubai</TableHead>
                                <TableHead className="text-center">Singapore</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">100% Foreign Ownership</TableCell>
                                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></TableCell>
                                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></TableCell>
                                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell className="font-medium">100% Profit Repatriation</TableCell>
                                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></TableCell>
                                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></TableCell>
                                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></TableCell>
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
                                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></TableCell>
                                <TableCell className="text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></TableCell>
                                <TableCell className="text-center"><XCircle className="w-5 h-5 text-red-500 mx-auto" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </Section>
    )
}
