import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
      <div className="container flex items-center flex-col gap-4">
        <h1 className="text-center text-3xl font-black text-balance md:text-5xl">
          Welcome to HarmonyBlog
        </h1>
        <p className="max-w-[500px] text-center text-lg text-muted-foreground">
          Discover practical tips, inspiring stories, and expert insights on
          many topics.
        </p>
        <nav className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Link
            href="/posts"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
          >
            View posts
          </Link>
          <Link
            href="/authors"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-fit"
            )}
          >
            To authors
          </Link>
        </nav>
      </div>
    </section>
  );
}
