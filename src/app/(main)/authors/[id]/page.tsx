import "@/app/mdx.css";

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAuthor, getAuthors } from "@/db/utils";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface AuthorPageProps {
  params: {
    id: string;
  };
}

async function getAuthorFromParams(params: AuthorPageProps["params"]) {
  const id = params?.id;
  const author = await getAuthor(id);

  return author;
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const author = await getAuthorFromParams(params);

  if (!author) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", author.name);

  return {
    title: author.name,
    description: author.email,
    authors: { name: author.name },
  };
}

export async function generateStaticParams(): Promise<
  AuthorPageProps["params"][]
> {
  const authors = await getAuthors();
  return authors.map((post) => ({ id: post.id }));
}

export default async function PostPage({ params }: AuthorPageProps) {
  const author = await getAuthorFromParams(params);

  if (!author) {
    notFound();
  }

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <div className="text-sm">
        {post.createdAt.toLocaleDateString()}{" "}
        <Link href={"/authors/" + post.authorId} className="underline-offset-4">
          Author
        </Link>
      </div>
      <h1 className="my-4">{post.title}</h1>
      {post.description && (
        <p className="mt-0 text-muted-foreground">{post.description}</p>
      )}
      <Separator className="my-4" />
      {post.body}
    </article>
  );
}
