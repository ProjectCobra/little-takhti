"""The approved pilot (KG Maths, Adding to 10). It is now an ordinary lesson spec:
source/video/lessons/kg-maths-t4.json, drawn by lesson.py + lesson.html (same frames and sounds as the first pilot).
Usage: python3 source/tools/video2/pilot.py [--frames 3,20,40]
Output: source/tools/video2/out/pilot-kg-maths-t4/{lesson.mp4,thumb.jpg,meta.json}
"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
import lesson

if __name__ == '__main__':
    sys.argv = [sys.argv[0], 'kg-maths-t4', *sys.argv[1:], '--out', str(lesson.HERE / 'out' / 'pilot-kg-maths-t4')]
    lesson.main()
