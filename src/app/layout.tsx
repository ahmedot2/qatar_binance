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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative">
        <div className="fixed inset-0 -z-10 h-full w-full bg-background">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--primary)/0.1),transparent)] animate-aurora-1"></div>
            <div className="absolute bottom-[-20%] right-[-20%] top-auto h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,hsl(var(--accent)/0.1),transparent)] animate-aurora-2"></div>
        </div>
        
        <div className='relative z-0'>
            {children}
        </div>
        
        <Toaster />
      </body>
    </html>
  );
}
