# -*- coding: utf-8 -*-
import re
path = 'src/pages/about.astro'
b = open(path, 'rb').read()
s = b.decode('utf-8', 'replace')
# Fix double-encoded em-dash mojibake
s = s.replace('\xe2\x82\xac\xe2\x80\x9d', '-')
org_pattern = re.compile(r'\{\s*/\*\s*05.*?ORGANIZATION.*?\}\s*\n\s*<section class="section" id="organization".*?</section>\s*\n\s*\n', re.DOTALL)
if org_pattern.search(s):
    print('Organization section removed')
    s = org_pattern.sub('', s)
else:
    print('Pattern NOT found')
s = s.replace('05 \u2014 Why GCS', '04 \u2014 Why GCS')
with open(path, 'w', encoding='utf-8', newline='') as f:
    f.write(s)
s3 = open(path, 'rb').read().decode('utf-8', 'replace')
print('org refs:', 'organization' in s3.lower())
print('Struktur:', 'Struktur Organisasi' in s3)
print('Leadership names:', 'Komisaris' in s3 or 'Direktur Utama' in s3)
