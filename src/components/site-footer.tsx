import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="py-4 mt-4 md:px-4 md:py-0">
      <div className="container flex items-center justify-end md:h-20">
        <nav className="flex items-center gap-2">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
