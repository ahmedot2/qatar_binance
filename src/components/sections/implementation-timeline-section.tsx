import { Section } from "@/components/icons"

const timelineEvents = [
    { date: "July 2025", event: "Engage", description: "Sheikh Gabr & Richard Teng summit in Doha" },
    { date: "Aug 2025", event: "Term-sheet", description: "Deal economics & governance agreed" },
    { date: "Oct 2025", event: "DD & Approvals", description: "Financial, legal, QCB/QFMA sign-off" },
    { date: "Nov 2025", event: "Close Tranche 1", description: "$5 B transfer via USD stablecoin" },
    { date: "Dec 2025", event: "Blockchain-Hub Kick-off", description: "Announce QFC sandbox + Academy" },
    { date: "Q2 2026", event: "Close Tranche 2", description: "Remaining $5 B transfer" },
]

export function ImplementationTimelineSection() {
    return (
        <Section id="timeline">
            <h2 className="section-title">VII. Implementation & Call to Action</h2>
            <p className="section-subtitle">
                A clear timeline for the investment, culminating in a clear call to action.
            </p>

            <div className="relative mt-12 max-w-4xl mx-auto">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                {timelineEvents.map((item, index) => (
                    <div key={item.event} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                            <div className="p-4 bg-card rounded-lg shadow-md">
                                <h4 className="font-bold text-lg text-primary">{item.event}</h4>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center font-bold text-primary">
                            <span className="text-xs">{item.date.split(' ')[0].substring(0,3)}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold">Decision Needed</h3>
                <p className="text-lg text-muted-foreground mt-2">"Authorize The Ark to open negotiations immediately."</p>
                <h3 className="text-2xl font-bold mt-8">Next Step</h3>
                <p className="text-lg text-muted-foreground mt-2">"Confirm mandate for The Ark to present this term-sheet to Binance’s CEO within 30 days."</p>
            </div>
        </Section>
    )
}
