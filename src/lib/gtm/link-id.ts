const GTM_LINK_PREFIX = 'gtm-link-'

export { GTM_LINK_PREFIX }

function normalizeSegment(segment: string): string {
  return segment
    .replace(/^\/+|\/+$/g, '')
    .replace(/[^a-zA-Z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase()
}

/** Build a stable GTM link id from path segments or a single slug. */
export function gtmLinkId(segments: string | readonly string[], suffix?: string): string {
  const parts = (typeof segments === 'string' ? [segments] : [...segments])
    .flatMap((segment) => segment.split('/'))
    .map(normalizeSegment)
    .filter(Boolean)

  if (suffix) {
    parts.push(normalizeSegment(suffix))
  }

  return `${GTM_LINK_PREFIX}${parts.join('-')}`
}

/** Derive a GTM link id from an href, with optional suffix for duplicate targets. */
export function gtmLinkIdFromHref(href: string, suffix?: string): string {
  if (href.startsWith('#')) {
    return gtmLinkId(['anchor', href.slice(1)], suffix)
  }

  if (href.startsWith('mailto:')) {
    return gtmLinkId(['mailto', href.slice(7)], suffix)
  }

  if (href.startsWith('tel:')) {
    return gtmLinkId(['tel', href.slice(4).replace(/\D/g, '')], suffix)
  }

  if (href.startsWith('http://') || href.startsWith('https://')) {
    try {
      const url = new URL(href)
      const parts = [url.hostname, ...url.pathname.split('/').filter(Boolean)]
      return gtmLinkId(parts, suffix)
    } catch {
      return gtmLinkId(['external'], suffix)
    }
  }

  const parts = href.split('/').filter(Boolean)
  return gtmLinkId(parts, suffix)
}

export const GTM_CLICK_PREFIX = 'gtm-click-'

export function gtmClickId(segments: string | readonly string[]): string {
  const parts = (typeof segments === 'string' ? [segments] : [...segments])
    .flatMap((segment) => segment.split('/'))
    .map(normalizeSegment)
    .filter(Boolean)

  return `${GTM_CLICK_PREFIX}${parts.join('-')}`
}
