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
      <Card className="space-y-4 p-4">
        <CardTitle>Post 3</CardTitle>
        <CardDescription>16/04/2024, 10:16</CardDescription>
        <CardContent>
          I&apos;ve decided that the main goal of the website will be a social
          network with chats and voice chats. Currently, I&apos;m working on
          refining the main goal. Furthermore, I&apos;ve decided that my first
          secondary goal will be word filtering and monitoring people who use
          offensive language. In other words, I&apos;ll create an AI model
          capable of identifying offensive words in chats, and perhaps in the
          future, I&apos;ll also add this functionality to voice chats.
        </CardContent>
      </Card>
      <Card className="space-y-4 p-4">
        <CardTitle>Post 4</CardTitle>
        <CardDescription>17/04/2024, 10:42</CardDescription>
        <CardContent>
          I have been thinking over the main goal of the website and I have
          squat. It seems I can&apos;t find any cool features for the main
          purpose although, I thought something to do with teaching while in a
          conversation could be interasting. Also I need to remember that I
          still haven&apos;t implemented the middleware yet and would like to
          add authorization and api&apos;s using cerbos.
        </CardContent>
      </Card>
      <Card className="space-y-4 p-4">
        <CardTitle>Post 5</CardTitle>
        <CardDescription>17/04/2024, 22:38</CardDescription>
        <CardContent>
          I have experimented with the Astro framework, So I written this blog
          in Astro. It is available in the astro-migration branch on this
          projec&apos;s github repository. Although astro is fine I prefer
          Next.js.
        </CardContent>
      </Card>
      <Card className="space-y-4 p-4">
        <CardTitle>Post 6</CardTitle>
        <CardDescription>19/04/2024, 10:02</CardDescription>
        <CardContent>
          I am losing hope, I have no idea for my main purpose in the website so
          I just do a couple of tweaks.
        </CardContent>
      </Card>
    </div>
  );
}
