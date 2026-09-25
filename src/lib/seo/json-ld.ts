/**
 * Structured data helpers.
 *
 * Types come from `schema-dts`, so a page annotates its payload with the
 * schema.org type it is actually publishing -- `WithContext<SoftwareApplication>`,
 * `WithContext<Article>`, `Graph` for an `@graph` container -- and a misspelled
 * property or a value of the wrong shape becomes a compile error instead of
 * structured data that ships and quietly fails validation.
 *
 * The payload goes into a native `<script type="application/ld+json">`.
 * `next/script` is for scheduling the load and execution of JavaScript; JSON-LD
 * is inert data a crawler reads, so the plain tag is the right one.
 */

/**
 * Serializes structured data for embedding in a script tag.
 *
 * `<`, `>` and `&` are escaped to their `\uXXXX` forms. JSON decodes those back
 * to the same characters, so the data a crawler reads is unchanged, while a
 * `</script>` sequence inside a string value can no longer close the tag early
 * and let the rest of the payload parse as HTML.
 */
export function safeJsonLd<T>(data: T): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}
