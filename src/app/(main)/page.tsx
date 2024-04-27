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
        <PageHeaderHeading>Welcome to HarmonyBlog</PageHeaderHeading>
        <PageHeaderDescription>
          Weird. Nonsense. Boring stuff about coding.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild>
            <Link href="/posts">View Posts</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/authors">To our authors</Link>
          </Button>
        </PageActions>
      </PageHeader>
    </main>
  );
}
