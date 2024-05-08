import ChangeLog from "@/markdown/support/changelog.mdx";

export default function ContactPage() {
  return (
    <div className="container max-w-4xl py-12">
      <article className="prose dark:prose-invert max-w-2xl pb-10">
        <ChangeLog />
      </article>
    </div>
  );
}
