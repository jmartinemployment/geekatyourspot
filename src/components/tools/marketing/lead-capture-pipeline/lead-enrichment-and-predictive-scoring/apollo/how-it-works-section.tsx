import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Apollo works by automating the entire process of finding, enriching, and scoring leads, so small
        businesses stop wasting time on cold contacts and start focusing on real buyers. The platform’s
        mechanics are built for speed and accuracy, every step is designed to remove manual effort and
        guesswork from the sales pipeline. Apollo does not just collect names. It pulls in verified contact
        details, adds context from dozens of data sources, and uses AI to score each lead against your best
        customer profile. The system is always running, keeping your pipeline warm and your team focused on
        the right targets.</p>
      <p className="text-md text-white shadow-text pt-3">
        It starts with Apollo’s B2B database, which holds over 240 million contacts and 30 million companies.
        When a new visitor lands on your site or fills out a form, Apollo matches the email or company name
        against this database. Instead of asking your prospect for every detail, Apollo can fill in the
        blanks, job title, company size, location, industry, even direct dial numbers, so your team gets a
        full profile instantly. This means your forms can be shorter and less intrusive, but you still get all
        the data you need to qualify a lead. According to Apollo’s own documentation, this enrichment pulls
        from over 65 data points, so every record is as complete as possible.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step is real-time&nbsp;<GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink>.
        Apollo’s AI looks at both the data it just enriched and your
        own&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>&nbsp;history. It checks which leads look most
        like your best customers, using signals like job title, company size, recent buying intent, and even
        changes like a new funding round or a job switch. Every inbound lead gets scored the moment it
        arrives, so your sales team knows who to call first. This predictive scoring is not static. Apollo’s
        models get smarter as your team works more leads, learning what actually converts in your market.</p>
      <p className="text-md text-white shadow-text pt-3">
        For outbound, Apollo flips the process. Instead of building a list by hand, you set your criteria,
        local businesses in Miami-Dade, a certain employee count, specific industries, or job titles. Apollo
        filters its database in seconds and returns a list of prospects who match. You can refine this list
        further with intent signals, like who has recently visited your website or shown buying behavior
        online. The Chrome Extension lets you pull verified contact data while browsing LinkedIn, HubSpot,
        Salesforce, Gmail, or any company website, so you never miss a potential lead.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once you have a list, Apollo automates outreach. The platform can launch email and call sequences,
        mixing automated and manual touchpoints. It tracks which leads open, click, or reply, and updates
        their scores as new activity comes in. The system also monitors email deliverability, running every
        address through multi-step verification, flagging risky sends, and pausing sequences if bounce rates
        spike. This is not just about getting messages out; it is about making sure every message lands in the
        inbox and every call reaches a real decision-maker.</p>
      <p className="text-md text-white shadow-text pt-3">
        Apollo’s visitor identification tool works in the background, capturing anonymous website traffic and
        matching it to real companies and contacts. Even if a visitor does not fill out a form, Apollo can
        surface their company, industry, and sometimes even their name and job title. You can filter these
        visitors by fit and intent, so your team focuses on the ones most likely to buy. Every identified
        visitor is enriched with firmographic and technographic data, and intent scores are layered on top to
        help you prioritize outreach.</p>
      <p className="text-md text-white shadow-text pt-3">
        All of this happens without manual data entry or detective work. When a lead comes in, Apollo scores
        it, enriches it, and routes it to the right rep based on your rules. If a lead is high-intent, Apollo
        can even let them book a meeting instantly, so you never lose a hot prospect to slow response times.
        The follow-up can be drafted automatically, so your team stays on top of every opportunity without
        getting bogged down in admin tasks. For small businesses, this means you spend less time searching and
        more time selling, every day, every week.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-apollo-turns-raw-data-into-qualified-leads" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Apollo Turns Raw Data Into Qualified Leads
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-apollo-turns-raw-data-into-qualified-leads" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Apollo Turns Raw Data Into Qualified Leads
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
