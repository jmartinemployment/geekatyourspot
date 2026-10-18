'use client'

import { useEffect } from 'react'

/*
 * Tailwind's hover: variant sits inside @media (hover: hover), so a phone never shows it. On a
 * screen that cannot hover, the first tap on a text link or a heading link shows its hover state
 * and the second tap follows it. globals.css widens hover: to match [data-tapped] and anything
 * inside it, so each link keeps the hover it already has: the underline on a link carrying
 * hover:underline, and the colour on a heading wrapped in a link (the home page cards). A card
 * whose hover only changes its background is not a text link and follows on the first tap.
 */
const HEADING = ':is(h1, h2, h3, h4, h5, h6)'
const TAPPABLE = [
  'a[href][class*="hover:underline"]',
  `a[href]:has(> ${HEADING}[class^="hover:"])`,
  `a[href]:has(> ${HEADING}[class*=" hover:"])`,
].join(', ')
const TAPPED = 'data-tapped'

export function LinkTapToggle(): null {
  useEffect(() => {
    const cannotHover = window.matchMedia('(hover: none)')
    // Only a finger gets the toggle; a keyboard or a screen reader activates the link at once.
    let fromTouch = false

    function handlePointerDown(event: PointerEvent): void {
      fromTouch = event.pointerType === 'touch'
    }

    function handlePointerCancel(): void {
      fromTouch = false
    }

    function handleClick(event: MouseEvent): void {
      const touched = fromTouch
      fromTouch = false

      const target = event.target
      const link = target instanceof Element ? target.closest(TAPPABLE) : null

      const tapped = document.querySelector(`[${TAPPED}]`)
      if (tapped && tapped !== link) tapped.removeAttribute(TAPPED)

      if (!link || !touched || !cannotHover.matches) return

      if (link.hasAttribute(TAPPED)) {
        link.removeAttribute(TAPPED)
        return
      }

      event.preventDefault()
      event.stopPropagation()
      link.setAttribute(TAPPED, '')
    }

    window.addEventListener('pointerdown', handlePointerDown, true)
    window.addEventListener('pointercancel', handlePointerCancel, true)
    window.addEventListener('click', handleClick, true)
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown, true)
      window.removeEventListener('pointercancel', handlePointerCancel, true)
      window.removeEventListener('click', handleClick, true)
    }
  }, [])

  return null
}
