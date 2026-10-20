"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const SchedulerWidget = dynamic(() => import("@/components/shared/scheduler/scheduler-widget"), {
  ssr: false,
  loading: () => <SchedulerPlaceholder />,
});

/** Holds the calendar's space until the widget arrives, so nothing below it moves. */
function SchedulerPlaceholder(): React.JSX.Element {
  return (
    <div className="min-h-[22rem] w-full lg:col-span-4 2xl:col-span-3" aria-hidden="true" />
  );
}

/**
 * Starts loading the booking widget when the scheduler section comes within 600px of the
 * viewport, or straight away when the page opens on #consultationAppointment2xl.
 */
export function SchedulerLoader(): React.JSX.Element {
  const marker = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const element = marker.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  if (near) return <SchedulerWidget />;

  return (
    <div ref={marker} className="min-h-[22rem] w-full lg:col-span-4 2xl:col-span-3" aria-hidden="true" />
  );
}
