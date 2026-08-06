import Image from "next/image";

export default function OverviewSection() {
  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <Image
                width="460"
                height="460"
                src="/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-0.avif"
                alt="Transforming Marketing Chaos into Clarity" />
            </div>
            <div className="col-span-7">
              <h2 id="transforming-marketing-challenges-into-opportunities" className="text-white lg:text-4xl font-black font-[var(--font-sora)] shadow-text">
                Transforming Marketing Chaos into Clarity
              </h2>
              <p className="text-md text-white shadow-text pt-3">In the fast-paced world of business-to-business (B2B) marketing, many organizations face the uphill battle of
                In the bustling world of marketing, small businesses are often caught in a whirlwind of tasks—endless spreadsheets,
                countless social media posts, and a deluge of customer queries. These manual processes not only consume precious
                hours but also increase the risk of errors and missed opportunities. The constant juggling act leaves little room
                for strategic thinking or creative innovation, causing frustration and stifling growth.
              </p>
              <p className="text-md text-white shadow-text pt-3">Enter AI Marketing Systems. These intelligent solutions streamline marketing efforts by automating repetitive
                Enter AI Marketing Systems, a game-changer that streamlines these processes and frees up valuable time. By
                automating routine tasks, AI helps small businesses focus on what truly matters: building relationships and driving
                sales. With features like accelerated deployment and workflow configuration, AI empowers teams to execute marketing
                campaigns more efficiently and effectively, reducing costs and enhancing customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
