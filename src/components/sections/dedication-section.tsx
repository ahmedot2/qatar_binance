import { AnimatedSection } from "@/components/animated-section";
import { Separator } from "@/components/ui/separator";

export function DedicationSection() {
  return (
    <AnimatedSection className="py-12 bg-transparent">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg md:text-xl font-light text-muted-foreground tracking-widest uppercase">
          THE ARK
        </p>
        <Separator className="my-4" />
        <h2 className="text-xl md:text-2xl font-semibold text-foreground">
          H.E SHEIKH JABR BIN JASIM BIN THANI AL THANI
        </h2>
      </div>
    </AnimatedSection>
  );
}
