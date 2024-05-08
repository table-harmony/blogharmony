import {
  FAQSection,
  JoinSection,
  MainSection,
  PlansSection,
  ReasonsSection,
} from "./_components/sections";

export default function HomePage() {
  return (
    <div className="flex flex-col relative">
      <MainSection />
      <ReasonsSection />
      <FAQSection />
      <PlansSection />
      <JoinSection />
    </div>
  );
}
