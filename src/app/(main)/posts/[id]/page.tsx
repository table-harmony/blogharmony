import "@/app/mdx.css";

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getPost, getPosts } from "@/db/utils";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface PostPageProps {
  params: {
    id: string;
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const id = params?.id;
  const post = await getPost(id);

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
    authors: { name: post.authorId },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  const posts = await getPosts();
  return posts.map((post) => ({ id: post.id }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
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
