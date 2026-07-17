// import { NEWSPAPER_NAME } from "@/app/(newspaper-blog)/blog/constants";

// type NewspaperMastheadProps = Readonly<{
//   page: number;
//   totalPages: number;
// }>;

// export function NewspaperMasthead({ page, totalPages }: NewspaperMastheadProps): React.JSX.Element {
//   const editionLabel = String(page).padStart(2, "0");

//   return (
//     <header className="border-b-4 border-black pt-4 pb-2 text-center">
//       <p className="font-sans text-[10px] font-bold tracking-widest text-neutral-600 uppercase">
//         &quot;All the Code That&apos;s Fit to Print&quot;
//       </p>
//       <h1 className="my-2 font-[family-name:var(--font-news-header)] text-5xl font-black tracking-tight uppercase md:text-7xl lg:text-8xl">
//         {NEWSPAPER_NAME}
//       </h1>
//       <div className="mt-3 flex justify-between border-t border-black py-1 font-sans text-xs font-bold tracking-wide uppercase">
//         <div>
//           Vol. I .. No. {editionLabel}
//           {totalPages > 1 && (
//             <span className="ml-2 font-normal text-neutral-600">
//               ({page} of {totalPages})
//             </span>
//           )}
//         </div>
//         <div>{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</div>
//         <div>Delray Beach, FL</div>
//       </div>
//     </header>
//   );
// }
