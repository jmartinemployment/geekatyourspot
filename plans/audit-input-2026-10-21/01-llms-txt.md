# llms.txt

Audit reference: GEO decision 2 in `plans/geo-seo-audit-2026-10-20.md`, and CA14 in `plans/competitor-audit-2026-10-20.md`.

## The problem

llms.txt is a plain text file at `/llms.txt`. It gives AI assistants and AI coding tools a short, curated map of a site: who the business is, and links to its main pages with a sentence each.

- **This site has no llms.txt.** `public/` has none, and no route serves one (rechecked 2026-10-21).
- **The old file is out of date.** It's from the previous site, at `/Volumes/Seagate/geekatyourspot-r/public/llms.txt`, 23 lines (rechecked 2026-10-21):
  - It names the business "Geek at Your Spot", not "Geek @ Your Spot LLC".
  - It links the `www` host, which the current site doesn't use.
  - It uses the three-letter abbreviation for small businesses that the site never uses, and it contains an em dash.
  - It links three pages (home, use cases, blog) and none of the pillars, tools, About or Methodology.
  - It does carry a phone number, the Delray Beach location, a Business Profile link and a three-line services list.
- **Rivals publish one.** 11 of the 19 rivals in the competitor audit publish llms.txt (audit count, 2026-10-20).
- **No major engine has confirmed it reads the file.** Your view, 2026-10-21: "LLMs.txt it remains a low-risk, proactive standard for developer-centric documentation and AI-assisted coding tools."
- **It's Markdown by specification.** Your rule in `/Users/jeffmartin/development/.claude/CLAUDE.md` says: "Legitimate Markdown, and only here: an operator-supplied asset ... and a generated report a human reads." llms.txt is neither, so the rule as written doesn't cover it.

## What development mode means for it

Until launch, `robots.txt` serves `Disallow: /`, so crawlers that respect it won't fetch `/llms.txt`. The file can be built and reviewed now, and it starts being read at launch.

## What I need from you

1. **Build it, or not.**
   - Building costs one small route and gives AI tools a clean summary at launch.
   - Not building costs nothing now, but leaves AI tools to work out the site on their own.
2. **The Markdown rule.**
   - Allow llms.txt as an exception, and write that line into CLAUDE.md yourself or have me add it.
   - Or keep the rule as written, which means no llms.txt.
3. **What it lists.**
   - A short curated set: home, About, Methodology, the use-case hubs and pillars, the tools hubs and the blog index.
   - Or every page, which is long and repeats the sitemap.
4. **How it's made.**
   - Generated from the site's menus, so it updates itself when pages change.
   - Or a hand-written static file, which needs editing every time a page is added or removed.

## My recommendation

Recommendation:
- Build it, with the exception written into CLAUDE.md, so no rule says Markdown is banned while a Markdown file ships.
- Use the curated set, generated from the menus.
- Follow the structure you pasted:
  - an H1 with the exact business name;
  - a one-sentence summary in a blockquote;
  - H2 groups such as Accounting, Marketing, Tools and About;
  - each entry as a link followed by one sentence.

Reason: it stays accurate without upkeep, and the curated list matches what the format is for.

## The plan once you decide

1. If you allow the exception, add llms.txt to the "Legitimate Markdown" line in `/Users/jeffmartin/development/.claude/CLAUDE.md`, or leave that edit to you.
2. Add `src/app/llms.txt/route.ts`. It returns `text/plain`, built from the menus in `src/data/navigation/site-menus.ts` and the page titles and descriptions the pages already export.
3. Use "Geek @ Your Spot LLC", the apex host `https://geekatyourspot.com`, and the service-area wording the site uses: Miami-Dade, Broward and Palm Beach.

## How I'll check it, and its status

- On a local build:
  - `/llms.txt` returns 200 as plain text;
  - every link in it returns 200;
  - the name is "Geek @ Your Spot LLC" throughout;
  - a search finds no em dash and no small-business abbreviation.
- I compare the entries against the menus, so nothing listed is missing from the site.

**Built on 2026-10-21 (`ea9040f`).** You said "execute" on 2026-10-21, so the recommendation was applied:
- `src/app/llms.txt/route.ts` builds the file at build time. It lists the home, About and Methodology pages, the use-case index, both department pages and every use-case page in the Use Cases menu, grouped by its menu category, plus the three tools hubs and the blog index: 32 pages.
- Each entry's link text and sentence are the page's own metadata title and description. If a listed page's title or description can't be read, `/llms.txt` returns 404 rather than a partial file.
- The exception is now in the "Legitimate Markdown" line of `/Users/jeffmartin/development/.claude/CLAUDE.md`.
- Checked on a production build: `/llms.txt` is prerendered as static, returns 200 as `text/plain`, all 32 links return 200, and it has no dash, no "SMB", no old name and no `www` host.

**Status:** Built and committed in `ea9040f`.
