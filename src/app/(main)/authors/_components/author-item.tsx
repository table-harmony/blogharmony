import Link from "next/link";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";

interface AuthorItemProps {
  id: string;
  email: string;
  name: string;
  joinedAt: Date;
}

export function AuthorItem({ id, name, email, joinedAt }: AuthorItemProps) {
  return (
    <article className="flex flex-col gap-2 border-border border-b py-3">
      <h2 className="text-2xl font-medium">
        <Link href={"/authors/" + id}>{name}</Link>
      </h2>
      <div className="max-w-none text-muted-foreground">{email}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-xs md:text-base font-medium flex items-center gap-1">
            Started on: {joinedAt.toLocaleDateString()}
          </dd>
        </dl>
        <Link
          href={"/authors/" + id}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
