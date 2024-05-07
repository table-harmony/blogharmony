import { MobileNav } from "@/components/mobile-nav";
import { Profile } from "@/components/profile";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icons } from "./icons";

interface SiteHeaderProps {
  links: React.ReactNode;
}

export function SiteHeader({ links }: SiteHeaderProps) {
  return (
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
        {links}
        <div className="flex justify-end flex-1">
          <Profile />
        </div>
      </div>
    </header>
  );
}
