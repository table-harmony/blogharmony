import TermsOfService from "../_markdown/terms-of-service.mdx";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <article className="prose dark:prose-invert max-w-2xl pb-10 w-full">
        <TermsOfService />
      </article>
    </div>
  );
}
