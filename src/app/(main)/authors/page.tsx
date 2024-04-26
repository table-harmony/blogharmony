import { authors } from "#site/content";

import { AuthorItem } from "./_component/author-item";
import { QueryPagination } from "@/components/query-pagination";
import { Separator } from "@/components/ui/separator";

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function AuthorsPage({ searchParams }: BlogPageProps) {
  const AUTHORS_PER_PAGE = 5;

  const currentPage = Number(searchParams?.page) || 1;
  const sortedAuthors = authors;
  const totalPages = Math.ceil(sortedAuthors.length / AUTHORS_PER_PAGE);

  const displayAuthors = sortedAuthors.slice(
    AUTHORS_PER_PAGE * (currentPage - 1),
    AUTHORS_PER_PAGE * currentPage
  );

  return (
    <main className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col gap-4">
        <header className="flex flex-col items-start gap-2">
          <h1 className="inline-block font-semibold text-4xl lg:text-5xl">
            Authors
          </h1>
          <p className="text-xl text-muted-foreground">
            A bunch of boring peole:
          </p>
        </header>
        <Separator />
        <section>
          {displayAuthors.length === 0 ? (
            <p>Nothing to see here yet</p>
          ) : (
            <ul className="flex flex-col">
              {displayAuthors.map((author) => {
                const { slug, name, date, description } = author;
                return (
                  <li key={slug}>
                    <AuthorItem
                      slug={slug}
                      date={date}
                      name={name}
                      description={description}
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
