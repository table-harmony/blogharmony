import Contact from "@/markdown/contact.mdx";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article className="prose dark:prose-invert max-w-2xl pb-10 w-full">
        <Contact />
      </article>
    </div>
  );
}
