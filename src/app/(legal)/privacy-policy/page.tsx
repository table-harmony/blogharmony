import { siteConfig } from "@/config/site";
import PrivacyPolicy from "../_markdown/privacy-policy.mdx";

export async function generateMetadata() {
  return {
    title: `Privacy policy | ${siteConfig.name}`,
  };
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article className="prose dark:prose-invert max-w-2xl pb-10 w-full">
        <PrivacyPolicy />
      </article>
    </div>
  );
}
