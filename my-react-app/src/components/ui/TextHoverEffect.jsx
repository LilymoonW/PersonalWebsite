// Adapted from Aceternity UI's Text Hover Effect by Manu Arora:
// https://ui.aceternity.com/components/text-hover-effect
// Uses the same animated gradient mask and outline reveal, with the
// portfolio's typography, scoped SVG IDs and pointer events.
import { useId, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import './TextHoverEffect.css'

export default function TextHoverEffect() {
  const id = useId().replaceAll(':', '')
  const reduced = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const [cursor, setCursor] = useState({ cx: 500, cy: 70 })
  const follow = event => {
    const box = event.currentTarget.getBoundingClientRect()
    setCursor({ cx: (event.clientX - box.left) / box.width * 1000, cy: (event.clientY - box.top) / box.height * 140 })
    setHovered(true)
  }
  const words = <><tspan>Design</tspan><tspan fontSize="32" fontStyle="normal"> ✶ </tspan><tspan>Product</tspan><tspan fontSize="32" fontStyle="normal"> ✶ </tspan><tspan>Code</tspan></>
  const textProps = { x: 500, y: 76, textAnchor: 'middle', dominantBaseline: 'middle', textLength: 970, lengthAdjust: 'spacingAndGlyphs' }
  return (
    <svg className="text-hover-effect" viewBox="0 0 1000 140" aria-hidden="true"
      onPointerMove={follow} onPointerDown={follow}
      onPointerLeave={() => setHovered(false)} onPointerCancel={() => setHovered(false)}>
      <defs>
        <linearGradient id={`${id}-color`} x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff83bc" />
          <stop offset="25%" stopColor="#f65092" />
          <stop offset="50%" stopColor="#df72db" />
          <stop offset="75%" stopColor="#b775ef" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <motion.radialGradient id={`${id}-reveal`} gradientUnits="userSpaceOnUse" r="230"
          animate={cursor} initial={false} transition={{ duration: reduced ? 0 : .12, ease: 'easeOut' }}>
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id={`${id}-mask`} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="140">
          <rect width="1000" height="140" fill={`url(#${id}-reveal)`} />
        </mask>
        <filter id={`${id}-glow`} x="-30%" y="-80%" width="160%" height="260%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>
      {/* Full-bleed transparent hit target. Without it the pointer only
          registers over the painted glyphs, so moving through the gaps
          between words drops the hover state mid-sweep. */}
      <rect width="1000" height="140" fill="transparent" pointerEvents="all" />
      <g mask={`url(#${id}-mask)`} opacity={hovered ? 1 : 0}>
        <text {...textProps} fill={`url(#${id}-color)`} stroke={`url(#${id}-color)`}
          strokeWidth="8" filter={`url(#${id}-glow)`}>{words}</text>
      </g>
      <text {...textProps} fill="#fff">{words}</text>
    </svg>
  )
}
