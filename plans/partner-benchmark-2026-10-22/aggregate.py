"""Aggregate measured.json: partners' distribution per metric beside geekatyourspot's pages."""
import json, statistics, sys, os
ROOT = os.path.dirname(os.path.abspath(__file__))
d = json.load(open(os.path.join(ROOT, 'measured.json')))
pages = [p for p in d['pages'] if p.get('label') != 'evidence']
ok = [p for p in pages if p.get('status') == 200 and 'error' not in p]
site_pages = {p['label']: p for p in ok if p['site'] == 'geekatyourspot.com'}
p_home = [p for p in ok if p['site'] != 'geekatyourspot.com' and p['kind'] == 'home']
p_content = [p for p in ok if p['site'] != 'geekatyourspot.com' and p['kind'] == 'content']
sites = {h: s for h, s in d['sites'].items() if h != 'geekatyourspot.com'}
site_site = d['sites']['geekatyourspot.com']
print(f'partner homes measured: {len(p_home)}; partner content pages: {len(p_content)}; partner sites: {len(sites)}')
print('blocked/unfetched partner homes:', sorted(set(p['site'] for p in pages if p['site']!='geekatyourspot.com' and p['kind']=='home' and (p.get('status')!=200 or 'error' in p))))

def dist(rows, key, fn=None):
    vals = []
    for p in rows:
        v = p.get(key) if fn is None else fn(p)
        if isinstance(v, bool): v = int(v)
        if isinstance(v, (int, float)): vals.append(v)
    if not vals: return 'n/a'
    vals.sort()
    q = statistics.quantiles(vals, n=4) if len(vals) >= 4 else [vals[0], statistics.median(vals), vals[-1]]
    return f'{statistics.median(vals):g} (p25 {q[0]:g}, p75 {q[2]:g}; n={len(vals)})'

def share(rows, pred):
    n = sum(1 for p in rows if pred(p)); return f'{n}/{len(rows)}'

def alt_cov(p): return round(p['images_with_alt'] / p['images'] * 100) if p.get('images') else None
def sized_cov(p): return round(p['images_sized'] / p['images'] * 100) if p.get('images') else None
def ext_hosts(p): return len(p.get('main_external_hosts') or [])

METRICS = [
    ('Content words in main region', 'words', None),
    ('Content words, each block counted once', 'words_distinct', None),
    ('Duplicate blocks (share)', 'duplicate_share', None),
    ('Distinct H2 texts', 'h2_distinct', None),
    ('Paragraphs', 'paragraphs', None),
    ('Average paragraph words', 'avg_paragraph_words', None),
    ('Average sentence words', 'avg_sentence_words', None),
    ('Flesch reading ease', 'flesch', None),
    ('H2 count', None, lambda p: p['h_counts']['h2']),
    ('H3 count', None, lambda p: p['h_counts']['h3']),
    ('H1 count', None, lambda p: p['h_counts']['h1']),
    ('Heading level skips', 'heading_level_skips', None),
    ('Question headings', 'question_headings', None),
    ('Lists', 'lists', None), ('Tables', 'tables', None), ('Blockquotes', 'blockquotes', None),
    ('Numbers per 500 words', 'numbers_per_500_words', None),
    ('Percentages', 'percentages', None), ('Dollar amounts', 'dollars', None),
    ('"According to"', 'according_to', None),
    ('Outbound links in main region', 'main_links_external', None),
    ('Outbound hosts in main region', None, ext_hosts),
    ('Internal links in main region', 'main_links_internal', None),
    ('Internal links on page', 'links_internal', None),
    ('Title length', 'title_len', None),
    ('Meta description length', 'meta_description_len', None),
    ('Open Graph tags (of 6)', 'og_count', None),
    ('JSON-LD blocks', 'jsonld_blocks', None),
    ('JSON-LD properties', 'jsonld_props', None),
    ('JSON-LD sameAs links', 'jsonld_sameAs', None),
    ('Hreflang alternates', 'hreflang_count', None),
    ('Images', 'images', None),
    ('Images with alt, %', None, alt_cov),
    ('Images with width and height, %', None, sized_cov),
    ('HTML bytes', 'bytes', None),
    ('Text to HTML ratio', 'text_to_html', None),
    ('Script tags', 'script_tags', None),
    ('Inline script bytes', 'inline_script_bytes', None),
    ('Time to first byte, ms', 'elapsed_ms', None),
]
def val(p, key, fn):
    v = p.get(key) if fn is None else fn(p)
    return v

