import Link from "next/link";

export default function LedeSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Picture a Tuesday morning in a small South Florida office. The phone rings with new client requests,
        invoices need attention, and payroll is due by end of day. But the real stress point sits on the
        screen: a blinking cursor on a blank Google Business Profile, an empty LinkedIn page, and an untouched
        blog draft that’s been on the “to-do” list for three months. Every plan to publish a social update or
        email campaign gets pushed aside for urgent client work. The business owner knows the stakes, a
        competitor with a bigger budget is ranking first in local search, and the inbox is quieter than last
        quarter. It’s not for lack of ideas. It’s the bottleneck of writing and publishing content with no
        creative team, no copywriter, and no time to spare.</p>
      <p className="text-md text-white shadow-text pt-3">
        Intelligent Content Generation changes that equation. Instead of wasting hours on a single caption or
        shelling out thousands each month for an agency retainer, small businesses can now generate on-brand,
        localized&nbsp;<Link id="use-cases-marketing-intelligent-content-generation-lede-seo-blog-and-article-generation" href="/use-cases/marketing/seo-blog-and-article-generation" className="text-[#C83803] hover:underline">SEO articles</Link>, social posts, and email campaigns in under a minute, without leaving their
        existing workflows. This isn’t generic, one-size-fits-all automation. It’s a system that drafts,
        adapts, and schedules content tailored to your niche, your service areas, and your real customers, so
        your brand never goes silent online. No more blank-page paralysis. No more missing the window for a
        local event or waiting weeks for an outsourced copywriter to deliver.</p>
      <p className="text-md text-white shadow-text pt-3">
        What this settles for you: your lean team can look and operate like a full-scale agency, publishing
        consistent, high-quality marketing assets that drive local leads, without breaking the bank or burning
        out. You stay focused on what brings in revenue, while your digital presence keeps working behind the
        scenes. For South Florida small businesses, this is how you finally break the cycle of abandoned
        content calendars, overpriced agency contracts, and missed growth opportunities, without hiring
        another employee or sacrificing service to your paying clients.</p>
      <p className="text-md text-white shadow-text pt-3">For a shorter overview, read <Link id="use-cases-marketing-intelligent-content-generation-lede-blog" href="/blog/marketing/content-creation-workflow/intelligent-content-generation-for-miami-how-to-save-time-and-scale-without-extra-hires" className="text-[#C83803] hover:underline">Content Generation Without New Hires</Link> on our blog.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="why-small-businesses-are-losing-time-and-leads-to-manual-content-creation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Small Businesses Are Losing Time and Leads to Manual Content Creation
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
              <h2 id="why-small-businesses-are-losing-time-and-leads-to-manual-content-creation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Small Businesses Are Losing Time and Leads to Manual Content Creation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
