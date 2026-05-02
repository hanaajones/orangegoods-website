#!/usr/bin/env python3
from firecrawl import Firecrawl
import os, json

app = Firecrawl(api_key='fc-2b2ed964373040708cddf38e2ca61e4d')

pages = [
    ('index', 'https://orangegoods.co'),
    ('goods', 'https://orangegoods.co/goods'),
    ('hats', 'https://orangegoods.co/goods/hats'),
    ('about', 'https://orangegoods.co/about'),
    ('contact', 'https://orangegoods.co/contact'),
]

out_dir = os.path.expanduser('~/Projects/orangegoods-website/scraped')
os.makedirs(out_dir, exist_ok=True)

for slug, url in pages:
    print(f'Scraping {url}...')
    try:
        result = app.scrape(url=url, formats=['markdown', 'links'])
        # Save markdown
        md_path = os.path.join(out_dir, f'{slug}.md')
        with open(md_path, 'w') as f:
            if hasattr(result, 'markdown') and result.markdown:
                f.write(result.markdown)
            elif isinstance(result, dict) and result.get('markdown'):
                f.write(result['markdown'])
            else:
                f.write(str(result))
        # Save links as JSON
        links_path = os.path.join(out_dir, f'{slug}-links.json')
        with open(links_path, 'w') as f:
            links = []
            if hasattr(result, 'links') and result.links:
                links = result.links
            elif isinstance(result, dict) and result.get('links'):
                links = result['links']
            json.dump(links, f, indent=2)
        print(f'  ✅ Saved {slug}.md')
    except Exception as e:
        print(f'  ❌ Error scraping {url}: {e}')

print('Done.')
