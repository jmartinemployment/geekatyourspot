// services/apiService.ts
import { CompletePostPayload } from '@/types/blog';
import fs from 'fs/promises';
import path from 'path';

// export async function fetchPostFromAPI(slug: string): Promise<CompletePostPayload | null> {
//   // Local development mock mode
//   if (process.env.NODE_ENV === 'development' || !process.env.EXTERNAL_API_URL) {
//     try {
//       const mockFilePath = path.join(process.cwd(), 'public', 'mock-post.json');
//       const rawData = await fs.readFile(mockFilePath, 'utf-8');
//       return JSON.parse(rawData) as CompletePostPayload;
//     } catch (error) {
//       console.warn("Local mock file not found in /public. Falling back to inline memory object.", error);
      
//       // Inline hardcoded fallback so your app never 404s during local development
//       return fallbackMockData;
//     }
//   }

//   // Remote network fetch boundary
//   try {
//     const response = await fetch(`${process.env.EXTERNAL_API_URL}/posts/${slug}`, {
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' }
//     });
//     if (!response.ok) return null;
//     return await response.json();
//   } catch {

//     return null;
//   }
// }

// // Solid baseline data structural backup
// const fallbackMockData: CompletePostPayload = {
//   title: "Emergency Fallback: Local Environment Configuration",
//   post_type: "Pillar",
//   department: "Systems Engineering",
//   sections: [
//     {
//       type: "intro",
//       title: null,
//       blocks: [
//         {
//           block_type: "paragraph",
//           body: "This layout is rendering out of hardcoded server memory because the static JSON file in your public directory could not be resolved by the Node process runtime environment."
//         }
//       ]
//     }
//   ]
// };
  export interface PostSection {
    sortOrder: number;
    headingTag: string | null;
    headingText: string | null;
    bodyContent: string;
    mediaUrl: string | null;
    mediaAlt: string | null;
  }

  export interface BlogPost {
    postId: number;
    postType: string;
    schemaType: string;
    languageCode: string;
    slug: string;
    title: string;
    summary: string;
    metaDescription: string | null;
    mainSummary: string;
    heroSummary: string;
    homeSummary: string;
    blogSummary: string;
    advertisingSummary: string;
    sections: PostSection[];
    publishedAt: string | null;
    categoryId: number;
    categorySlug: string;
    presentation: Record<string, string>;
    jsonLdOverride: string | null;
  }
  export interface CategoryPostSummary {
    categorySlug: string;
    categoryName: string | null;
    title: string;
    summary: string;
    postId: number;
    categoryId: number;
  }
  const API_BASE_URL = process.env.EXTERNAL_API_URL ?? "https://api.geekatyourspot.com";
