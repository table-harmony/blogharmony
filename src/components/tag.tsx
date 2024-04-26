import { Badge } from "@/components/ui/badge";

interface TagProps {
  tag: string;
  count?: number;
}
export function Tag({ tag, count }: TagProps) {
  return (
    <Badge className="no-underline rounded-md" variant="secondary">
      {tag} {count ? `(${count})` : null}
    </Badge>
  );
}
