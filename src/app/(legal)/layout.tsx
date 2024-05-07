import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LegalLinks } from "./_components/links";

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader links={<LegalLinks />} />
      <div className="flex-1">{children}</div>
      <SiteFooter />
    </>
  );
}
