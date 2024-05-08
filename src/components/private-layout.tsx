"use client";

import Link from "next/link";

import { siteConfig } from "@/config/site";

import { SignedIn, UserButton } from "@clerk/nextjs";

import { MobileNav } from "@/components/mobile-nav";
import { Icons } from "@/components/icons";

export function Links() {
  return (
    <div className="hidden md:flex md:justify-center md:gap-12 md:items-center">
      <Link href="/dashboard" className="text-muted-foreground hover:underline">
        Dashboard
      </Link>
      <Link href="/authors" className="text-muted-foreground hover:underline">
        Authors
      </Link>
    </div>
  );
}
export default function PrivateLayout({
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
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>
      <div className="flex-1">{children}</div>
    </>
  );
}
