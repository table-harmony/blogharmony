import { Header } from "@/components/header";
import { siteConfig } from "@/config/site";

export async function generateMetadata() {
  return {
    title: `Dashboard | ${siteConfig.name}`,
  };
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <Header
        title="Dashboard"
        subtitle="Lorem ipsum bluh bluh bluh"
        className="text-left"
      />
    </div>
  );
}
