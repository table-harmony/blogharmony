import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PostItemProps {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

export function PostItem({ id, title, description, createdAt }: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <h2 className="text-2xl font-medium">{title}</h2>
      <div className="text-xs md:text-base text-muted-foreground">
        {description}
      </div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-xs font-medium hidden md:flex items-center gap-1">
            {createdAt.toLocaleDateString()}
          </dd>
        </dl>
        <Link
          href={"/posts/" + id}
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
