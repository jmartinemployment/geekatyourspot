export default function PaaSection() {
  return (
    <section className="min-h-screen bg-[#025E73] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="people-also-ask" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              People Also Ask
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What is a marketing automation platform?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              A marketing automation platform is software that automates, streamlines, and measures repetitive marketing work such as multi-channel campaigns and customer workflows. For a small business it means the content plan, the drafts, the email sends, and the lead list all work from one set of contact records, so each job can use what the others learn.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which of the four jobs should a small business start with?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Start with content planning. It costs the least, needs the least data, and produces the calendar and briefs the other three jobs depend on. Email is usually the first job to show a measurable result, because it works from contacts you already have. Lead scoring comes last, because a score needs email and website activity to score.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do I need one platform or several tools?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Either can work. One platform is simpler and cheaper to start, and ActiveCampaign, GetResponse, and Mailchimp each cover email, basic automation, and a contact list that can carry scores. Several specialist tools do each job better but need integrations that move contact fields both ways, and someone has to own those. The deciding factors are your contact count, what your CRM holds, and who approves sends.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Where does AI actually do the work in a marketing automation platform?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              In three places. It drafts the content a rule will send, it suggests when to send and to whom from past behavior, and it ranks leads by how likely they are to buy. A person still sets the rules, approves the drafts, and decides what a score is worth. Nothing on these pages recommends publishing or sending anything a person has not reviewed.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What does the platform need from my CRM?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Filled-in fields. Personalization can only use what a record holds, and a score can only rank activity the platform can see. A list with names and addresses and nothing else supports a newsletter and not much more. Our assessment reads the CRM export field by field before recommending a tool, and says plainly what the data can and cannot support.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How are the tools on this site chosen and reviewed?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              They are the tools a South Florida small business is most likely to be quoted for in each of the four jobs. Each review checks the vendor's own claims against what the product does at the plan that business would buy, and says where the claim stops applying. The reviews are not rankings and the site does not sell any of the tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
