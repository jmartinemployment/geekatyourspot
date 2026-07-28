import type { Metadata } from "next";

import { NewspaperMasthead } from "@/components/newspaper/newspaper-masthead";
import { NewspaperFrontGrid } from "@/components/newspaper/newspaper-front-grid";
import { PageTurnPagination } from "@/components/newspaper/page-turn-pagination";
import { NEWSPAPER_TOTAL_PAGES, sampleNewspaperPage } from "./pagination";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const data = sampleNewspaperPage;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
      <NewspaperMasthead page={data.page} totalPages={NEWSPAPER_TOTAL_PAGES} />
      <PageTurnPagination currentPage={data.page} totalPages={NEWSPAPER_TOTAL_PAGES}>
        <NewspaperFrontGrid data={data} />
      </PageTurnPagination>
    </div>
  );
}
