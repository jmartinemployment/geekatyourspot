interface TimelineCard {
  year: string;
  label: string;
  description: string;
}

export const TIMELINE: readonly TimelineCard[] = [
  {
    year: "1982",
    label: "Timex Sinclair and Commodore 64",
    description:
      "My programming journey began on the Timex Sinclair, where I wrote this game in BASIC, and it continued on the Commodore 64.",
  },
  {
    year: "1985",
    label: "Apple Macintosh",
    description: "I worked in Illustrator, Photoshop, FileMaker, QuarkXPress, and Pascal.",
  },
  {
    year: "1993",
    label: "Macintosh Office",
    description: "I implemented Macintosh Office with a file server, five Macs, and two PCs.",
  },
  {
    year: "2007",
    label: "ACORD Architecture",
    description: "I built real-world applications of the ACORD Reference Architecture.",
  },
  {
    year: "2014",
    label: "SOA",
    description: "Windows Services provided the access points to implement SOA.",
  },
  {
    year: "2026",
    label: "Geek @ Your Spot LLC",
    description: "Geek @ Your Spot LLC brings AI-powered solutions to small businesses that need enterprise power.",
  },
];

export function TimelineRow({ cards }: Readonly<{ cards: readonly TimelineCard[] }>) {
  return (
    <div className="grid grid-cols-3 gap-3 pt-3">
      {cards.map((card) => (
        <div
          key={card.year}
          className="rounded-lg bg-[#0B162A] p-2 text-center shadow-[0_4px_15px_rgba(0,0,0,0.2)] md:p-3"
        >
          <p className="font-black font-[var(--font-sora)] text-base text-[#C83803] md:text-xl">{card.year}</p>
          <p className="pt-1 text-[0.7rem] font-bold leading-tight text-white md:text-sm">{card.label}</p>
          <p className="pt-1 text-[0.7rem] leading-snug text-white/80 md:text-sm">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
