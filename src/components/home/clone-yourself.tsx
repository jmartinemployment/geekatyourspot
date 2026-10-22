import { StatBadge, type SourceSegment } from "@/components/home/stat-badge";

/** The source note behind each badge, written by the owner on 2026-10-22, with each named source linked. */
const COST_REDUCTION_SOURCE: SourceSegment[] = [
  { text: "Enterprises achieve a 40% cost reduction via automated operations, a benchmark proven by " },
  { text: "IBM HR Automation", href: "https://www.ibm.com/case-studies/ibm-askhr" },
  { text: " and " },
  { text: "Tata Play's WhatsApp integration", href: "https://www.nextiva.com/customer-story/tata-play-broadcasting" },
  { text: "." },
];

const PRODUCTIVITY_SOURCE: SourceSegment[] = [
  {
    text: "Customer support teams resolve tickets 3x faster and manage 3x the ticket volume without adding headcount by using AI, according to data from ",
  },
  { text: "Solnix Media", href: "https://blogs.solnixmedia.com/blog/Enterprise/customersupport_and_csm/" },
  { text: "." },
];

const AUTOMATED_SOURCE: SourceSegment[] = [
  { text: "Workflows run 24/7 automated operations around the clock. Next-generation tools from " },
  { text: "viaSocket", href: "https://viasocket.com/" },
  { text: " handle routine data syncing, scheduling, and emailing with zero downtime." },
];

export default function CloneYourselfSection() {
  return (
    <>
      <section className="w-full bg-[#023059] min-h-screen py-42 lg:hidden">
        <div className="container">
          <div className="grid grid-cols-2">
            <div className="col-span-2">
              <h2 className="text-white text-[12vw] sm:text-6xl md:text-7xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Clone Yourself{" "}
                <br />
                <span className="text-[#C83803]">Work 24/7</span>
              </h2>
            </div>
            <div className="col-span-1 py-5">
              <p className="text-white text-lg shadow-text">
                Create a lifelike AI version of yourself that never stops.
                Designed to create content, engage customers, nurture leads,
                close opportunities. A counterpart works nonstop optimizing
                operations, HR, and finance behind the scenes across your entire
                business.
              </p>
            </div>
            <div className="col-span-1 place-content-center">
              <StatBadge
                id="home-badge-cost-reduction"
                value="40%"
                label="Cost Reduction"
                className="w-full bg-[#03020d] border border-white/10 flex flex-col justify-center rounded-sm shadow-box mb-3 cursor-pointer"
                valueClassName="text-4xl font-black text-white mx-auto text-center"
                labelClassName="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest text-center mx-auto"
                source={COST_REDUCTION_SOURCE}
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <StatBadge
                    id="home-badge-productivity"
                    value="3x"
                    label="Productivity"
                    className="block w-full text-left bg-[#03020d] border border-white/10 rounded-sm shadow-box px-5 cursor-pointer"
                    valueClassName="block text-2xl font-black text-white text-center"
                    labelClassName="block ml-2 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest"
                    source={PRODUCTIVITY_SOURCE}
                  />
                </div>
                <div className="col-span-1">
                  <StatBadge
                    id="home-badge-automated"
                    value="24/7"
                    label="Automated"
                    className="block w-full bg-[#C83803] text-white rounded-sm shadow-box text-center cursor-pointer"
                    valueClassName="block text-2xl font-black text-center"
                    labelClassName="block text-[10px] md:text-xs font-bold text-orange-200 uppercase tracking-widest text-center"
                    source={AUTOMATED_SOURCE}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#023059] min-h-screen hidden lg:block xl:block">
        <div className="container min-h-screen">
          <div className="grid grid-cols-2 content-center gap-4 items-center min-h-screen">
            <div>
              <h2 className="text-white lg:text-7xl xl:text-[6.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Clone Yourself{" "}
                <br />
                <span className="text-[#C83803]">Work 24/7</span>
              </h2>
              <p className="text-white text-xl font-normal shadow-text py-5">
                Create a lifelike AI version of yourself that never stops.
                Designed to create content, engage customers, nurture leads,
                close opportunities. A counterpart works nonstop optimizing
                operations, HR, and finance behind the scenes across your entire
                business.
              </p>
            </div>
            <div className="w-full flex justify-center mt-8">
              <div>
                <div className="grid grid-cols-2 gap-4 w-full mx-auto">
                  <StatBadge
                    id="home-badge-cost-reduction-lg"
                    value="40%"
                    label="Cost Reduction"
                    className="col-span-2 bg-[#03020d] border border-white/10 flex flex-col justify-center rounded-sm shadow-box cursor-pointer"
                    valueClassName="text-4xl md:text-6xl lg:text-7xl font-black text-white text-center"
                    labelClassName="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest text-center"
                    source={COST_REDUCTION_SOURCE}
                  />
                  <StatBadge
                    id="home-badge-productivity-lg"
                    value="3x"
                    label="Productivity"
                    className="p-4 md:p-6 lg:p-8 bg-[#03020d] border border-white/10 flex flex-col justify-center rounded-sm shadow-box cursor-pointer"
                    valueClassName="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-1 md:mb-2 text-center"
                    labelClassName="text-[8px] md:text-xs font-bold text-slate-500 uppercase tracking-widest text-center"
                    source={PRODUCTIVITY_SOURCE}
                  />
                  <StatBadge
                    id="home-badge-automated-lg"
                    value="24/7"
                    label="Automated"
                    className="p-4 md:p-6 lg:p-8 bg-[#C83803] flex flex-col justify-center text-white rounded-sm shadow-box cursor-pointer"
                    valueClassName="text-2xl md:text-4xl lg:text-5xl font-black mb-1 md:mb-2 text-center"
                    labelClassName="text-[8px] md:text-xs font-bold text-orange-200 uppercase tracking-widest text-center"
                    source={AUTOMATED_SOURCE}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
