#!/usr/bin/env python3
"""Build the single-file artifact version of the prototype.

Run from the repo root: python3 prototype/build-dist.py
Output: prototype/dist/tekmentors-homepage.html (gitignored).

Inlines tokens plus styles.css, main.js, the logo and favicon, and every
referenced assets/img/*.jpg as data URIs; strips the hero preload, picture
sources and srcset (one JPEG per image); replaces the cross-origin client
logo strip with the sector fallback line; sets the artifact title; and drops
the document wrappers the artifact host adds itself.
"""
import base64, os, re
h = open('prototype/index.html', encoding='utf-8').read()
css = open('prototype/styles.css', encoding='utf-8').read().replace(
    '@import url("../design/tokens.css");', open('design/tokens.css', encoding='utf-8').read())
js = open('prototype/main.js', encoding='utf-8').read()
h = h.replace('<link rel="stylesheet" href="styles.css">', '<style>\n' + css + '\n</style>')
h = h.replace('<script src="main.js" defer></script>', '<script>\n' + js.replace('</script>', '<\\/script>') + '\n</script>')
h = re.sub(r'<link rel="preload" as="image"[^>]*>\n?', '', h)
h = re.sub(r'<source [^>]*>', '', h); h = h.replace('<picture>', '').replace('</picture>', '')
h = re.sub(r'\s(?:data-)?srcset="[^"]*"', '', h); h = re.sub(r'\ssizes="[^"]*"', '', h)
def uri(path, mime):
    return f'data:{mime};base64,' + base64.b64encode(open(path, 'rb').read()).decode()
h = h.replace('../assets/brand/tekmentors-logo-600x300.png', uri('assets/brand/tekmentors-logo-600x300.png', 'image/png'))
h = h.replace('../assets/brand/tekmentors-mark-300x300.png', uri('assets/brand/tekmentors-mark-300x300.png', 'image/png'))
for f in sorted(os.listdir('assets/img')):
    if f.endswith('.jpg') and '-800' not in f:
        h = h.replace('../assets/img/' + f, uri('assets/img/' + f, 'image/jpeg'))
m = re.search(r'    <ul class="clients__row">.*?</ul>\n', h, flags=re.S); assert m, 'client strip not found'
fallback = ('    <p class="clients__fallback">Clients in UK wealth and private banking, international financial services '
            'and technology consulting for Fortune 500 clients. <span class="mono">Logos render on tekmentors.com.</span></p>\n')
h = h[:m.start()] + fallback + h[m.end():]
h = h.replace('</style>', '.clients__fallback{margin:0;font-size:var(--tm-body-sm);color:var(--tm-ink-600);max-width:70ch}'
              '.clients__fallback .mono{color:var(--tm-ink-500);font-size:var(--tm-label-sm);letter-spacing:var(--tm-track-label);'
              'text-transform:uppercase;margin-left:.75rem}\n</style>', 1)
inner = re.sub(r'^.*?<head>', '', h, flags=re.S)
inner = inner.replace('</head>', '').replace('<body>', '').replace('</body>', '').replace('</html>', '')
inner = re.sub(r'<meta charset[^>]*>|<meta name="viewport"[^>]*>', '', inner); inner = re.sub(r'<body[^>]*>', '', inner)
inner = inner.replace('<title>AI engineering programs and consulting | TEKMentors</title>', '<title>TEKMentors Homepage</title>', 1)
assert '../assets/' not in inner, 'unresolved asset path'
os.makedirs('prototype/dist', exist_ok=True)
open('prototype/dist/tekmentors-homepage.html', 'w', encoding='utf-8').write(inner.strip() + '\n')
print('wrote prototype/dist/tekmentors-homepage.html', len(inner) // 1024, 'KB')
