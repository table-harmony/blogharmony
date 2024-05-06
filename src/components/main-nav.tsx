"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "./icons";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <div className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/posts"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
            pathname === "/posts" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Posts
        </Link>
        <Link
          href="/authors"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
            pathname === "/authors" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Authors
        </Link>
      </div>
    </nav>
  );
}
