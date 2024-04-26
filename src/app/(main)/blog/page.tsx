import { posts } from "#site/content";
import { sortPosts } from "@/lib/utils";

import { PostItem } from "./_components/post-item";
import { Separator } from "@/components/ui/separator";
import { QueryPagination } from "@/components/query-pagination";

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const POSTS_PER_PAGE = 5;

  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <main className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col gap-4">
        <header className="flex flex-col items-start gap-2">
          <h1 className="inline-block font-semibold text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">My nonsenses: </p>
        </header>
        <Separator />
        <section>
          {displayPosts.length === 0 ? (
            <p>Nothing to see here yet</p>
          ) : (
            <ul className="flex flex-col">
              {displayPosts.map((post) => {
                const { slug, date, title, description, author, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      author={author}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </section>
        <footer>
          <QueryPagination
            totalPages={totalPages}
            className="justify-end mt-4"
          />
        </footer>
      </div>
    </main>
  );
}
