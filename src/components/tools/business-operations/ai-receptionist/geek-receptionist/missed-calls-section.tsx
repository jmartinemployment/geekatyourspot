import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBellSlash,
  faClock,
  faFileCircleXmark,
  faHourglassHalf,
  faUserMinus,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

export default function MissedCallsSection() {
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
        Voicemail and rigid phone menus do not fix this. They cannot tell an urgent caller from a routine one,
        and they put the work of following up back on you, usually at the end of a long day. For a small
        business where the people who would answer are the same people doing the work, the phone is always
        competing with the job in front of them.</p>
      <p className="text-base text-white shadow-text pt-3">
        A quick text in your business’s name changes what the caller does next. The caller knows the call was
        seen, has a way to reply with the details, and does not have to start over with someone else. That is
        the gap Geek-Receptionist closes.</p>
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
