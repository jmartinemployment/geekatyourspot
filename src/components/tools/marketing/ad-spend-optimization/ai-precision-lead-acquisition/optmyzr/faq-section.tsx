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
              Will Rule Engine take any actions on my accounts without my approval?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No. The Rule Engine only acts on the instructions you or your team set up. You can choose to let it apply
              changes automatically for rules you&rsquo;ve defined, or keep full control by approving each action
              yourself.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I duplicate my Rule Engine strategies and automate them for multiple accounts?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. You can easily copy and automate your strategies across several accounts, which saves time and keeps
              your approach consistent.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How will I know if Rule Engine has any suggestions for me?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              If your strategy is not automated, you&rsquo;ll need to check for suggestions manually. If you automate it,
              you can get notifications by email, inside the tool, or through Slack or Teams, so you never miss an
              update.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are the benefits of using Optmyzr&rsquo;s Rule Engine over Google Ads automated rules/scripts?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr&rsquo;s Rule Engine gives you more control and flexibility than Google Ads rules or scripts.
              It&rsquo;s designed for complex accounts and lets you create custom strategies that fit your business
              goals. It also scales easily, so you can handle large amounts of data without slowing down.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How deep can I go with performance breakdowns?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You can break down your results by campaign, ad set, and ad. This helps you see exactly what&rsquo;s
              working and what needs improvement.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is it possible to compare creative types across campaigns?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Optmyzr lets you compare how different creative types perform across your campaigns. This helps you
              spot trends and focus on formats that deliver the best results.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is there a way to see how much we&rsquo;re spending on each platform?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Optmyzr shows you exactly how your budget is split by platform and campaign. You can see where your
              money goes and if it&rsquo;s delivering value.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I analyze both Meta and LinkedIn data in one view?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Optmyzr brings together performance data from Meta and LinkedIn in a single dashboard, so you can
              compare results and make decisions without switching between tools.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What if I want to isolate trends over time?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You can use custom time ranges, filters, and visualizations to dig into spikes, drops, or seasonal
              changes. This helps you connect results to changes in budget, creative, or targeting.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Optmyzr tell me why my Meta campaign performance dropped?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. The PPC Investigator tool helps you find the root cause of performance changes in Meta Ads. It shows
              which metric changed first and how it led to the outcome you see, so you can fix issues without pulling
              separate reports.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How to decrease ACoS on Amazon?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Start by checking your search term report. Block terms that spend but don&rsquo;t convert. Move your best
              search terms into exact match campaigns for tighter control. Also, make sure your main image and price are
              competitive, since weak listings hurt conversion rates and push ACoS up.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is a good ACoS percentage on Amazon?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              A good ACoS depends on your profit margin and goals. As a rule of thumb, your break-even ACoS matches your
              profit margin. Staying below that means your ads are profitable. If you&rsquo;re launching a new product, a
              higher ACoS can be acceptable to build momentum, but track TACoS to see if organic sales are also
              growing.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do you want ACoS to be high or low?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Lower ACoS is better for profitability. But if you focus only on lowering ACoS, you might cut ad spend that
              helps your product rank. It&rsquo;s smarter to track TACoS over time. If your organic sales are rising
              while running ads, the ads are working even if ACoS looks high.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why am I getting clicks but no conversions on my Amazon ads?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You might be attracting the wrong audience or your listing isn&rsquo;t convincing enough. Check your search
              term report to see if the clicks are from relevant searches. If so, review your listing details like price,
              main image, and reviews to find where you&rsquo;re losing buyers.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are the common mistakes in Amazon PPC?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
              <li>Not checking the search term report often enough</li>
              <li>Waiting too long to add negative keywords</li>
              <li>Setting bids once and never updating them</li>
              <li>Mixing auto and manual campaigns without a clear plan</li>
              <li>Running ads on listings with weak images or few reviews</li>
              <li>Focusing only on ACoS instead of the metrics that drive it, like impressions, CTR, clicks, and conversion rate</li>
            </ul>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How to optimize an ad group with high spend and low sales?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Don&rsquo;t just cut bids across the board. First, find out where the problem is. If you have lots of
              impressions but a low click-through rate, the issue might be relevance.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I set up rules for both Meta and LinkedIn ads?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. You can create and apply automation rules for Meta and LinkedIn separately. This lets you customize
              logic for each platform&rsquo;s unique setup and goals, all from one place.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can rules make automatic changes?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. You decide if rules should make changes automatically, like pausing ads or adjusting budgets, or if
              you want to review changes before they go live. This gives you control over how much automation you
              use.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I apply the same rule across multiple campaigns?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Within Meta or LinkedIn, you can use one rule to update several campaigns, ad sets, or ads at once.
              This is helpful for saving time and keeping things consistent.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I run rules on a schedule?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. You can schedule rules to run daily, weekly, or at custom times. This keeps your accounts optimized
              automatically, even outside business hours.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can rules be duplicated between Meta and LinkedIn?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              You need to set up rules separately for each platform, but you can reuse the same logic. For example, a
              rule to lower budget when ROAS drops can be built for both Meta and LinkedIn with similar settings.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What types of actions can rules take?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
              <li>Pause underperforming ads</li>
              <li>Change campaign or ad set budgets</li>
              <li>Modify statuses</li>
              <li>Send alerts when certain thresholds are met</li>
            </ul>
            <p className="text-base text-white shadow-text pt-3">
              You set the logic, so you control how automation works for your business.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is there a template library to help me get started?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Optmyzr offers a library of pre-built rule templates for common needs like pausing low-performing ads
              or adjusting bids. You can use these as they are or tweak them to fit your goals.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Optmyzr replace Adalysis entirely?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              For most teams, Optmyzr covers the main needs: account audits, KPI monitoring, budget pacing, and ad copy
              management. Adalysis is stronger for deep ad testing at scale. If you need multi-platform automation,
              Amazon or Meta management, or structured reporting, Optmyzr does all of that while Adalysis does not.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Adalysis support Amazon Ads?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              No. Adalysis works with Google Ads and Microsoft Ads only. Optmyzr supports Amazon Ads, so you can
              automate, report, and audit your Amazon campaigns alongside your other channels.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Both tools have budget management. What&rsquo;s actually different?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Both tools are strong in budget management. Adalysis offers features like intraday campaign pausing and
              budget rollover for Google and Microsoft. Optmyzr&rsquo;s Budget Monitor works across all supported
              platforms, lets you adjust budgets weekly, monthly, or quarterly, and includes a simulation tool to test
              changes before they go live. If you manage spend across more than two platforms, Optmyzr&rsquo;s
              cross-platform support is the main difference.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the Optmyzr MCP and does Adalysis have anything like it?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr MCP connects AI tools like ChatGPT and Claude to your live account data. You can ask questions,
              build Rule Engine strategies, and get reports right from your AI interface. Adalysis does not offer this
              kind of AI-on-data feature.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Adalysis runs continuous daily audits. Does Optmyzr do the same?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr&rsquo;s PPC Policy and Audit Tool runs on demand or on a schedule and gives you a scored health
              report. Ongoing monitoring is handled with Account Alerts for KPIs and budgets. Adalysis&rsquo;s daily
              audit engine is more focused on continuous compliance. If you need to catch account drift as soon as it
              happens, Adalysis is built for that. Optmyzr is better if you want scheduled or on-demand audits with
              flexible alerting.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is Optmyzr?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr is a paid-media management and automation platform. It helps advertisers keep track of campaigns,
              spot ways to improve, manage bids and budgets, check accounts, and automate reports while keeping control
              over all changes.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Who is Optmyzr designed for?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr is built for PPC and digital agencies, freelancers, consultants, in-house marketing teams, and
              enterprise advertisers. Its tools work for both single accounts and for managing groups of client
              accounts.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which advertising platforms does Optmyzr support?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr supports Google Ads, Microsoft Ads, Amazon Ads, Meta Ads, LinkedIn Ads, and Yahoo! Japan Ads. The
              homepage also mentions TikTok Ads, but the pricing FAQ does not confirm details, so check with Optmyzr
              about TikTok features. The tools and level of support can differ by platform.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What tasks can Optmyzr automate?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr can automate keyword and search-query optimization, bid and budget management, performance alerts,
              account audits, reporting, and custom optimization rules. Depending on your plan, it also covers Shopping
              and Performance Max campaign management, feed-based campaign updates, and cross-account workflows.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is the Rule Engine?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              The Rule Engine lets users set up custom optimization strategies using if/then logic based on campaign
              metrics. These strategies can find opportunities or run scheduled actions. Automation frequency depends on
              your plan: Essentials allows weekly or monthly schedules, while Premium adds daily scheduling.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Optmyzr use AI?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. AI features include Sidekick (a natural-language PPC assistant), ad-copy suggestions, performance
              insights, and AI-generated performance summaries. Its MCP connection also lets tools like Claude and
              ChatGPT work with Optmyzr account data, with access and features depending on your plan.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will Optmyzr change campaigns without my approval?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr says that changes need your approval and only you or authorized users can make them. You can also
              set up scheduled automation, so your approval includes choosing which rules run automatically.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can it help prevent wasted advertising spend?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr offers budget pacing, spend projections, KPI alerts, placement exclusions, search-query analysis,
              and bid-management tools to help find waste and improve efficiency. These are tools for optimization and
              monitoring, not a guarantee of a specific advertising result.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can Optmyzr explain why campaign performance changed?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Optmyzr&rsquo;s PPC Investigator uses a Cause Chart and Root Cause Analysis to help users see what
              drove changes in their campaign metrics. It highlights which campaigns, ad groups, keywords, devices, or
              networks contributed to the shift.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How do I get started?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              To get started, sign up for Optmyzr, authorize access to your advertising account, and connect it. The
              company suggests beginning with an account audit, then moving on to the Rule Engine or other optimization
              tools.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How much historical data is required?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr requires at least 30 days of historical performance data from your connected account to complete
              setup. If your account already has enough history, recommendations can be available within minutes. There
              is no extra warm-up period.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is account data updated in real time?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Most data in Optmyzr is retrieved in real time, but some overview pages use cached data. When you approve
              changes, they are sent to the advertising platforms right away. How quickly those changes go live depends
              on the platform&rsquo;s API.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Can I automate client reporting and use my own branding?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Optmyzr offers white-labeled reports, shareable dashboards, report templates, and automated report
              delivery. Premium and Enterprise plans add cross-platform and multi-account reporting. Reporting frequency
              and other features depend on your plan.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does Optmyzr integrate with other business tools?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr lists integrations with Slack, Microsoft Teams, Zapier, and Google Sheets. Custom integrations with
              Salesforce, HubSpot, Shopify, APIs, or other data sources may depend on your plan or need a custom
              setup.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does Optmyzr protect account data?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr uses encryption and two-factor authentication. It states that it does not share personal or account
              data with advertising platforms for their own marketing. Users keep control over campaign changes. These
              are the vendor&rsquo;s published security statements, not an independent assessment.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How much does Optmyzr cost?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Optmyzr&rsquo;s pricing page shows a starting price of $209 per month. The actual price depends on your
              plan, ad spend, and billing cycle. The available plans are Essentials, Premium, and Enterprise. Enterprise
              pricing is customized.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are the main differences between Essentials, Premium, and Enterprise?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Essentials covers up to 25 accounts and includes core optimization tools, audits, budget monitoring,
              reporting, Rule Engine, and Sidekick. Premium allows unlimited advertising accounts (with fair usage), adds
              broader Shopping and Performance Max management, cross-account budgets and reports, portfolio-level social
              tools, and enhanced onboarding. Enterprise includes everything in Premium plus custom integrations, a
              dedicated account manager, extra training, and enterprise access options like Okta SSO.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is there a free trial?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes. Optmyzr offers a 14-day free trial. No credit card is required to start.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Are Amazon, Meta, and LinkedIn tools included, or do they require separate subscriptions?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Amazon and social advertising tools for Meta and LinkedIn are included in all Optmyzr plans. Essentials
              gives you single-account social tools. Premium and Enterprise give you portfolio-level access. Optmyzr also
              offers a standalone Amazon solution starting at $66 per month.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Are discounts available?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Annual prepaid subscriptions get a 30% discount compared with monthly billing. Businesses and agencies less
              than three years old may qualify for a special discount. Nonprofits, including some Google Grants accounts,
              may get discounted or free subscriptions after an eligibility review.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
