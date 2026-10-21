import type { ReactNode } from "react";
import Link from "next/link";

interface GlossaryLinkProps {
  slug: string;
  children: ReactNode;
  className?: string;
}

export function GlossaryLink({
  slug,
  children,
  className = "text-[#C83803] hover:underline",
}: GlossaryLinkProps) {
  return (
    <Link href={`/glossary/${slug}`} className={className}>
      {children}
    </Link>
  );
}
