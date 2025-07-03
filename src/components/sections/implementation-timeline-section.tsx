import { Section } from "@/components/icons"
import { Handshake, FileText, Banknote, Rocket, CheckCircle } from "lucide-react"

const timelineEvents = [
    {
        icon: Handshake,
        phase: "Phase 1: Engagement & Alignment (July 2025)",
        title: "Strategic Summit",
        description: "Leadership summit in Doha to formalize partnership vision and objectives."
    },
    {
        icon: FileText,
        phase: "Phase 2: Framework & Diligence (Aug - Oct 2025)",
        title: "Definitive Agreements",
        description: "Finalize term sheet, governance, and complete financial and legal due diligence with regulatory sign-off."
    },
    {
        icon: Banknote,
        phase: "Phase 3: Initial Investment (Nov 2025)",
        title: "Tranche 1 Closing",
        description: "Initial $5B capital injection to formalize Qatar's strategic stake."
    },
    {
        icon: Rocket,
        phase: "Phase 4: Ecosystem Activation (Dec 2025)",
        title: "Joint Initiative Kick-off",
        description: "Launch Regulatory Sandbox, Binance Academy, and announce Doha as the home for Binance Blockchain Week."
    },
    {
        icon: CheckCircle,
        phase: "Phase 5: Full Deployment (Q2 2026)",
        title: "Tranche 2 Closing",
        description: "Final $5B investment, cementing the long-term strategic partnership and HQ establishment."
    }
]

export function ImplementationTimelineSection() {
    return (
        <Section id="timeline" className="bg-transparent">
            <h2 className="section-title">VII. Laying the Groundwork: A Roadmap to Success</h2>
            <p className="section-subtitle">
                A clear, phased roadmap ensures meticulous execution and collaborative progress, transforming vision into reality with defined milestones and clear accountability.
            </p>

            <div className="relative mt-16 max-w-3xl mx-auto">
                <div className="absolute left-6 top-0 h-full w-px bg-border" aria-hidden="true" />
                <div className="relative flex flex-col gap-12">
                    {timelineEvents.map((item, index) => (
                         <div key={index} className="relative pl-16">
                            <div className="absolute left-6 top-1 h-12 w-12 -translate-x-1/2 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                                <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-primary">{item.phase}</p>
                                <h4 className="mt-1 text-xl font-bold tracking-tight">{item.title}</h4>
                                <p className="mt-2 text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold">Decision Point</h3>
                <p className="text-lg text-muted-foreground mt-2">The mandate to proceed with negotiations.</p>
                <h3 className="text-2xl font-bold mt-8">Immediate Action</h3>
                <p className="text-lg text-muted-foreground mt-2">Authorize The Ark to formally present this proposal to Binance leadership.</p>
            </div>
        </Section>
    )
}
