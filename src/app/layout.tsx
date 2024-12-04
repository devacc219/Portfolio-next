
import type { Metadata } from "next";
import "./globals.css";
import RootLayoutSplash from "./_components/common/rootLayoutSplash";
import { strings } from "@/lib/strings";
import { Space_Mono } from 'next/font/google'


export const metadata: Metadata = {
  title: strings.siteTitle,
  description: strings.siteDescription
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const spaceMono = Space_Mono({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" /> */}
      </head>
      <body className={`${spaceMono.className} bg-background text-foreground min-h-screen`}>
        <RootLayoutSplash>
          {children}
        </RootLayoutSplash>
        
      </body>
    </html>
  );
}
