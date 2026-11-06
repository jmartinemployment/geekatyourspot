/**
 * Submits every URL in the live sitemap to IndexNow, so Bing and the other search engines that
 * take part in the protocol hear about the pages without waiting for a crawl.
 *
 * The key is public by design. IndexNow checks it by fetching the key file from the site, so the
 * script fetches that file first and stops when it is not live or does not hold the key: a POST
 * made without it is rejected, and a rejection is worse than a clear message here.
 *
 * Usage: npm run indexnow                 submits the sitemap
 *        npm run indexnow -- --dry-run    checks the key file, reads the sitemap and prints what it
 *                                         would send, without sending
 * Exit code 1 when the key file is missing or wrong, the sitemap cannot be read or lists a URL on
 * another host, or IndexNow answers with anything but 200 or 202. Nothing is retried or filtered.
 */

const HOST = "geekatyourspot.com";
const KEY = "434802f18e634aa18db7d483cc772433";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";
const MAX_URLS_PER_REQUEST = 10000;

const dryRun = process.argv.includes("--dry-run");

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

async function checkKeyFile(): Promise<void> {
  const response = await fetch(KEY_LOCATION);
  if (response.status !== 200) {
    fail(`The key file ${KEY_LOCATION} answered ${response.status}. Deploy it before submitting.`);
  }
  const body = (await response.text()).trim();
  if (body !== KEY) {
    fail(`The key file ${KEY_LOCATION} does not hold the key. It holds: ${body.slice(0, 80)}`);
  }
  console.log(`Key file is live and matches: ${KEY_LOCATION}`);
}

async function readSitemapUrls(): Promise<string[]> {
  const response = await fetch(SITEMAP);
  if (response.status !== 200) {
    fail(`The sitemap ${SITEMAP} answered ${response.status}.`);
  }
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
    match[1].trim().replaceAll("&amp;", "&"),
  );
  if (urls.length === 0) {
    fail(`The sitemap ${SITEMAP} lists no URLs.`);
  }
  const foreign = urls.filter((url) => url !== `https://${HOST}` && !url.startsWith(`https://${HOST}/`));
  if (foreign.length > 0) {
    fail(`The sitemap lists ${foreign.length} URL(s) outside ${HOST}, which IndexNow rejects. First: ${foreign[0]}`);
  }
  const unique = [...new Set(urls)];
  if (unique.length > MAX_URLS_PER_REQUEST) {
    fail(`The sitemap lists ${unique.length} URLs, more than the ${MAX_URLS_PER_REQUEST} IndexNow takes in one request.`);
  }
  return unique;
}

async function main(): Promise<void> {
  await checkKeyFile();
  const urlList = await readSitemapUrls();
  console.log(`Sitemap lists ${urlList.length} URLs on ${HOST}.`);

  if (dryRun) {
    console.log("Dry run, nothing sent. First five:");
    for (const url of urlList.slice(0, 5)) console.log(`  ${url}`);
    return;
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  const detail = (await response.text()).trim();

  if (response.status !== 200 && response.status !== 202) {
    fail(`IndexNow answered ${response.status}. ${detail || "(no body)"}`);
  }
  console.log(`IndexNow accepted ${urlList.length} URLs with status ${response.status}.${detail ? ` ${detail}` : ""}`);
}

await main();
