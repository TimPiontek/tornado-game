import os
from datetime import datetime

BASE_URL = 'https://playtornado.com/'
SITEMAP_FILE = 'sitemap.xml'

# Find all category landing pages
category_pages = [f for f in os.listdir('.') if f.startswith('category-') and f.endswith('.html')]

urls = [BASE_URL]
urls += [BASE_URL + f for f in category_pages]

now = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')

sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n'
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
for url in urls:
    sitemap += f'  <url>\n    <loc>{url}</loc>\n    <lastmod>{now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n'
sitemap += '</urlset>\n'

with open(SITEMAP_FILE, 'w', encoding='utf-8') as f:
    f.write(sitemap)
print(f'Generated {SITEMAP_FILE} with {len(urls)} URLs.') 