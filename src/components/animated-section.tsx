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

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      const title = section.querySelector('.section-title');
      const subtitle = section.querySelector('.section-subtitle');
      // A more robust selector for grid items and cards
      const items = section.querySelectorAll('.grid > *, .mt-12 > *, .relative.mt-16, .mt-16.text-center');

      if (title) {
        timeline.from(title, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        });
      }

      if (subtitle) {
        timeline.from(subtitle, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        }, "-=0.6"); // Overlap with title animation
      }

      if (items.length > 0) {
        timeline.from(items, {
          opacity: 0,
          y: 30,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power3.out',
        }, "-=0.5"); // Overlap with subtitle animation
      }

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
