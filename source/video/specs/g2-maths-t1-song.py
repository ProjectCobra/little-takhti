"""Builds source/video/lessons/g2-maths-t1-song.json (Numbers to 1000 song, Grade 2 Maths).
Lyric lines are timed from the Flow Music transcript (videos:lessons/g2-maths-t1-song/transcript.json).
Usage: python3 source/video/specs/g2-maths-t1-song.py <transcript.json>
"""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
TR = json.load(open(sys.argv[1]))
SONG_URL = 'https://storage.googleapis.com/producer-app-public/clips/8c739dd6-2bf8-46c6-9ccc-eef9d9fd7f62.m4a'

H, T, O = '#2E9B57', '#F5A524', '#EF6A4C'   # hundreds, tens, ones
DG = '#123B28'

# ---------------- lyric lines, timed to the recording ----------------
LINES = [
 ('h1', "Hello, friends! It's learning time!", 3.4, 5.95),
 ('h2', "Let's count big, all the way to a thousand!", 6.0, 8.75),
 ('h3', "Ready? Let's go!", 8.8, 9.95),
 ('v1a', "Ten little ones make one ten,", 10.0, 11.95),
 ('v1b', "bundle them up and count again.", 12.0, 14.0),
 ('v1c', "Ten tens together, what do you see?", 14.1, 17.2),
 ('v1d', "One hundred! One, zero, zero!", 17.25, 19.5),
 ('v2a', "Look at three four five, let's take it apart,", 19.5, 23.7),
 ('v2b', "three hundreds first, that's where we start.", 24.0, 25.95),
 ('v2c', "Then four tens, and five ones too,", 26.0, 28.0),
 ('v2d', "three hundred and forty-five, now I know it's true!", 28.05, 31.5),
 ('c1a', "Hundreds, tens and ones,", 32.2, 33.75),
 ('c1b', "every number has a place!", 33.78, 35.8),
 ('c1c', "Hundreds, tens and ones,", 35.84, 37.78),
 ('c1d', "put each digit in its space!", 37.8, 39.74),
 ('c1e', "Count by hundreds, up we climb,", 39.76, 41.76),
 ('c1f', "all the way to one thousand, every time!", 41.78, 46.5),
 ('z1', "Seven zero eight, what's that zero for?", 47.7, 49.88),
 ('z2', "It means no tens, not one more!", 49.9, 51.84),
 ('z3', "Seven hundreds, no tens, eight ones, hooray,", 51.86, 53.78),
 ('z4', "seven hundred and eight, that's how we say!", 53.79, 55.8),
 ('k1', "Which is bigger, which is more?", 55.82, 57.8),
 ('k2', "Look at the hundreds first, for sure!", 57.82, 59.9),
 ('k3', "Four five two or four two five?", 60.15, 61.9),
 ('k4', "Both have four hundreds, so look at the tens!", 61.9, 64.0),
 ('c2a', "Hundreds, tens and ones,", 64.15, 66.0),
 ('c2b', "every number has a place!", 66.05, 68.1),
 ('c2c', "Hundreds, tens and ones,", 68.15, 69.98),
 ('c2d', "put each digit in its space!", 70.0, 72.0),
 ('c2e', "Count by hundreds, up we climb,", 72.05, 74.0),
 ('c2f', "all the way to one thousand, every time!", 74.03, 78.5),
 ('b1', "One hundred, two hundred, three hundred, four,", 80.0, 83.6),
 ('b2', "five hundred, six hundred, seven hundred, more!", 83.7, 87.4),
 ('b3', "Eight hundred, nine hundred,", 87.8, 90.0),
 ('b4', "one more to go,", 90.1, 91.9),
 ('b5', "ten hundreds make one thousand,", 92.3, 95.0),
 ('b6', "whoa!", 95.0, 96.5),
 ('qa', "Quiz time!", 97.55, 98.7),
 ('qb', "Can you guess?", 98.75, 99.6),
 ('qc', "Shout it out loud!", 99.62, 101.0),
 ('q1', "How many hundreds are in three hundred and forty-five?", 105.9, 111.0),
 ('a1', "Three hundreds! Three hundreds in three four five!", 116.5, 120.6),
 ('q2', "Seven zero eight. How many tens?", 127.6, 131.6),
 ('a2', "No tens! Zero tens!", 135.75, 137.3),
 ('a2b', "The zero holds the place!", 137.33, 139.3),
 ('q3', "Which is bigger, three zero nine or three nine zero?", 139.35, 143.6),
 ('a3', "Three nine zero! Nine tens beat zero tens!", 147.4, 151.5),
 ('c3a', "Hundreds, tens and ones,", 151.55, 153.8),
 ('c3b', "every number has a place!", 153.82, 155.8),
 ('c3c', "Hundreds, tens and ones,", 155.84, 157.8),
 ('c3d', "put each digit in its space!", 157.82, 159.8),
 ('c3e', "Count by hundreds, up we climb,", 159.82, 161.78),
 ('c3f', "all the way to one thousand, every time!", 161.79, 166.5),
 ('o1', "Find more fun worksheets and games, on the website and the app!", 169.5, 173.9),
 ('o2', "Bye bye, friends!", 174.0, 175.0),
]

