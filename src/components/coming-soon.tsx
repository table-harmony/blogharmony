import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComingSoon() {
  return (
    <Card className="my-20 border-2 border-dotted rounded-md p-6 shadow-none">
      <CardHeader>
        <CardTitle>Coming soon!!!</CardTitle>
      </CardHeader>
      <CardContent>We are currently working on this.</CardContent>
    </Card>
  );
}
