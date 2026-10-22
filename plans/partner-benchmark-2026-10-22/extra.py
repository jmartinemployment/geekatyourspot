"""More pages for the benchmark: the site's blog posts and a glossary term, every partner's
best-ranking guide page (from the keyword research), and curl fetches for the two hosts that
answer curl but not urllib."""
import json, os, re, subprocess, sys, time, urllib.parse
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fetch
from concurrent.futures import ThreadPoolExecutor
ROOT = os.path.dirname(os.path.abspath(__file__))
GUIDE = re.compile(r'/(blog|blogs|guide|guides|resources|resource|learn|learning|glossary|articles|article|insights|what-is|how-to|knowledge|library|academy|hub|faq|wiki|dictionary|definitions|explained|ultimate)', re.I)

def curl_save(label, kind, site, url):
    slug = fetch.slug_of(url)
    meta_path = os.path.join(fetch.RAW, slug + '.json')
    if os.path.exists(meta_path):
        r = json.load(open(meta_path))
        if r.get('status') == 200: return r
    hdr_path = os.path.join(ROOT, 'curl_headers.tmp'); body_path = os.path.join(ROOT, 'curl_body.tmp')
    t0 = time.time()
    out = subprocess.run(['curl', '-sL', '--max-time', '30', '--http2', '--compressed', '-A', fetch.UA,
        '-H', 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', '-H', 'Accept-Language: en-US,en;q=0.9',
        '-H', 'Sec-Fetch-Mode: navigate', '-H', 'Sec-Fetch-Dest: document', '-H', 'Sec-Fetch-Site: none', '-H', 'Upgrade-Insecure-Requests: 1',
        '-D', hdr_path, '-o', body_path, '-w', '%{http_code} %{url_effective}', url], capture_output=True, text=True)
    code, _, final = out.stdout.strip().partition(' ')
    headers = {}
    if os.path.exists(hdr_path):
        blocks = open(hdr_path, 'rb').read().decode('latin-1').split('\r\n\r\n')
        last = [b for b in blocks if b.strip()][-1] if any(b.strip() for b in blocks) else ''
        for line in last.splitlines()[1:]:
            k, _, v = line.partition(':')
            if k.strip(): headers[k.strip()] = v.strip()
    body = open(body_path, 'rb').read() if os.path.exists(body_path) else b''
    rec = {'url': url, 'method': 'GET', 'status': int(code) if code.isdigit() and code != '000' else None, 'final_url': final or url,
           'headers': headers, 'elapsed_ms': int((time.time() - t0) * 1000), 'bytes': len(body), 'label': label, 'kind': kind, 'site': site, 'slug': slug, 'via': 'curl'}
    if body:
        open(os.path.join(fetch.RAW, slug + '.bin'), 'wb').write(body)
    json.dump(rec, open(meta_path, 'w'), indent=1)
    return rec

def main():
    # the site's blog posts and a glossary term
    urls = [l.strip().replace('<loc>', '').replace('</loc>', '') for l in open(os.path.join(ROOT, '..', 'site-urls.txt')) if 'http' in l]
    posts = [u for u in urls if '/blog/' in u and len(urllib.parse.urlparse(u).path.strip('/').split('/')) >= 4][:3]
    terms = [u for u in urls if '/glossary/' in u and '?' not in u][:1]
    for i, u in enumerate(posts):
        r = fetch.save(f'blog-post-{i+1}', 'page', 'geekatyourspot.com', u); print('site', r.get('status'), u, flush=True); time.sleep(0.8)
    for u in terms:
        r = fetch.save('glossary-term', 'page', 'geekatyourspot.com', u); print('site', r.get('status'), u, flush=True)
    # partners' guide pages
    picked = json.load(open(os.path.join(ROOT, 'guide_pages.json')))
    guides = [(h, u) for h, u in picked.items() if GUIDE.search(u) and not u.lower().endswith('.pdf')]
    print(len(guides), 'guide pages to fetch', flush=True)
    def one(t):
        h, u = t
        r = fetch.save('guide', 'guide', h, u)
        return h, r.get('status'), r.get('elapsed_ms')
    with ThreadPoolExecutor(max_workers=6) as ex:
        for h, s, ms in ex.map(one, guides):
            if s != 200: print('guide', h, s, flush=True)
    # curl for the two hosts urllib cannot reach
    for host, pages in (('lightyear.cloud', ['https://www.lightyear.cloud/', 'https://www.lightyear.cloud/en-us/accounts-payable-automation/', 'https://www.lightyear.cloud/robots.txt', 'https://www.lightyear.cloud/llms.txt', 'https://www.lightyear.cloud/sitemap.xml']),
                        ('perplexity.ai', ['https://www.perplexity.ai/', 'https://www.perplexity.ai/enterprise', 'https://www.perplexity.ai/robots.txt', 'https://www.perplexity.ai/llms.txt', 'https://www.perplexity.ai/sitemap.xml'])):
        for i, u in enumerate(pages):
            path = urllib.parse.urlparse(u).path
            kind, label = (('robots','robots') if path.endswith('robots.txt') else ('llms','llms') if path.endswith('llms.txt') else ('sitemap','sitemap') if 'sitemap' in path else ('home','home') if path in ('', '/') else ('content','content1'))
            r = curl_save(label, kind, host, u); print('curl', host, r.get('status'), u, r.get('bytes'), flush=True)

if __name__ == '__main__':
    main()
