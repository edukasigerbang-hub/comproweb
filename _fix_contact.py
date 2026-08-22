p = 'src\\pages\\contact.astro'
with open(p, encoding='utf-8') as f:
    lines = f.readlines()
lines[66] = '            <li><a href={lp(lang, \'/services\')}>See Our Capabilities</a></li>\n'
with open(p, 'w', encoding='utf-8') as f:
    f.writelines(lines)
print('Fixed line 67')