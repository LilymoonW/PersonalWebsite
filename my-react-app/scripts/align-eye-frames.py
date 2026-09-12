"""Align original eye crops using stationary face regions; never redraw pixels."""
from pathlib import Path
from PIL import Image, ImageFilter
import numpy as np
import json
root = Path(__file__).resolve().parents[1] / 'src/assets/light/eyes'
paths = sorted((root/'left').glob('*.png'))[:10] + sorted((root/'right').glob('*.png'))[1:8] + sorted((root/'front').glob('*.png'))
images = [Image.open(p).convert('RGB') for p in paths]
small = [np.asarray(im.convert('L').filter(ImageFilter.GaussianBlur(3)).resize((301,74)), dtype=float) for im in images]
# Compare forehead, hair and nose, excluding changing pupils and eyelids.
ys, xs = np.mgrid[8:66, 30:271]
mask = (ys < 20) | ((xs > 110) & (xs < 160)) | (ys > 56)
y, x = ys[mask], xs[mask]
reference = small[0][y,x]
shifts=[]
for frame in small:
 best=(float('inf'),0,0)
 for dy in range(-7,8):
  for dx in range(-25,26):
   diff = frame[y+dy,x+dx]-reference
   score = np.mean((diff - np.mean(diff))**2)
   if score < best[0]: best=(score,dx*4,dy*4)
 shifts.append(best[1:])
# The blink is one continuous take: keep its crop fixed so tracking noise
# cannot move the face vertically between eyelid positions.
shifts[17:] = [(84, 20)] * 10
# One common viewport fully inside every shifted source: no padded edges.
left=max(-dx for dx,dy in shifts); top=max(-dy for dx,dy in shifts)
right=min(1206-dx for dx,dy in shifts); bottom=min(297-dy for dx,dy in shifts)
w,h=right-left,bottom-top
atlas=Image.new('RGB',(w,h*len(images)))
for i,(im,(dx,dy)) in enumerate(zip(images,shifts)):
 atlas.paste(im.crop((left+dx,top+dy,right+dx,bottom+dy)),(0,i*h))
out=root/'original-cursor'
atlas.save(out/'aligned.webp',quality=92,method=6)
(out/'alignment.json').write_text(json.dumps({'width':w,'height':h,'frames':[{'source':str(p.relative_to(root)),'cropOffset':[dx,dy]} for p,(dx,dy) in zip(paths,shifts)]},indent=2))
print(w,h,shifts)
