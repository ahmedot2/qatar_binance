"use client"

import { useState, useEffect, useRef } from 'react';

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function useAnimatedCounter(
  end: number,
  startAnimation: boolean,
  duration = 2000,
  start = 0
) {
  const [count, setCount] = useState(start);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (startAnimation) {
      startTimeRef.current = null;
      const animate = (timestamp: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }

        const progress = timestamp - startTimeRef.current;
        const t = Math.min(progress / duration, 1);
        const easedT = easeOutExpo(t);
        
        const currentCount = start + (end - start) * easedT;
        setCount(currentCount);

        if (progress < duration) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end); // Ensure it ends exactly on the end value
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    } else {
      setCount(start);
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, start, duration, startAnimation]);

  return count;
}
