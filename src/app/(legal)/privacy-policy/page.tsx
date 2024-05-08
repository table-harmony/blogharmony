import PrivacyPolicy from "@/markdown/legal/privacy-policy.mdx";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article className="prose dark:prose-invert max-w-2xl pb-10 w-full">
        <PrivacyPolicy />
      </article>
    </div>
  );
}
