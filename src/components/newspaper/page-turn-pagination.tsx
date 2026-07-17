"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageTurnPaginationProps = Readonly<{
  currentPage: number;
  totalPages: number;
  children: ReactNode;
}>;

const TURN_DURATION_MS = 520;

function pageHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog?page=${page}`;
}

export function PageTurnPagination({
  currentPage,
  totalPages,
  children,
}: PageTurnPaginationProps): React.JSX.Element {
  const router = useRouter();
  const [turning, setTurning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const prevPageRef = useRef(currentPage);

  useLayoutEffect(() => {
    if (prevPageRef.current === currentPage) {
      return;
    }
    prevPageRef.current = currentPage;
    setTurning(false);
    setDirection(null);
  }, [currentPage]);

  useEffect(() => {
    if (!turning) {
      return;
    }
    const fallbackId = window.setTimeout(() => {
      setTurning(false);
      setDirection(null);
    }, 4000);
    return () => window.clearTimeout(fallbackId);
  }, [turning, currentPage]);

  const turnToPage = useCallback(
    (targetPage: number, turnDirection: "next" | "prev") => {
      if (turning || targetPage < 1 || targetPage > totalPages || targetPage === currentPage) {
        return;
      }

      setDirection(turnDirection);
      setTurning(true);

      window.setTimeout(() => {
        router.push(pageHref(targetPage));
      }, TURN_DURATION_MS);
    },
    [currentPage, router, totalPages, turning],
  );

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="newspaper-page-shell relative min-h-[70vh] pb-16">
      <div
        className={cn(
          "newspaper-page-sheet origin-bottom-right",
          turning && direction === "next" && "newspaper-page-sheet--turn-next",
          turning && direction === "prev" && "newspaper-page-sheet--turn-prev",
        )}
      >
        {children}
      </div>

      {totalPages > 1 && (
        <nav className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex h-20 items-end justify-between px-1" aria-label="Newspaper pagination">
          {hasPrev ? (
            <button
              type="button"
              aria-label={`Turn to page ${currentPage - 1}`}
              disabled={turning}
              onClick={() => turnToPage(currentPage - 1, "prev")}
              className="newspaper-page-corner newspaper-page-corner--prev pointer-events-auto"
            >
              <span className="sr-only">Previous page</span>
            </button>
          ) : (
            <span aria-hidden="true" className="w-16" />
          )}

          <p className="mb-2 font-sans text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
            Page {currentPage} / {totalPages}
          </p>

          {hasNext ? (
            <button
              type="button"
              aria-label={`Turn to page ${currentPage + 1}`}
              disabled={turning}
              onClick={() => turnToPage(currentPage + 1, "next")}
              className="newspaper-page-corner newspaper-page-corner--next pointer-events-auto"
            >
              <span className="sr-only">Next page</span>
            </button>
          ) : (
            <span aria-hidden="true" className="w-16" />
          )}
        </nav>
      )}
    </div>
  );
}
