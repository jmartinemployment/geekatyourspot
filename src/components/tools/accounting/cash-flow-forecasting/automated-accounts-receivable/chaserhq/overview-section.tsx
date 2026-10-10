export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, small business owners in Miami-Dade, Broward, and West Palm Beach counties face the daunting
        task of managing accounts receivable manually. Hours are spent pouring over spreadsheets, sending follow-up
        emails, and making uncomfortable phone calls to clients about overdue invoices. This process not only
        consumes valuable time but also increases the likelihood of errors and strained client relationships. As
        businesses grow, these manual methods become increasingly unsustainable, risking cash flow instability and
        stifling potential growth opportunities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual invoicing and payment tracking often lead to delayed payments, affecting the cash flow that small
        businesses critically depend on. The stress of unpredictable income can prevent business owners from making
        confident decisions about hiring, investments, or expansion. Moreover, the administrative burden pulls focus
        from core business activities, potentially jeopardizing service quality and customer satisfaction. This
        isn&#39;t just an operational inconvenience; it&#39;s a significant barrier to sustained business growth and
        financial health.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated Accounts Receivable solutions, like those offered by Chaser, transform this outdated process. By
        automating invoicing, reminders, and payment tracking, businesses can ensure more timely payments and reduce
        the time spent on collections by up to 50%. Tools like Chaser not only improve cash flow predictability but
        also enhance customer relationships by maintaining consistent and professional communication. This
        automation allows small businesses to focus on growth and service excellence, rather than being bogged down
        by collection tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        In the competitive landscape of South Florida, leveraging Automated Accounts Receivable can be a
        game-changer for small businesses. It provides a clear, real-time view of expected payments, allowing for
        better financial planning and resource allocation. With less time spent on manual tasks and more reliable
        cash flow, businesses can confidently navigate challenges and seize opportunities, ensuring resilience and
        growth in an ever-changing market.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
