import sys,re,os
from bs4 import BeautifulSoup
from urllib.parse import urljoin
CH=re.compile(r'(chương|chuong|chapter|chap|tập|tap|episode|ep\.?\s*\d|第.{1,6}[章话話回集]|^\s*\d+\s*$)',re.I)
def path(e):
    out=[]
    for x in [e]+list(e.parents)[:2]:
        if x.name in (None,'[document]','html','body'): break
        out.append(x.name+('#'+x['id'] if x.get('id') else '')+('.'+'.'.join(x.get('class')[:2]) if x.get('class') else ''))
    return ' < '.join(out)
for id in sys.argv[1:]:
    p=next((f'{id}/{n}' for n in ['detail2.html','detail.html'] if os.path.exists(f'{id}/{n}')),None)
    if not p: print(id,'NO DETAIL'); continue
    s=BeautifulSoup(open(p,encoding='utf-8',errors='replace').read(),'lxml')
    res=[]
    for c in s.find_all(['ul','ol','div','table','dl','section','tbody']):
        ls=c.find_all('a',href=True)
        g=[a for a in ls if CH.search(a.get_text(' ',strip=True))]
        if len(g)>=3: res.append((len(g),len(ls),c,g))
    res.sort(key=lambda r:(-r[0],r[1]))
    print('##',id,p, 'h1=',(s.find('h1').get_text(' ',strip=True)[:50] if s.find('h1') else None))
    shown=set()
    for n,t,c,g in res[:3]:
        print(f'  {n}/{t}', path(c), '|', ' ;; '.join((a.get_text(' ',strip=True)[:25]+' -> '+a['href'][-60:]) for a in g[:2]), '| a.class=',g[0].get('class'), 'parent=',g[0].parent.name, g[0].parent.get('class'))
    scripts=[x for x in re.findall(r'(?:url|endpoint|api)[\'"]?\s*[:=]\s*[\'"]([^\'"]{6,120})',str(s)) if 'chap' in x.lower() or 'chuong' in x.lower()][:3]
    if scripts: print('  ajax?',scripts)
