import "server-only";

const API_BASE_URL = process.env.GEEK_API_URL ?? "https://api.geekatyourspot.com";
const DEFAULT_REVALIDATE_SECONDS = Number(process.env.CONTENT_REVALIDATE_SECONDS ?? 3600);

export const POST_TYPE = {
  blogPosting: "BlogPosting",
  technicalArticle: "TechnicalArticle",
  newsArticle: "NewsArticle",
} as const;

export interface BlogPost {
  postId: number;
  postType: string;
  languageCode: string;
  slug: string;
  title: string;
  body: string;
  publishedAt: string | null;
  localizedTagsJson: string;
  jsonLd?: Record<string, unknown> | null;
  /** Stored schema.org JSON+LD from GeekAPI (flat or @graph). Source of truth for ld+json scripts. */
  schemaMetadataJson?: string | null;
  departmentId?: number | null;
  departmentSlug?: string | null;
  presentation?: Record<string, string> | null;
}

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
};