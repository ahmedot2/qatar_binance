import { Section } from "@/components/icons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, FlaskConical, LineChart, Rocket, CalendarDays } from "lucide-react"

const initiatives = [
    {
        icon: FlaskConical,
        title: "Regulatory Sandbox",
        description: "Co-develop a world-leading regulatory framework, positioning Qatar as the gold standard for digital asset licensing.",
    },
    {
        icon: GraduationCap,
        title: "Education & Talent",
        description: "Launch Binance Academy in Qatar, aiming to educate 1M+ students and develop a world-class local talent pool.",
    },
    {
        icon: LineChart,
        title: "Crypto Capital Markets",
        description: "Build the leading platform for tokenized RWAs, establishing Doha as the premier regional hub for crypto-financing.",
    },
    {
        icon: Rocket,
        title: "Startup Accelerator",
        description: "Launch Binance Labs–Doha with a $100M seed fund, with 50% co-investment from QIA to fuel local innovation.",
    },
    {
        icon: CalendarDays,
        title: "Global Events",
        description: "Host the annual 'Binance Blockchain Week' in Doha to cement the city's global visibility and leadership role.",
    }
]

export function JointInitiativesSection() {
    return (
        <Section id="initiatives" className="bg-background">
            <h2 className="section-title">VI. Beyond Capital: Catalyzing the Ecosystem</h2>
            <p className="section-subtitle">
                This partnership extends beyond investment, encompassing a suite of joint initiatives designed to accelerate the growth of Qatar's digital economy and solidify its position as a global blockchain leader.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {initiatives.map((item, index) => (
                    <Card key={index} className="hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <item.icon className="w-8 h-8 text-primary" />
                            <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
