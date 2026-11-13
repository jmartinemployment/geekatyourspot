import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faGlobe,
  faMobileScreen,
  faPhoneSlash,
  faRobot,
  faScrewdriverWrench,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

export default function RightFitSection() {
  const groups = [
    {
      heading: "Right fit",
      items: [
        { icon: faScrewdriverWrench, color: "text-[#C83803]", label: "Trades and home services" },
        { icon: faPhoneSlash, color: "text-white", label: "Calls missed while you work" },
        { icon: faMobileScreen, color: "text-[#BF5934]", label: "Keep the number customers know" },
        { icon: faClipboardList, color: "text-[#C83803]", label: "A record of who called" },
      ],
    },
    {
      heading: "Look elsewhere",
      items: [
        { icon: faUserTie, color: "text-white", label: "A live person on every call" },
        { icon: faGlobe, color: "text-[#BF5934]", label: "Callers outside the US and Canada" },
        { icon: faRobot, color: "text-[#C83803]", label: "AI answering needed today" },
      ],
    },
  ];

  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Geek-Receptionist is for small businesses that miss calls because the people who would answer are busy
        doing the work: contractors, home services, clinics and offices with a small team. It suits an owner who
        wants every missed caller to get a reply and wants a record of who called, without changing the phone
        number customers already know.</p>
      <p className="text-base text-white shadow-text pt-3">
        It is not the right fit if you need a live person on every call, if most of your callers are outside
        the United States and Canada, or if you need AI answering today. Tools that answer calls with AI now are
        covered on this site, including&nbsp;<Link id={`tools-business-operations-ai-receptionist-geek-receptionist-right-fit-lobbystack${idSuffix}`} href="/tools/business-operations/ai-receptionist/lobbystack" className="text-[#C83803] hover:underline">LobbyStack</Link>,&nbsp;<Link id={`tools-business-operations-ai-receptionist-geek-receptionist-right-fit-voksha${idSuffix}`} href="/tools/business-operations/ai-receptionist/voksha" className="text-[#C83803] hover:underline">Voksha</Link>&nbsp;and&nbsp;<Link id={`tools-business-operations-ai-receptionist-geek-receptionist-right-fit-myaifrontdesk${idSuffix}`} href="/tools/business-operations/ai-receptionist/myaifrontdesk" className="text-[#C83803] hover:underline">My AI Front Desk</Link>.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step is to be clear about how your calls arrive today.
        Answer these questions
        when&nbsp;<a href="#consultationAppointment2xl" id={`tools-business-operations-ai-receptionist-geek-receptionist-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>How many calls does your business miss in a typical week, and when do they happen?</li>
        <li>Who answers the phone now, and who should get the alert when a call is missed?</li>
        <li>Do you want to keep your current business number?</li>
        <li>Which carrier handles your business line?</li>
        <li>Do your customers usually call, text, or both?</li>
        <li>What would you like a caller to hear and read when you miss them?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-geek-receptionist-is-for-who-should-look-elsewhere-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Geek-Receptionist Is For, Who Should Look Elsewhere, and What to Do Next
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <div className="flex w-full flex-col gap-10 text-center">
                {groups.map((group) => (
                  <div key={group.heading}>
                    <h3 className="border-b-4 border-white pb-2 text-xl font-black font-[var(--font-sora)] uppercase tracking-widest text-white shadow-text">
                      {group.heading}
                    </h3>
                    <ul className="flex flex-col items-center gap-8 pt-8">
                      {group.items.map((item) => (
                        <li key={item.label} className="flex flex-col items-center">
                          <FontAwesomeIcon
                            icon={item.icon}
                            className={item.color}
                            style={{ width: "5.5rem", height: "5.5rem" }}
                          />
                          <p className="pt-3 text-lg font-bold uppercase tracking-wide text-white shadow-text">
                            {item.label}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-7">
              <h2 id="who-geek-receptionist-is-for-who-should-look-elsewhere-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Geek-Receptionist Is For, Who Should Look Elsewhere, and What to Do Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
