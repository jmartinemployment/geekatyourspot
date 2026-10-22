"""Fetch every page the benchmark measures and keep the raw response on disk.

Targets: geekatyourspot.com pages listed below, and for each partner in partners.csv its
home page, its evidence page, robots.txt, llms.txt and the sitemap robots.txt names (or
/sitemap.xml). Each response is saved as raw bytes plus a JSON record of status, final URL,
headers and elapsed time, so measuring never needs the network again.
"""
import csv, json, hashlib, os, sys, time, ssl, gzip, zlib
import urllib.request, urllib.error, urllib.parse
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.abspath(__file__))
RAW = os.path.join(ROOT, 'raw')
PARTNERS = '/Users/jeffmartin/development/geekatyourspot/plans/partner-keyword-research-2026-10-21/partners.csv'
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
CTX = ssl.create_default_context()

SITE_PAGES = [
    ('home', 'https://geekatyourspot.com/'),
    ('about', 'https://geekatyourspot.com/about'),
    ('methodology', 'https://geekatyourspot.com/methodology'),
    ('use-cases-index', 'https://geekatyourspot.com/use-cases'),
    ('use-cases-accounting', 'https://geekatyourspot.com/use-cases/accounting'),
    ('pillar-ap-automation', 'https://geekatyourspot.com/use-cases/accounting/accounts-payable/ai-ap-automation-software'),
    ('pillar-approval-workflow', 'https://geekatyourspot.com/use-cases/accounting/accounts-payable/ai-approval-workflow'),
    ('pillar-cash-flow', 'https://geekatyourspot.com/use-cases/accounting/cash-flow-forecasting/ai-cash-flow-forecasting'),
    ('pillar-receptionist', 'https://geekatyourspot.com/use-cases/marketing/lead-capture-pipeline/ai-receptionist'),
    ('tools-index', 'https://geekatyourspot.com/tools'),
    ('tool-ramp', 'https://geekatyourspot.com/tools/accounting/accounts-payable/automated-approval-workflows/ramp'),
    ('tool-bill', 'https://geekatyourspot.com/tools/accounting/accounts-payable/automated-approval-workflows/bill'),
    ('tool-tipalti', 'https://geekatyourspot.com/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti'),
    ('blog-index', 'https://geekatyourspot.com/blog'),
    ('glossary-index', 'https://geekatyourspot.com/glossary'),
]

def slug_of(url):
    h = hashlib.sha1(url.encode()).hexdigest()[:10]
    p = urllib.parse.urlparse(url)
    base = (p.netloc + p.path).strip('/').replace('/', '_').replace('.', '-')[:80] or 'root'
    return f'{base}__{h}'

def fetch(url, method='GET', timeout=25):
    req = urllib.request.Request(url, method=method, headers={
        'User-Agent': UA,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate',
    })
    t0 = time.time()
    rec = {'url': url, 'method': method}
    try:
        with urllib.request.urlopen(req, timeout=timeout, context=CTX) as resp:
            body = resp.read() if method == 'GET' else b''
            rec.update(status=resp.status, final_url=resp.geturl(), headers=dict(resp.headers.items()))
    except urllib.error.HTTPError as e:
        body = b''
        try:
            body = e.read()
        except Exception:
            pass
        rec.update(status=e.code, final_url=e.geturl() if hasattr(e, 'geturl') else url, headers=dict(e.headers.items()) if e.headers else {})
    except Exception as e:
        body = b''
        rec.update(status=None, error=f'{type(e).__name__}: {e}'[:300], headers={})
    rec['elapsed_ms'] = int((time.time() - t0) * 1000)
    enc = (rec.get('headers') or {}).get('Content-Encoding', '').lower()
    try:
        if enc == 'gzip' and body[:2] == b'\x1f\x8b':
            body = gzip.decompress(body)
        elif enc == 'deflate':
            body = zlib.decompress(body, -zlib.MAX_WBITS) if body else body
    except Exception as e:
        rec['decode_error'] = str(e)[:200]
    rec['bytes'] = len(body)
    return rec, body

