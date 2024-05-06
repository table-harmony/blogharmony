import { MobileNav } from "@/components/mobile-nav";
import { Profile } from "@/components/profile";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "./icons";

export function SiteHeader() {
  return (
    <header className="z-10 top-0 w-full">
      <div className="container flex items-center justify-between px-8 py-4 mx-auto">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
          <Link
            href="/#plans"
            className="text-muted-foreground hover:underline"
          >
            Plans
          </Link>
          <Link href="/#faq" className="text-muted-foreground hover:underline">
            FAQ
          </Link>
        </div>
        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <Profile />
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
