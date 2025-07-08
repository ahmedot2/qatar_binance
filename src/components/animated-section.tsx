'use client';

import { cn } from '@/lib/utils';
import { type HTMLAttributes, useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

export function AnimatedSection({ children, className, id, ...props }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "container mx-auto px-4 py-16 md:py-24 transition-all duration-1000 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
