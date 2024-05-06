import { siteConfig } from "@/config/site";
import Contact from "../_markdown/contact.mdx";

export async function generateMetadata() {
  return {
    title: `Contact | ${siteConfig.name}`,
  };
}

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article className="prose dark:prose-invert max-w-2xl pb-10 w-full">
        <Contact />
      </article>
    </div>
  );
}
