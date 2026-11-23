import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faClipboardCheck,
  faIdCard,
  faMapLocationDot,
  faTags,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function DataMappingSection() {
  const points = [
    { icon: faIdCard, color: "text-[#C83803]", label: "Phone and email as the identity" },
    { icon: faTags, color: "text-white", label: "Tags, fields and stages kept distinct" },
    { icon: faMapLocationDot, color: "text-[#BF5934]", label: "Service area and address fields" },
    { icon: faChartLine, color: "text-[#C83803]", label: "Lead source on every contact" },
    { icon: faClipboardCheck, color: "text-white", label: "Consent recorded with a date" },
    { icon: faUserCheck, color: "text-[#BF5934]", label: "Owner assigned to each lead" },
  ];

  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The choices you make before the first import decide whether GoHighLevel stays clean or becomes a second spreadsheet. The first is identity. Phone number and email are how the platform recognizes a person, so both need to be stored in one consistent format, and you need a rule for what happens when two records turn out to be the same customer.</p>
      <p className="text-base text-white shadow-text pt-3">
        The second is the difference between tags, custom fields and pipeline stages. Use stages for progress in a sale, fields for facts about the person or job, such as service type, address or quote amount, and tags for status that applies across the account, such as past customer or do not text. Mixing these up produces reports nobody can read.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lead source deserves its own field on every contact. Without it you cannot tell whether the next dollar belongs in Google, Facebook or referrals. Capture it from forms and links when the lead arrives, because reconstructing it later is guesswork.</p>
      <p className="text-base text-white shadow-text pt-3">
        Consent needs a field too, along with the date and the way it was given, such as a form checkbox or a reply to a text. Record opt-outs so that no workflow can message someone who asked to stop. Your attorney should review the wording of the consent you collect.</p>
      <p className="text-base text-white shadow-text pt-3">
        Decide how many pipelines you need. One pipeline per service line works when the sales steps differ, but one shared pipeline is simpler when they do not. Also decide how new leads are assigned, by service, by area or by round robin, so every lead has a named owner from the first minute.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-mapping-choices-that-make-or-break-a-gohighlevel-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Mapping Choices That Make or Break a GoHighLevel Deployment
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
              <h2 id="the-data-mapping-choices-that-make-or-break-a-gohighlevel-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data Mapping Choices That Make or Break a GoHighLevel Deployment
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
