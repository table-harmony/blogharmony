import "@/styles/mdx.css";

import { authors } from "#site/content";
import { formatDate } from "@/lib/utils";

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import { MDXContent } from "@/components/mdx-components";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getAuthorFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const author = authors.find((author) => author.slugAsParams === slug);

  return author;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const author = await getAuthorFromParams(params);

  if (!author) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", author.name);

  return {
    title: author.name,
    description: author.description,
    authors: { name: author.name },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return authors.map((author) => ({ slug: author.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const author = await getAuthorFromParams(params);

  if (!author || !author.published) {
    notFound();
  }

  return (
    <article className="container py-6 max-w-3xl mx-auto">
      <div className="flex flex-col gap-4">
        <header className="flex flex-col gap-2">
          <time
            dateTime={author.date}
            className="text-muted-foreground text-xs"
          >
            {formatDate(author.date)}
          </time>
          <h1 className="text-3xl font-medium">{author.name}</h1>
          {author.description && (
            <p className="mt-0 text-muted-foreground">{author.description}</p>
          )}
        </header>
        <Separator />
        <MDXContent code={author.body} />
      </div>
    </article>
  );
}
