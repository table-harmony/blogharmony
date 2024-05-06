import { cn } from "@/lib/utils";
import React from "react";

interface ListProps {
  className?: string;
  children: React.ReactNode;
}

export function List({ className, children }: ListProps) {
  return (
    <ul className={cn("leading-relaxed space-y-1.5", className)}>{children}</ul>
  );
}

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
}

export function ListItem({ className, children }: ListItemProps) {
  return <li className={cn("flex items-center", className)}>{children}</li>;
}
