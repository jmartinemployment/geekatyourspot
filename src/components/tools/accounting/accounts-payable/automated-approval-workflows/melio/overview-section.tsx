import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every day, small business owners face the tedious task of manually chasing approvals for invoices and
        payments. Picture the scene: stacks of paper piling up on a cluttered desk, each one a reminder of a
        payment waiting to be processed. Each invoice demands attention, verification, and sign-off, often
        across different departments or even time zones. This old-fashioned method not only clogs the workflow
        but also increases the risk of errors. Missing an email or misplacing a document can delay critical
        payments, disrupt cash flow, and strain vendor relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is where automated approval workflows come into play, offering a solution that can transform how
        small businesses operate. By automating the routing of approvals based on set rules—like amount
        thresholds or specific vendors—businesses can streamline their processes without the constant
        back-and-forth. Tools like&nbsp;
        <a id="tools-accounting-approval-workflows-melio-overview-melio"
          href="https://melio.com/"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Melio
        </a>&nbsp;enable businesses to set up these workflows quickly, ensuring that a $200 software renewal
        doesn&#39;t require the same attention as a $40,000 infrastructure invoice. The result is a smoother,
        more efficient approval process that frees up time and reduces the chance of human error.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses in West Palm Beach, Broward, and Miami-Dade counties, adopting automated approval
        workflows can be a game-changer. It means no more chasing down approvals through Slack or waiting for
        someone in a different time zone to check their email. Instead, business owners can focus on growth
        and customer satisfaction, knowing their&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;process is running smoothly
        and efficiently. This shift not only saves time but also enhances compliance and provides peace of
        mind, ensuring that every payment is processed accurately and on time.</p>
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
