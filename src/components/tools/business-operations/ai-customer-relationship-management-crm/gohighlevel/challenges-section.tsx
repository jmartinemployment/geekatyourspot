import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentSlash,
  faHourglassHalf,
  faInbox,
  faPhoneSlash,
  faUserMinus,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function ChallengesSection() {
  const points = [
    { icon: faInbox, color: "text-[#C83803]", label: "Leads scattered across apps" },
    { icon: faUserXmark, color: "text-white", label: "Customers listed twice" },
    { icon: faHourglassHalf, color: "text-[#BF5934]", label: "Quotes nobody chased" },
    { icon: faCommentSlash, color: "text-[#C83803]", label: "Texts with no record of consent" },
    { icon: faPhoneSlash, color: "text-white", label: "Missed calls never returned" },
    { icon: faUserMinus, color: "text-[#BF5934]", label: "Conversations that leave with staff" },
  ];

  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Every Friday, the owner of a South Florida roofing company scrolls through texts, email, Facebook messages and a notebook, trying to work out who was promised a call back. The problem is not effort. It is that follow-up lives in the owner’s memory, and memory does not scale past a handful of customers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Leads arrive in many places: website forms, Google Business messages, Facebook and Instagram, texts, calls and email. Each place has its own notification, and the owner is the only thing connecting them. A customer who texts on Monday and emails on Wednesday often shows up as two different people, with two half-finished histories and no single answer to the question of what was already said.</p>
      <p className="text-base text-white shadow-text pt-3">
        Speed matters because people who ask several companies for a quote usually hire whoever answers first and sounds organized. A reply that takes four hours because the owner was on a ladder is a reply that arrives after the decision has been made. Quotes that are sent and never chased are a second quiet loss, and past customers who are never asked for a review or a repeat job are a third.</p>
      <p className="text-base text-white shadow-text pt-3">
        Texting adds a legal layer. Sending marketing texts without recorded consent can create claims under federal rules and under Florida’s own telephone solicitation law. Texting from a personal phone leaves no record of who agreed to what. Have an attorney review your consent wording before you send marketing messages, whichever system you use.</p>
      <p className="text-base text-white shadow-text pt-3">
        The last cost is staff turnover. When a team member leaves, the conversations they had with customers leave on their phone. A shared system keeps the history with the customer, so the next person can pick up exactly where the last one stopped.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-following-up-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep following up by hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-following-up-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep following up by hand
              </h2>
              {body()}
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
