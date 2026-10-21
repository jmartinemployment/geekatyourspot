export default function WhenToUseSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">ActiveCampaign is ideal when manual lead scoring has become a bottleneck. If your sales team spends hours sorting spreadsheets, relies on gut feel to rank prospects, or routinely misses high-potential leads, its AI-driven automation replaces subjective guesswork with data-backed prioritization and frees reps to engage rather than evaluate.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Small to medium-sized businesses with lean marketing teams and growing lead volume benefit most. Whether you are a services firm handling inquiries from website forms, email, social, and referrals, or an e-commerce brand tracking product-page views and cart activity, ActiveCampaign consolidates those signals into a centralized CRM view so every lead is scored consistently and routed to the right owner.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Compared to enterprise suites such as Salesforce Pardot or Marketo that require heavy administration, or point solutions that only score a single channel, ActiveCampaign strikes a balance of power and usability. Its autonomous marketing, real-time behavioral tracking, and 1,000+ integrations deliver enterprise-grade intelligence without enterprise overhead, making it a pragmatic choice for teams that need accuracy today without a large ops burden.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">In short, choose ActiveCampaign when you need faster response times, higher conversion rates, and smarter resource allocation. If your goal is to turn fragmented lead data into a reliable pipeline where sales focuses only on prospects most likely to convert, Geek @ Your Spot LLC can tailor the scoring model to your business goals and ensure adoption sticks.</p>
    </>
  );
  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use">When to Use</h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="when-to-use-lg">When to Use</h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
