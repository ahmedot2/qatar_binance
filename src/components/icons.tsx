import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function BitcoinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      <path d="M11.25 8.25h2.5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" />
      <path d="M12.5 8V6.5" />
      <path d="M12.5 17v-1.5" />
      <path d="M15 9.5h.25" />
      <path d="M15 15.5h.25" />
      <path d="M10 9.5h-.25" />
      <path d="M10 15.5h-.25" />
    </svg>
  );
}

export function EthereumIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      <path d="m6 12 6-7 6 7-6 7-6-7Z" />
      <path d="m6 12 6 7 6-7" />
    </svg>
  );
}

export function BnbIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
            <path d="m12 1.6-5.2 5.2 5.2 5.2 5.2-5.2Z"/>
            <path d="m6.8 6.8-5.2 5.2 5.2 5.2 5.2-5.2Z"/>
            <path d="m17.2 6.8-5.2 5.2 5.2 5.2 5.2-5.2Z"/>
        </svg>
    )
}

export function UsdtIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
            <path d="M12 2v20"/>
            <path d="M6 12h12"/>
            <path d="M17 2H7c-1.1 0-2 .9-2 2v3h14V4c0-1.1-.9-2-2-2z"/>
        </svg>
    )
}

export function Section(
  { className, ...props }: React.HTMLAttributes<HTMLElement>
) {
  return (
    <section
      className={cn("container mx-auto px-4 py-16 md:py-24", className)}
      {...props}
    />
  )
}
