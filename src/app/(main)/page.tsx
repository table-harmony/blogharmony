import Link from "next/link";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container flex flex-col gap-4">
      <PageHeader>
        <PageHeaderHeading>Welcome to my blog</PageHeaderHeading>
        <PageHeaderDescription>
          Weird. Awkward. Nonsense about my process as a web developer.
        </PageHeaderDescription>
        <PageActions>
          <Button variant="outline" asChild>
            <Link href="/blog">Get started</Link>
          </Button>
        </PageActions>
      </PageHeader>
    </main>
  );
}
