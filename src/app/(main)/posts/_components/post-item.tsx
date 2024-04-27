import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";

import { Tag } from "@/components/tag";
import { buttonVariants } from "@/components/ui/button";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  author: string;
  tags?: Array<string>;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  author,
  tags,
}: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="text-xs md:text-base text-muted-foreground">
        {description}
      </div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-xs font-medium hidden md:flex items-center gap-1">
            {author}, <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={"/" + slug}
          className={cn(
            buttonVariants({ variant: "link" }),
            "py-0 text-xs font-medium"
          )}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
