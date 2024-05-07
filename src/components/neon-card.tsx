import { cn } from "@/lib/utils";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  gradient: string;
}

export function NeonCard({ children, className, gradient }: NeonCardProps) {
  return (
    <div className={cn("relative", className)}>
      <span
        className={cn(
          "absolute -inset-6  opacity-30 rounded-3xl blur-3xl scale-x-[-1] rotate-3",
          gradient
        )}
      ></span>
      {children}
    </div>
  );
}
