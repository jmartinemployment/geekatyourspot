/**
 * Answers 410 Gone for addresses that were removed on purpose and will not return. `next.config.ts`
 * rewrites each of those addresses here. A 410 tells Google the removal is permanent, where a 404
 * only says nothing is there.
 */
const BODY = "410 Gone: this page was permanently removed.\n";

function gone(): Response {
  return new Response(BODY, {
    status: 410,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

export function GET(): Response {
  return gone();
}

export function HEAD(): Response {
  return gone();
}
