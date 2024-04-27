import "@/app/mdx.css";

import { posts } from "#site/content";
import { formatDate } from "@/lib/utils";

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { Tag } from "@/components/tag";
import { Separator } from "@/components/ui/separator";
import { MDXContent } from "@/components/mdx-components";
import { CommentList } from "../_components/comment-list";
import { slug } from "github-slugger";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: post.author },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <div className="text-sm">
        <time dateTime={post.date}>{formatDate(post.date)}</time> /{" "}
        <Link
          href={"/authors/" + slug(post.author)}
          className="underline-offset-4"
        >
          {post.author}
        </Link>
      </div>
      <h1 className="my-4">{post.title}</h1>
      <div className="flex gap-2 mb-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
      {post.description && (
        <p className="mt-0 text-muted-foreground">{post.description}</p>
      )}
      <Separator className="my-4" />
      <MDXContent code={post.body} />
      <CommentList post={post.title} />
    </article>
  );
}
