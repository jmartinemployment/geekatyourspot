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
              How does Bïrch optimize advertising spend?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Bïrch uses rules you set to check how your campaigns are doing. When a campaign meets or fails the
              conditions you define, Bïrch takes the actions you choose. For example, it can filter out ads that are not
              working, raise budgets when results are strong, or cut spending if your cost per acquisition goes over your
              limit.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which advertising platforms does it support?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Bïrch works with Meta, Google, TikTok, and Snapchat. The controls you get depend on the platform and
              campaign type. Not every action is available on every platform. For example, Google App campaigns are
              managed at the campaign level, and TikTok Smart+ has some extra API limits.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it automatically stop ads that waste budget?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. You can set rules to pause ads after they spend a certain amount without getting conversions, or when
              CPA or ROAS does not meet your targets. Bïrch recommends using a minimum spend or enough performance data
              before making a decision, instead of reacting to every early change.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it automatically scale successful campaigns?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, if the platform allows it. Bïrch can scale by raising budgets step by step or by duplicating
              campaigns or ad sets that are working well. More advanced setups let you combine different conditions and
              time frames, so scaling only happens when good results last, not just after a quick spike.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How frequently does Bïrch check performance?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Rules can run as often as every 15 minutes. But checking often does not mean budgets change that often.
              The right timing for changes depends on your campaign size, how steady your results are, and how long it
              takes to see conversions. There is no single best frequency for all cases.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which metrics can drive optimization?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You can use spend, conversions, CPA, ROAS, CPC, and CPM. Bïrch also lets you create custom metrics with
              formulas, so your rules can match your business goals instead of just using standard numbers from the ad
              platforms.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it use external attribution or business data?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Bïrch connects with AppsFlyer, Adjust, and Hyros. You can also use data from Google Sheets or other
              attribution tools in your custom metrics. These can trigger automated actions, not just reports.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Bïrch help prevent overspending?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Bïrch supports rules for total spend limits, pacing budgets, and spotting unusual spending or cost jumps.
              These rules help automate control, but since checks run on a schedule, they do not guarantee spending will
              never go over a set amount.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Bïrch describes a layered approach
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Bir uses a layered approach to ad spend optimization. At the ad level, it reviews creative performance and
              pauses ads that are not working well. At the ad-set level, it adjusts budgets and scales up setups that are
              performing. At the campaign or account level, it monitors total spending, applies safeguards, and looks for
              unusual activity. This setup keeps creative testing, budget changes, and financial controls separate.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Bïrch use AI, or is it only rule-based?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Bir uses both AI and rule-based automation. Rules handle the automation steps. Bir&rsquo;s AI reviews
              account performance and current rules, suggests improvements, and can turn plain-language instructions into
              a draft rule. The website notes that you review each rule before it goes live.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
