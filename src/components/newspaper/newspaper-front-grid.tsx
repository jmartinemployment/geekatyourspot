// import Link from "next/link";

// import type { NewspaperPageData } from "@/app/(newspaper-blog)/blog/pagination";

// type NewspaperFrontGridProps = Readonly<{
//   data: NewspaperPageData;
// }>;

// export function NewspaperFrontGrid({ data }: NewspaperFrontGridProps): React.JSX.Element {
//   const { pillarContent, toolContent, pillarExcerpts, blog, tools, page } = data;

//   return (
//     <main className="grid grid-cols-1 gap-6 pt-6 lg:grid-cols-4">
//       <div className="space-y-6 lg:col-span-1 lg:border-r lg:border-black lg:pr-6">
//         <section className="space-y-4">
//           <h3 className="border-b-2 border-black pb-1 font-sans text-xs font-bold tracking-wider uppercase">
//             Pillar Content
//             {page > 1 && <span className="ml-1 font-normal text-neutral-500">(continued)</span>}
//           </h3>
//           {pillarContent.length > 0 ? (
//             pillarContent.map((pillar) => (
//               <article
//                 key={pillar.slug}
//                 className="space-y-1 border-b border-neutral-300 pb-4 last:border-0 last:pb-0"
//               >
//                 <Link href={pillar.href}>
//                   <h4 className="font-[family-name:var(--font-news-header)] text-xl leading-tight font-bold hover:underline">
//                     {pillar.title}
//                   </h4>
//                 </Link>
//                 <p className="text-justify font-sans text-xs leading-relaxed text-neutral-700">{pillar.excerpt}</p>
//               </article>
//             ))
//           ) : (
//             <p className="font-sans text-xs text-neutral-600">No more pillar content on this page.</p>
//           )}
//         </section>

//         {toolContent.length > 0 && (
//           <section className="space-y-4 border-t border-dashed border-neutral-400 pt-4">
//             <h3 className="border-b-2 border-black pb-1 font-sans text-xs font-bold tracking-wider uppercase">
//               Tool Content
//               {page > 1 && <span className="ml-1 font-normal text-neutral-500">(continued)</span>}
//             </h3>
//             {toolContent.map((tool) => (
//               <article
//                 key={tool.slug}
//                 className="space-y-1 border-b border-neutral-300 pb-4 last:border-0 last:pb-0"
//               >
//                 <Link href={tool.href}>
//                   <h4 className="font-[family-name:var(--font-news-header)] text-xl leading-tight font-bold hover:underline">
//                     {tool.title}
//                   </h4>
//                 </Link>
//                 <p className="text-justify font-sans text-xs leading-relaxed text-neutral-700">{tool.excerpt}</p>
//               </article>
//             ))}
//           </section>
//         )}

//         {pillarExcerpts.length > 0 && (
//           <section className="space-y-4 border-t border-dashed border-neutral-400 pt-4">
//             <h3 className="border-b-2 border-black pb-1 font-sans text-xs font-bold tracking-wider uppercase">
//               Pillar Excerpts
//             </h3>
//             {pillarExcerpts.map((pillar) => (
//               <article
//                 key={pillar.slug}
//                 className="space-y-1 border-b border-neutral-300 pb-4 last:border-0 last:pb-0"
//               >
//                 <Link href={pillar.href}>
//                   <h4 className="font-[family-name:var(--font-news-header)] text-xl leading-tight font-bold hover:underline">
//                     {pillar.title}
//                   </h4>
//                 </Link>
//                 <p className="text-justify font-sans text-xs leading-relaxed text-neutral-700">{pillar.excerpt}</p>
//               </article>
//             ))}
//           </section>
//         )}
//       </div>

//       <div className="space-y-4 lg:col-span-2 lg:border-r lg:border-black lg:px-6">
//         <h3 className="border-b-2 border-black pb-1 font-sans text-xs font-bold tracking-wider uppercase">
//           Blog Post Excerpts
//           {page > 1 && <span className="ml-1 font-normal text-neutral-500">(continued)</span>}
//         </h3>

//         {blog.lead ? (
//           <article className="space-y-3">
//             <Link href={blog.lead.href}>
//               <h2 className="text-center font-[family-name:var(--font-news-header)] text-2xl leading-tight font-extrabold tracking-tight uppercase md:text-4xl hover:underline">
//                 {blog.lead.title}
//               </h2>
//             </Link>
//             <p className="border-y border-neutral-300 py-1.5 text-center font-sans text-sm text-neutral-700">
//               {blog.lead.listCopy}
//             </p>
//           </article>
//         ) : blog.wire.length === 0 ? (
//           <p className="font-sans text-sm text-neutral-600">No published blog posts on this page.</p>
//         ) : null}

//         {blog.wire.length > 0 && (
//           <div className={blog.lead ? "space-y-4 border-t border-dashed border-neutral-400 pt-4" : "space-y-4"}>
//             <h4 className="font-sans text-[10px] font-bold tracking-wider uppercase">
//               {blog.lead ? "More on the wire" : "On the wire"}
//             </h4>
//             {blog.wire.map((post) => (
//               <article key={post.href} className="space-y-1">
//                 <Link href={post.href}>
//                   <h5 className="font-[family-name:var(--font-news-header)] text-lg font-bold leading-tight hover:underline">
//                     {post.title}
//                   </h5>
//                 </Link>
//                 <p className="font-sans text-xs leading-relaxed text-neutral-700">{post.listCopy}</p>
//               </article>
//             ))}
//           </div>
//         )}
//       </div>

//       <div className="space-y-4 lg:col-span-1">
//         <h3 className="border-b-2 border-black pb-1 font-sans text-xs font-bold tracking-wider uppercase">
//           Tools — Advertisements
//         </h3>
//         <div className="space-y-4">
//           {tools.map((tool) => (
//             <aside
//               key={tool.href}
//               className="border-2 border-black bg-neutral-100 p-3 font-sans text-xs shadow-[4px_4px_0_0_#000]"
//             >
//               <p className="mb-1 text-[9px] font-bold tracking-widest text-neutral-500 uppercase">Sponsored</p>
//               <Link href={tool.href}>
//                 <p className="font-[family-name:var(--font-news-header)] text-sm font-bold leading-tight hover:underline">
//                   {tool.title}
//                 </p>
//               </Link>
//               <p className="mt-2 leading-relaxed text-neutral-700">{tool.listCopy}</p>
//             </aside>
//           ))}
//           {tools.length === 0 && (
//             <p className="font-sans text-xs text-neutral-600">No tool articles on this page.</p>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// }
