import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <div className="container flex h-14 items-center justify-between gap-2">
        <h1 className="font-bold">Liron kaner&apos;s blog</h1>
        <ModeToggle />
      </div>
    </header>
  );
}
