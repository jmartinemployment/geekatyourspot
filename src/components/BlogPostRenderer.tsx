// // components/BlogPostRenderer.tsx
// import React from 'react';
// import { CompletePostPayload, RenderableBlock } from '@/types/blog';

// type BlogPostRendererProps = {
//   post: CompletePostPayload;
// };

// export default function BlogPostRenderer({ post }: BlogPostRendererProps) {
//   return (
//     <article className="max-w-2xl mx-auto px-6 py-16 antialiased selection:bg-blue-100">
      
//       {/* Article Header Context */}
//       <header className="mb-12 pb-8 border-b border-gray-200">
//         <div className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
//           <span>{post.department}</span>
//           <span className="text-gray-300">•</span>
//           <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-[10px]">
//             {post.post_type}
//           </span>
//         </div>
//         <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
//           {post.title}
//         </h1>
//       </header>

//       {/* Structural Nested Sections */}
//       <div className="space-y-12">
//         {post.sections.map((section, sectionIdx) => (
//           <section key={sectionIdx} className="scroll-mt-20">
            
//             {/* Main Section H2 Breakpoints */}
//             {section.type === 'section' && section.title && (
//               <h2 className="text-2xl font-bold text-gray-900 tracking-tight mt-10 mb-6 border-l-4 border-blue-600 pl-4">
//                 {section.title}
//               </h2>
//             )}

//             {/* Inner Content Block Stack */}
//             <div className="space-y-6">
//               {section.blocks.map((block, blockIdx) => (
//                 <BlockComponent key={blockIdx} block={block} />
//               ))}
//             </div>

//           </section>
//         ))}
//       </div>
//     </article>
//   );
// }

// function BlockComponent({ block }: { block: RenderableBlock }) {
//   switch (block.block_type) {
//     case 'paragraph':
//       return (
//         <p className="text-gray-700 text-[17px] leading-relaxed font-normal tracking-normal text-justify">
//           {block.body}
//         </p>
//       );
      
//     case 'code_block':
//       return (
//         <div className="my-6 rounded-lg overflow-hidden border border-gray-800 shadow-md">
//           <div className="bg-gray-800 px-4 py-1.5 flex items-center justify-between text-xs text-gray-400 font-mono select-none">
//             <span>source code</span>
//           </div>
//           <pre className="bg-gray-950 text-emerald-400 p-5 overflow-x-auto font-mono text-[14px] leading-relaxed">
//             <code>{block.body}</code>
//           </pre>
//         </div>
//       );
      
//     case 'h1':
//       return <h3 className="text-xl font-bold text-gray-900 tracking-tight mt-8 mb-3">{block.heading_text}</h3>;
      
//     case 'h3':
//       return <h4 className="text-lg font-semibold text-gray-800 tracking-tight mt-6 mb-2">{block.heading_text}</h4>;
      
//     case 'image':
//       return (
//         <figure className="my-8 space-y-2">
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img 
//             src={block.media_url} 
//             alt={block.media_caption || 'Editorial asset'} 
//             className="w-full h-auto rounded-lg shadow-sm border border-gray-100 object-cover max-h-[400px]"
//           />
//           {block.media_caption && (
//             <figcaption className="text-xs text-center text-gray-500 font-medium italic pt-1">
//               {block.media_caption}
//             </figcaption>
//           )}
//         </figure>
//       );
      
//     case 'ol':
//       return (
//         <ol className="list-decimal pl-6 my-4 space-y-3 text-gray-700 text-[17px] leading-relaxed">
//           {block.items.map((item, idx) => (
//             <li key={idx} className="pl-2">{item}</li>
//           ))}
//         </ol>
//       );
      
//     case 'ul':
//       return (
//         <ul className="list-disc pl-6 my-4 space-y-3 text-gray-700 text-[17px] leading-relaxed">
//           {block.items.map((item, idx) => (
//             <li key={idx} className="pl-2">{item}</li>
//           ))}
//         </ul>
//       );
      
//     default:
//       return null;
//   }
// }
