import { useEffect, useRef } from 'react'
import { nextFrame } from './animation.js'
import atlas from '../../assets/light/eyes/original-cursor/aligned.webp'
import './Eyes.css'

const BLINK = [17, 18, 19, 20, 21, 20, 19, 18, 17, 0]

function Eyes({ className, targetFrame = 0 }) {
  const sprite = useRef(null)
  const previousSprite = useRef(null)
  const blinkRequested = useRef(false)
  const blinkBusy = useRef(false)
  const desired = useRef(targetFrame)
  useEffect(() => { desired.current = targetFrame }, [targetFrame])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const image = new Image()
    let stopped = false
    let ready = false
    let raf
    let frame = 0
    let blinkIndex = -1
    let nextStep = 0
    let changedAt = 0
    let blendDuration = 1
    const show = () => {
      sprite.current.style.backgroundPosition = `0% ${frame * 100 / 26}%`
      sprite.current.dataset.frame = String(frame)
    }
    function reset() {
      cancelAnimationFrame(raf)
      frame = 0
      blinkIndex = -1
      blinkRequested.current = false
      blinkBusy.current = false
      show()
      previousSprite.current.style.backgroundPosition = '0% 0%'
      sprite.current.style.opacity = '1'
      nextStep = performance.now()
      if (ready && !stopped && !media.matches && !document.hidden) raf = requestAnimationFrame(tick)
    }
    function tick(now) {
      if (stopped || media.matches || document.hidden) return
      if (now >= nextStep) {
        const previous = frame
        if (blinkIndex >= 0) {
          blinkIndex += 1
          frame = BLINK[blinkIndex] ?? 0
          if (blinkIndex >= BLINK.length - 1) {
            blinkIndex = -1
            blinkBusy.current = false
          }
        } else if (blinkRequested.current) {
          frame = nextFrame(frame, 0)
          if (frame === 0) {
            blinkRequested.current = false
            blinkIndex = 0
            frame = 17
          }
        } else {
          frame = nextFrame(frame, desired.current ?? 0)
        }
        const isBlinkJoin = (previous === 0 && frame === 17) || (previous === 17 && frame === 0)
        const duration = isBlinkJoin ? 120 : blinkIndex >= 0 ? 55 : 32
        if (frame !== previous) {
          previousSprite.current.style.backgroundPosition = `0% ${previous * 100 / 26}%`
          changedAt = now
          blendDuration = isBlinkJoin ? 120 : blinkIndex >= 0 ? 35 : 1
          show()
        }
        nextStep = now + duration
      }
      sprite.current.style.opacity = String(Math.min(1, (now - changedAt) / blendDuration))
      raf = requestAnimationFrame(tick)
    }
    image.src = atlas
    image.decode().then(() => { ready = true; if (!stopped) reset() }).catch(() => {})
    media.addEventListener('change', reset)
    document.addEventListener('visibilitychange', reset)
    return () => {
      stopped = true
      cancelAnimationFrame(raf)
      media.removeEventListener('change', reset)
      document.removeEventListener('visibilitychange', reset)
    }
  }, [])

  const blink = () => {
    if (blinkBusy.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    blinkRequested.current = true
    blinkBusy.current = true
  }

  return <button type="button" onClick={blink} className={['eyes', className].filter(Boolean).join(' ')} aria-label="Blink eyes">
    <span ref={previousSprite} className="eyes__original" style={{ backgroundImage: `url("${atlas}")` }} aria-hidden="true" />
    <span ref={sprite} className="eyes__original" style={{ backgroundImage: `url("${atlas}")` }} aria-hidden="true" />
  </button>
}
export default Eyes
