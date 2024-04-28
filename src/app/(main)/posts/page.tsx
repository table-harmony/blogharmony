import { getPosts } from "@/db/utils";

import { PostItem } from "./_components/post-item";
import { Separator } from "@/components/ui/separator";
import { QueryPagination } from "@/components/query-pagination";

interface PostsPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const POSTS_PER_PAGE = 5;

  const currentPage = Number(searchParams?.page) || 1;
  const posts = await getPosts();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const displayPosts = posts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <main className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col gap-4">
        <header className="flex flex-col items-start gap-2">
          <h1 className="inline-block font-semibold text-4xl lg:text-5xl">
            Posts
          </h1>
          <p className="text-xl text-muted-foreground">A bunch of nonsense: </p>
        </header>
        <Separator />
        <section>
          {displayPosts.length === 0 ? (
            <p>Nothing to see here yet</p>
          ) : (
            <ul className="flex flex-col">
              {displayPosts.map((post) => {
                const { id, title, description, createdAt } = post;

                return (
                  <li key={id}>
                    <PostItem
                      id={id}
                      title={title}
                      description={description}
                      createdAt={createdAt}
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
