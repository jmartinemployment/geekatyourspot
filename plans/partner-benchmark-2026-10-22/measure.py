"""Measure every saved page the way the seo-page, seo-technical, geo-technical, geo-citability,
seo-schema and geo-content skills measure one, and write one JSON record per page plus a
site-level record (robots, sitemap, llms.txt, headers) per host.

Parsing is a real HTML parser (html.parser) building a tolerant element tree; nothing here reads
HTML with a regular expression.
"""
import json, os, re, sys, statistics, urllib.parse
from html.parser import HTMLParser
from collections import Counter

ROOT = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(ROOT, 'raw')
OUT = os.path.join(ROOT, 'measured.json')

VOID = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
SKIP_TEXT = {'script','style','noscript','template','svg','head','iframe'}
CHROME = {'header','nav','footer','aside'}
BLOCKS = {'p','div','li','td','th','h1','h2','h3','h4','h5','h6','blockquote','pre','section','article','main','dd','dt','figcaption','summary','details','tr','ul','ol','table','form','label','button'}

class Node:
    __slots__ = ('tag','attrs','children','parent','text')
    def __init__(self, tag, attrs=None, parent=None):
        self.tag = tag; self.attrs = dict(attrs or []); self.children = []; self.parent = parent; self.text = None
    def iter(self):
        yield self
        for c in self.children:
            if isinstance(c, Node):
                yield from c.iter()
    def find_all(self, *tags):
        return [n for n in self.iter() if n.tag in tags]
    def has_ancestor(self, tags):
        p = self.parent
        while p is not None:
            if p.tag in tags: return True
            p = p.parent
        return False

class Tree(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node('#root'); self.cur = self.root
    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs, self.cur); self.cur.children.append(n)
        if tag not in VOID: self.cur = n
    def handle_startendtag(self, tag, attrs):
        self.cur.children.append(Node(tag, attrs, self.cur))
    def handle_endtag(self, tag):
        p = self.cur
        while p is not None and p.tag != tag: p = p.parent
        if p is not None and p.parent is not None: self.cur = p.parent
    def handle_data(self, data):
        if data: self.cur.children.append(data)

def parse(html):
    t = Tree()
    try:
        t.feed(html); t.close()
    except Exception:
        pass
    return t.root

def text_of(node, skip=SKIP_TEXT):
    parts = []
    def walk(n):
        if isinstance(n, str):
            parts.append(n); return
        if n.tag in skip: return
        if n.tag in BLOCKS or n.tag == 'br': parts.append('\n')
        for c in n.children: walk(c)
        if n.tag in BLOCKS: parts.append('\n')
    walk(node)
    return re.sub(r'[ \t\r\f\v]+', ' ', ''.join(parts))

def words(s): return re.findall(r"[A-Za-z][A-Za-z'’\-]*|\d[\d,\.]*", s)

def sentences(s):
    s = re.sub(r'\s+', ' ', s)
    return [x for x in re.split(r'(?<=[\.\?\!])\s+(?=[A-Z0-9"“(])', s) if len(words(x)) >= 3]

def syllables(w):
    w = w.lower().strip("'’")
    if not re.search(r'[a-z]', w): return 0
    w = re.sub(r'e$', '', w) if len(w) > 3 else w
    groups = re.findall(r'[aeiouy]+', w)
    return max(1, len(groups))

def flesch(text):
    sents = sentences(text); ws = [w for w in words(text) if re.match(r'[A-Za-z]', w)]
    if len(sents) < 3 or len(ws) < 100: return None
    syl = sum(syllables(w) for w in ws)
    return round(206.835 - 1.015 * (len(ws) / len(sents)) - 84.6 * (syl / len(ws)), 1)

def main_region(root):
    body = next(iter(root.find_all('body')), root)
    mains = [n for n in body.find_all('main') if not n.has_ancestor(CHROME)]
    if mains: return mains[0], 'main'
    arts = [n for n in body.find_all('article') if not n.has_ancestor(CHROME)]
    if arts:
        # the largest article by text
        arts.sort(key=lambda n: -len(text_of(n)))
        return arts[0], 'article'
    roles = [n for n in body.iter() if n.attrs.get('role') == 'main']
    if roles: return roles[0], 'role=main'
    return body, 'body-minus-chrome'

