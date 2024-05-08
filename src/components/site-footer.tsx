import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="z-10 border-t border-border py-8 flex flex-col relative">
      <div className="mx-auto container px-4 lg:px-20 pt-6">
        <section className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-4 xl:col-span-2">
            <Icons.logo className="h-12 w-12" />
            <div>
              <Link href="/" className="font-medium text-lg">
                {siteConfig.name}
              </Link>
              <p className="max-w-xs text-sm text-muted-foreground">
                {siteConfig.description}
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
            <div className="mt-4 space-y-4 flex flex-col">
              <h3 className="font-semibold">Support</h3>
              <Link
                href="/contact"
                className="text-xs text-muted-foreground hover:text-foreground duration-200"
              >
                Contact
              </Link>
            </div>
            <div className="mt-4 space-y-4 flex flex-col">
              <h3 className="font-semibold">Legal</h3>
              <Link
                href="/privacy-policy"
                className="text-xs text-muted-foreground hover:text-foreground duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-xs text-muted-foreground hover:text-foreground duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-16 flex flex-col-reverse md:flex-row md:justify-between items-center border-t border-border pt-4 md:pt-8 sm:mt-20 lg:mt-24">
          <p className="text-balance text-sm leading-loose text-muted-foreground w-full text-left mt-4 md:mt-0">
            Built by{" "}
            <Link
              href="https://tableharmony.io"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              TableHarmony.
            </Link>{" "}
            The source code is available on{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub.
            </Link>
          </p>
          <div className="w-full justify-start flex md:justify-end">
            <ModeToggle />
          </div>
        </section>
      </div>
    </footer>
  );
}
