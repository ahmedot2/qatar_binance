import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

export function BitcoinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      <path d="M6 12h8a4 4 0 0 0 0-8H6v8Zm0 0h9a4 4 0 0 1 0 8H6v-8Z" />
      <path d="M9 18V6" />
      <path d="M12 18V6" />
    </svg>
  );
}

export function EthereumIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      <path d="m6 12 6-7 6 7-6 7-6-7Z" />
      <path d="m6 12 6 7 6-7" />
    </svg>
  );
}

export function BnbIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
            <path d="m12 1.6-5.2 5.2 5.2 5.2 5.2-5.2Z"/>
            <path d="m6.8 6.8-5.2 5.2 5.2 5.2 5.2-5.2Z"/>
            <path d="m17.2 6.8-5.2 5.2 5.2 5.2 5.2-5.2Z"/>
        </svg>
    )
}

export function UsdtIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
            <circle cx="12" cy="12" r="10" />
            <path d="M9 12h6" />
            <path d="M12 9v6" />
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
