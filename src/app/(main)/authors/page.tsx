import { ComingSoon } from "@/components/coming-soon";
import { Title } from "@/components/title";

export default function AuthorsPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <Title title="Authors" subtitle="Find our creators" />
      <ComingSoon />
    </div>
  );
}