for title, rows, labels in (('HOME PAGES: geekatyourspot home vs partner homes', p_home, ['home']),
                            ('CONTENT PAGES: site pillars and tool pages vs partner product/solution pages', p_content, ['pillar-ap-automation','pillar-approval-workflow','pillar-cash-flow','pillar-receptionist','tool-ramp','tool-bill','tool-tipalti','about','methodology'])):
    print('\n###', title)
    print('| Metric | ' + ' | '.join(labels) + ' | Partners: median (p25, p75) |')
    print('|---|' + '---|' * (len(labels) + 1))
    for name, key, fn in METRICS:
        cells = []
        for l in labels:
            p = site_pages.get(l)
            cells.append(str(val(p, key, fn)) if p else '-')
        print(f'| {name} | ' + ' | '.join(cells) + f' | {dist(rows, key, fn)} |')
    print('\nShares among partners (', title.split(':')[0], '):')
    for name, pred in [
        ('one H1', lambda p: p['h_counts']['h1'] == 1),
        ('no H1', lambda p: p['h_counts']['h1'] == 0),
        ('uses <main>', lambda p: p['landmarks']['main'] > 0),
        ('uses <article>', lambda p: p['landmarks']['article'] > 0),
        ('self canonical', lambda p: p.get('canonical_self') is True),
        ('no canonical', lambda p: not p.get('canonical')),
        ('title 50-60 chars', lambda p: 50 <= p['title_len'] <= 60),
        ('title over 60', lambda p: p['title_len'] > 60),
        ('meta description present', lambda p: p['meta_description_len'] > 0),
        ('meta description 130-160', lambda p: 130 <= p['meta_description_len'] <= 160),
        ('og:image', lambda p: p['og']['image']),
        ('twitter:card', lambda p: bool(p.get('twitter_card'))),
        ('any JSON-LD', lambda p: p['jsonld_blocks'] > 0),
        ('Organization in JSON-LD', lambda p: 'Organization' in p['jsonld_types']),
        ('WebSite in JSON-LD', lambda p: 'WebSite' in p['jsonld_types']),
        ('WebPage in JSON-LD', lambda p: any(t.endswith('Page') for t in p['jsonld_types'])),
        ('BreadcrumbList in JSON-LD', lambda p: 'BreadcrumbList' in p['jsonld_types']),
        ('FAQPage in JSON-LD', lambda p: 'FAQPage' in p['jsonld_types']),
        ('SoftwareApplication/Product in JSON-LD', lambda p: any(t in ('SoftwareApplication','Product','WebApplication') for t in p['jsonld_types'])),
        ('Article/BlogPosting in JSON-LD', lambda p: any(t in ('Article','BlogPosting','NewsArticle','TechArticle') for t in p['jsonld_types'])),
        ('Person in JSON-LD', lambda p: 'Person' in p['jsonld_types']),
        ('sameAs in JSON-LD', lambda p: p['jsonld_sameAs'] > 0),
        ('VideoObject in JSON-LD', lambda p: 'VideoObject' in p['jsonld_types']),
        ('invalid JSON-LD block', lambda p: p['jsonld_invalid'] > 0),
        ('hreflang present', lambda p: p['hreflang_count'] > 0),
        ('any table', lambda p: p['tables'] > 0),
        ('any blockquote', lambda p: p['blockquotes'] > 0),
        ('FAQ section heading', lambda p: p['faq_section']),
        ('question heading', lambda p: p['question_headings'] > 0),
        ('outbound link in main region', lambda p: p['main_links_external'] > 0),
        ('opening paragraph is a definition', lambda p: p['opening_is_definition']),
        ('byline', lambda p: p['byline']),
        ('<time> element', lambda p: p['time_elements'] > 0),
        ('SSR (150+ words in raw HTML)', lambda p: p['ssr']),
        ('under 1,000 words', lambda p: p['words'] < 1000),
        ('over 3,000 words', lambda p: p['words'] > 3000),
        ('all images have alt', lambda p: p['images'] > 0 and p['images_with_alt'] == p['images']),
        ('images sized 100%', lambda p: p['images'] > 0 and p['images_sized'] == p['images']),
        ('lang attribute', lambda p: bool(p.get('lang'))),
        ('next.js', lambda p: 'next.js' in p['framework_signals']),
        ('webflow', lambda p: 'webflow' in p['framework_signals']),
        ('wordpress', lambda p: 'wordpress' in p['framework_signals']),
        ('hubspot signals', lambda p: 'hubspot' in p['framework_signals']),
        ('HTML over 500 KB', lambda p: (p.get('bytes') or 0) > 500_000),
        ('text to HTML under 0.10', lambda p: p['text_to_html'] < 0.10),
    ]:
        cells = ' '.join(f"[{l}:{'Y' if site_pages.get(l) and pred(site_pages[l]) else 'n'}]" for l in labels)
        print(f'  {name}: partners {share(rows, pred)}   site {cells}')

