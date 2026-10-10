export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Imagine a small business owner in Miami-Dade, struggling with an administrative nightmare. Each month, they
        face a mountain of unpaid invoices, unsure of when the cash will flow in. The manual process of following up
        on these invoices eats into valuable hours that could be better spent on growing the business. Errors creep
        in, leading to delayed payments and strained customer relationships. It&#39;s a familiar scenario for many
        small businesses in West Palm Beach and Broward County, where time and resources are often stretched thin.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated Accounts Receivable offers a lifeline to these businesses. By automating the tedious and
        error-prone tasks of invoice tracking and follow-ups, companies can transform their cash flow management.
        Tools like Upflow integrate seamlessly with existing systems, providing real-time insights and proactive
        reminders that ensure invoices are paid on time. This reduces the Days Sales Outstanding (DSO) and improves
        cash flow predictability, allowing businesses to plan and invest with confidence.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in South Florida, adopting a solution like Upflow can mean the difference between
        financial uncertainty and stability. By leveraging automated accounts receivable, these businesses can
        reduce manual workloads, minimize errors, and enhance customer satisfaction through timely and consistent
        communication. The result is not just time saved, but a more reliable and robust financial operation that
        positions them for growth. Automated Accounts Receivable isn&#39;t just a tool; it&#39;s a strategic
        advantage.</p>
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
