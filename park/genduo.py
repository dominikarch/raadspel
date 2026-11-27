import random, json
from collections import deque
exec(open('genpark.py').read().split("random.seed(")[0])
def hardest_duo(cars):
    s0 = start(cars); seen = {s0}; q = deque([s0]); comp = []
    while q:
        s = q.popleft(); comp.append(s)
        if len(comp) > 40000: return None
        for i, p in moves(cars, s):
            t = s[:i] + (p,) + s[i + 1:]
            if t not in seen: seen.add(t); q.append(t)
    goal = [s for s in comp if s[0] == 4]
    if not goal: return None
    dist = {s: 0 for s in goal}; q = deque(goal)
    while q:
        s = q.popleft()
        for i, p in moves(cars, s):
            t = s[:i] + (p,) + s[i + 1:]
            if t not in dist: dist[t] = dist[s] + 1; q.append(t)
    best = None
    for s in sorted(dist, key=lambda s: -dist[s])[:25]:
        m = solve_duo(cars, s)
        if m and (not best or m > best[1]): best = (s, m)
    return best
random.seed(11)
pool = {}
for k in range(1500):
    cars = random_park(random.randint(7, 12), 2)
    r = hardest_duo(cars)
    if r and r[1] >= 4: pool.setdefault(r[1], []).append(level(cars, r[0], r[1]))
print(sorted((m, len(v)) for m, v in pool.items()))
duos = []
for w in [5, 7, 9, 11, 13, 15, 18, 21, 25, 30]:
    ks = sorted(pool, key=lambda m: (abs(m - w), -m))
    for m in ks:
        if pool[m]: duos.append(pool[m].pop(random.randrange(len(pool[m])))); break
duos.sort(key=lambda l: l['min'])
d = json.load(open('park-levels.json')); d['duo'] = duos; json.dump(d, open('park-levels.json', 'w'))
print('duos', [l['min'] for l in duos])