print('\n### SITE LEVEL')
def s_share(pred):
    n = sum(1 for s in sites.values() if pred(s)); return f'{n}/{len(sites)}'
checks = [
    ('robots.txt 200', lambda s: s.get('robots_status') == 200),
    ('robots names a sitemap', lambda s: (s.get('robots') or {}).get('sitemap_lines', 0) > 0),
    ('robots blocks everyone', lambda s: (s.get('robots') or {}).get('all_agents_blocked') is True),
    ('robots names an AI agent', lambda s: bool((s.get('robots') or {}).get('names_ai_agents'))),
    ('blocks GPTBot', lambda s: 'GPTBot' in ((s.get('robots') or {}).get('ai_blocked') or [])),
    ('blocks ClaudeBot', lambda s: 'ClaudeBot' in ((s.get('robots') or {}).get('ai_blocked') or [])),
    ('blocks PerplexityBot', lambda s: 'PerplexityBot' in ((s.get('robots') or {}).get('ai_blocked') or [])),
    ('blocks Google-Extended', lambda s: 'Google-Extended' in ((s.get('robots') or {}).get('ai_blocked') or [])),
    ('blocks CCBot', lambda s: 'CCBot' in ((s.get('robots') or {}).get('ai_blocked') or [])),
    ('blocks Bytespider', lambda s: 'Bytespider' in ((s.get('robots') or {}).get('ai_blocked') or [])),
    ('llms.txt present', lambda s: (s.get('llms_txt') or {}).get('present') is True),
    ('sitemap 200', lambda s: any(e.get('status') == 200 and e.get('is_xml') for e in s.get('sitemap') or [])),
    ('sitemap is an index', lambda s: any(e.get('is_index') for e in s.get('sitemap') or [])),
    ('sitemap has lastmod', lambda s: any((e.get('lastmod') or 0) > 0 for e in s.get('sitemap') or [])),
    ('http redirects to https', lambda s: s.get('http_to_https') is True),
    ('HSTS', lambda s: (s.get('security_headers') or {}).get('strict-transport-security')),
    ('CSP', lambda s: (s.get('security_headers') or {}).get('content-security-policy')),
    ('X-Frame-Options', lambda s: (s.get('security_headers') or {}).get('x-frame-options')),
    ('X-Content-Type-Options', lambda s: (s.get('security_headers') or {}).get('x-content-type-options')),
    ('Referrer-Policy', lambda s: (s.get('security_headers') or {}).get('referrer-policy')),
    ('Permissions-Policy', lambda s: (s.get('security_headers') or {}).get('permissions-policy')),
    ('x-robots-tag noindex', lambda s: 'noindex' in (s.get('x_robots_tag') or '').lower()),
]
for name, pred in checks:
    print(f'  {name}: partners {s_share(pred)}   site {"Y" if pred(site_site) else "n"}')
print('  security header count: partners', dist(list(sites.values()), 'security_header_count'), 'site', site_site.get('security_header_count'))
print('  sitemap URL counts (partners, first sitemap with urls):', sorted([e.get('urls') for s in sites.values() for e in (s.get('sitemap') or [])[:1] if e.get('urls')])[:200])
print('  CDN/server:', sorted(((s.get('cdn') or s.get('server') or '?') for s in sites.values())))
from collections import Counter
print('  CDN counter:', Counter((s.get('cdn') or (s.get('server') or '?').split('/')[0].lower()) for s in sites.values()).most_common(12))
print('  llms.txt partners:', sorted(h for h, s in sites.items() if (s.get('llms_txt') or {}).get('present')))
print('  AI blockers:', {h: s['robots'].get('ai_blocked') for h, s in sites.items() if (s.get('robots') or {}).get('ai_blocked')})
print('  JSON-LD type counter (homes):', Counter(t for p in p_home for t in p['jsonld_types']).most_common(25))
print('  JSON-LD type counter (content):', Counter(t for p in p_content for t in p['jsonld_types']).most_common(25))
print('  framework counter (homes):', Counter(f for p in p_home for f in p['framework_signals']).most_common(12))