def flatten_ld(obj, acc):
    if isinstance(obj, dict):
        t = obj.get('@type')
        if t:
            for x in (t if isinstance(t, list) else [t]): acc['types'].append(str(x))
        for k, v in obj.items():
            if k == '@graph':
                flatten_ld(v, acc); continue
            if k.startswith('@'): continue
            acc['props'] += 1
            if k == 'sameAs': acc['sameAs'] += len(v) if isinstance(v, list) else 1
            if k in ('author','datePublished','dateModified','publisher','image','description','name','headline','url','logo','address','telephone','aggregateRating','offers','mainEntity','itemListElement','breadcrumb','about','mentions','citation','isPartOf'):
                acc['keys'].add(k)
            flatten_ld(v, acc)
    elif isinstance(obj, list):
        for v in obj: flatten_ld(v, acc)

def measure_page(rec, html):
    root = parse(html)
    head = next(iter(root.find_all('head')), root)
    body = next(iter(root.find_all('body')), root)
    m = {'url': rec['url'], 'final_url': rec.get('final_url'), 'status': rec.get('status'), 'label': rec['label'], 'kind': rec['kind'], 'site': rec['site'], 'bytes': rec.get('bytes'), 'elapsed_ms': rec.get('elapsed_ms')}
    hdr = {k.lower(): v for k, v in (rec.get('headers') or {}).items()}
    m['headers'] = {k: hdr.get(k) for k in ('strict-transport-security','content-security-policy','x-frame-options','x-content-type-options','referrer-policy','permissions-policy','x-robots-tag','server','content-encoding','cache-control','x-powered-by')}
    html_el = next(iter(root.find_all('html')), None)
    m['lang'] = (html_el.attrs.get('lang') if html_el else None)
    titles = [text_of(t).strip() for t in head.find_all('title')]
    m['title'] = titles[0] if titles else None
    m['title_len'] = len(m['title']) if m['title'] else 0
    metas = {}
    for n in root.find_all('meta'):
        k = n.attrs.get('name') or n.attrs.get('property') or n.attrs.get('http-equiv')
        if k and k.lower() not in metas: metas[k.lower()] = n.attrs.get('content', '')
    m['meta_description'] = metas.get('description')
    m['meta_description_len'] = len(m['meta_description']) if m['meta_description'] else 0
    m['meta_robots'] = metas.get('robots')
    m['viewport'] = bool(metas.get('viewport'))
    m['og'] = {k: bool(metas.get('og:' + k)) for k in ('title','description','image','url','type','site_name')}
    m['og_count'] = sum(m['og'].values())
    m['twitter_card'] = metas.get('twitter:card')
    m['theme_color'] = bool(metas.get('theme-color'))
    m['author_meta'] = metas.get('author')
    m['article_published'] = metas.get('article:published_time')
    m['article_modified'] = metas.get('article:modified_time')
    links = root.find_all('link')
    canon = [l.attrs.get('href') for l in links if (l.attrs.get('rel') or '').lower() == 'canonical']
    m['canonical'] = canon[0] if canon else None
    def norm(u):
        if not u: return None
        p = urllib.parse.urlparse(u); return (p.netloc.lower().replace('www.', ''), p.path.rstrip('/') or '/')
    m['canonical_self'] = (norm(m['canonical']) == norm(rec.get('final_url') or rec['url'])) if m['canonical'] else None
    m['hreflang_count'] = sum(1 for l in links if l.attrs.get('hreflang'))
    m['favicon'] = any('icon' in (l.attrs.get('rel') or '').lower() for l in links)
    m['preload_count'] = sum(1 for l in links if (l.attrs.get('rel') or '').lower() in ('preload','modulepreload'))
    m['stylesheet_count'] = sum(1 for l in links if (l.attrs.get('rel') or '').lower() == 'stylesheet')
    # structured data
    ld_blocks = [n for n in root.find_all('script') if (n.attrs.get('type') or '').lower() == 'application/ld+json']
    acc = {'types': [], 'props': 0, 'sameAs': 0, 'keys': set()}
    bad = 0
    for b in ld_blocks:
        raw = ''.join(c for c in b.children if isinstance(c, str))
        try:
            flatten_ld(json.loads(raw), acc)
        except Exception:
            bad += 1
    m['jsonld_blocks'] = len(ld_blocks); m['jsonld_invalid'] = bad
    m['jsonld_types'] = sorted(set(acc['types'])); m['jsonld_props'] = acc['props']; m['jsonld_sameAs'] = acc['sameAs']
    m['jsonld_keys'] = sorted(acc['keys'])
    m['microdata'] = sum(1 for n in root.iter() if 'itemscope' in n.attrs)
    ld_raw = ' '.join(''.join(c for c in b.children if isinstance(c, str)) for b in ld_blocks)
    m['jsonld_graph'] = '"@graph"' in ld_raw
    m['jsonld_ids'] = ld_raw.count('"@id"')
    m['jsonld_dates'] = sorted(k for k in ('datePublished', 'dateModified') if f'"{k}"' in ld_raw)
    m['jsonld_bytes'] = len(ld_raw)
    t = m['title'] or ''
    m['title_brand_separator'] = bool(re.search(r'\s[|\-–—:]\s', t))
    m['title_brand_last'] = bool(re.search(r'\s[|\-–—]\s[^|\-–—]{2,40}$', t))
    desc = (m['meta_description'] or '').strip()
    m['description_first_word'] = desc.split(' ')[0].strip('.,:;!').lower() if desc else None
    m['description_slogan_opening'] = m['description_first_word'] in ('explore', 'discover', 'unlock', 'revolutionize', 'transform', 'elevate', 'empower', 'supercharge', 'streamline', 'learn')
    m['title_equals_h1'] = bool(m['h1_text']) and (m['h1_text'][0].strip().lower() == re.split(r'\s[|\-–—]\s', t)[0].strip().lower()) if False else None
    # headings and landmarks
    hs = [n for n in body.find_all('h1','h2','h3','h4','h5','h6') if not n.has_ancestor(SKIP_TEXT)]
    m['h_counts'] = {f'h{i}': sum(1 for n in hs if n.tag == f'h{i}') for i in range(1,7)}
    m['h1_text'] = [text_of(n).strip()[:120] for n in hs if n.tag == 'h1'][:3]
    levels = [int(n.tag[1]) for n in hs]
    skips = sum(1 for a, b in zip(levels, levels[1:]) if b > a + 1)
    m['heading_level_skips'] = skips
    m['question_headings'] = sum(1 for n in hs if text_of(n).strip().endswith('?'))
    first_h1 = (m['h1_text'][0].strip().lower() if m['h1_text'] else '')
    title_core = re.split(r'\s[|\-–—]\s', m['title'] or '')[0].strip().lower()
    m['title_equals_h1'] = bool(first_h1) and (first_h1 == title_core or first_h1 in (m['title'] or '').lower())
    m['landmarks'] = {t: len(body.find_all(t)) for t in ('main','article','nav','header','footer','aside','section')}
    # main content
    region, how = main_region(root)
    skip = SKIP_TEXT | (CHROME if how == 'body-minus-chrome' else set())
    text = text_of(region, skip)
    ws = words(text); m['main_region'] = how
    m['words'] = len(ws)
    page_text = text_of(body)
    m['words_page'] = len(words(page_text))
    m['text_to_html'] = round(len(page_text.encode('utf-8')) / max(1, len(html.encode('utf-8'))), 3)
    paras = [text_of(p).strip() for p in region.find_all('p') if not p.has_ancestor(skip)]
    paras = [p for p in paras if len(words(p)) >= 3]
    m['paragraphs'] = len(paras)
    # the same text served twice in one page (a phone copy and a desktop copy): count each block once
    blocks = []
    for n in region.iter():
        if n.tag in ('p','li','h1','h2','h3','h4','h5','h6','td','th','dd','dt','blockquote','figcaption') and not n.has_ancestor(skip):
            t = text_of(n).strip()
            if len(words(t)) >= 3: blocks.append(t)
    seen = set(); distinct_words = 0; dup_blocks = 0
    for t in blocks:
        if t in seen: dup_blocks += 1; continue
        seen.add(t); distinct_words += len(words(t))
    m['block_count'] = len(blocks); m['duplicate_blocks'] = dup_blocks
    m['words_distinct'] = distinct_words
    m['duplicate_share'] = round(dup_blocks / len(blocks), 2) if blocks else 0
    h2_texts = [text_of(n).strip() for n in hs if n.tag == 'h2']
    m['h2_distinct'] = len(set(h2_texts))
    rh = [n for n in region.find_all('h2','h3') if not n.has_ancestor(skip)]
    m['h2_region_distinct'] = len(set(text_of(n).strip() for n in rh if n.tag == 'h2'))
    m['h3_region_distinct'] = len(set(text_of(n).strip() for n in rh if n.tag == 'h3'))
    m['question_headings_region'] = len(set(text_of(n).strip() for n in rh if text_of(n).strip().endswith('?')))
    FAQ_H = re.compile(r'FAQ|Frequently Asked|People Also Ask|Common Questions|Questions? (?:People|Customers|Businesses|Owners) Ask|Your Questions|Questions and Answers|Q&A', re.I)
    m['questions_section'] = any(FAQ_H.search(text_of(n)) for n in hs)
    SOCIAL = re.compile(r'(linkedin|twitter|x\.com|facebook|instagram|youtube|pinterest|reddit|tiktok|threads\.net|hubspot|chatgpt\.com|chat\.openai|perplexity\.ai|claude\.ai|google\.com|bing\.com|apple\.com|play\.google|g2\.com|capterra|trustpilot|getapp|producthunt|medium\.com|wa\.me|whatsapp|t\.me)', re.I)
    m['outside_hosts'] = []
    m['paragraphs_distinct'] = len(set(paras))
    pw = [len(words(p)) for p in paras]
    m['avg_paragraph_words'] = round(statistics.mean(pw), 1) if pw else None
    m['long_paragraphs'] = sum(1 for x in pw if x > 120)
    sents = sentences(' '.join(paras)) if paras else []
    sw = [len(words(s)) for s in sents]
    m['sentences'] = len(sents)
    m['avg_sentence_words'] = round(statistics.mean(sw), 1) if sw else None
    m['flesch'] = flesch(' '.join(paras)) if paras else None
    m['lists'] = len([n for n in region.find_all('ul','ol') if not n.has_ancestor(skip)])
    m['list_items'] = len([n for n in region.find_all('li') if not n.has_ancestor(skip)])
    m['tables'] = len([n for n in region.find_all('table') if not n.has_ancestor(skip)])
    m['blockquotes'] = len([n for n in region.find_all('blockquote') if not n.has_ancestor(skip)])
    m['bold_runs'] = len([n for n in region.find_all('strong','b') if not n.has_ancestor(skip)])
    # statistics: numbers in the main text
    nums = re.findall(r'(?<![\w/])(?:\$\s?\d[\d,]*(?:\.\d+)?[KMBkmb]?|\d[\d,]*(?:\.\d+)?\s?%|\d[\d,]*(?:\.\d+)?(?:x|X|\+)?)(?![\w/])', text)
    m['numbers'] = len(nums)
    m['percentages'] = sum(1 for n in nums if '%' in n)
    m['dollars'] = sum(1 for n in nums if '$' in n)
    m['numbers_per_500_words'] = round(len(nums) / max(1, m['words']) * 500, 1)
    m['years_mentioned'] = len(re.findall(r'\b(?:19|20)\d{2}\b', text))
    m['according_to'] = len(re.findall(r'\b[Aa]ccording to\b', text))
    m['first_person_we'] = len(re.findall(r"\b(?:we|our|we've|we're|I)\b", text))
    m['hypothetical'] = len(re.findall(r'\b[Hh]ypothetical|[Ii]magine\b|[Pp]icture\b', text))
    # answer-first / definition pattern in the opening
    first = paras[0] if paras else ''
    m['opening_words'] = len(words(first))
    m['opening_is_definition'] = bool(re.match(r"^[A-Z][\w@\.\-&' ]{1,60}\s+(?:is|are|refers to|means)\b", first))
    m['opening_question'] = first.strip().split('. ')[0].strip().endswith('?') if first else False
    # links
    anchors = [a for a in body.find_all('a') if a.attrs.get('href')]
    host = urllib.parse.urlparse(rec.get('final_url') or rec['url']).netloc.lower().replace('www.', '')
    def is_internal(h):
        p = urllib.parse.urlparse(h)
        return (not p.netloc) or p.netloc.lower().replace('www.', '') == host or p.netloc.lower().endswith('.' + host)
    region_anchors = [a for a in region.find_all('a') if a.attrs.get('href') and not a.has_ancestor(skip)]
    m['links_total'] = len(anchors)
    m['links_internal'] = sum(1 for a in anchors if is_internal(a.attrs['href']) and not a.attrs['href'].startswith(('#','mailto:','tel:','javascript:')))
    ext = [a for a in anchors if not is_internal(a.attrs['href']) and a.attrs['href'].startswith('http')]
    m['links_external'] = len(ext)
    m['external_hosts'] = sorted(set(urllib.parse.urlparse(a.attrs['href']).netloc.lower().replace('www.', '') for a in ext))[:40]
    ext_main = [a for a in region_anchors if not is_internal(a.attrs['href']) and a.attrs['href'].startswith('http')]
    m['main_links_internal'] = sum(1 for a in region_anchors if is_internal(a.attrs['href']) and not a.attrs['href'].startswith(('#','mailto:','tel:','javascript:')))
    m['main_links_external'] = len(ext_main)
    m['main_external_hosts'] = sorted(set(urllib.parse.urlparse(a.attrs['href']).netloc.lower().replace('www.', '') for a in ext_main))[:40]
    m['hash_links'] = sum(1 for a in anchors if '#' in a.attrs['href'])
    m['outside_hosts'] = sorted(set(h for h in (m['main_external_hosts'] or []) if not SOCIAL.search(h) and not h.endswith(host)))
    m['outside_hosts_count'] = len(m['outside_hosts'])
    m['nofollow_links'] = sum(1 for a in anchors if 'nofollow' in (a.attrs.get('rel') or ''))
    # images
    imgs = body.find_all('img')
    m['images'] = len(imgs)
    m['images_with_alt'] = sum(1 for i in imgs if (i.attrs.get('alt') or '').strip())
    m['images_empty_alt'] = sum(1 for i in imgs if 'alt' in i.attrs and not (i.attrs.get('alt') or '').strip())
    m['images_sized'] = sum(1 for i in imgs if i.attrs.get('width') and i.attrs.get('height'))
    m['images_lazy'] = sum(1 for i in imgs if (i.attrs.get('loading') or '').lower() == 'lazy')
    m['images_srcset'] = sum(1 for i in imgs if i.attrs.get('srcset'))
    m['pictures'] = len(body.find_all('picture'))
    m['svgs'] = len(body.find_all('svg'))
    # scripts and framework
    scripts = root.find_all('script')
    m['script_tags'] = len(scripts)
    m['inline_script_bytes'] = sum(len(''.join(c for c in s.children if isinstance(c, str))) for s in scripts if not s.attrs.get('src'))
    m['external_scripts'] = sum(1 for s in scripts if s.attrs.get('src'))
    srcs = ' '.join((s.attrs.get('src') or '') for s in scripts) + ' ' + html[:200000]
    fw = []
    for name, pat in (('next.js','/_next/'),('nuxt','/_nuxt/'),('gatsby','/page-data/'),('webflow','webflow'),('wordpress','/wp-content/'),('hubspot','hs-scripts.com|hubspot'),('framer','framerusercontent'),('react','react'),('astro','astro'),('squarespace','squarespace'),('shopify','cdn.shopify')):
        if re.search(pat, srcs, re.I): fw.append(name)
    m['framework_signals'] = fw
    m['ssr'] = m['words'] >= 150
    m['buttons_div_onclick'] = sum(1 for n in body.iter() if n.tag not in ('a','button') and 'onclick' in n.attrs)
    m['forms'] = len(body.find_all('form'))
    m['inputs_unlabelled'] = 0
    labels_for = set(l.attrs.get('for') for l in body.find_all('label') if l.attrs.get('for'))
    for i in body.find_all('input','textarea','select'):
        if (i.attrs.get('type') or '').lower() in ('hidden','submit','button'): continue
        if not (i.attrs.get('id') in labels_for or i.attrs.get('aria-label') or i.attrs.get('aria-labelledby') or i.attrs.get('placeholder')):
            m['inputs_unlabelled'] += 1
    # dates / author visible
    m['time_elements'] = len(body.find_all('time'))
    m['byline'] = bool(re.search(r'\b[Bb]y\s+[A-Z][a-z]+\s+[A-Z][a-z]+', text[:3000])) or any((a.attrs.get('rel') or '') == 'author' for a in anchors)
    m['faq_section'] = any(re.search(r'\bFAQ|[Ff]requently [Aa]sked', text_of(n)) for n in hs)
    m['defining_sentence_anywhere'] = bool(re.search(r"\b[A-Z][\w\.@& ]{1,50}\s+is\s+(?:a|an|the)\s+[a-z]", text[:4000]))
    return m

