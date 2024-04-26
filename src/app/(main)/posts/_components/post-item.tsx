import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";

import { Tag } from "@/components/tag";
import { buttonVariants } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRightIcon, SlashIcon } from "lucide-react";

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
      <h2 className="text-2xl font-medium">
        <Link href={"/" + slug}>{title}</Link>
      </h2>
      <div className="flex gap-2">
        {tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <time dateTime={date}>{formatDate(date)}</time>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon />
                </BreadcrumbSeparator>
                <BreadcrumbItem>{author}</BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
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
