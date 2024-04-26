import "@/styles/mdx.css";

import { posts } from "#site/content";
import { formatDate } from "@/lib/utils";

import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Tag } from "@/components/tag";
import { Separator } from "@/components/ui/separator";
import { MDXContent } from "@/components/mdx-components";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";

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
    <article className="container py-6 max-w-3xl mx-auto">
      <div className="flex flex-col gap-4">
        <header className="flex flex-col gap-2">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <time dateTime={post.date} className="text-xs">
                  {formatDate(post.date)}
                </time>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem className="text-xs">{post.author}</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-medium">{post.title}</h1>
          <div className="flex gap-2 mb-2">
            {post.tags?.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
          {post.description && (
            <p className="mt-0 text-muted-foreground">{post.description}</p>
          )}
        </header>
        <Separator />
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
