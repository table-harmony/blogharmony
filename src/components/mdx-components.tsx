import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "@/hooks/use-mdx";

const components = {
  Image,
  Link,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
