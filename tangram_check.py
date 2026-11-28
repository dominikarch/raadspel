# Checks the tangram figures: every piece has the right shape, no piece overlaps another, and the area adds up.
import math, struct, zlib
F = {
 'Ruit':        [('ST',[(0,0),(2,0),(1,1)]),('ST',[(0,0),(2,0),(1,-1)])],
 'Driehoek':    [('MT',[(0,0),(2,0),(2,2)]),('ST',[(2,0),(4,0),(3,1)]),('ST',[(2,0),(2,2),(3,1)])],
 'Vierkantje':  [('MT',[(0,0),(2,0),(0,2)]),('ST',[(0,2),(2,2),(1,1)]),('ST',[(2,0),(2,2),(1,1)])],
 'Rechthoek':   [('BT',[(0,0),(4,0),(2,2)]),('MT',[(0,0),(2,2),(0,2)]),('ST',[(4,0),(4,2),(3,1)]),('ST',[(2,2),(4,2),(3,1)])],
 'Pijl':        [('BT',[(0,1),(4,1),(2,3)]),('MT',[(0,1),(2,3),(0,3)]),('ST',[(4,1),(4,3),(3,2)]),('ST',[(2,3),(4,3),(3,2)]),('BT',[(4,0),(4,4),(6,2)])],
 'Vierkant':    [('BT',[(0,0),(4,0),(2,2)]),('BT',[(0,0),(2,2),(0,4)]),('MT',[(4,2),(4,4),(2,4)]),('ST',[(4,0),(4,2),(3,1)]),('ST',[(2,2),(3,3),(1,3)]),('SQ',[(2,2),(3,1),(4,2),(3,3)]),('PA',[(0,4),(1,3),(3,3),(2,4)])],
 'Kat':         [('BT',[(0,0),(4,0),(2,2)]),('BT',[(4,0),(4,4),(2,2)]),('MT',[(2,2),(4,4),(2,4)]),('SQ',[(2,5),(3,4),(4,5),(3,6)]),('ST',[(2,5),(3,6),(2,7)]),('ST',[(3,6),(4,5),(4,7)]),('PA',[(4,0),(4,2),(5,3),(5,1)])],
 'Huis':        [('BT',[(0,2),(4,2),(2,4)]),('BT',[(0,0),(4,0),(2,2)]),('MT',[(0,0),(2,2),(0,2)]),('ST',[(4,0),(4,2),(3,1)]),('ST',[(2,2),(4,2),(3,1)]),('PA',[(3,3),(4,2),(4,4),(3,5)]),('SQ',[(1,5),(2,4),(3,5),(2,6)])],
 'Vis':         [('BT',[(0,0),(4,0),(2,2)]),('BT',[(0,0),(4,0),(2,-2)]),('MT',[(4,0),(6,0),(4,2)]),('PA',[(4,0),(6,0),(5,-1),(3,-1)]),('SQ',[(0,2),(1,1),(2,2),(1,3)]),('ST',[(1,-1),(2,-2),(0,-2)]),('ST',[(-1,-1),(-1,1),(0,0)])],
 'Pijl met veren': None,
}
F['Pijl met veren'] = F['Pijl'] + [('PA',[(0,1),(0,3),(-1,4),(-1,2)]),('SQ',[(-2,1),(-1,0),(0,1),(-1,2)])]
SIDES = {'BT':[2*2**.5,2*2**.5,4],'MT':[2,2,2*2**.5],'ST':[2**.5,2**.5,2],'SQ':[2**.5]*4,'PA':[2,2,2**.5,2**.5]}
def sides(p): return sorted(round(math.dist(p[i],p[(i+1)%len(p)]),3) for i in range(len(p)))
def inside(pt, poly):
    x,y=pt; c=False
    for i in range(len(poly)):
        (x1,y1),(x2,y2)=poly[i],poly[i-1]
        if (y1>y)!=(y2>y) and x < (x2-x1)*(y-y1)/(y2-y1)+x1: c=not c
    return c
ok=True
for name, ps in F.items():
    for t,p in ps:
        if sides(p)!=sorted(round(x,3) for x in SIDES[t]): print(name,'WRONG SHAPE',t,p,sides(p)); ok=False
    xs=[x for _,p in ps for x,y in p]; ys=[y for _,p in ps for x,y in p]
    step=.05; over=0; area=0
    y=min(ys)+step/2
    while y<max(ys):
        x=min(xs)+step/2
        while x<max(xs):
            n=sum(inside((x,y),p) for _,p in ps)
            if n: area+=step*step
            if n>1: over+=step*step
            x+=step
        y+=step
    want={'BT':4,'MT':2,'ST':1,'SQ':2,'PA':2}
    print(f"{name:16} pieces {len(ps)} area {area:.2f} (want {sum(want[t] for t,_ in ps)}) overlap {over:.3f}")
    if over>0.02: ok=False
print('ALL OK' if ok else 'PROBLEMS')
