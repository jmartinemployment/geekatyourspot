import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faBan,
  faCalendarDays,
  faGaugeHigh,
  faShieldHalved,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function PlansSection() {
  const points = [
    { icon: faTag, color: "text-[#C83803]", label: "No setup fee" },
    { icon: faCalendarDays, color: "text-white", label: "Billed monthly through PayPal" },
    { icon: faBan, color: "text-[#BF5934]", label: "Cancel anytime" },
    { icon: faGaugeHigh, color: "text-[#C83803]", label: "AI-answered minutes by plan" },
    { icon: faArrowTrendUp, color: "text-white", label: "Over your minutes, the plan that fits" },
    { icon: faShieldHalved, color: "text-[#BF5934]", label: "A spending cap if you prefer" },
  ];

  const plans = [
    { name: "Starter", price: "$30/month", minutes: "90" },
    { name: "Standard", price: "$48/month", minutes: "250" },
    { name: "Pro", price: "$148/month", minutes: "1,000" },
    { name: "Premium", price: "$298/month", minutes: "2,000" },
  ];

  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        AI voice answering is the next step for Geek-Receptionist, and these plans are for it. They open soon,
        and this page will say so when they are live. The missed call handling described above runs today.
        These are the planned plans and prices.</p>
      <table className="mt-6 w-full border-collapse text-left text-white shadow-text">
        <thead>
          <tr>
            <th className="border-b-4 border-white pb-2 pr-4 text-base font-black uppercase tracking-wide">Plan</th>
            <th className="border-b-4 border-white pb-2 pr-4 text-base font-black uppercase tracking-wide">Price</th>
            <th className="border-b-4 border-white pb-2 text-base font-black uppercase tracking-wide">AI-answered minutes per month</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan) => (
            <tr key={plan.name}>
              <td className="border-b border-white/40 py-2 pr-4 text-base font-bold">{plan.name}</td>
              <td className="border-b border-white/40 py-2 pr-4 text-base">{plan.price}</td>
              <td className="border-b border-white/40 py-2 text-base">{plan.minutes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-base text-white shadow-text pt-3">
        There is no setup fee. Billing is monthly through PayPal, and you can cancel anytime.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you go over your minutes, that month is billed at the price of the plan that covers your usage, and
        you go back to your own plan the next month. Above 2,000 minutes, the price is the Premium price plus
        $0.50 for each extra minute.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you would rather not pay extra, you can choose a spending cap instead. Once your minutes run out,
        calls go to your own number and there is no extra charge.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="plans-and-pricing" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Plans and Pricing
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="plans-and-pricing-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Plans and Pricing
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center">
              <ul className="flex flex-col items-center gap-8 text-center">
                {points.map((point) => (
                  <li key={point.label} className="flex flex-col items-center">
                    <FontAwesomeIcon
                      icon={point.icon}
                      className={point.color}
                      style={{ width: "5.5rem", height: "5.5rem" }}
                    />
                    <p className="pt-3 text-lg font-bold uppercase tracking-wide text-white shadow-text">
                      {point.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
