// Original left/right frames, sharing left frame 01 as the forward rest.
export const PATHS = {
  front: [0],
  left: Array.from({length: 10}, (_, i) => i),
  right: [0, ...Array.from({length: 7}, (_, i) => 10 + i)],
}

export function nextFrame(frame, target) {
  if (frame === target) return frame
  const destination = Object.values(PATHS).find(path => path.includes(target)) ?? PATHS.front
  const index = destination.indexOf(frame)
  if (index >= 0) {
    const targetIndex = Math.max(0, destination.indexOf(target))
    return destination[index + Math.sign(targetIndex - index)]
  }
  const source = Object.values(PATHS).find(path => path.includes(frame))
  return source ? source[source.indexOf(frame) - 1] : 0
}

// Cursor distance from center selects an intermediate original frame.
export function frameAt(x, width) {
  const fraction = Math.max(0, Math.min(1, x / Math.max(1, width)))
  const path = fraction < .5 ? PATHS.left : PATHS.right
  const distance = Math.abs(fraction - .5) * 2
  return path[Math.round(distance * (path.length - 1))]
}
