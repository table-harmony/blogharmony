import Link from "next/link";

import { siteConfig } from "@/config/site";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Title } from "@/components/title";

import { ArrowRightIcon, CheckIcon, XIcon } from "lucide-react";

export function MainSection() {
  return (
    <section>
      <div className="container lg:px-20 pt-12 pb-24 md:py-20 space-y-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-center">
          {siteConfig.description}
        </h1>
        <p className="max-w-xl md:text-lg text-muted-foreground text-center">
          Delivers impactful and attention-grabbing information about all
          topics. Discover, explore, and engage with development.
        </p>
        <ul className="leading-relaxed space-y-1.5">
          <li className="flex items-center">
            <CheckIcon className="w-4 h-4 text-primary mr-2" />
            Easily accessed
          </li>
          <li className="flex items-center">
            <CheckIcon className="w-4 h-4 text-primary mr-2" />
            Beautifully designed interface
          </li>
          <li className="flex items-center">
            <CheckIcon className="w-4 h-4 text-primary mr-2" />
            Highly informational
          </li>
        </ul>
        <SignedIn>
          <Button className="w-72 rounded-full" asChild>
            <Link href="/dashboard">
              Dashboard <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button className="w-72 rounded-full">
              Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </section>
  );
}

export function ReasonsSection() {
  return (
    <section id="reasons">
      <div className="container lg:px-20 pt-12 pb-24 md:py-20 flex flex-col items-center">
        <Title
          title="Reasons"
          subtitle="Tired of not getting updated on your favorite topics ?"
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8 md:py-16">
          <Card className="border border-red-600 rounded-md p-6 bg-red-400/5">
            <CardHeader>
              <CardTitle className="text-red-600">
                Without BlogHarmony
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="leading-relaxed space-y-1.5">
                <li className="flex items-center">
                  <XIcon className="w-4 h-4 text-red-600 mr-2" />
                  Struggle to recall on your favorite topics
                </li>
                <li className="flex items-center">
                  <XIcon className="w-4 h-4 text-red-600 mr-2" />
                  Waste time catching up where you left off
                </li>
                <li className="flex items-center">
                  <XIcon className="w-4 h-4 text-red-600 mr-2" />
                  Overwhelmed by all your hobbies
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border border-green-600 rounded-md p-6 bg-green-400/5">
            <CardHeader>
              <CardTitle className="text-green-600">With BlogHarmony</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="leading-relaxed space-y-1.5">
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 text-green-600 mr-2" />
                  Stay updated
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 text-green-600 mr-2" />
                  Good community
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 text-green-600 mr-2" />
                  Very informational
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section id="faq">
      <div className="container lg:px-20 pt-12 pb-24 md:py-20 flex flex-col md:flex-row md:justify-between">
        <Title title="FAQ" subtitle="Frequently Asked Questions" />
        <Accordion type="multiple" className="mt-6 md:w-96">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It is accessible through all devices
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it up-to-date?</AccordionTrigger>
            <AccordionContent>
              Yes. Authors can create posts at all time and therefore is
              updated.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it cool?</AccordionTrigger>
            <AccordionContent>Yes. very much.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export function PlansSection() {
  return (
    <section id="plans">
      <div className="container lg:px-20 pt-12 pb-24 md:py-20 flex flex-col items-center">
        <Title
          title="Plans"
          subtitle="Become a participent"
          className="text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full py-8 md:py-16">
          <Card className="border border-primary rounded-md p-6">
            <CardHeader>
              <CardTitle>User plan</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="leading-relaxed space-y-1.5">
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 text-primary mr-2" />
                  Subscribe to all authors
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 text-primary mr-2" />
                  View authors posts
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 text-primary mr-2" />
                  Find authors of your favorite topics
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Become a user</Button>
            </CardFooter>
          </Card>
          <Card className="border border-primary rounded-md p-6">
            <CardHeader>
              <CardTitle>Author plan</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="leading-relaxed space-y-1.5">
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 text-primary mr-2" />
                  Easily accessed
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 text-primary mr-2" />
                  Beautifully designed interface
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-4 h-4 text-primary mr-2" />
                  Highly informational
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Become an author</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function JoinSection() {
  return (
    <section>
      <div className="container lg:px-20 py-24 md:py-48 flex justify-center">
        <div className="relative flex items-center">
          <span className="absolute -inset-6 bg-gradient-to-r from-purple-500 to-purple-600 opacity-30 rounded-3xl blur-3xl scale-x-[-1] rotate-3"></span>
          <Card className="text-center min-w-fit border dark:bg-gradient-to-bl bg-background/55 dark:bg-transparent dark:from-white/10 dark:to-transparent dark:backdrop-blur-sm dark:border-white/20 p-8 md:p-12 z-20">
            <CardHeader>
              <CardTitle>Get notified at all times</CardTitle>
            </CardHeader>
            <CardContent>{siteConfig.description}</CardContent>
            <CardFooter className="justify-center">
              <Button className="md:w-64 rounded-full" asChild>
                <Link href="/#plans">
                  Our plans <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
