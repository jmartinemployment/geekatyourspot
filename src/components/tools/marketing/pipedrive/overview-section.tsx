import { GlossaryLink } from "@/components/glossary/glossary-link";
export default function OverviewSection() {
  const body = (
    <>
      <p className="pt-3 text-md font-normal text-white shadow-text">Pipedrive is a sales management tool designed to help businesses streamline their sales processes and improve <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> accuracy. It offers a user-friendly interface and robust features that assist sales teams in identifying and prioritizing high-potential leads efficiently, making it easier to focus effort where it counts.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">In the competitive world of sales, identifying which leads to pursue can be daunting. Traditional methods often rely on subjective judgment and outdated spreadsheets, leading to inefficiencies and missed opportunities. Pipedrive changes this by offering <GlossaryLink slug="machine-learning">AI-powered</GlossaryLink> <GlossaryLink slug="lead-scoring">lead scoring</GlossaryLink> capabilities that provide a more accurate and data-driven approach, analyzing data patterns and customer interactions behind the scenes.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Pipedrive&apos;s <GlossaryLink slug="machine-learning">AI</GlossaryLink>-driven lead scoring analyzes data patterns and customer interactions to prioritize leads most likely to convert. This automation helps sales teams focus their efforts on high-value prospects, saving time and reducing manual errors that come from hand-sorting lists.</p>
      <p className="pt-3 text-md font-normal text-white shadow-text">Pipedrive is particularly beneficial for small to medium-sized businesses looking to optimize their sales processes without the complexity of larger <GlossaryLink slug="crm">CRM</GlossaryLink> systems. If your team is overwhelmed by lead volume and struggling to identify those worth pursuing, Pipedrive&apos;s <GlossaryLink slug="machine-learning">AI</GlossaryLink> capabilities can streamline prioritization while keeping the experience intuitive for everyday sales users.</p>
    </>
  );
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">Overview</h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div><div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">Overview</h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
