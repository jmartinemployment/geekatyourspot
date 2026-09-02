const DEFAULT_GEEK_API_URL = "http://localhost:5051";

export function getGeekApiUrl(): string {
  const url = process.env.GEEK_API_URL?.trim() || DEFAULT_GEEK_API_URL;
  return url.replace(/\/$/, "");
}

export type GeekApiFetchOptions = {
  tags?: string[];
  revalidate?: number | false;
};

export async function geekApiFetch<T>(
  path: string,
  options: GeekApiFetchOptions = {},
): Promise<T> {
  const baseUrl = getGeekApiUrl();
  const url = `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;

  const response = await fetch(url, {
    next: {
      tags: options.tags,
      revalidate: options.revalidate,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Geek API request failed: ${response.status} ${response.statusText} (${url})`,
    );
  }

  return (await response.json()) as T;
}
