import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In a quiet office in Miami-Dade, the clock ticks past 6 PM. The accounts receivable team is still hunched
        over their desks, manually entering data into spreadsheets. Despite their best efforts, errors creep in,
        and payment delays are all too common. Each missed digit or misplaced decimal point can lead to hours of
        backtracking and customer disputes. This manual process is not just tedious; it is a significant drain on
        time and resources. For small businesses in the area, the struggle with inefficient accounts receivable
        processes is a familiar one, leading to cash flow bottlenecks and strained customer relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated Accounts Receivable offers a transformative solution to this persistent issue. By integrating
        advanced&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;and automation technologies, businesses can streamline their
        invoicing and payment processes. This technology not only reduces the time spent on manual data entry but
        also enhances accuracy and efficiency. Automated systems can match incoming payments to outstanding
        invoices in real-time, ensuring that cash flow remains uninterrupted and predictable. For small businesses
        in West Palm Beach, Broward, and Miami-Dade counties, adopting such technology can mean the difference
        between a thriving operation and one bogged down by financial inefficiencies.</p>
      <p className="text-md text-white shadow-text pt-3">
        The benefits of switching to an automated accounts receivable system are clear: faster payment cycles,
        fewer errors, and improved customer satisfaction. With automation, businesses can eliminate the need for
        constant manual oversight, allowing teams to focus on more strategic tasks that contribute to growth. This
        shift not only accelerates cash flow but also builds stronger customer relationships by ensuring timely
        and accurate payment processing. For local businesses looking to enhance their financial operations,
        automation is a powerful tool that provides both immediate relief and long-term advantages.</p>
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
