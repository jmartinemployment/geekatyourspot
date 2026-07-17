'use client'

import { useEffect } from 'react'
import { pushGtmEvent } from '@/lib/gtm/data-layer'
import { GTM_CLICK_PREFIX, GTM_LINK_PREFIX } from '@/lib/gtm/link-id'

function getClickText(element: HTMLElement): string {
  return (element.textContent ?? '').replace(/\s+/g, ' ').trim().slice(0, 120)
}

export function GtmClickTracker(): null {
  useEffect(() => {
    function handleClick(event: MouseEvent): void {
      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest(`a[id^="${GTM_LINK_PREFIX}"]`)
      if (link instanceof HTMLAnchorElement) {
        pushGtmEvent('gtm_link_click', {
          link_id: link.id,
          link_href: link.getAttribute('href') ?? undefined,
          link_text: getClickText(link),
          page_path: window.location.pathname,
        })
        return
      }

      const button = target.closest(`button[id^="${GTM_CLICK_PREFIX}"]`)
      if (button instanceof HTMLButtonElement) {
        pushGtmEvent('gtm_click', {
          click_id: button.id,
          click_text: getClickText(button),
          page_path: window.location.pathname,
        })
      }
    }

    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [])

  return null
}
