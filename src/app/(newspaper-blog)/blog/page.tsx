import type { Metadata } from "next";

import { NewspaperMasthead } from "@/components/newspaper/newspaper-masthead";
import { NewspaperFrontGrid } from "@/components/newspaper/newspaper-front-grid";
import { PageTurnPagination } from "@/components/newspaper/page-turn-pagination";
import { getNewspaperPage, getTotalPages } from "./pagination";

export const metadata: Metadata = {
  title: "Blog",
  alternates: { canonical: "/blog" },
};

type BlogPageProps = Readonly<{
  searchParams: Promise<{ page?: string }>;
}>;

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page } = await searchParams;
  const requestedPage = Number.parseInt(page ?? "1", 10);
  const data = getNewspaperPage(Number.isNaN(requestedPage) ? 1 : requestedPage);
  const totalPages = getTotalPages();

  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
      <NewspaperMasthead page={data.page} totalPages={totalPages} />
      <PageTurnPagination currentPage={data.page} totalPages={totalPages}>
        <NewspaperFrontGrid data={data} />
      </PageTurnPagination>
    </div>
  );
}
