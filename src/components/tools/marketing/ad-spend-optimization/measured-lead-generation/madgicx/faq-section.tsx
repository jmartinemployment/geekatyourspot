export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is Madgicx?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Madgicx is an AI-powered platform that helps manage and optimize Meta advertising, including Facebook and
              Instagram ads. It offers tools for campaign automation, audience targeting, creative generation, tracking,
              analytics, and reporting.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Madgicx replace Meta Ads Manager?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No. Madgicx works as an added software layer on top of Meta Ads Manager. It brings extra targeting,
              automation, and analytics features to help advertisers manage campaigns and make decisions about budgets,
              audiences, and creatives.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is Madgicx only an analytics tool?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No. While reporting is one part of Madgicx, the platform also includes tools for ad optimization, tracking,
              automation, targeting, creative, and ad management.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is Madgicx suitable for small businesses?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Madgicx states that its AI Marketer can serve businesses from small e-commerce companies to large agencies.
              However, it notes that the platform is most suitable for advertisers spending at least $2,500 per month on
              Facebook ads. Smaller budgets or limited advertising experience may make it harder to achieve results. This
              is guidance, not a strict minimum.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which platforms does One-Click Report support?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
              <li>Meta Ads</li>
              <li>Google Ads</li>
              <li>Google Analytics 4</li>
              <li>Shopify</li>
              <li>Klaviyo</li>
              <li>TikTok</li>
            </ul>
            <p className="text-base text-white shadow-text pt-3">
              These are reporting integrations. This list does not mean Madgicx offers the same campaign-management
              features for every platform.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
