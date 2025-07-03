"use client"

import { useAnimatedCounter } from '@/hooks/use-animated-counter';

interface AnimatedCounterProps {
  value: number;
  className?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({ value, className, decimals = 0, prefix = '', suffix = '' }: AnimatedCounterProps) {
  const count = useAnimatedCounter(value, 2000, 0);

  const formatNumber = (num: number) => {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <span className={className} role="status" aria-label={`${prefix}${formatNumber(value)}${suffix}`}>
      <span aria-hidden="true">
        {prefix}{formatNumber(count)}{suffix}
      </span>
    </span>
  );
}
