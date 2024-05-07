import { CheckIcon, XIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List, ListItem } from "@/components/list";

export function Reasons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full py-8 md:py-16 font-base">
      <Card className="border border-red-600 dark:border-red-300 rounded-md p-6 bg-red-400/5">
        <CardHeader>
          <CardTitle className="text-red-600 dark:text-red-300">
            Without BlogHarmony
          </CardTitle>
        </CardHeader>
        <CardContent>
          <List>
            <ListItem>
              <XIcon className="w-4 h-4 text-red-600 dark:text-red-300 mr-2" />
              Easily accessed
            </ListItem>
            <ListItem>
              <XIcon className="w-4 h-4 text-red-600 dark:text-red-300 mr-2" />
              Beautifully designed interface
            </ListItem>
            <ListItem>
              <XIcon className="w-4 h-4 text-red-600 dark:text-red-300 mr-2" />
              Highly informational
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <Card className="border border-green-600 rounded-md p-6 bg-green-400/5">
        <CardHeader>
          <CardTitle className="text-green-600">With BlogHarmony</CardTitle>
        </CardHeader>
        <CardContent>
          <List>
            <ListItem>
              <CheckIcon className="w-4 h-4 text-green-600 dark:text-green-300 mr-2" />
              Stay updated
            </ListItem>
            <ListItem>
              <CheckIcon className="w-4 h-4 text-green-600 dark:text-green-300 mr-2" />
              Good community
            </ListItem>
            <ListItem>
              <CheckIcon className="w-4 h-4 text-green-600 dark:text-green-300 mr-2" />
              Very informational
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
}
