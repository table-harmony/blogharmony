import Link from "next/link";

export function HomeLinks() {
  return (
    <div className="hidden md:flex md:justify-center md:gap-12 md:items-center">
      <Link href="/#plans" className="text-muted-foreground hover:underline">
        Plans
      </Link>
      <Link href="/#faq" className="text-muted-foreground hover:underline">
        FAQ
      </Link>
    </div>
  );
}
