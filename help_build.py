# Writes help.js (window.HELP and window.HELP_UI) from the help texts in help/*.json. Run: python3 help_build.py
import json
from pathlib import Path
here = Path(__file__).parent
HELP = {}
for f in sorted((here / 'help').glob('*.json')):
    HELP.update(json.loads(f.read_text()))
UI = {
  'nl': {'rules': '📖 Zo speel je', 'tips': '💡 Tips', 'close': 'Begrepen! 👍', 'live': '💡 Tips tijdens het spel'},
  'pl': {'rules': '📖 Jak grać', 'tips': '💡 Porady', 'close': 'Rozumiem! 👍', 'live': '💡 Porady podczas gry'},
  'en': {'rules': '📖 How to play', 'tips': '💡 Tips', 'close': 'Got it! 👍', 'live': '💡 Tips while playing'},
  'sk': {'rules': '📖 Ako hrať', 'tips': '💡 Tipy', 'close': 'Rozumiem! 👍', 'live': '💡 Tipy počas hry'},
}
for k, v in HELP.items():
    for L in ('nl', 'pl', 'en', 'sk'):
        assert L in v and v[L]['rules'] and v[L]['tips'], (k, L)
(here / 'help.js').write_text('// The help texts of every game (made by help_build.py from help/*.json)\nwindow.HELP = '
                              + json.dumps(HELP, ensure_ascii=False, indent=0) + ';\nwindow.HELP_UI = ' + json.dumps(UI, ensure_ascii=False) + ';\n')
print(len(HELP), 'games:', ' '.join(sorted(HELP)))
