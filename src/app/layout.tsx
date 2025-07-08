import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Qatar × Binance: Building the Digital-Finance Nexus',
  description: 'A $10 Billion Strategic Investment to Shape the Future of Global Digital Finance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative">
        <div className="fixed inset-0 -z-20 h-full w-full bg-background" />
        
        <div className='relative z-0'>
            {children}
        </div>
        
        <Toaster />
      </body>
    </html>
  );
}
