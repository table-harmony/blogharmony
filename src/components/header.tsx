import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function Header({ title, subtitle, className }: HeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-4 text-center", className)}>
      <p className="text-primary dark:text-purple-300">{title}</p>
      <h2 className="text-2xl md:text-3xl font-bold">{subtitle}</h2>
    </div>
  );
}
