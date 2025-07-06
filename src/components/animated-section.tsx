'use client';

import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

// This is now a simple, non-animated container component.
// It ensures content is always visible.
export function AnimatedSection({ children, className, id, ...props }: AnimatedSectionProps) {
  return (
    <section
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
