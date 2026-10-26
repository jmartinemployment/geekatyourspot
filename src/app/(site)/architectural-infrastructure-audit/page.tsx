import type { Metadata } from "next";
import { SHARE_IMAGE } from "@/lib/seo/share-image";
import { BreadcrumbTrail } from "@/components/shared/breadcrumb-trail";

const TITLE = "Architectural Infrastructure Audit";
const DESCRIPTION =
    "Request an Architectural Infrastructure Audit of your ledger, payables, receivables, forecasting, sales tax, and payroll setup.";
const CANONICAL = "/architectural-infrastructure-audit";

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            type: 'website',
            title: `${TITLE} | Geek @ Your Spot LLC`,
            description: DESCRIPTION,
            url: CANONICAL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${TITLE} | Geek @ Your Spot LLC`,
            description: DESCRIPTION,
            images: [SHARE_IMAGE],
        },
        // The form has no fields yet, so the page stays out of search results until it does.
        robots: { index: false, follow: true },
    };
};

export default function Page() {
    return (
        <>
            <section className="min-h-screen bg-[#0B162A] text-white py-5 lg:hidden">
                <div className="container">
                    <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_1fr] place-items-center">
                      <BreadcrumbTrail current="Architectural Infrastructure Audit" withJsonLd />
                        <div className="col-span-full w-full">
                            <h1 className="font-black font-(--font-sora) text-[9vw] leading-[0.95] text-white shadow-text sm:text-6xl md:text-7xl">
                                Architectural Infrastructure Audit
                            </h1>
                            <p className="pt-3 text-xl text-white shadow-text">
                                We review your ledger, payables, receivables, forecasting, sales tax, and payroll setup,
                                and we show you where your books have turned into a black box.</p>
                            <form id="architectural-infrastructure-audit-form-mobile" className="mt-6 min-h-[50vh] w-full rounded bg-white shadow-box"></form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-screen bg-[#0B162A] text-white py-5 hidden lg:block">
                <div className="container">
                    <div className="grid min-h-screen grid-cols-12 grid-rows-[auto_1fr] place-items-center gap-x-4">
                      <BreadcrumbTrail current="Architectural Infrastructure Audit" />
                        <div className="col-span-7">
                            <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text lg:text-[4.0rem]">
                                Architectural Infrastructure Audit
                            </h1>
                            <p className="pt-3 text-2xl text-white shadow-text">
                                We review your ledger, payables, receivables, forecasting, sales tax, and payroll setup,
                                and we show you where your books have turned into a black box.</p>
                        </div>
                        <div className="col-span-5 w-full">
                            <form id="architectural-infrastructure-audit-form-lg" className="min-h-[60vh] w-full rounded bg-white shadow-box"></form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