# ---- guides, metadata shape, and the per-partner appendix ----
import csv
p_guide = [p for p in ok if p['site'] != 'geekatyourspot.com' and p['kind'] == 'guide']
site_posts = [l for l in site_pages if l.startswith('blog-post') or l == 'glossary-term']
print('\n### GUIDE PAGES: site pillars and blog posts vs partner guide/blog pages (n=%d)' % len(p_guide))
labels = ['pillar-ap-automation','pillar-cash-flow','pillar-receptionist','tool-ramp'] + site_posts
print('| Metric | ' + ' | '.join(labels) + ' | Partner guides: median (p25, p75) |')
print('|---|' + '---|' * (len(labels) + 1))
for name, key, fn in METRICS:
    cells = [str(val(site_pages[l], key, fn)) if l in site_pages else '-' for l in labels]
    print(f'| {name} | ' + ' | '.join(cells) + f' | {dist(p_guide, key, fn)} |')
print('\nShares among partner guides:')
for name, pred in [
    ('one H1', lambda p: p['h_counts']['h1'] == 1),
    ('title 50-60 chars', lambda p: 50 <= p['title_len'] <= 60),
    ('meta description 130-160', lambda p: 130 <= p['meta_description_len'] <= 160),
    ('any JSON-LD', lambda p: p['jsonld_blocks'] > 0),
    ('Article/BlogPosting in JSON-LD', lambda p: any(t in ('Article','BlogPosting','NewsArticle','TechArticle') for t in p['jsonld_types'])),
    ('FAQPage in JSON-LD', lambda p: 'FAQPage' in p['jsonld_types']),
    ('BreadcrumbList in JSON-LD', lambda p: 'BreadcrumbList' in p['jsonld_types']),
    ('Person in JSON-LD', lambda p: 'Person' in p['jsonld_types']),
    ('datePublished or dateModified in JSON-LD', lambda p: bool(p.get('jsonld_dates'))),
    ('byline', lambda p: p['byline']),
    ('<time> element', lambda p: p['time_elements'] > 0),
    ('FAQ section heading', lambda p: p['faq_section']),
    ('question heading', lambda p: p['question_headings'] > 0),
    ('any table', lambda p: p['tables'] > 0),
    ('any blockquote', lambda p: p['blockquotes'] > 0),
    ('outbound link in main region', lambda p: p['main_links_external'] > 0),
    ('"according to"', lambda p: p['according_to'] > 0),
    ('opening paragraph is a definition', lambda p: p['opening_is_definition']),
    ('over 1,500 words', lambda p: p['words'] > 1500),
    ('over 3,000 words', lambda p: p['words'] > 3000),
    ('Flesch 50 or over', lambda p: (p.get('flesch') or 0) >= 50),
    ('average sentence 20 words or under', lambda p: (p.get('avg_sentence_words') or 99) <= 20),
    ('all images have alt', lambda p: p['images'] > 0 and p['images_with_alt'] == p['images']),
    ('hreflang present', lambda p: p['hreflang_count'] > 0),
]:
    cells = ' '.join(f"[{l}:{'Y' if l in site_pages and pred(site_pages[l]) else 'n'}]" for l in labels)
    print(f'  {name}: partners {share(p_guide, pred)}   site {cells}')

