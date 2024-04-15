import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";

export default function Home() {
  return (
    <div className="container flex flex-col gap-4">
      <PageHeader>
        <PageHeaderHeading>Blog</PageHeaderHeading>
        <PageHeaderDescription>
          Welcome to my blog, Where i write about my process while writing my
          website
        </PageHeaderDescription>
        <PageActions></PageActions>
      </PageHeader>
      <Card className="space-y-4 p-4">
        <CardTitle>Post 1</CardTitle>
        <CardDescription>14/04/2024, 13:30</CardDescription>
        <CardContent>
          Today, I completed all the work for 10th grade, and as a result, I
          have a website that meets the requirements for graduation and is built
          according to the MVC (Model-View-Controller) architecture.
        </CardContent>
      </Card>
      <Card className="space-y-4 p-4">
        <CardTitle>Post 2</CardTitle>
        <CardDescription>15/04/2024, 13:36</CardDescription>
        <CardContent>
          I started thinking about what should be on my website and what its
          central idea should be. However, I couldn&apos;t decide. Initially, I
          wanted to focus on creating a model similar to Discord, perhaps
          incorporating principles from AI. For example, an autopilot feature
          that can speak on your behalf in specific moments, and emotion
          recognition that detects your current feelings based on camera or
          voice input. But I&apos;ve decided that AI is not the field I want to
          pursue, and I&apos;m unsure of what else to do.
        </CardContent>
      </Card>
    </div>
  );
}
