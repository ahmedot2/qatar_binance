'use client';

import { useRef, useState, useEffect, type ReactNode } from 'react';

export function LazyContentWrapper({ children }: { children: ReactNode }) {
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
                rootMargin: '200px', // Load when it's 200px away
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
        <div ref={ref} className="relative isolate">
            {inView && (
                <>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute -z-20 w-full h-full object-cover"
                        src="/videos/main-background.mp4"
                    >
                        Your browser does not support the video tag.
                    </video>
                </>
            )}
            {children}
        </div>
    );
}
