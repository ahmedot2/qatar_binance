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
import { LazyContentWrapper } from '@/components/lazy-content-wrapper';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <LazyContentWrapper>
          <StrategicOpportunitySection />
          <BinancePowerhouseSection />
          <QatarVisionSection />
          <DohaHQSection />
          <InvestmentDeepDiveSection />
          <JointInitiativesSection />
          <ImplementationTimelineSection />
          <PitchDeckSection />
          <ConclusionSection />
        </LazyContentWrapper>
      </main>
    </div>
  );
}
