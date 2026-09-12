import { useRef } from 'react'
import './Gradient.css'

/**
 * Soft animated background wash.
 *
 * Renders behind its parent's content, so the parent needs
 * `position: relative`.
 *
 * Pass one blob or several. Each is positioned independently:
 *
 *   <Gradient blobs={[{ color: '#F65D94', at: 'top right' }]} />
 *
 *   <Gradient blobs={[
 *     { color: 'var(--accent)',     at: 'top right', size: 90 },
 *     { color: 'var(--glow-cool)',  at: 'bottom left', size: 70, intensity: 0.3 },
 *   ]} />
 *
 * Blob options:
 *   color      any CSS color, or a var(). Required.
 *   at         'top left' | 'top' | 'top right' | 'left' | 'center' |
 *              'right' | 'bottom left' | 'bottom' | 'bottom right',
 *              or explicit { x, y } percentages: { x: 20, y: 80 }.
 *   size       blob width as % of the container (default 80). Height
 *              tracks it unless `height` is given.
 *   height     override height as % of the container.
 *   intensity  0–1 colour strength (default 0.38).
 *   blur       blur radius in px (default 120).
 *   shape      'circle' (default) or 'splosh' — an irregular, slowly
 *              morphing silhouette that reads as a spill rather than
 *              a halo.
 *   wisp       true to add trailing tendrils that stretch and curl off
 *              the blob. Best combined with the `liquid` prop.
 *   speed      seconds for one drift cycle (default 18). Vary per blob
 *              so the motion never visibly repeats.
 *   delay      negative offset in seconds; defaults to staggering them.
 */

const ANCHORS = {
  'top left': { x: 0, y: 0 },
  top: { x: 50, y: 0 },
  'top right': { x: 100, y: 0 },
  left: { x: 0, y: 50 },
  center: { x: 50, y: 50 },
  right: { x: 100, y: 50 },
  'bottom left': { x: 0, y: 100 },
  bottom: { x: 50, y: 100 },
  'bottom right': { x: 100, y: 100 },
}

// Blobs are sized well beyond their anchor so they bleed off-canvas
// instead of reading as a circle sitting inside the section.
function resolve(at) {
  if (at && typeof at === 'object') return { x: at.x ?? 50, y: at.y ?? 50 }
  return ANCHORS[at] ?? ANCHORS.center
}

/**
 * `liquid` blends the blobs into one continuous gradient field: the whole
 * group is blurred heavily so each blob's colour bleeds into its
 * neighbours and no individual shape stays legible. Each instance needs
 * its own filter id so multiple Gradients don't collide.
 */
let fieldId = 0

function Gradient({ blobs = [], className = '', noise = true, liquid = false }) {
  const filterId = useRef(null)
  if (liquid && filterId.current === null) filterId.current = `wash-${fieldId++}`

  return (
    <div className={`gradient ${className}`.trim()} aria-hidden="true">
      {liquid && (
        <svg className="gradient__defs" aria-hidden="true">
          <defs>
            {/* Pure diffusion — deliberately no alpha-contrast pass. A
                goo filter's contrast step is what gives blobs a defined
                outline; here the colours should melt into one another
                instead, so this only blurs the group as a whole. That
                bleeds each blob's colour into its neighbours and leaves
                a continuous field rather than countable shapes. */}
            <filter
              id={filterId.current}
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feGaussianBlur in="SourceGraphic" stdDeviation="58" />
            </filter>
          </defs>
        </svg>
      )}
      <div
        className="gradient__group"
        style={liquid ? { filter: `url(#${filterId.current})` } : undefined}
      >
      {blobs.map((blob, i) => {
        const { x, y } = resolve(blob.at)
        const size = blob.size ?? 80
        const height = blob.height ?? size * 1.2

        // A splosh brings its own morph animation; circles cycle through
        // the three drift paths so neighbours don't move in lockstep.
        const variant =
          blob.shape === 'splosh' ? 'splosh' : `${(i % 3) + 1}`
        const wisp = blob.wisp ? ' gradient__blob--wisp' : ''

        return (
          <span
            key={i}
            className={`gradient__blob gradient__blob--${variant}${wisp}`}
            style={{
              '--blob-color': blob.color,
              '--blob-x': `${x}%`,
              '--blob-y': `${y}%`,
              '--blob-w': `${size}%`,
              '--blob-h': `${height}%`,
              '--blob-intensity': blob.intensity ?? 0.38,
              '--blob-blur': `${blob.blur ?? 120}px`,
              '--blob-speed': `${blob.speed ?? 18 + i * 3}s`,
              '--blob-delay': `${blob.delay ?? -i * 5}s`,
            }}
          />
        )
      })}
      </div>
      {noise && <span className="gradient__noise" />}
    </div>
  )
}

export default Gradient
