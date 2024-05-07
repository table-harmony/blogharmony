import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HomeLinks } from "./_components/links";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader links={<HomeLinks />} />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </>
  );
}