def measure_site(host, recs):
    s = {'host': host}
    by = {}
    for r in recs: by.setdefault(r['label'], []).append(r)
    rob = (by.get('robots') or [None])[0]
    s['robots_status'] = rob.get('status') if rob else None
    s['robots'] = {}
    if rob and rob.get('status') == 200:
        txt = read_body(rob).decode('utf-8', 'replace')
        s['robots']['sitemap_lines'] = sum(1 for l in txt.splitlines() if l.strip().lower().startswith('sitemap:'))
        groups = []; cur = None
        for line in txt.splitlines():
            line = line.split('#', 1)[0].strip()
            if not line: continue
            k, _, v = line.partition(':'); k = k.strip().lower(); v = v.strip()
            if k == 'user-agent':
                if cur is None or cur['rules']:
                    cur = {'agents': [], 'rules': []}; groups.append(cur)
                cur['agents'].append(v.lower())
            elif k in ('allow','disallow') and cur is not None:
                cur['rules'].append((k, v))
        def verdict(agent):
            agent = agent.lower()
            g = [g for g in groups if agent in g['agents']] or [g for g in groups if '*' in g['agents']]
            if not g: return 'allowed (no rule)'
            rules = g[0]['rules']
            if any(k == 'disallow' and v == '/' for k, v in rules): return 'blocked'
            if any(k == 'disallow' and v for k, v in rules): return 'partly'
            return 'allowed'
        s['robots']['all_agents_blocked'] = verdict('*') == 'blocked'
        s['robots']['ai'] = {a: verdict(a) for a in ('GPTBot','ChatGPT-User','ClaudeBot','anthropic-ai','PerplexityBot','Google-Extended','CCBot','Bytespider','Applebot-Extended','OAI-SearchBot')}
        s['robots']['ai_blocked'] = sorted(a for a, v in s['robots']['ai'].items() if v == 'blocked')
        s['robots']['names_ai_agents'] = sorted(a for a in s['robots']['ai'] if any(a.lower() in g['agents'] for g in groups))
    llm = (by.get('llms') or [None])[0]
    s['llms_txt'] = None
    if llm and llm.get('status') == 200:
        b = read_body(llm)
        ct = (llm.get('headers') or {}).get('Content-Type', '')
        txt = b.decode('utf-8', 'replace')
        looks = txt.lstrip().startswith('#') and '<html' not in txt[:500].lower()
        s['llms_txt'] = {'present': looks, 'bytes': len(b), 'content_type': ct, 'links': txt.count('](http')}
    else:
        s['llms_txt'] = {'present': False, 'status': llm.get('status') if llm else None}
    sms = by.get('sitemap') or []
    s['sitemap'] = []
    for sm in sms:
        e = {'url': sm['url'], 'status': sm.get('status')}
        if sm.get('status') == 200:
            txt = read_body(sm).decode('utf-8', 'replace')
            e['is_index'] = '<sitemapindex' in txt
            e['urls'] = txt.count('<loc>')
            e['lastmod'] = txt.count('<lastmod>')
            e['is_xml'] = txt.lstrip().startswith('<')
        s['sitemap'].append(e)
    http = (by.get('http-redirect') or [None])[0]
    if http:
        s['http_to_https'] = (http.get('final_url') or '').startswith('https://') if http.get('status') else None
    home = (by.get('home') or [None])[0]
    if home:
        hdr = {k.lower(): v for k, v in (home.get('headers') or {}).items()}
        s['security_headers'] = {k: bool(hdr.get(k)) for k in ('strict-transport-security','content-security-policy','x-frame-options','x-content-type-options','referrer-policy','permissions-policy')}
        s['security_header_count'] = sum(s['security_headers'].values())
        s['home_status'] = home.get('status')
        s['home_final_host'] = urllib.parse.urlparse(home.get('final_url') or '').netloc
        s['x_robots_tag'] = hdr.get('x-robots-tag')
        s['server'] = hdr.get('server'); s['cdn'] = next((n for n, k in (('vercel','x-vercel-id'),('cloudflare','cf-ray'),('fastly','x-served-by'),('akamai','x-akamai'),('netlify','x-nf-request-id'),('cloudfront','x-amz-cf-id'),('webflow','x-cluster-name')) if hdr.get(k)), None)
    return s

