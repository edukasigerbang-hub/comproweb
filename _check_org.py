import re

p = 'src/pages/about.astro'
s = open(p, encoding='utf-8').read()

# Remove the .org CSS block: from '/* Organization */' to before '/* Why GCS pillars */'
pattern = re.compile(r'  /\* Organization \*/.*?(?=  /\* Why GCS pillars \*/)', re.DOTALL)
s_new = pattern.sub('', s)

# Remove .org-only media query lines
s_new = s_new.replace('    .org__row.org__row { flex-direction: column; align-items: stretch; }\n', '')
s_new = s_new.replace('    .org__link { height: var(--space-3); }\n', '')

open(p, 'w', encoding='utf-8').write(s_new)

# Verify
s_final = open(p, encoding='utf-8').read()
print(f'.org CSS removed: {"/* Organization */" not in s_final}')
print(f'.org__row removed: {".org__row" not in s_final}')
print(f'.org__link removed: {".org__link" not in s_final}')
print(f'.pillars preserved: {".pillars" in s_final}')
print(f'.about-cta preserved: {".about-cta" in s_final}')

