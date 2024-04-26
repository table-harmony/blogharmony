import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background">
      <div className="container flex h-14 items-center justify-between gap-2">
        <Link href="/" className="font-bold">
          HarmonyBlog
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}
