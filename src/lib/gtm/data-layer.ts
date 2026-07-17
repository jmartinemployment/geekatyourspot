declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export function pushGtmEvent(
  event: string,
  payload: Record<string, string | number | boolean | undefined> = {},
): void {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push({ event, ...payload })
}
