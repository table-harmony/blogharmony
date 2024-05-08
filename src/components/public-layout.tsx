"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { MobileNav } from "@/components/mobile-nav";
import { Icons } from "@/components/icons";

export function Links() {
  return (
    <div className="hidden md:flex md:justify-center md:gap-12 md:items-center">
      <Link href="/#reasons" className="text-muted-foreground hover:underline">
        Reasons
      </Link>
      <Link href="/#plans" className="text-muted-foreground hover:underline">
        Plans
      </Link>
    </div>
  );
}

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="z-10 top-0 w-full">
        <div className="container flex items-center px-8 py-4 mx-auto">
          <MobileNav />
          <Link
            href="/"
            className="hidden md:flex md:flex-1 items-center gap-2 shrink-0"
          >
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
          <Links />
          <div className="flex justify-end flex-1">
            <SignedIn>
              <Button className="rounded-full" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <Button className="rounded-full">Get Started</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </>
  );
}
