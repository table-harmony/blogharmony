import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

interface PostItemProps {
  slug: string;
  name: string;
  description?: string;
  date: string;
}

export function AuthorItem({ slug, name, description, date }: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <h2 className="text-2xl font-medium">
        <Link href={"/" + slug}>{name}</Link>
      </h2>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            Started on:
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={"/" + slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more <ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </article>
  );
}