def read_body(rec):
    p = os.path.join(RAW, rec['slug'] + '.bin')
    return open(p, 'rb').read() if os.path.exists(p) else b''

def decode(b, rec):
    ct = (rec.get('headers') or {}).get('Content-Type', '')
    mt = re.search(r'charset=([\w\-]+)', ct)
    for enc in ([mt.group(1)] if mt else []) + ['utf-8', 'cp1252', 'latin-1']:
        try: return b.decode(enc)
        except Exception: continue
    return b.decode('utf-8', 'replace')

def main():
    recs = [json.load(open(os.path.join(RAW, f))) for f in os.listdir(RAW) if f.endswith('.json')]
    pages = []; sites = {}
    by_site = {}
    for r in recs: by_site.setdefault(r['site'], []).append(r)
    for site, rs in by_site.items():
        sites[site] = measure_site(site, rs)
        for r in rs:
            if r['kind'] in ('page','home','content','guide'):
                if r.get('status') == 200:
                    html = decode(read_body(r), r)
                    try:
                        pages.append(measure_page(r, html))
                    except Exception as e:
                        pages.append({'url': r['url'], 'site': site, 'label': r['label'], 'kind': r['kind'], 'status': 200, 'error': f'{type(e).__name__}: {e}'})
                else:
                    pages.append({'url': r['url'], 'site': site, 'label': r['label'], 'kind': r['kind'], 'status': r.get('status'), 'error': r.get('error')})
    json.dump({'pages': pages, 'sites': sites}, open(OUT, 'w'), indent=1, default=list)
    ok = sum(1 for p in pages if p.get('status') == 200 and 'error' not in p)
    print(f'{len(pages)} pages measured, {ok} with content; {len(sites)} sites')
    errs = [p for p in pages if 'error' in p and p.get('status') == 200]
    for e in errs[:10]: print('ERR', e['url'], e['error'])

if __name__ == '__main__':
    main()
