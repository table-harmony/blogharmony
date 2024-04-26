import "./globals.css";
import { Fredoka as FontSans } from "next/font/google";

import { Metadata } from "next";
import { siteConfig } from "@/config/site";

import { cn } from "@/lib/utils";
import { ContextProvider } from "@/components/context-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ContextProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              {children}
            </div>
          </ContextProvider>
        </body>
      </html>
    </>
  );
}
