import Contact from "@/markdown/support/contact.mdx";

export default function ContactPage() {
  return (
    <div className="container max-w-4xl py-12">
      <article className="prose dark:prose-invert max-w-2xl pb-10">
        <Contact />
      </article>
    </div>
  );
}
