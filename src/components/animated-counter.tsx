"use client"

import { useAnimatedCounter } from '@/hooks/use-animated-counter';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  className?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({ value, className, decimals = 0, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  
  const count = useAnimatedCounter(value, inView, 2000, 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
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


  const formatNumber = (num: number) => {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <span ref={ref} className={className} role="status" aria-label={`${prefix}${formatNumber(value)}${suffix}`}>
      <span aria-hidden="true">
        {prefix}{formatNumber(count)}{suffix}
      </span>
    </span>
  );
}
