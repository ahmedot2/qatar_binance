'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

export function AnimatedSection({ children, className, id, ...props }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      // A more robust way to animate: select all direct children of the section.
      const elementsToAnimate = gsap.utils.toArray(section.children);
      
      if (elementsToAnimate.length === 0) return;

      // Animate all direct children with a stagger effect.
      // This is more robust than looking for specific classes.
      gsap.from(elementsToAnimate, {
        opacity: 0,
        y: 30,
        ease: 'power3.out',
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        "container mx-auto px-4 py-16 md:py-24",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