def save(label, kind, site, url, method='GET'):
    slug = slug_of(url)
    meta_path = os.path.join(RAW, slug + '.json')
    if os.path.exists(meta_path):
        return json.load(open(meta_path))
    rec, body = fetch(url, method)
    rec.update(label=label, kind=kind, site=site, slug=slug)
    if body:
        with open(os.path.join(RAW, slug + '.bin'), 'wb') as f:
            f.write(body)
    json.dump(rec, open(meta_path, 'w'), indent=1)
    return rec

def site_level(site, host):
    out = []
    out.append(save('robots', 'robots', site, f'https://{host}/robots.txt'))
    out.append(save('llms', 'llms', site, f'https://{host}/llms.txt'))
    out.append(save('http-redirect', 'http', site, f'http://{host}/', method='HEAD'))
    # sitemap: the ones robots.txt names, else /sitemap.xml
    robots = out[0]
    sitemaps = []
    if robots.get('status') == 200:
        try:
            text = open(os.path.join(RAW, robots['slug'] + '.bin'), 'rb').read().decode('utf-8', 'replace')
            for line in text.splitlines():
                if line.strip().lower().startswith('sitemap:'):
                    sitemaps.append(line.split(':', 1)[1].strip())
        except Exception:
            pass
    if not sitemaps:
        sitemaps = [f'https://{host}/sitemap.xml']
    for sm in sitemaps[:3]:
        out.append(save('sitemap', 'sitemap', site, sm))
    return out

def partner_targets():
    rows = list(csv.DictReader(open(PARTNERS, encoding='utf-8')))
    targets = []
    for r in rows:
        host = r['host'].strip()
        ev = (r.get('evidence_url') or '').strip()
        targets.append((host, r['name'].strip(), ev))
    return targets

SKIP_PATHS = ('pricing', 'about', 'careers', 'investors', 'contact', 'login', 'signup', 'sign-up', 'get-started', 'book-demo', 'demo', 'faq', 'patches', 'home')

def content_pages(ev, limit=2):
    """The partner's content pages: the evidence list's addresses with a path, skipping pricing,
    about and sign-up pages, two at most, each once."""
    out = []
    for u in [x.strip() for x in ev.split(';') if x.strip()]:
        p = urllib.parse.urlparse(u)
        path = p.path.strip('/')
        if not path or path.lower() in ('us', 'en-us', 'us/en', 'en'):
            continue
        last = path.split('/')[-1].lower()
        if any(s == last or last.startswith(s) for s in SKIP_PATHS):
            continue
        if u not in out:
            out.append(u)
        if len(out) >= limit:
            break
    return out

def do_partner(t):
    host, name, ev = t
    recs = []
    recs.append(save('home', 'home', host, f'https://{host}/'))
    for i, u in enumerate(content_pages(ev)):
        recs.append(save(f'content{i+1}', 'content', host, u))
    recs += site_level(host, host)
    return [(r.get('status'), r['url'], r.get('elapsed_ms')) for r in recs]

def main():
    which = sys.argv[1] if len(sys.argv) > 1 else 'all'
    if which in ('all', 'site'):
        for label, url in SITE_PAGES:
            r = save(label, 'page', 'geekatyourspot.com', url)
            print('site', r.get('status'), url, r.get('elapsed_ms'), 'ms', flush=True)
            time.sleep(0.8)
        for r in site_level('geekatyourspot.com', 'geekatyourspot.com'):
            print('site', r.get('status'), r['url'], flush=True)
    if which in ('all', 'partners'):
        targets = partner_targets()
        with ThreadPoolExecutor(max_workers=6) as ex:
            for host, result in zip([t[0] for t in targets], ex.map(do_partner, targets)):
                print(host, ' '.join(f'{s}' for s, u, ms in result), flush=True)

if __name__ == '__main__':
    main()
