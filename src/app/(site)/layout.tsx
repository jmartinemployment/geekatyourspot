import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

import { GtmClickTracker } from "@/components/analytics/gtm-click-tracker";
import Footer from "@/components/layout/footer";
// import Navbar from "@/components/layout/navbar";
// import { siteSchemaGraph } from "@/components/layout/site-schema";
// import { JsonLd } from "@/components/seo/json-ld";
import { SchedulerShell } from "@/components/scheduler/scheduler-shell";

const GTM_ID = "GTM-K5CXSQRP";

type SiteLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function SiteLayout({ children }: SiteLayoutProps): React.JSX.Element {
  return <>{children}</>;
}
