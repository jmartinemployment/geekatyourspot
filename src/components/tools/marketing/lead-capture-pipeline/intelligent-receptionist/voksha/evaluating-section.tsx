import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Voksha is not built for everyone. Judging if it fits your business starts with two questions: does it
        handle your real call volume and workflow, and does the pricing model actually save you money compared
        to what you are doing now? For small businesses in Miami-Dade, Broward, and West Palm Beach counties,
        the answer usually comes down to whether you are paying for features you never use, or missing calls you
        cannot afford to lose.</p>
      <p className="text-md text-white shadow-text pt-3">
        Voksha’s fit is strongest for service businesses that need every call answered, but do not want a
        full-time receptionist or the cost of a live answering service. If your team is small, maybe just you
        and one or two others, and you handle calls for law, real estate, dental, HVAC, or similar local
        services, Voksha’s logic is built for you. It can scale from a solo operator to a team with multiple
        agents, without a jump in cost or a need to hire more staff. The key is that Voksha handles high-volume,
        low-complexity calls without missing a beat, and it routes anything complex to your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pricing model is simple: you pay a flat monthly fee for a set number of calls, and $1 for each call
        above that. There are no per-minute charges, no after-hours premiums, and no surprise fees for going
        over your bundle. If you need more than the included calls, the cost scales in $1 steps, not in
        hundred-dollar jumps. This is a direct response to the problem with most legacy answering services,
        which bill by the minute and can double or triple your bill in a busy month. With Voksha, the length of
        the call does not matter, one minute or ten, the cost is the same. This makes it easy to forecast your
        spend and avoid budget shocks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Voksha’s plans are public and predictable. You can see exactly what you get: a set number of calls,
        clear overage pricing, and features mapped to your business’s size. For a team that gets 100 calls a
        month, Voksha’s total bill is far below what a live answering service or a full-time hire would cost for
        the same coverage. And unlike most enterprise tools, there is no contract, no setup fee, and no annual
        lock-in. You can upgrade, downgrade, or cancel at any time. This matters for small businesses that
        cannot commit to long-term contracts or need to adjust as the business grows or shrinks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The real test of fit is whether Voksha actually fixes the problem you have. If you are losing leads
        because calls go to voicemail, or your team is spending hours a week on the phone answering the same
        questions, Voksha is designed to solve that. If you need HIPAA compliance, it is available on the
        Enterprise plan only, so if you are a medical or dental practice handling protected health information,
        you will need to confirm the plan matches your needs. For most small service businesses, the standard
        plans cover what you need: every call answered, basic qualification, appointment booking on Premium, and
        instant alerts to your team.</p>
      <p className="text-md text-white shadow-text pt-3">
        There are limits. Voksha does not have a
        public&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;or
        custom integration layer for building your own features. If your workflow depends on
        deep&nbsp;<GlossaryLink slug="crm" className="text-[#0B162A] hover:underline">CRM</GlossaryLink>&nbsp;integrations
        or you need to automate complex, multi-step processes, Voksha may not be the right fit. But for most
        local businesses, the priority is not building custom apps, it is stopping revenue leaks from missed
        calls and wasted staff time. Voksha’s approach is to keep the system lean and easy to run, so you spend
        less time managing software and more time running your business.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing transparency is another way to judge Voksha. Every cost is published. If you are comparing it to
        another tool that will not give you a straight answer on what you will pay at your volume, take that as
        a warning. Voksha’s model lets you run the numbers before you buy. You know what you will spend if you
        have a busy month, and you know you can change plans or cancel if it stops working for you. This is not
        enterprise software with hidden fees or a long onboarding cycle. It is a tool sized for small business
        realities, priced to match, and built to deliver value from the first call.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fit is not just about features or price, it is about whether Voksha solves your real problem without
        introducing new ones. If your current process is leaking leads, eating up staff time, or costing you
        more than it brings in, Voksha is worth weighing. If you need something more complex or customizable,
        you will need to look elsewhere. For the small business owner who wants every call answered, every lead
        captured, and every dollar spent to show up in the bottom line, Voksha’s fit and pricing model are built
        to deliver exactly that.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-voksha-fit-for-your-business-and-the-real-cost-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Voksha: Fit for Your Business and the Real Cost Model
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-voksha-fit-for-your-business-and-the-real-cost-model" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Voksha: Fit for Your Business and the Real Cost Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
