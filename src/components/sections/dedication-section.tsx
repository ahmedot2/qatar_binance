import { AnimatedSection } from "@/components/animated-section";

export function DedicationSection() {
  return (
    <AnimatedSection className="py-12 bg-transparent">
      <div className="text-center">
        <p className="text-xl md:text-2xl font-light text-muted-foreground tracking-widest uppercase">
          Under the Patronage of
        </p>
        <h2 className="text-2xl md:text-4xl font-semibold text-foreground mt-4">
          H.E SHEIKH JABR BIN JASIM BIN THANI AL THANI
        </h2>
      </div>
    </AnimatedSection>
  );
}
