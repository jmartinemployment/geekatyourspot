"use client";

import { Popover } from "@base-ui/react/popover";

/** One piece of a badge's source note; a piece with an href is rendered as a link. */
export type SourceSegment = { text: string; href?: string };

interface StatBadgeProps {
  id: string;
  value: string;
  label: string;
  /** The badge box, which is the tooltip's trigger. */
  className: string;
  valueClassName: string;
  labelClassName: string;
  /** The source note shown on hover or tap, and read to screen readers as the badge's description. */
  source: SourceSegment[];
}

/**
 * A home page statistic with its source in a tooltip. The badge opens on hover and on tap, so the
 * source is reachable on a phone. The same note is in the page as a visually hidden description of
 * the button, so crawlers and screen readers get the source without opening the popup; that copy
 * carries no links, so hidden links never take keyboard focus.
 */
export function StatBadge({ id, value, label, className, valueClassName, labelClassName, source }: StatBadgeProps) {
  const sourceId = `${id}-source`;
  return (
    <Popover.Root>
      <Popover.Trigger id={id} openOnHover delay={150} closeDelay={200} aria-describedby={sourceId} className={className}>
        <span className={valueClassName}>{value}</span>
        <span className={labelClassName}>{label}</span>
      </Popover.Trigger>
      <span id={sourceId} className="sr-only">
        {source.map((segment) => segment.text).join("")}
      </span>
      <Popover.Portal>
        <Popover.Positioner side="bottom" sideOffset={8} className="isolate z-50">
          <Popover.Popup id={`${id}-tooltip`} className="z-50 w-72 max-w-[calc(100vw-2rem)] rounded-sm border border-white/10 bg-[#0B162A] p-4 text-left text-sm font-normal normal-case tracking-normal text-white shadow-box outline-hidden data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0">
            {source.map((segment, index) =>
              segment.href ? (
                <a
                  key={index}
                  href={segment.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#C83803] hover:underline"
                >
                  {segment.text}
                </a>
              ) : (
                <span key={index}>{segment.text}</span>
              )
            )}
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