ONES = 'zero one two three four five six seven eight nine'.split()
TEENS = 'ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split()
TENS = '_ _ twenty thirty forty fifty sixty seventy eighty ninety'.split()
def spoken(tok):
    """length proxy for whisper tokens written as digits (708 -> seven hundred and eight)"""
    d = re.sub(r'[^0-9]', '', tok)
    if not d or len(d) != len(re.sub(r'[^0-9a-z]', '', tok.lower())): return tok
    n = int(d); out = []
    if n >= 1000: out.append(ONES[n // 1000] + ' thousand'); n %= 1000
    if n >= 100: out.append(ONES[n // 100] + ' hundred'); n %= 100
    if n >= 20: out.append(TENS[n // 10] + ('' if n % 10 == 0 else ONES[n % 10]))
    elif n >= 10: out.append(TEENS[n - 10])
    elif n > 0 or not out: out.append(ONES[n])
    return ' and '.join(out)

WORDS = [w for s in TR['vocals'] for w in s['words']]
# fixes checked against the vocal level and a guided re-transcription (transcript-segments.json):
# "Seven" in question 2 was missed, and two answer starts were heard early (the singing starts at 117.2 and 148.0)
FIX = {116.54: 117.15, 147.46: 148.0}
for w in WORDS:
    if w['s'] in FIX: w['s'] = FIX[w['s']]
WORDS = [w for w in WORDS if not (w['w'] == '7' and 120 < w['s'] < 122)]
WORDS.append({'w': 'Seven', 's': 127.65, 'e': 128.3})
WORDS.sort(key=lambda w: w['s'])
def time_line(text, a, b):
    ws = [w for w in WORDS if a - 0.05 <= w['s'] < b]
    toks = text.split()
    if not ws: raise SystemExit(f'no words for {text}')
    if len(ws) == len(toks):
        return [{'w': t, 't': w['s'], 'd': round(max(.15, w['e'] - w['s']), 2)} for t, w in zip(toks, ws)]
    # map by spoken length: whisper word starts are anchors along the line
    wl = [len(spoken(w['w'])) + 1 for w in ws]; tot = sum(wl)
    anchors = [(0.0, ws[0]['s'])]; c = 0
    for w, l in zip(ws, wl):
        anchors.append((c / tot, w['s'])); c += l
    anchors.append((1.0, ws[-1]['e']))
    def at(f):
        for (f0, t0), (f1, t1) in zip(anchors, anchors[1:]):
            if f0 <= f <= f1: return t0 + (t1 - t0) * ((f - f0) / (f1 - f0) if f1 > f0 else 0)
        return anchors[-1][1]
    ml = [len(t) + 1 for t in toks]; mt = sum(ml); c = 0; out = []
    for t, l in zip(toks, ml):
        s = at(c / mt); e = at((c + l) / mt); c += l
        out.append({'w': t, 't': round(s, 2), 'd': round(max(.15, e - s - .02), 2)})
    return out

lines = [{'key': k, 'words': time_line(tx, a, b)} for k, tx, a, b in LINES]

# ---------------- helpers ----------------
def big(text, size, color=DG, extra=''):
    return f'<div class="big" style="font-size:{size}px;color:{color};white-space:nowrap;{extra}">{text}</div>'
def box(w, h, r=40, border=5, bottom=14, bg='#fff', style=''):
    return f'<div style="width:{w}px;height:{h}px;background:{bg};border:{border}px solid {DG};border-bottom-width:{bottom}px;border-radius:{r}px;{style}"></div>'
def html(h, x, y, at, **kw):
    return {'k': 'html', 'html': h, 'x': x, 'y': y, 'at': at, 'snd': kw.pop('snd', None), **kw}
def num_digits(digits, cx, y, at, size=200, gap=None, cols=(H, T, O), out=None, step=0.0, ats=None, **kw):
    """a number with each digit coloured by its place"""
    gap = gap or size * .58
    els = []
    for i, d in enumerate(digits):
        a = ats[i] if ats else at
        e = html(big(d, size, cols[i]), cx + (i - (len(digits) - 1) / 2) * gap, y, a, **kw)
        if out: e['out'] = out
        els.append(e)
    return els
def chart(cx, cy, colw, hh, dh, at, out=None, hsize=40, fix=True, glows=None):
    """place value chart: three coloured headers and white cells; returns els and cell centres"""
    els = [html(box(colw * 3 + 24, hh + dh + 24, r=34, border=5, bottom=12), cx, cy, at, fix=fix)]
    top = cy - (hh + dh) / 2
    cells = []
    for i, (name, c, fg) in enumerate([('Hundreds', H, '#fff'), ('Tens', T, DG), ('Ones', O, '#fff')]):
        x = cx + (i - 1) * colw
        hd = html(f'<div style="width:{colw - 14}px;height:{hh - 12}px;border-radius:22px;background:{c};display:flex;align-items:center;justify-content:center">'
                  f'<span class="big" style="font-size:{hsize}px;color:{fg};padding-top:6px">{name}</span></div>', x, top + hh / 2, at, fix=fix)
        if glows: hd['glow'] = glows[i]
        els.append(hd)
        cells.append((x, top + hh + dh / 2))
    if out:
        for e in els: e['out'] = out
    return els, cells
def label(text, x, y, at, bg, fg='#fff', size=46, **kw):
    return {'k': 'chip', 'text': text, 'x': x, 'y': y, 'at': at, 'bg': bg, 'fg': fg, 'size': size, 'snd': None, **kw}
def ring(x, y, d, at, out=None, c='#FF7A45'):
    e = {'k': 'ring', 'd': d, 'c': c, 'x': x, 'y': y, 'at': at, 'snd': None, 'still': True}
    if out: e['out'] = out
    return e
def prop(p, w, x, y, at, **kw):
    return {'k': 'prop', 'p': p, 'w': w, 'x': x, 'y': y, 'at': at, 'still': True, **kw}

scenes = []

# ---------------- intro ----------------
scenes.append({'type': 'intro', 'mark': 'intro', 'chapter': 'The song', 'chip': 'Grade 2 Maths',
               'title': f'Numbers to <span style="color:{H}">1000</span>', 'card_xy': [1400, 380], 'maxw': 820, 'size': 140,
               'card_at': 'h1.time', 'row': {'props': ['art:cube', 'art:rod', 'art:flat'], 'w': 150, 'at': 'h2.thousand', 'step': 0.2, 'x': [1150, 1650], 'y': 700}})

# ---------------- verse 1: ten ones make a ten, ten tens make a hundred ----------------
els = []
CU = 52; X0 = 700; Y0 = 200
for i in range(10):
    els.append(prop('art:cube', CU, X0, Y0 + i * 64, f'v1a.ten#0+{0.08 * i:.2f}', out='v1b.count',
                    moves=[{'at': f'v1b.bundle+{0.03 * i:.2f}', 'd': 0.6, 'y': Y0 + 30 + i * CU, 'ease': 'eo'}],
                    snd=({'n': 'pop', 'g': 0.25} if i % 3 == 0 else None)))
ROD = CU * 10; RY = Y0 + 30 + 4.5 * CU
els.append(prop('art:rod', ROD, X0, RY, 'v1b.count', snd={'n': 'whoosh', 'g': 0.25},
                moves=[{'at': 'v1c.ten#0-0.2', 'd': 0.6, 'x': 380, 'ease': 'eo'}], out='v1d.one#0'))
for i in range(1, 10):
    els.append(prop('art:rod', ROD, 380 + i * 64, RY, f'v1c.ten#0+{0.1 * i:.2f}', out='v1d.one#0', snd=None))
els.append(prop('art:flat', ROD, 380 + 4.5 * 64, RY, 'v1d.one#0', snd={'n': 'whoosh', 'g': 0.3}))
# right card
els.append(html(box(760, 560), 1380, 420, 'v1a.one#0', fix=True, out='@v2'))
els += [html(big('10 ones', 90, O), 1380, 300, 'v1a.one#0', fix=True, out='v1c.ten#0'),
        html(big('= 1 ten', 90, DG), 1380, 450, 'v1a.ten#1', fix=True, out='v1c.ten#0'),
        prop('art:rod', 320, 1380, 600, 'v1a.ten#1+0.1', fix=True, out='v1c.ten#0', r=90)]
els += [html(big('10 tens', 90, '#C77700'), 1380, 290, 'v1c.tens', fix=True, out='@v2'),
        html(big('= 1 hundred', 90, DG), 1380, 420, 'v1d.hundred', fix=True, out='@v2')]
els += num_digits('100', 1380, 580, None, size=130, cols=(H, H, H), ats=['v1d.one#1', 'v1d.zero#0', 'v1d.zero#1'], fix=True, out='@v2')
scenes.append({'type': 'free', 'mark': 'tens', 'chapter': 'Ones, tens and hundreds', 'title': 'Ones, tens and hundreds', 'title_y': 90,
               'els': els, 'mascot': {'x': 1730, 'y': 880, 's': 0.6}})

# ---------------- verse 2: 345 ----------------
els = []
els.append(html(box(520, 230, r=36), 560, 180, 'v2a.look'))
els += num_digits('345', 560, 190, None, size=170, ats=['v2a.three', 'v2a.four', 'v2a.five'])
FL = 220
for i in range(3):
    els.append(prop('art:flat', FL, 180 + i * 235, 480, f'v2b.three+{0.15 * i:.2f}', snd={'n': 'pop', 'g': 0.3}))
for i in range(4):
    els.append(prop('art:rod', FL, 900 + i * 36, 480, f'v2c.four+{0.1 * i:.2f}', snd=None))
for i in range(5):
    els.append(prop('art:cube', 22, 1060, 400 + i * 30, f'v2c.five+{0.08 * i:.2f}', snd=None))
els += [label('3 hundreds', 415, 650, 'v2b.hundreds', H), label('4 tens', 954, 650, 'v2c.tens', T, DG), label('5 ones', 1090, 730, 'v2c.ones', O, size=40)]
ch, cells = chart(1560, 400, 200, 100, 220, 'v2a.apart', hsize=36)
els += ch
for (x, y), d, a, c in zip(cells, '345', ['v2b.three', 'v2c.four', 'v2c.five'], (H, T, O)):
    els.append(html(big(d, 170, c), x, y + 10, a, fix=True))
els.append({'k': 'card', 'html': f'<span style="color:{H}">3</span><span style="color:#C77700">4</span><span style="color:{O}">5</span> = three hundred and forty-five',
            'x': 960, 'y': 830, 'at': 'v2d.three', 'size': 56, 'pad': '12px 40px 2px', 'snd': None, 'fix': True})
scenes.append({'type': 'free', 'mark': 'v2', 'chapter': 'Hundreds, tens and ones', 'els': els, 'mascot': {'x': 1760, 'y': 860, 's': 0.55}})

# ---------------- chorus ----------------
def chorus(p, mark, chapter=None):
    els = []
    ch, cells = chart(720, 470, 270, 110, 330, '@' + mark + '+0.1', hsize=44, fix=False,
                      glows=[[f'{p}a.hundreds', f'{p}c.hundreds'], [f'{p}a.tens', f'{p}c.tens'], [f'{p}a.ones', f'{p}c.ones']])
    els += ch
    for (x, y), d, w, c in zip(cells, '345', ['each', 'digit', 'space'], (H, T, O)):
        els.append(html(big(d, 220, c), x, y + 12, f'@{mark}+0.3', glow=[f'{p}d.{w}'], snd=None))
    els += [label('Hundreds', 1500, 260, f'{p}a.hundreds', H, size=56),
            label('Tens', 1500, 370, f'{p}a.tens', T, DG, size=56),
            label('Ones', 1500, 480, f'{p}a.ones', O, size=56),
            {'k': 'card', 'html': f'Every number has a <span style="color:#1F7A4C">place!</span>', 'x': 1500, 'y': 620, 'at': f'{p}b.place', 'size': 54, 'pad': '12px 36px 2px', 'snd': None},
            {'k': 'card', 'html': f'Count by <span style="color:{H}">100s</span> to <span style="color:{H}">1000!</span>', 'x': 1500, 'y': 760, 'at': f'{p}e.hundreds', 'size': 54, 'pad': '12px 36px 2px', 'snd': None}]
    s = {'type': 'free', 'mark': mark, 'title': '♪ Sing along!', 'title_y': 90, 'els': els, 'mascot': {'x': 200, 'y': 830, 's': 0.8},
         'confetti': [{'at': f'{p}f.thousand', 'x': 1500, 'y': 600, 'n': 60}]}
    if chapter: s['chapter'] = chapter
    return s
scenes.append(chorus('c1', 'chorus1', 'Sing along'))

# ---------------- verse 3: 708, zero holds the place ----------------
els = []
els.append(html(box(520, 230, r=36), 1500, 170, 'z1.seven'))
els += num_digits('708', 1500, 180, None, size=170, ats=['z1.seven', 'z1.zero#0', 'z1.eight'])
ch, cells = chart(1500, 520, 190, 90, 200, 'z1.zero#1', hsize=34)
els += ch
for (x, y), d, a, c in zip(cells, '708', ['z3.seven', 'z2.no', 'z3.eight'], (H, T, O)):
    els.append(html(big(d, 150, c), x, y + 10, a, fix=True))
els.append(ring(cells[1][0], cells[1][1] + 5, 170, 'z2.no', out='z3.seven'))
els.append(ring(1500, 175, 150, 'z1.zero#1', out='z2.no'))
for i in range(7):
    els.append(prop('art:flat', 165, 170 + (i % 4) * 180, 360 + (i // 4) * 185, f'z3.hundreds+{0.08 * i:.2f}', snd=({'n': 'pop', 'g': 0.3} if i == 0 else None)))
els.append(html(f'<div style="width:96px;height:350px;border:6px dashed #FF7A45;border-radius:20px;background:rgba(255,255,255,.55)"></div>', 870, 450, 'z3.no'))
els.append(label('no tens', 870, 665, 'z3.tens', '#FF7A45', size=40))
for i in range(8):
    els.append(prop('art:cube', 34, 990 + (i // 4) * 44, 350 + (i % 4) * 44, f'z3.eight+{0.06 * i:.2f}', snd=None))
els += [label('7 hundreds', 350, 665, 'z3.hundreds', H, size=40), label('8 ones', 1012, 560, 'z3.ones', O, size=40)]
els.append({'k': 'card', 'html': f'<span style="color:{H}">7</span><span style="color:#C77700">0</span><span style="color:{O}">8</span> = seven hundred and eight',
            'x': 760, 'y': 830, 'at': 'z4.seven', 'size': 56, 'pad': '12px 40px 2px', 'snd': None, 'fix': True})
scenes.append({'type': 'free', 'mark': 'zero', 'chapter': 'Zero holds the place', 'els': els, 'mascot': {'x': 1780, 'y': 880, 's': 0.5}})

# ---------------- verse 4: compare 452 and 425 ----------------
els = []
L_, R_ = 560, 1360; NY = 400; G = 120
for cx, a in ((L_, 'k3.four#0'), (R_, 'k3.four#1')):
    els.append(html(box(500, 280, r=40), cx, NY, a))
els += num_digits('452', L_, NY + 10, None, size=200, gap=G, ats=['k3.four#0', 'k3.five', 'k3.two#0'])
els += num_digits('425', R_, NY + 10, None, size=200, gap=G, ats=['k3.four#1', 'k3.two#1', 'k3.five#1'])
for cx in (L_, R_):
    els += [label('H', cx - G, NY + 185, 'k4.both', H, size=40), label('T', cx, NY + 185, 'k4.look', T, DG, size=40), label('O', cx + G, NY + 185, 'k4.look', O, size=40)]
els += [ring(L_ - G, NY + 5, 170, 'k4.four', out='k4.look'), ring(R_ - G, NY + 5, 170, 'k4.four', out='k4.look'),
        html(big('=', 150, '#FF7A45'), 960, NY, 'k4.four', out='k4.look'),
        ring(L_, NY + 5, 170, 'k4.tens'), ring(R_, NY + 5, 170, 'k4.tens'),
        html(big('&gt;', 170, '#FF7A45'), 960, NY, 'k4.tens+0.2', snd={'n': 'pop', 'g': 0.4})]
els.append({'k': 'card', 'html': 'Look at the <span style="color:#2E9B57">hundreds</span> first', 'x': 960, 'y': 760, 'at': 'k2.look', 'size': 54, 'pad': '12px 36px 2px', 'snd': None, 'fix': True, 'out': 'k4.tens'})
els.append({'k': 'card', 'html': f'<span style="color:#C77700">5 tens</span> beat <span style="color:#C77700">2 tens</span>', 'x': 960, 'y': 760, 'at': 'k4.tens', 'size': 54, 'pad': '12px 36px 2px', 'snd': None, 'fix': True, 'out': 'k4.tens+0.8'})
els.append({'k': 'card', 'html': f'452 is bigger than 425', 'x': 960, 'y': 760, 'at': 'k4.tens+0.8', 'size': 58, 'pad': '12px 40px 2px', 'snd': None, 'fix': True})
els.append(prop('crown', 120, L_, NY - 200, 'k4.tens+0.8', snd={'n': 'pop', 'g': 0.4}))
scenes.append({'type': 'free', 'mark': 'compare', 'chapter': 'Which is bigger?', 'title': 'Which is bigger?', 'title_y': 90, 'els': els,
               'mascot': {'x': 1760, 'y': 860, 's': 0.55}, 'confetti': [{'at': 'k4.tens+0.8', 'x': L_, 'y': NY, 'n': 50}]})

scenes.append(chorus('c2', 'chorus2'))

# ---------------- bridge: count by hundreds to 1000 ----------------
els = []
ats = ['b1.one', 'b1.two', 'b1.three', 'b1.four', 'b2.five', 'b2.six', 'b2.seven', 'b3.eight', 'b3.nine', 'b5.ten']
FS = 150
for i in range(10):
    x = 260 + (i % 5) * 195; y = 300 + (i // 5) * 260
    els.append(prop('art:flat', FS, x, y, ats[i], snd={'n': 'pop', 'g': 0.3, 'p': 1 + i * 0.04}))
    els.append(label(str((i + 1) * 100), x, y + 115, ats[i] + '+0.05', H if i < 9 else '#FF7A45', size=44))
els.append(html(box(560, 420, r=44), 1480, 430, 'b5.thousand'))
els.append(html(big('1000', 180, H), 1480, 380, 'b5.thousand', snd={'n': 'pop', 'g': 0.4}))
els.append(html(big('10 hundreds', 64, DG), 1480, 540, 'b5.thousand+0.1'))
scenes.append({'type': 'free', 'mark': 'count', 'chapter': 'Count by hundreds', 'title': 'Count by hundreds!', 'title_y': 90, 'els': els,
               'mascot': {'x': 1760, 'y': 860, 's': 0.6}, 'confetti': [{'at': 'b6.whoa', 'x': 1480, 'y': 400, 'n': 70}]})

# ---------------- quiz ----------------
scenes.append({'type': 'quizintro', 'mark': 'quiz', 'chapter': 'Quiz', 'text': 'Quiz time!'})
def qnum(digits, at, ringi, ring_at):
    e = num_digits(digits, 960, 420, at, size=230, gap=140)
    e.append(ring(960 + (ringi - 1) * 140, 415, 190, ring_at))
    return e
scenes.append({'type': 'question', 'mark': 'q1', 'n': 1, 'cd': 'cd1', 'cdlen': 4.6, 'opts': ['3', '4', '5'], 'ans': '3', 'ticks': False, 'tada': 0.3,
               'opty': 775, 'reveal_at': 'a1.three#0', 'opts_at': 'q1$-0.2', 'els': qnum('345', '@q1+0.2', 0, 'q1.hundreds')})
scenes.append({'type': 'question', 'mark': 'q2', 'n': 2, 'cd': 'cd2', 'cdlen': 3.9, 'opts': ['7', '0', '8'], 'ans': '0', 'ticks': False, 'tada': 0.3,
               'opty': 775, 'reveal_at': 'a2.no#0', 'opts_at': 'q2$-0.2', 'els': qnum('708', '@q2+0.2', 1, 'q2.tens')})
q3 = num_digits('309', 640, 420, '@q3+0.2', size=170, gap=105) + num_digits('390', 1280, 420, 'q3.or', size=170, gap=105)
q3.append(html(big('?', 150, '#FF7A45'), 960, 420, 'q3.or+0.2', out='a3.three#0'))
q3.append(html(big('&lt;', 150, '#FF7A45'), 960, 420, 'a3.three#0+0.1'))
scenes.append({'type': 'question', 'mark': 'q3', 'n': 3, 'cd': 'cd3', 'cdlen': 4.2, 'opts': ['309', '390', 'same'], 'ans': '390', 'ticks': False, 'tada': 0.3,
               'opty': 775, 'reveal_at': 'a3.three#0', 'opts_at': 'q3$-0.2', 'els': q3})

scenes.append(chorus('c3', 'chorus3', 'Sing along'))
scenes.append({'type': 'end', 'mark': 'end', 'app': True, 'app_at': 'o1.app', 'app_top': 'Coming soon to', 'app_big': 'Google Play'})

marks = {'intro': 0.0, 'tens': 9.9, 'v2': 19.35, 'chorus1': 32.0, 'zero': 47.5, 'compare': 55.65, 'chorus2': 65.3, 'count': 79.6,
         'quiz': 97.2, 'q1': 105.7, 'q2': 126.9, 'q3': 139.2, 'chorus3': 151.35, 'end': 168.3,
         'cd1': 112.4, 'cd2': 131.7, 'cd3': 143.7}

spec = {
 'id': 'g2-maths-t1-song', 'theme': 'glow', 'grade': 'Grade 2', 'subject': 'Maths', 'topic': 'Numbers to 1000',
 'page': 'class-2-maths-numbers-to-1000-worksheets',
 'meta': {'title': 'Numbers to 1000 Song | Grade 2 Maths for Kids | Little Takhti',
          'description': 'Sing along with Takhti and learn numbers to 1000! Ten ones make a ten, ten tens make a hundred, and every digit has its place: hundreds, tens and ones. Find out what the zero in 708 means, compare 452 and 425, count by hundreds to 1000, then shout the answers in the quiz.',
          'tags': ['numbers to 1000 song', 'place value song', 'hundreds tens and ones song', 'grade 2 maths', 'maths songs for kids', 'counting by hundreds', 'compare numbers', 'kids quiz song']},
 'thumb_at': ['chorus1', 9.0],
 'scene_bg': 'playroom', 'bg_fx': {'rays': False, 'fireflies': False},
 'song': {'url': SONG_URL, 'duration': TR['duration'], 'beats': TR['beats'],
          'chorus': [[32.2, 46.6], [64.15, 78.6], [151.5, 166.6]], 'marks': marks, 'lines': lines},
 'script': [['song']],
 'scenes': scenes,
}
out = ROOT / 'source/video/lessons/g2-maths-t1-song.json'
out.write_text(json.dumps(spec, indent=1, ensure_ascii=False))
print('wrote', out, len(lines), 'lines')

# ======================= portrait reel (first chorus to the second chorus) =======================
def chorus_p(p, mark):
    els = []
    ch, cells = chart(540, 640, 300, 110, 330, '@' + mark + '+0.1', hsize=48, fix=False,
                      glows=[[f'{p}a.hundreds', f'{p}c.hundreds'], [f'{p}a.tens', f'{p}c.tens'], [f'{p}a.ones', f'{p}c.ones']])
    els += ch
    for (x, y), d, w, c in zip(cells, '345', ['each', 'digit', 'space'], (H, T, O)):
        els.append(html(big(d, 230, c), x, y + 12, f'@{mark}+0.3', glow=[f'{p}d.{w}']))
    els += [label('Hundreds', 540, 1010, f'{p}a.hundreds', H, size=58),
            label('Tens', 540, 1115, f'{p}a.tens', T, DG, size=58),
            label('Ones', 540, 1220, f'{p}a.ones', O, size=58),
            {'k': 'card', 'html': 'Every number has a <span style="color:#1F7A4C">place!</span>', 'x': 540, 'y': 1365, 'at': f'{p}b.place', 'size': 56, 'pad': '12px 36px 2px', 'snd': None},
            {'k': 'card', 'html': f'Count by <span style="color:{H}">100s</span> to <span style="color:{H}">1000!</span>', 'x': 540, 'y': 1500, 'at': f'{p}e.hundreds', 'size': 56, 'pad': '12px 36px 2px', 'snd': None}]
    return {'type': 'free', 'mark': mark, 'title': '♪ Sing along!', 'title_y': 200, 'els': els, 'mascot': {'x': 930, 'y': 1130, 's': 0.5},
            'confetti': [{'at': f'{p}f.thousand', 'x': 540, 'y': 900, 'n': 60}], 'chapter': 'Sing along'}

def zero_p():
    els = [html(box(520, 230, r=36), 480, 330, 'z1.seven')]
    els += num_digits('708', 480, 340, None, size=170, ats=['z1.seven', 'z1.zero#0', 'z1.eight'])
    ch, cells = chart(540, 690, 270, 90, 210, 'z1.zero#1', hsize=38)
    els += ch
    for (x, y), d, a, c in zip(cells, '708', ['z3.seven', 'z2.no', 'z3.eight'], (H, T, O)):
        els.append(html(big(d, 160, c), x, y + 10, a, fix=True))
    els.append(ring(cells[1][0], cells[1][1] + 5, 180, 'z2.no', out='z3.seven'))
    els.append(ring(480, 335, 150, 'z1.zero#1', out='z2.no'))
    for i in range(7):
        els.append(prop('art:flat', 130, 140 + (i % 4) * 142, 1010 + (i // 4) * 145, f'z3.hundreds+{0.08 * i:.2f}', snd=({'n': 'pop', 'g': 0.3} if i == 0 else None)))
    els.append(html('<div style="width:80px;height:275px;border:6px dashed #FF7A45;border-radius:18px;background:rgba(255,255,255,.55)"></div>', 760, 1080, 'z3.no'))
    els.append(label('no tens', 760, 1255, 'z3.tens', '#FF7A45', size=38))
    for i in range(8):
        els.append(prop('art:cube', 30, 870 + (i // 4) * 40, 990 + (i % 4) * 40, f'z3.eight+{0.06 * i:.2f}', snd=None))
    els += [label('7 hundreds', 350, 1255, 'z3.hundreds', H, size=38), label('8 ones', 890, 1180, 'z3.ones', O, size=38)]
    els.append({'k': 'card', 'html': f'<span style="color:{H}">7</span><span style="color:#C77700">0</span><span style="color:{O}">8</span> = seven hundred and eight',
                'x': 540, 'y': 1420, 'at': 'z4.seven', 'size': 48, 'pad': '12px 34px 2px', 'snd': None, 'fix': True})
    return {'type': 'free', 'mark': 'zero', 'chapter': 'Zero holds the place', 'els': els, 'mascot': {'x': 935, 'y': 330, 's': 0.42}}

def compare_p():
    els = []; L_, R_, NY, G = 275, 805, 640, 95
    for cx, a in ((L_, 'k3.four#0'), (R_, 'k3.four#1')):
        els.append(html(box(430, 240, r=36), cx, NY, a))
    els += num_digits('452', L_, NY + 10, None, size=160, gap=G, ats=['k3.four#0', 'k3.five', 'k3.two#0'])
    els += num_digits('425', R_, NY + 10, None, size=160, gap=G, ats=['k3.four#1', 'k3.two#1', 'k3.five#1'])
    for cx in (L_, R_):
        els += [label('H', cx - G, NY + 165, 'k4.both', H, size=38), label('T', cx, NY + 165, 'k4.look', T, DG, size=38), label('O', cx + G, NY + 165, 'k4.look', O, size=38)]
    els += [ring(L_ - G, NY + 5, 140, 'k4.four', out='k4.look'), ring(R_ - G, NY + 5, 140, 'k4.four', out='k4.look'),
            html(big('=', 120, '#FF7A45'), 540, NY, 'k4.four', out='k4.look'),
            ring(L_, NY + 5, 140, 'k4.tens'), ring(R_, NY + 5, 140, 'k4.tens'),
            html(big('&gt;', 130, '#FF7A45'), 540, NY, 'k4.tens+0.2', snd={'n': 'pop', 'g': 0.4})]
    for txt, a, o in (('Look at the <span style="color:#2E9B57">hundreds</span> first', 'k2.look', 'k4.tens'),
                      ('<span style="color:#C77700">5 tens</span> beat <span style="color:#C77700">2 tens</span>', 'k4.tens', 'k4.tens+0.8')):
        els.append({'k': 'card', 'html': txt, 'x': 540, 'y': 1060, 'at': a, 'size': 54, 'pad': '12px 36px 2px', 'snd': None, 'fix': True, 'out': o})
    els.append({'k': 'card', 'html': '452 is bigger than 425', 'x': 540, 'y': 1060, 'at': 'k4.tens+0.8', 'size': 58, 'pad': '12px 40px 2px', 'snd': None, 'fix': True})
    els.append(prop('crown', 110, L_, NY - 185, 'k4.tens+0.8', snd={'n': 'pop', 'g': 0.4}))
    return {'type': 'free', 'mark': 'compare', 'chapter': 'Which is bigger?', 'title': 'Which is bigger?', 'title_y': 200, 'els': els,
            'mascot': {'x': 900, 'y': 1330, 's': 0.5}, 'confetti': [{'at': 'k4.tens+0.8', 'x': L_, 'y': NY, 'n': 50}]}

reel = json.loads(json.dumps(spec))
reel['id'] = 'g2-maths-t1-song-reel'; reel['portrait'] = True; reel['window'] = ['chorus1', -0.3, 47.4]
reel['meta'] = dict(spec['meta'], title='Numbers to 1000 Song #shorts | Little Takhti')
reel['thumb_at'] = ['chorus1', 10.0]
rep = {'chorus1': chorus_p('c1', 'chorus1'), 'zero': zero_p(), 'compare': compare_p(), 'chorus2': chorus_p('c2', 'chorus2')}
reel['scenes'] = [rep.get(s['mark'], s) for s in reel['scenes']]
(ROOT / 'source/video/lessons/g2-maths-t1-song-reel.json').write_text(json.dumps(reel, indent=1, ensure_ascii=False))
print('wrote reel')
