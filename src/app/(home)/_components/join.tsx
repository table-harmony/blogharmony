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
    <Card className="rounded-md px-4 lg:px-12 py-8 md:py-12 space-y-2 text-center">
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
  );
}
