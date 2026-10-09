import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, small business owner Lisa spends countless hours poring over invoices, manually entering
        payment details, and reconciling accounts. Each keystroke is fraught with the risk of error, and every
        oversight can lead to late fees or damaged vendor relationships. It is a tedious cycle that drains
        time and resources, leaving little room for strategic growth or innovation. The cost is not just
        measured in dollars but in opportunities lost and stress gained. For Lisa, like many others, this
        manual process is a necessary evil, a relic of traditional accounting practices that seems
        unavoidable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Enter automated payment execution. By streamlining&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;with&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-driven tools, businesses like Lisa&#39;s can eliminate the
        repetitive tasks that bog down their operations. Automated systems handle the bulk of the workload,
        from scheduling and executing payments to syncing with accounting software, reducing human error and
        freeing up valuable time. With solutions like&nbsp;
        <a id="tools-accounting-payment-execution-melio-overview-melio"
          href="https://melio.com/"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Melio
        </a>, Lisa can set up payment terms, manage cash flow effortlessly, and ensure timely payments without
        the monthly scramble. This transformation allows her to focus on growing her business, rather than
        getting lost in the paperwork.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated payment execution is not a distant future; it is a present-day solution that offers tangible
        benefits. By adopting these technologies, small businesses can not only save time and reduce errors
        but also enhance vendor relationships and improve overall financial health. The transition from manual
        to automated processes is a strategic move that can position businesses for sustained success in a
        competitive market. For those in West Palm Beach, Broward, and Miami-Dade counties,&nbsp;
        <Link id="tools-accounting-payment-execution-melio-overview-home"
          href="/" className="text-[#C83803] hover:underline">
          Geek @ Your Spot
        </Link>&nbsp;provides tailored AI implementation services to help local businesses make this shift
        smoothly and effectively.</p>
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
