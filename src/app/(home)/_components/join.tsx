import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function JoinCard() {
  return (
    <Card className="text-center min-w-fit border dark:bg-gradient-to-bl bg-background/55 dark:bg-transparent dark:from-white/10 dark:to-transparent dark:backdrop-blur-sm dark:border-white/20 p-8 md:p-12 z-20">
      <CardHeader>
        <CardTitle>Get notified at all times</CardTitle>
      </CardHeader>
      <CardContent>{siteConfig.description}</CardContent>
      <CardFooter className="justify-center">
        <Button className="md:w-64 rounded-full" asChild>
          <Link href="/#plans">
            Our plans
            <ArrowRightIcon className="ml-2 h-4 w-4 hidden md:block" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
