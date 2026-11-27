# Makes the levels for Uitparkeren: random car parks, solved by the computer; for each one the hardest start position
# in its group (the farthest from the exit) is kept, so every level is solvable and its least number of moves is known.
import random, json, sys
from collections import deque
N, ROW = 6, 2
def cells(v, p):
    r, c, L, h = v
    return [(r, p + i) for i in range(L)] if h else [(p + i, c) for i in range(L)]
def occ(cars, st):
    g = {}
    for i, (v, p) in enumerate(zip(cars, st)):
        if p is None: continue
        for x in cells(v, p): g[x] = i
    return g
def moves(cars, st):
    g = occ(cars, st)
    for i, (v, p) in enumerate(zip(cars, st)):
        if p is None: continue
        r, c, L, h = v
        for d in (-1, 1):
            q = p
            while True:
                q += d
                if q < 0 or q + L > N: break
                head = (r, q + (L - 1 if d > 0 else 0)) if h else (q + (L - 1 if d > 0 else 0), c)
                if head in g and g[head] != i: break
                yield i, q
def random_park(nveh, heroes):
    cars, grid = [], set()
    for k in range(heroes):                               # the dog cars: horizontal, length 2, on the exit row
        cars.append(None)
    hero_cols = sorted(random.sample(range(0, 4), heroes)) if heroes == 1 else None
    if heroes == 1:
        c = random.randint(0, 2); cars[0] = (ROW, c, 2, True); grid |= set(cells(cars[0], c))
    else:
        c1 = random.randint(0, 1); c0 = random.randint(c1 + 2, 3)
        cars[0] = (ROW, c0, 2, True); cars[1] = (ROW, c1, 2, True)
        grid |= set(cells(cars[0], c0)) | set(cells(cars[1], c1))
    tries = 0
    while len(cars) < nveh and tries < 400:
        tries += 1
        L = 3 if random.random() < .3 else 2; h = random.random() < .5
        if h and random.random() < .7 and True:
            r = random.choice([x for x in range(N) if x != ROW]); c = random.randint(0, N - L)
        elif h: continue
        else: c = random.randint(0, N - 1); r = random.randint(0, N - L)
        v = (r, c, L, h); cs = set(cells(v, c if h else r))
        if cs & grid: continue
        cars.append(v); grid |= cs
    return cars
def start(cars): return tuple(v[1] if v[3] else v[0] for v in cars)
def solved1(st): return st[0] == 4
def hardest_single(cars):
    s0 = start(cars); seen = {s0}; q = deque([s0]); comp = []
    while q:
        s = q.popleft(); comp.append(s)
        if len(comp) > 60000: return None
        for i, p in moves(cars, s):
            t = s[:i] + (p,) + s[i + 1:]
            if t not in seen: seen.add(t); q.append(t)
    goal = [s for s in comp if solved1(s)]
    if not goal: return None
    dist = {s: 0 for s in goal}; q = deque(goal)
    while q:
        s = q.popleft()
        for i, p in moves(cars, s):
            t = s[:i] + (p,) + s[i + 1:]
            if t not in dist: dist[t] = dist[s] + 1; q.append(t)
    best = max(dist, key=lambda s: dist[s]); return best, dist[best]
def solve_duo(cars, s0, limit=200000):
    # both dogs must leave: a dog at column 4 drives out (gone); the front one first
    def norm(s):
        s = list(s)
        if s[0] is not None and s[0] == 4: s[0] = None
        if s[0] is None and s[1] is not None and s[1] == 4: s[1] = None
        return tuple(s)
    s0 = norm(s0); seen = {s0: 0}; q = deque([s0])
    while q:
        s = q.popleft()
        if s[0] is None and s[1] is None: return seen[s]
        if len(seen) > limit: return None
        for i, p in moves(cars, s):
            t = norm(s[:i] + (p,) + s[i + 1:])
            if t not in seen: seen[t] = seen[s] + 1; q.append(t)
    return None
def level(cars, st, m): return {'cars': [[v[0], v[1], v[2], 1 if v[3] else 0] if not v[3] else [v[0], st[i], v[2], 1] for i, v in enumerate(cars)] if False else
                         [[st[i] if not v[3] else v[0], st[i] if v[3] else v[1], v[2], 1 if v[3] else 0] for i, v in enumerate(cars)], 'min': m}
random.seed(int(sys.argv[1]) if len(sys.argv) > 1 else 7)
pool = {}
for k in range(3000):
    cars = random_park(random.randint(6, 13), 1)
    r = hardest_single(cars)
    if not r: continue
    st, m = r
    if m < 2: continue
    pool.setdefault(m, []).append(level(cars, st, m))
singles = []
want = [2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 24, 26, 28, 30]
for w in want:
    ks = sorted(pool, key=lambda m: (abs(m - w), -m))
    for m in ks:
        if pool[m]: singles.append(pool[m].pop(random.randrange(len(pool[m])))); break
singles.sort(key=lambda l: l['min'])
duos = []
for k in range(4000):
    if len(duos) >= 40: break
    cars = random_park(random.randint(7, 12), 2)
    s0 = start(cars); m = solve_duo(cars, s0)
    if m and m >= 5: duos.append(level(cars, s0, m))
duos.sort(key=lambda l: l['min'])
pick = [duos[int(i * (len(duos) - 1) / 9)] for i in range(10)] if len(duos) >= 10 else duos
print('singles', [l['min'] for l in singles]); print('duos', [l['min'] for l in pick])
json.dump({'single': singles, 'duo': pick}, open('park-levels.json', 'w'))
