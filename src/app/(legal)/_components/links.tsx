"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function LegalLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex md:gap-4">
      <Link
        href="/privacy-policy"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/privacy-policy"
            ? "text-foreground"
            : "text-muted-foreground"
        )}
      >
        Privacy
      </Link>
      <Link
        href="/terms-of-service"
        className={cn(
          "hover:underline",
          pathname === "/terms-of-service"
            ? "text-foreground"
            : "text-muted-foreground"
        )}
      >
        Terms
      </Link>
      <Link
        href="/contact"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/contact" ? "text-foreground" : "text-muted-foreground"
        )}
      >
        Contact
      </Link>
    </div>
  );
}
