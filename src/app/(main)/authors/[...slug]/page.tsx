import "@/app/mdx.css";

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
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <time dateTime={author.date} className="text-sm">
        {formatDate(author.date)}
      </time>
      <h1 className="my-4">{author.name}</h1>
      {author.description && (
        <p className="mt-0 text-muted-foreground">{author.description}</p>
      )}
      <Separator className="my-4" />
      <MDXContent code={author.body} />
    </article>
  );
}
