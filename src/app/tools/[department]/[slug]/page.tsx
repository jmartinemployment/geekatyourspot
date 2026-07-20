import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { listSlugs, readEntry } from "@/lib/content-writer/content";
import { ContentPage } from "@/components/content-writer/content-page";

export const dynamicParams = false;

export function generateStaticParams() {
  return listSlugs("tools").flatMap((slug) => {
    const entry = readEntry("tools", slug);
    return entry ? [{ department: entry.department, slug: entry.slug }] : [];
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ department: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = readEntry("tools", slug);
  if (!entry) return {};
  return { title: entry.title, description: entry.description };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ department: string; slug: string }>;
}) {
  const { department, slug } = await params;
  const entry = readEntry("tools", slug);
  if (!entry || entry.department !== department) notFound();

  return <ContentPage entry={entry} />;
}
