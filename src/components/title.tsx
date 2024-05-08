import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function Title({ title, subtitle, className }: HeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-4", className)}>
      <p className="text-primary">{title}</p>
      <h2 className="text-2xl md:text-3xl font-bold">{subtitle}</h2>
    </div>
  );
}
