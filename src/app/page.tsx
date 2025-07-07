import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { StrategicOpportunitySection } from '@/components/sections/strategic-opportunity-section';
import { BinancePowerhouseSection } from '@/components/sections/binance-powerhouse-section';
import { QatarVisionSection } from '@/components/sections/qatar-vision-section';
import { DohaHQSection } from '@/components/sections/doha-hq-section';
import { InvestmentDeepDiveSection } from '@/components/sections/investment-deep-dive-section';
import { JointInitiativesSection } from '@/components/sections/joint-initiatives-section';
import { ImplementationTimelineSection } from '@/components/sections/implementation-timeline-section';
import { PitchDeckSection } from '@/components/sections/pitch-deck-section';
import { ConclusionSection } from '@/components/sections/conclusion-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="relative isolate">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute -z-20 w-full h-full object-cover"
              src="/videos/main-background.mp4"
            >
              Your browser does not support the video tag.
            </video>
            
            <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/4 top-0 h-96 w-96 animate-aurora-1 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 h-96 w-96 animate-aurora-2 rounded-full bg-accent/20 blur-3xl" />
            </div>

            <div className="absolute inset-0 -z-10 bg-background/95" />

            <StrategicOpportunitySection />
            <BinancePowerhouseSection />
            <QatarVisionSection />
            <DohaHQSection />
            <InvestmentDeepDiveSection />
            <JointInitiativesSection />
            <ImplementationTimelineSection />
            <PitchDeckSection />
            <ConclusionSection />
        </div>
      </main>
    </div>
  );
}
