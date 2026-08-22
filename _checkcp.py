import os, glob

# Check about.astro currentPath
with open('src\\pages\\about.astro', 'rb') as f:
    data = f.read()
text = data.decode('utf-8', errors='replace')
idx = text.find('currentPath')
if idx >= 0:
    seg = text[idx:idx+60]
    print('about.astro currentPath context:', repr(seg))

# Check all astro files
for path in sorted(glob.glob('src\\pages\\**\\*.astro', recursive=True)):
    with open(path, 'rb') as f:
        raw = f.read()
    text = raw.decode('utf-8', errors='replace')
    idx = text.find('currentPath')
    if idx >= 0:
        line = text[:idx].count('\n') + 1
        context = text[idx:idx+80].replace('\n', '\\n')
        mojibake = '\u00c2' in context
        print(f'{path} line {line}: {context}  {"MOJIBAKE!" if mojibake else ""}')
