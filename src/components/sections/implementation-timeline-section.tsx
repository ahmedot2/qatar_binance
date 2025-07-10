
"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Handshake, FileText, Banknote, Rocket, CheckCircle, Target, Flag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import DecryptedText from "../decrypted-text"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const timelineEvents = [
    {
        icon: Handshake,
        phase: "Phase 1: Engagement & Alignment",
        date: "July 2025",
        title: "Strategic Summit",
        description: "Leadership summit in Doha to formalize partnership vision and objectives."
    },
    {
        icon: FileText,
        phase: "Phase 2: Framework & Diligence",
        date: "Aug - Oct 2025",
        title: "Definitive Agreements",
        description: "Finalize term sheet, governance, and complete financial and legal due diligence with regulatory sign-off."
    },
    {
        icon: Banknote,
        phase: "Phase 3: Initial Investment",
        date: "Nov 2025",
        title: "Tranche 1 Closing",
        description: "Initial $5B capital injection to formalize Qatar's strategic stake."
    },
    {
        icon: Rocket,
        phase: "Phase 4: Ecosystem Activation",
        date: "Dec 2025",
        title: "Joint Initiative Kick-off",
        description: "Launch Regulatory Sandbox, Binance Academy, and announce Doha as the home for Binance Blockchain Week."
    },
    {
        icon: CheckCircle,
        phase: "Phase 5: Full Deployment",
        date: "Q2 2026",
        title: "Tranche 2 Closing",
        description: "Final $5B investment, cementing the long-term strategic partnership and HQ establishment."
    }
]

const subtitle = "A clear, phased roadmap ensures meticulous execution, transforming vision into reality with defined milestones and clear accountability."

const TimelineItem = ({ item, index }: { item: typeof timelineEvents[0], index: number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const cardVariants = {
        hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }
    
    const iconVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.3 } },
    }

    return (
        <div ref={ref} className="relative">
            <motion.div
                className="md:flex"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
            >
                <div className={cn(
                    "md:w-1/2",
                    index % 2 === 0 ? "md:pr-14" : "md:pl-14 md:order-last"
                )}>
                    <Card className="ml-12 md:ml-0">
                        <CardHeader>
                            <p className="text-sm font-semibold text-primary">{item.phase} - <span className="text-muted-foreground">{item.date}</span></p>
                            <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:w-1/2" /> {/* Spacer */}
            </motion.div>
            <motion.div
                className="absolute top-1/2 -translate-y-1/2 left-6 md:left-1/2 -translate-x-1/2"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={iconVariants}
            >
                <div className="h-14 w-14 rounded-full bg-background flex items-center justify-center ring-8 ring-background">
                    <div className="bg-primary/10 p-3 rounded-full">
                        <item.icon strokeWidth={1.5} className="w-6 h-6 text-primary" />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const AnimatedPoint = ({children, className}: {children: React.ReactNode, className?: string}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ImplementationTimelineSection() {
    const timelineRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start center", "end center"]
    })
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section id="timeline" className="bg-transparent py-24 container mx-auto px-4">
            <h2 className="section-title">VII. A Roadmap to Success</h2>
            <DecryptedText
                text={subtitle}
                parentClassName="section-subtitle"
                animateOn="view"
                sequential={true}
                speed={20}
                encryptedClassName="text-primary/50"
            />

            <div ref={timelineRef} className="relative mt-20 max-w-5xl mx-auto">
                <motion.div 
                    className="absolute left-6 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2 origin-top"
                    style={{ height: lineHeight }}
                    aria-hidden="true" 
                />

                <div className="space-y-16">
                    <AnimatedPoint className="relative">
                        <div className="md:flex">
                            <div className="md:w-1/2 md:pr-14">
                                <h3 className="pl-12 text-2xl font-bold text-primary md:pl-0 md:text-right">START</h3>
                            </div>
                            <div className="md:w-1/2" />
                        </div>
                        <div className="absolute left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary ring-8 ring-background md:left-1/2" />
                    </AnimatedPoint>

                    {timelineEvents.map((item, index) => (
                       <TimelineItem key={index} item={item} index={index} />
                    ))}
                    
                    <AnimatedPoint className="relative">
                         <div className="md:flex">
                             <div className={cn(
                                "md:w-1/2",
                                timelineEvents.length % 2 === 0
                                    ? "md:pr-14 md:text-right"
                                    : "md:pl-14 md:text-left md:order-last"
                             )}>
                                <h3 className="pl-12 text-2xl font-bold text-primary md:px-0">GOAL</h3>
                             </div>
                             <div className="md:w-1/2" />
                        </div>
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 md:left-1/2">
                            <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center ring-8 ring-background">
                                <Flag strokeWidth={1.5} className="h-3 w-3 text-primary-foreground" />
                            </div>
                        </div>
                    </AnimatedPoint>
                </div>
            </div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="md:col-span-2 border-primary/50 hover:border-primary/100 flex flex-col justify-between">
                    <CardHeader>
                         <CardTitle className="flex items-center gap-4">
                            <Rocket strokeWidth={1.5} className="w-8 h-8 text-primary" />
                            <span>Immediate Action Required</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xl text-foreground">
                            Authorize The Ark to formally present this investment proposal to Binance leadership.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <p className="text-sm text-muted-foreground">The next step in the engagement process.</p>
                    </CardFooter>
                </Card>

                <Card className="border-accent/50 hover:border-accent/100 flex flex-col justify-between">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-4">
                            <Target strokeWidth={1.5} className="w-8 h-8 text-accent" />
                            <span>Decision Point</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-foreground">The mandate to proceed with negotiations.</p>
                    </CardContent>
                    <CardFooter>
                        <Badge variant="outline" className="border-accent text-accent">Awaiting Formal Approval</Badge>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}
