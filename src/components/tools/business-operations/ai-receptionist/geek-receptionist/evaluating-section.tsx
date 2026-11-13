import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faBan,
  faCalendarDays,
  faGaugeHigh,
  faShieldHalved,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function EvaluatingSection() {
  const points = [
    { icon: faTag, color: "text-white", label: "No setup fee" },
    { icon: faCalendarDays, color: "text-[#0B162A]", label: "Billed monthly through PayPal" },
    { icon: faBan, color: "text-white", label: "Cancel anytime" },
    { icon: faGaugeHigh, color: "text-[#0B162A]", label: "AI-answered minutes by plan" },
    { icon: faArrowTrendUp, color: "text-white", label: "Over your minutes, the plan that fits" },
    { icon: faShieldHalved, color: "text-[#0B162A]", label: "A spending cap if you prefer" },
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
        The first question to ask about any receptionist is how many calls you actually miss. Count them for a
        normal week, note the hours when they happen, and think about what a single new customer is worth to
        your business. A handful of missed calls a week can cost more than any monthly plan.</p>
      <p className="text-base text-white shadow-text pt-3">
        The second question is what you want to happen next. If a text, an alert and a voicemail are enough to
        win the job back, the missed call handling described on this page is built for that and runs today. If
        you want a voice to answer and talk with the caller, that is the AI voice step.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI voice answering is the next step for Geek-Receptionist, and these plans are for it. They open soon,
        and this page will say so when they are live. The prices below are the planned plans and prices, and
        they are marked as coming soon until then.</p>
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
        Each plan is measured in AI-answered minutes per month. The way to pick one is to estimate how many
        calls you would send to the AI and how long a typical call lasts.</p>
      <p className="text-base text-white shadow-text pt-3">
        There is no setup fee. Billing is monthly through PayPal, and you can cancel anytime. You are not
        signing up for a long contract to find out whether it fits.</p>
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
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-geek-receptionist-fit-and-the-planned-ai-voice-plans-and-pricing" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Geek-Receptionist Fit, and the Planned AI Voice Plans and Pricing
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
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
            <div className="col-span-7">
              <h2 id="how-to-judge-geek-receptionist-fit-and-the-planned-ai-voice-plans-and-pricing-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge Geek-Receptionist Fit, and the Planned AI Voice Plans and Pricing
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