print('\n### METADATA SHAPE (all partner pages measured, vs all site pages measured)')
all_p = p_home + p_content + p_guide
all_s = list(site_pages.values())
for name, pred in [
    ('two or more H1', lambda p: p['h_counts']['h1'] >= 2),
    ('title has a brand separator', lambda p: p['title_brand_separator']),
    ('title ends with the brand', lambda p: p['title_brand_last']),
    ('title matches the H1', lambda p: p['title_equals_h1']),
    ('description opens on a slogan word', lambda p: p['description_slogan_opening']),
    ('description over 160', lambda p: p['meta_description_len'] > 160),
    ('description under 100', lambda p: 0 < p['meta_description_len'] < 100),
    ('no description', lambda p: p['meta_description_len'] == 0),
    ('JSON-LD uses @graph', lambda p: p['jsonld_graph']),
    ('JSON-LD uses @id', lambda p: p['jsonld_ids'] > 0),
    ('JSON-LD carries a date', lambda p: bool(p['jsonld_dates'])),
    ('JSON-LD over 5 KB', lambda p: p['jsonld_bytes'] > 5000),
    ('og:type set', lambda p: p['og']['type']),
    ('og:url set', lambda p: p['og']['url']),
    ('summary_large_image card', lambda p: p.get('twitter_card') == 'summary_large_image'),
    ('author meta', lambda p: bool(p.get('author_meta'))),
    ('article:published_time', lambda p: bool(p.get('article_published'))),
    ('canonical absolute and self', lambda p: p.get('canonical_self') is True),
    ('meta robots noindex', lambda p: 'noindex' in (p.get('meta_robots') or '').lower()),
]:
    print(f'  {name}: partner pages {share(all_p, pred)}   site pages {share(all_s, pred)}')
from collections import Counter
print('  description first words (partners):', Counter(p['description_first_word'] for p in all_p if p.get('description_first_word')).most_common(15))
print('  description first words (site):', Counter(p['description_first_word'] for p in all_s if p.get('description_first_word')).most_common(15))
print('  JSON-LD type counter (guides):', Counter(t for p in p_guide for t in p['jsonld_types']).most_common(20))
print('  JSON-LD type counter (homes, graph-aware):', Counter(t for p in p_home for t in p['jsonld_types']).most_common(25))
print('  JSON-LD type counter (site pages):', Counter(t for p in all_s for t in p['jsonld_types']).most_common(25))

# appendix
cats = {r['host']: r['category'] for r in csv.DictReader(open('/Users/jeffmartin/development/geekatyourspot/plans/partner-keyword-research-2026-10-21/partners.csv', encoding='utf-8'))}
def first(rows, host, kind):
    for p in rows:
        if p['site'] == host and p['kind'] == kind: return p
    return None
lines = ['| Partner | Category | Home words | Content page words | Guide words | Title len (home) | Desc len (home) | JSON-LD types on home | H1s (home) | hreflang | llms.txt | AI agents named in robots | Security headers (of 6) | Sitemap URLs | Guide: FAQ / outbound links / byline |', '|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|']
for host in sorted(sites):
    s = sites[host]; h = first(p_home, host, 'home'); c = first(p_content, host, 'content'); g = first(p_guide, host, 'guide')
    if not h:
        lines.append(f'| {host} | {cats.get(host, "")} | not fetched ({s.get("home_status") or "no answer"}) | | | | | | | | {"yes" if (s.get("llms_txt") or {}).get("present") else "no"} | | | | |')
        continue
    sm = max((e.get('urls') or 0) for e in s.get('sitemap') or []) if s.get('sitemap') else 0
    rob = s.get('robots') or {}
    ai = ', '.join(rob.get('names_ai_agents') or []) or '-'
    if rob.get('ai_blocked'): ai += ' (blocks ' + ', '.join(rob['ai_blocked']) + ')'
    types = ', '.join(t for t in h['jsonld_types'] if t not in ('ListItem','Answer','Question','ImageObject','ContactPoint','PostalAddress','EntryPoint','SearchAction','Offer','Brand','Rating','QuantitativeValue','Country','Place','Thing'))[:80] or '-'
    guide = f"{'FAQ' if g['faq_section'] else '-'} / {g['main_links_external']} / {'byline' if g['byline'] else '-'}" if g else '-'
    lines.append(f"| {host} | {cats.get(host, '')} | {h['words']} | {c['words'] if c else '-'} | {g['words'] if g else '-'} | {h['title_len']} | {h['meta_description_len']} | {types} | {h['h_counts']['h1']} | {h['hreflang_count']} | {'yes' if (s.get('llms_txt') or {}).get('present') else 'no'} | {ai} | {s.get('security_header_count', 0)} | {sm:,} | {guide} |")
open(os.path.join(ROOT, 'appendix.md'), 'w').write('\n'.join(lines) + '\n')
print('\nappendix rows:', len(lines) - 2)
