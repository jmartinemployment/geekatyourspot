import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A payroll tax and worker misclassification automation project is the right call when the current risk,
        volume, or pace of change in your business means manual methods are no longer sustainable. If you’re a
        small business in South Florida handling multiple workers across Miami-Dade, Broward, or West Palm
        Beach—with a mix of W-2 employees and 1099 contractors—this is where manual payroll starts to crack. The
        cost of a single misclassification or late payroll tax filing can wipe out the savings of doing it
        yourself. The right time to automate is when you are spending more time untangling compliance issues
        than running your business, or the anxiety of an IRS or state audit starts to feel like a constant
        shadow over growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        This approach fits when you have non-trivial payroll complexity. That includes businesses that routinely
        onboard and offboard contractors, operate across county lines, or switch worker roles seasonally. If
        you’re running payroll in spreadsheets, chasing down W-9s, watching for tax table changes, or trying to
        track overtime for workers with flexible schedules, you’re in the zone where automation delivers clear
        returns. The same holds if your team has grown—whether by headcount or by locations—past the point where
        one person can track every rule and deadline by hand. In these situations, the risk of error or delay is
        not just theoretical: the evidence shows that even diligent owners are missing filings, misclassifying
        workers, or losing track of local tax changes. That’s where Gusto, for example, can automatically update
        tax tables, flag classification issues, and file W-2s and 1099s, covering the ground that used to eat up
        your Fridays and Saturdays.</p>
      <p className="text-md text-white shadow-text pt-3">
        But this is not the answer for everyone. If you have only W-2 employees, with no contractors, in a
        single county, and your payroll is simple and static, the manual approach may still make
        sense—especially if your volume is low and you can afford to double-check everything yourself. The
        overhead of setting up automated tools, onboarding integrations like Rippling or Justworks, and learning
        new workflows is not worth it if the complexity just isn’t there. Likewise, if your business has no
        plans to grow or change how it employs people, and you have a dedicated in-house bookkeeper or CPA
        keeping things clean and up to date, automation is a “nice to have,” not a “must have.”</p>
      <p className="text-md text-white shadow-text pt-3">
        Another scenario where this approach is not the right fit: when your data is not ready for automation.
        If your worker records are inconsistent, you lack digital payroll history, or your accounting is still
        on paper, the first step is not automation, but getting your data in order. Automating chaos only
        produces automated chaos. The four-phase methodology used by Geek @ Your Spot starts with
        a&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink>&nbsp;assessment for a reason—clean data is the foundation. If you’re not ready to
        audit and standardize your employee and contractor information, automation will only expose the gaps,
        not fix them.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses with highly specialized, one-off payroll needs—say, one-off project-based payments that
        never repeat, or workers who are never subject to&nbsp;<Link id="use-cases-accounting-payroll-tax-worker-misclassification-right-fit-complex-changing-laws" href="/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws" className="text-[#0B162A] hover:underline">changing tax laws</Link>—full-scale automation may be
        overkill. In these cases, a lighter solution, like a simple accounting software with manual checks,
        could cover you. But as soon as your business touches multiple worker types, multiple jurisdictions, or
        faces regular audits and tax changes, the stakes shift. At that point, the price of staying manual
        becomes the risk you can’t control, and the right automation becomes a safety net for your future
        growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-this-approach-is-the-right-move-and-when-it-isn-t" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When This Approach Is the Right Move—and When It Isn’t
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="when-this-approach-is-the-right-move-and-when-it-isn-t" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When This Approach Is the Right Move—and When It Isn’t
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
