export default function RemovesFromYourWeekSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange transforms the way small businesses handle automated payment execution by eliminating the
        inefficiencies of manual processes. By automating payment workflows, it frees up valuable time and
        resources, allowing businesses to focus on strategic initiatives rather than mundane tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key benefits of AvidXchange is its ability to integrate seamlessly with existing
        accounting systems. This means businesses can maintain their current systems while streamlining the
        entire payment process. With AvidXchange, there’s no need to overhaul existing workflows; instead, it
        enhances them, reducing the chances of errors and delays.</p>
      <p className="text-md text-white shadow-text pt-3">
        AvidXchange supports multiple payment methods, including virtual cards, AvidPay Direct, and checks.
        This flexibility ensures that suppliers are paid through their preferred methods, reducing the
        friction that often accompanies payment processing. By automating these processes, businesses can
        eliminate the need for staff to manually track and deliver payments, saving hours each week.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also provides real-time visibility into payment statuses, which is a game-changer for
        both businesses and their suppliers. Vendors no longer need to call or email for updates, as they can
        access their payment information at any time through the AvidXchange Supplier Hub. This self-service
        feature not only reduces the workload on staff but also improves supplier satisfaction.</p>
      <p className="text-md text-white shadow-text pt-3">
        Furthermore, AvidXchange&#39;s automation reduces the hard costs associated with paper invoices and
        payments. By transitioning to electronic payment methods, businesses can cut down on the expenses
        related to printing and mailing checks. This shift not only saves money but also contributes to a
        more sustainable business model.</p>
      <p className="text-md text-white shadow-text pt-3">
        In essence, AvidXchange allows businesses to reallocate their resources from administrative tasks to
        more strategic roles, enhancing overall productivity and efficiency. By automating payment execution,
        businesses can ensure that their teams spend less time on repetitive tasks and more time driving
        growth and innovation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-avidxchange-removes-from-your-week">
                What AvidXchange Removes from Your Week
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="what-avidxchange-removes-from-your-week">
                What AvidXchange Removes from Your Week
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
