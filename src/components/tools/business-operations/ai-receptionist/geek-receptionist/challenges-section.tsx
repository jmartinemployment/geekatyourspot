import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBellSlash,
  faClock,
  faFileCircleXmark,
  faHourglassHalf,
  faUserMinus,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

export default function ChallengesSection() {
  const points = [
    { icon: faClock, color: "text-[#C83803]", label: "Nobody is free to answer" },
    { icon: faVoicemail, color: "text-white", label: "Voicemail goes unchecked" },
    { icon: faUserMinus, color: "text-[#BF5934]", label: "The lead goes to a competitor" },
    { icon: faFileCircleXmark, color: "text-[#C83803]", label: "No record of who called" },
    { icon: faHourglassHalf, color: "text-white", label: "Follow up comes too late" },
    { icon: faBellSlash, color: "text-[#BF5934]", label: "You never knew they called" },
  ];

  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A caller with an urgent problem rarely waits. When the phone goes to voicemail, many callers hang up and
        try the next business, and the first business that answers usually gets the job. The call you missed is
        not just a missed call. It is a customer who has already moved on.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost is not only the lost job. Staff stop what they are doing to chase callbacks, and nobody can say
        who called, when, or what they wanted. A phone number in a missed call log is not a lead. It is a guess,
        and someone has to spend time turning it into a conversation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Voicemail does not fix this. Many callers never leave a message, and the ones who do wait until you find
        the time to listen, which is often the end of a long day. By then the problem is either solved by
        someone else or no longer urgent.</p>
      <p className="text-base text-white shadow-text pt-3">
        Rigid phone menus do not fix it either. They cannot tell an urgent caller from a routine one, and they
        put the work of following up back on you. A caller who presses three buttons and still reaches no one
        is more likely to hang up than to wait.</p>
      <p className="text-base text-white shadow-text pt-3">
        There is also the record. A number on a missed call log does not say what the caller wanted, whether
        they have called before, or whether anyone replied. Without that history, the same caller can be missed
        twice and nobody notices.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business, the people who would answer are the same people doing the work, so the phone is
        always competing with the job in front of them. A full time front desk may not make sense for a handful
        of missed calls a week, and the missed calls still cost real jobs.</p>
      <p className="text-base text-white shadow-text pt-3">
        A quick text in your business’s name changes what the caller does next. They know the call was seen,
        they have a way to reply with the details, and they do not have to start over with someone else.</p>
      <p className="text-base text-white shadow-text pt-3">
        That is the gap Geek-Receptionist closes. Today it does not answer the call for you. It makes sure that
        no missed call goes quiet.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-a-missed-call-costs-you" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What a Missed Call Costs You
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-a-missed-call-costs-you-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What a Missed Call Costs You
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
