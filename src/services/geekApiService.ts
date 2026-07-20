import "server-only";

const API_BASE_URL = process.env.GEEK_API_URL ?? "https://api.geekatyourspot.com";
const DEFAULT_REVALIDATE_SECONDS = Number(process.env.CONTENT_REVALIDATE_SECONDS ?? 3600);

// Values match GeekBackend's geek_blog.post_type_enum — used for the `postType` query param.
export const POST_TYPE = {
  blog: "Blog",
  pillar: "Pillar",
  tool: "Tool",
} as const;

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
export type HeroProperties = {
  post2: BlogPost;
  department2: string;
  slug2: string
};
export interface CaseStudySummary {
  id: number;
  descriptiveName: string | null;
  slug: string | null;
  executiveSummary: string | null;
  subtitle: string | null;
  primaryActor: string | null;
  trigger: string | null;
  problemChallenge: string | null;
  solution: string | null;
  postConditions: string | null;
  industryCitation: string | null;
}

export interface UseCase {
  id: number;
  descriptiveName: string;
  slug: string;
  summary: string | null;
  caseStudyId: number | null;
  caseStudy: CaseStudySummary | null;
}

export interface Department {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  iconName: string | null;
  sortOrder: number;
  useCases: UseCase[] | null;
}

export interface PostListItem {
  slug: string;
  title: string;
  listCopy: string;
  href: string;
}

/** @deprecated Use PostListItem */
export type HomeUseCase = PostListItem;

export interface WebPostSection {
  headingText: string | null;
  bodyContent: string;
  mediaUrl: string | null;
  mediaAlt: string | null;
}

export interface WebPostContentStructure {
  sections: WebPostSection[];
  mainBody: string | null;
}

export interface WebPost {
  id: string;
  slug: string;
  title: string;
  contentStructure: WebPostContentStructure;
  createdAt: string;
  updatedAt: string | null;
}

class GeekApiNotFoundError extends Error {
  constructor(path: string) {
    super(`Not found: ${path}`);
    this.name = "GeekApiNotFoundError";
  }
}

type FetchOptions = {
  authenticated?: boolean;
  revalidate?: number | false;
};

function baseUrl(): string {
  return API_BASE_URL.replace(/\/$/u, "");
}

function apiKey(): string | undefined {
  const key = process.env.GEEK_BACKEND_API_KEY;
  return key && key.length > 0 ? key : undefined;
}

async function geekApiFetch<T>(
  path: string,
  options?: FetchOptions,
  init?: RequestInit,
): Promise<T> {
  const headers = new Headers(init?.headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }

  if (options?.authenticated) {
    const key = apiKey();
    if (!key) {
      throw new Error("GEEK_BACKEND_API_KEY is required for this Geek API request");
    }
    headers.set("X-API-Key", key);
  }

  const revalidate = options?.revalidate ?? DEFAULT_REVALIDATE_SECONDS;
  const next =
    revalidate === false ? { revalidate: 0 as const } : { revalidate };

  const response = await fetch(`${baseUrl()}${path}`, {
    ...init,
    headers,
    next,
  });

  if (response.status === 404) {
    throw new GeekApiNotFoundError(path);
  }

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Geek API ${response.status} for ${path}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export const geekApiService = {
  getBlogPost: async (
    apiSlug: string,
    languageCode = "en",
  ): Promise<BlogPost | null> => {
    const slugPath = apiSlug.split("/").map(encodeURIComponent).join("/");

    try {
      return await geekApiFetch<BlogPost>(
        `/api/blog/${encodeURIComponent(languageCode)}/${slugPath}`,
      );
    } catch (error) {
      if (error instanceof GeekApiNotFoundError) {
        return null;
      }
      throw error;
    }
  },

  listPublishedBlogPosts: async (
    languageCode = "en",
    postType?: string,
  ): Promise<BlogPost[]> => {
    const params = new URLSearchParams({
      lang: languageCode,
      status: "published",
    });
    if (postType) {
      params.set("postType", postType);
    }

    // Published catalog is a public read on GeekAPI (no API key required for SSG build).
    return geekApiFetch<BlogPost[]>(`/api/blog/all?${params}`);
  },

  getDepartments: async (): Promise<Department[]> => {
    return geekApiFetch<Department[]>("/api/departments");
  },

  getDepartmentContent: async (): Promise<Department[]> => {
    return geekApiFetch<Department[]>("/api/departments/content", { authenticated: true });
  },

  getWebPost: async (slug: string): Promise<WebPost | null> => {
    try {
      return await geekApiFetch<WebPost>(
        `/api/webposts/${encodeURIComponent(slug)}`,
        { authenticated: true },
      );
    } catch (error) {
      if (error instanceof GeekApiNotFoundError) {
        return null;
      }
      throw error;
    }
  },

  listWebPosts: async (): Promise<WebPost[]> => {
    return geekApiFetch<WebPost[]>("/api/webposts", { authenticated: true });
  },
};
