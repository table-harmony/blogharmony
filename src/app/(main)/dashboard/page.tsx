import { ComingSoon } from "@/components/coming-soon";
import { Title } from "@/components/title";

export default function DashboardPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <Title title="Dashboard" subtitle="Keep Track" />
      <ComingSoon />
    </div>
  );
}
