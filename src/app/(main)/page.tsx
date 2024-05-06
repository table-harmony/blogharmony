import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Faq } from "./_components/faq";
import { Plans } from "./_components/plans";
import { Reasons } from "./_components/reasons";
import { Header } from "./_components/header";
import { List, ListItem } from "@/components/list";

export default function HomePage() {
  return (
    <div className="flex flex-col relative">
      <section>
        <div className="mx-auto w-full ctainer px-4 lg:px-20 flex flex-col items-center justify-between gap-10 pt-12 pb-24 md:py-20">
          <div className="w-full flex flex-col items-center justify-center text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
              Engage & Discover: Explore creativity in all topics
            </h1>
            <p className="max-w-xl md:text-lg text-muted-foreground">
              Delivers impactful and attention-grabbing information about all
              topics. Discover, explore, and engage with development.
            </p>
          </div>
          <List>
            <ListItem>
              <CheckIcon className="w-4 h-4 text-primary mr-2" />
              Easily accessed
            </ListItem>
            <ListItem>
              <CheckIcon className="w-4 h-4 text-primary mr-2" />
              Beautifully designed interface
            </ListItem>
            <ListItem>
              <CheckIcon className="w-4 h-4 text-primary mr-2" />
              Highly informational
            </ListItem>
          </List>
          <>
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
                  Get Harmony <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </SignInButton>
            </SignedOut>
          </>
        </div>
      </section>
      <section
        id="reasons"
        className="flex items-center justify-center bg-orange-300 dark:bg-background"
      >
        <div className="pt-16 mx-auto w-full container px-4 lg:px-20 flex flex-col items-center justify-center pb-10 md:py-16 mb-10 md:pb-0">
          <Header
            title="Reasons"
            subtitle="Tired of not getting updated on your favorite topics ?"
          />
          <Reasons />
        </div>
      </section>
      <section id="faq">
        <div className="mx-auto w-full container px-4 lg:px-20 flex flex-col md:flex-row md:justify-between pt-12 pb-24 md:py-20">
          <Header
            title="FAQ"
            subtitle="Frequently Asked Questions"
            className="text-left"
          />
          <Faq />
        </div>
      </section>
      <section id="plans" className="flex items-center justify-center">
        <div className="pt-16 mx-auto w-full container px-4 lg:px-20 flex flex-col items-center justify-center pb-10 md:pb-0">
          <Header title="Plans" subtitle="Become a participent" />
          <Plans />
        </div>
      </section>
    </div>
  );
}
