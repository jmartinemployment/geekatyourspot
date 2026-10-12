import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In South Florida, the business landscape is a tapestry of complex and changing laws. Imagine running a
        thriving small business in Miami, only to discover that a simple service call across county lines into
        Fort Lauderdale has unwittingly triggered an entirely new set of tax obligations. This isn&#39;t just a
        hypothetical scenario—it&#39;s a daily reality for many businesses in Miami-Dade, Broward, and Palm
        Beach counties. The intricate web of federal tax changes, state sales tax rules, and localized county or
        municipal taxes creates a compliance nightmare that small businesses often find themselves ill-equipped
        to handle. Without a dedicated tax department or corporate compliance officers, these businesses are
        forced to rely on manual tracking or outdated CPA reviews.</p>
      <p className="text-md text-white shadow-text pt-3">
        But there&#39;s a better way forward. Are you running a South Florida business, or a multi-county
        compliance gamble? In Miami, Broward, and Palm Beach, crossing a street can change your tax rate. If
        you&#39;re relying on your calendar or a spreadsheet to track shifting tax laws, you aren’t managing a
        business—you’re waiting for an audit. We integrate real-time tax automation that updates in the cloud
        the second a law changes, keeping your business perfectly compliant, completely automated, and entirely
        audit-proof across every zip code you serve.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida,&nbsp;<GlossaryLink slug="tax-compliance">tax
        compliance</GlossaryLink>&nbsp;is not just a challenge—it&#39;s a constant threat to their operations.
        The lack of dedicated resources means that many rely on manual processes that are prone to errors and
        oversight. This is where Geek @ Your Spot steps in, offering intelligent tax solutions that transcend
        traditional methods. By leveraging AI-driven automation, we provide businesses with the tools to
        seamlessly navigate these complex and shifting tax landscapes. Our solutions update in real-time,
        ensuring that your business remains compliant, no matter how often the laws change.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="navigating-south-florida-s-tax-maze" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Navigating South Florida&#39;s Tax Maze
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="navigating-south-florida-s-tax-maze" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Navigating South Florida&#39;s Tax Maze
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
