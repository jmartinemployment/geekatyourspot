export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, Maria Sanchez, owner of a small graphic design firm in Miami, finds herself drowning in unpaid
        invoices. Her clients, many of whom are reliable local businesses, often delay payments, leaving Maria to
        juggle her cash flow. The tedious process of manually following up on each invoice consumes hours she could
        spend growing her business. As the end of the month approaches, Maria faces the daunting task of reconciling
        payments, sending reminders, and worrying about her bottom line.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses like Maria&#39;s, managing accounts receivable can be a significant drain on resources.
        In Miami-Dade, Broward, and West Palm Beach counties, many owners share Maria&#39;s frustration. They
        struggle with manual invoicing, tracking who has paid and who hasn&#39;t, and the time-consuming follow-up
        reminders. These tasks not only eat into potential growth time but also increase the risk of errors and
        missed payments, which can severely impact cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Enter automated accounts receivable solutions. By automating the invoicing process, businesses can
        drastically reduce the time spent on these administrative tasks. Solutions like those offered by BILL allow
        for the automatic generation and sending of invoices, payment tracking, and even automated payment
        reminders. This not only frees up valuable time but also improves the accuracy and reliability of financial
        records. For businesses in South Florida, adopting such technology means not just saving time, but also
        improving cash flow stability and customer relations.</p>
      <p className="text-md text-white shadow-text pt-3">
        With automated accounts receivable, Maria no longer spends her evenings chasing payments. Instead, she
        relies on a system that sends out invoices, tracks payments, and nudges her clients automatically. This
        transformation allows her to focus on creative work and business expansion, confident that her cash flow is
        under control. For small business owners across the region, embracing automation in accounts receivable is
        not just a convenience; it’s a strategic move towards sustainable growth.</p>
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
