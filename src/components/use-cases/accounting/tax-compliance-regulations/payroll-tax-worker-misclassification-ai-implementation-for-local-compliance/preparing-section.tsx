import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function PreparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Once you commit to automating payroll tax and worker misclassification compliance, the next steps are
        structured and clear. You start with a focused assessment, not a full-blown overhaul. Geek @ Your Spot LLC’s
        method opens with a free consultation, then moves through four phases: aligning the project with your
        business goals, auditing your data, selecting the right technology, and executing a pilot. You do not
        need to know every tax rule or platform up front; the process is designed to uncover what matters and
        make the path forward manageable.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first thing you do is clarify the problem you’re trying to solve in measurable terms. That might be
        reducing the hours spent on payroll each month, eliminating misclassification risk, or ending late
        filings to state or federal agencies. The consultation will pin down where the current system is
        breaking. Maybe it’s the Friday afternoons spent reconciling contractor payments, or anxiety over a new
        worker moving across county lines. Once you name the pain, everything else becomes about removing it.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step is a&nbsp;data quality&nbsp;review. This
        is where you gather your payroll records, contractor agreements, and tax filings. You check if all your
        workers are classified and tracked in a consistent format. If you’re using Gusto, for example, your W-2
        and 1099 history is already in one place, but if you’re pulling from spreadsheets or a mix of paper and
        digital records, you’ll need to clean and standardize that data. This phase is about spotting
        gaps such as missing W-9s, contractors with incomplete records, or employees who have shifted roles without an
        updated classification. Without this data cleanup, no tool, whether Rippling, Deel, Justworks, or ADP, can
        guarantee compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        After your records are clean, the focus shifts to choosing the platform and setting up your
        architecture. Here, the right tool is matched to your needs. Deel’s Contractor of Record service steps
        in when you have a high mix of freelancers and need someone to backstop misclassification risk.
        Rippling’s Compliance 360 is a fit if you want real-time alerts and one-click fixes for classification
        or overtime errors. ADP is the call when your business is scaling across locations and you need the
        institutional muscle and expert support to handle thousands of local tax changes. The choice is not
        about brand loyalty; it’s about which tool solves the problem your business actually faces, and which
        one fits with your existing accounting and HR stack.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pilot implementation is the last step before the process becomes business as usual. Here, you select a
        representative sample, such as the Miami-based team with the most complex mix of jobs and pay types. The
        pilot runs in parallel with your old process for one or two cycles. You validate the results: did the
        system catch a misclassification that would have slipped through? Did it flag a missing W-9, or prevent
        a late tax filing? Any issues are fixed now, before scaling to the rest of the business. This is where
        the real test happens, and if something fails, the team adapts the process or the tool before rolling it
        out company-wide. Nobody is left trusting a black box; every step is visible, and every outcome is
        checked.</p>
      <p className="text-md text-white shadow-text pt-3">
        The result is that, after the project goes live, the work that used to eat up your week is now handled
        by the system you helped build. Payroll taxes are filed on time, every time, by the platform.
        Classification errors get flagged before they become penalties. Your staff focuses on operations, not
        paperwork. If a new worker is onboarded, the right tool makes sure every form, tax status, and document
        is collected and filed before the first check goes out. The risk of IRS or state audits drops, not
        because you work harder, but because the system is working for you. What you should expect is not
        perfection, but control and predictability: a process that keeps you out of harm’s way and lets you run
        your business with confidence.</p>
      <p className="text-md text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link id={`use-cases-accounting-payroll-tax-worker-misclassification-preparing-booking-your-free-consultation${idSuffix}`} href="#consultationAppointment2xl" className="text-[#C83803] hover:underline">booking
        your free consultation</Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>How do you currently determine whether a new team member should be onboarded as a W-2 employee or a 1099 independent contractor?</li>
        <li>Do you have 1099 contractors who use your company equipment, have set schedules, or perform the exact same core services as your W-2 staff?</li>
        <li>How are you managing, collecting, and verifying Form W-9s and tracking annual thresholds for your independent contractors?</li>
        <li>Are you currently employing any remote workers, out-of-state contractors, or staff who split time between different states?</li>
        <li>How much time does your team spend calculating, withholding, and filing quarterly federal (941) and Florida Reemployment taxes (RT-6)?</li>
        <li>Have you ever had to pay an IRS or state penalty due to a delayed payroll tax deposit or a clerical filing error?</li>
        <li>When you onboard a new worker, how does their payroll and tax documentation sync up with your core accounting or&nbsp;<GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;system?</li>
        <li>How does your current system track and adjust for changing local, state, and federal labor laws or payroll tax caps?</li>
        <li>If the state or the IRS audited your contractor workforce tomorrow, how long would it take you to produce signed agreements, W-9s, and clear payment trails for every single worker?</li>
        <li>What is your current monthly or annual budget for payroll processing and&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;legal advice?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-happens-next-what-to-expect-after-you-decide-to-move-forward" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Happens Next: What to Expect After You Decide to Move Forward
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-happens-next-what-to-expect-after-you-decide-to-move-forward-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Happens Next: What to Expect After You Decide to Move Forward
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
