import { Section } from "@/components/icons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, FlaskConical, LineChart, Rocket, CalendarDays } from "lucide-react"

const initiatives = [
    {
        icon: FlaskConical,
        title: "Regulatory Sandbox",
        description: "Co-design licensing playbooks within QFC Digital Assets Lab.",
    },
    {
        icon: GraduationCap,
        title: "Education & Talent",
        description: "Binance Academy-Qatar scholarships aiming for 1M+ students by 2026.",
    },
    {
        icon: LineChart,
        title: "Crypto Capital Markets",
        description: "Platform for tokenized RWAs, making Doha a regional crypto-financing hub.",
    },
    {
        icon: Rocket,
        title: "Startup Accelerator",
        description: "Binance Labs–Doha: $100M seed fund with 50% QIA co-investment.",
    },
    {
        icon: CalendarDays,
        title: "Global Events",
        description: "Annual 'Binance Blockchain Week – Doha' to cement global visibility.",
    }
]

export function JointInitiativesSection() {
    return (
        <Section id="initiatives" className="bg-background">
            <h2 className="section-title">VI. Joint Initiatives</h2>
            <p className="section-subtitle">
                Showcasing the tangible, collaborative efforts designed to establish Qatar as a leading global blockchain hub.
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
