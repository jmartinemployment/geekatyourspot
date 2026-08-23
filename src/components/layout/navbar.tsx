"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { gtmClickId, gtmLinkIdFromHref } from "@/lib/gtm/link-id";

type MenuSection = "use-cases" | "blog" | "tools";

/**
 * Every href below is hand-maintained and points at a route that exists in
 * src/app. When you add a page, add its link here by hand.
 */

function MenuHeading({
  href,
  label,
  onNavigate,
}: Readonly<{ href: string; label: string; onNavigate: () => void }>): React.JSX.Element {
  return (
    <Link
      href={href}
      id={gtmLinkIdFromHref(href, "nav-dept")}
      className="block text-base font-bold leading-tight text-black no-underline hover:text-[#8C2703] sm:text-lg"
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}

function MenuLink({
  href,
  label,
  onNavigate,
}: Readonly<{ href: string; label: string; onNavigate: () => void }>): React.JSX.Element {
  return (
    <li>
      <Link
        href={href}
        id={gtmLinkIdFromHref(href, "nav")}
        className="block text-xs leading-snug text-black no-underline hover:text-[#8C2703] sm:text-sm"
        onClick={onNavigate}
      >
        {label}
      </Link>
    </li>
  );
}

const COLUMN_CLASS =
  "min-w-0 px-0 md:px-6 md:first:pl-0 md:last:pr-0 [&:not(:first-child)]:mt-4 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-black/10 [&:not(:first-child)]:pt-4 md:[&:not(:first-child)]:mt-0 md:[&:not(:first-child)]:border-t-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pt-0";

const LIST_CLASS = "m-0 mt-2 list-none space-y-1 p-0";

export default function Navbar(): React.JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<MenuSection>("use-cases");

  function closeSidebar(): void {
    setSidebarOpen(false);
  }

  function sectionButtonClass(section: MenuSection): string {
    return `cursor-pointer border-0 bg-transparent p-0 text-base font-semibold no-underline sm:text-lg ${
      activeSection === section ? "text-[#8C2703]" : "text-black hover:text-[#8C2703]"
    }`;
  }

  return (
    <header className="sticky top-0 z-[60] bg-white shadow-sm">
      <div className="container">
        <nav className="w-full" aria-label="Site">
          <div className="flex h-16 w-full items-center">
            <Link href="/" id={gtmLinkIdFromHref("/", "logo")} className="flex items-center">
              <Image
                src="/images/GeekAtYourSpot.svg"
                alt="Geek @ Your Spot logo"
                width={116}
                height={48}
                priority
              />
            </Link>
            <button
              id={gtmClickId(["nav", "menu-toggle"])}
              type="button"
              className="ml-auto cursor-pointer rounded border-0 bg-transparent p-2"
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
              aria-expanded={sidebarOpen}
              aria-controls="site-menu"
              onClick={() => setSidebarOpen((open) => !open)}
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                {sidebarOpen ? (
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent
          id="site-menu"
          side="top"
          showCloseButton={false}
          className="!inset-x-0 !top-16 !bottom-auto !h-auto !w-full !max-w-none gap-0 overflow-hidden border-x-0 border-b border-t-0 bg-white p-0 text-foreground shadow-md"
        >
          <SheetTitle className="sr-only">Site menu</SheetTitle>

          <nav className="container overflow-hidden py-4 sm:py-5">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-black/10 pb-3 sm:gap-x-8 sm:pb-4">
              <Link
                href="/"
                id={gtmLinkIdFromHref("/", "nav")}
                className="text-base font-semibold text-black no-underline hover:text-[#8C2703] sm:text-lg"
                onClick={closeSidebar}
              >
                Home
              </Link>
              <button
                type="button"
                id={gtmClickId(["nav", "use-cases"])}
                className={sectionButtonClass("use-cases")}
                onClick={() => setActiveSection("use-cases")}
              >
                Use Cases
              </button>
              <button
                type="button"
                id={gtmClickId(["nav", "blog"])}
                className={sectionButtonClass("blog")}
                onClick={() => setActiveSection("blog")}
              >
                Blog
              </button>
              <button
                type="button"
                id={gtmClickId(["nav", "tools"])}
                className={sectionButtonClass("tools")}
                onClick={() => setActiveSection("tools")}
              >
                Tools
              </button>
            </div>

            {activeSection === "use-cases" && (
              <div className="mt-4 grid grid-cols-1 md:mt-5 md:grid-cols-2">
                <div className={COLUMN_CLASS}>
                  <MenuHeading href="/use-cases/marketing" label="Marketing" onNavigate={closeSidebar} />
                  <ul className={LIST_CLASS}>
                    <MenuLink
                      href="/use-cases/marketing/ai-marketing-systems"
                      label="AI Marketing Systems"
                      onNavigate={closeSidebar}
                    />
                    <MenuLink
                      href="/use-cases/marketing/intelligent-lead-capture-pipeline"
                      label="Intelligent Lead Capture Pipeline"
                      onNavigate={closeSidebar}
                    />
                    <MenuLink
                      href="/use-cases/marketing/ai-content-creation-workflow"
                      label="AI Content Creation Workflow"
                      onNavigate={closeSidebar}
                    />
                    <MenuLink
                      href="/use-cases/marketing/ai-content-repurposing"
                      label="AI Content Repurposing"
                      onNavigate={closeSidebar}
                    />
                  </ul>
                </div>

                <div className={COLUMN_CLASS}>
                  <MenuHeading href="/use-cases/accounting" label="Accounting" onNavigate={closeSidebar} />
                  <ul className={LIST_CLASS}>
                    <MenuLink
                      href="/use-cases/accounting/accounts-payable/automated-accounts-payable"
                      label="Automated Accounts Payable"
                      onNavigate={closeSidebar}
                    />
                    <MenuLink
                      href="/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting"
                      label="Automated Cash Flow Forecasting"
                      onNavigate={closeSidebar}
                    />
                    <MenuLink
                      href="/use-cases/accounting/tax-compliance-regulations"
                      label="Tax Compliance &amp; Regulations"
                      onNavigate={closeSidebar}
                    />
                  </ul>
                </div>
              </div>
            )}

            {activeSection === "blog" && (
              <div className="mt-4 grid grid-cols-1 md:mt-5 md:grid-cols-2">
                <div className={COLUMN_CLASS}>
                  <MenuHeading href="/blog" label="Marketing" onNavigate={closeSidebar} />
                  <ul className={LIST_CLASS}>
                    <MenuLink
                      href="/blog/marketing/how-ai-transforms-ad-spend-4-key-strategies"
                      label="How AI Transforms Ad Spend: 4 Key Strategies"
                      onNavigate={closeSidebar}
                    />
                    <MenuLink
                      href="/blog/marketing/how-to-streamline-your-content-workflow-with-ai"
                      label="How to Streamline Your Content Workflow with AI"
                      onNavigate={closeSidebar}
                    />
                    <MenuLink
                      href="/blog/marketing/how-ai-marketing-systems-transform-small-business-growth"
                      label="How AI Marketing Systems Transform Small Business Growth"
                      onNavigate={closeSidebar}
                    />
                    <MenuLink
                      href="/blog/marketing/why-your-b2b-sales-need-an-intelligent-lead-capture-pipeline"
                      label="Why Your B2B Sales Need an Intelligent Lead Capture Pipeline"
                      onNavigate={closeSidebar}
                    />
                    <MenuLink
                      href="/blog/marketing/unlocking-the-power-of-ai-for-content-repurposing"
                      label="Unlocking the Power of AI for Content Repurposing"
                      onNavigate={closeSidebar}
                    />
                  </ul>
                </div>

                <div className={COLUMN_CLASS}>
                  <MenuHeading href="/blog" label="Accounting" onNavigate={closeSidebar} />
                  <ul className={LIST_CLASS}>
                    <MenuLink
                      href="/blog/accounting/how-ai-is-revolutionizing-tax-compliance-what-you-need-to-know"
                      label="How AI is Revolutionizing Tax Compliance"
                      onNavigate={closeSidebar}
                    />
                    <MenuLink
                      href="/blog/accounting/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai"
                      label="Unlocking the Secrets to Effective Cash Flow Forecasting with AI"
                      onNavigate={closeSidebar}
                    />
                  </ul>
                </div>
              </div>
            )}

            {activeSection === "tools" && (
              <div className="mt-4 grid grid-cols-1 md:mt-5 md:grid-cols-2">
                <div className={COLUMN_CLASS}>
                  <MenuHeading href="/tools/marketing" label="Marketing" onNavigate={closeSidebar} />
                  <ul className={`${LIST_CLASS} columns-2 gap-x-4`}>
                    <MenuLink href="/tools/marketing/active-campaign" label="ActiveCampaign" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/adobe-sensei" label="Adobe Sensei" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/canva" label="Canva" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/chatgpt" label="ChatGPT" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/grammarly" label="Grammarly" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/hubspot" label="HubSpot" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/jasper-ai" label="Jasper AI" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/airia" label="Airia" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/contentstudio" label="ContentStudio" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/copyai" label="Copy.ai" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/makecom" label="Make.com" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/zapier" label="Zapier" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/mailchimp" label="Mailchimp" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/marketo" label="Marketo" onNavigate={closeSidebar} />
                    <MenuLink href="/tools/marketing/openai-gpt-4" label="OpenAI GPT-4" onNavigate={closeSidebar} />
                    <MenuLink
                      href="/tools/marketing/salesforce-pardot"
                      label="Salesforce Pardot"
                      onNavigate={closeSidebar}
                    />
                  </ul>
                </div>

                <div className={COLUMN_CLASS}>
                  <MenuHeading href="/tools/accounting" label="Accounting" onNavigate={closeSidebar} />
                  <ul className={LIST_CLASS}>
                    <MenuLink href="/tools/accounting/avalara" label="Avalara" onNavigate={closeSidebar} />
                  </ul>
                </div>
              </div>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
