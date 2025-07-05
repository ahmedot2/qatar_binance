import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { GraduationCap, FlaskConical, LineChart, Rocket, CalendarDays } from "lucide-react"

const pillars = [
    {
        icon: FlaskConical,
        title: "Regulatory Sandbox",
        description: "Forge a world-leading regulatory sandbox, making Qatar the gold standard for digital asset licensing and attracting global innovators.",
        className: "md:col-span-2 lg:col-span-2"
    },
    {
        icon: GraduationCap,
        title: "Education & Talent",
        description: "Cultivate a world-class talent pool by launching Binance Academy in Qatar, with an ambitious goal to upskill over 1 million individuals in blockchain technology.",
        className: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: LineChart,
        title: "Crypto Capital Markets",
        description: "Pioneer the future of finance with a cutting-edge platform for tokenized Real-World Assets (RWAs), cementing Doha as the premier hub for crypto-capital markets.",
        className: "md:col-span-1 lg:col-span-1"
    },
    {
        icon: Rocket,
        title: "Startup Accelerator",
        description: "Ignite local innovation with a $100M Binance Labs accelerator, supercharged by a 50% co-investment from QIA to fund the next generation of Web3 startups.",
        className: "md:col-span-2 lg:col-span-2"
    },
    {
        icon: CalendarDays,
        title: "Global Events",
        description: "Amplify Qatar's global presence by making Doha the permanent home for the annual Binance Blockchain Week, drawing international leaders, innovators, and capital.",
        className: "md:col-span-3 lg:col-span-3"
    }
]

export function JointInitiativesSection() {
    return (
        <AnimatedSection id="initiatives" className="bg-transparent py-24">
            <h2 className="section-title">VI. The Five Pillars of Partnership</h2>
            <p className="section-subtitle">
                Beyond a simple investment, this is a strategic alliance built on five foundational pillars designed to construct a world-leading digital asset ecosystem in Qatar.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {pillars.map((item, index) => (
                    <Card key={index} className={cn("group relative overflow-hidden flex flex-col hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1", item.className)}>
                        <item.icon aria-hidden="true" className="absolute -right-4 -bottom-4 h-24 w-24 text-primary/10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12" />
                        <CardHeader className="relative z-10">
                            <div className="bg-primary/10 p-3 rounded-lg self-start">
                                <item.icon className="w-8 h-8 text-primary" aria-hidden="true" />
                            </div>
                            <CardTitle className="mt-4">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10 flex-1">
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </AnimatedSection>
    )
}
