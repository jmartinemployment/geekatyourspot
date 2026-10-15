export default function PAASection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
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
              Is the first consultation really free?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. Every project starts with a free consultation. We learn how your business runs and tell you
              plainly whether automation fits. There is no obligation.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Do you need access to our books before we start?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              No. Phase 1 is discovery only. We map your workflows, approvals, and goals in plain language before we
              touch any data. Data access starts in Phase 2, after you have signed off on the map.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Will we have to replace our current accounting software?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Not necessarily. Phase 3 favors tools that plug into what you already run. If a new platform is the
              right call, you see the full cost of ownership and the contract terms before you sign anything.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What happens if the new system gets something wrong during the pilot?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Your current process keeps running the whole time. Both systems handle the same transactions, and
              every result is compared. When they disagree, a person investigates before anything else moves.
              Nothing cuts over until the numbers match and you approve it.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Who has the final say at each phase?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              You do. Each phase ends with something you can see and approve: a signed workflow map, a data health
              scorecard, a side-by-side tool scorecard, and your written sign-off before cutover.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
