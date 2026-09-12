import { useEffect, useRef } from 'react'

/**
 * BoomerangVideo — plays a clip forward, then backward, then forward again,
 * and keeps ping-ponging for as long as it's mounted.
 *
 * HTML video has no native reverse playback, so the backward leg is driven by
 * stepping `currentTime` down each animation frame. Forward legs use real
 * playback so they stay smooth and correctly paced.
 *
 * Props:
 *   src        video source
 *   speed      multiplier for the reverse leg (1 = same pace as forward)
 *   className  applied to the <video>
 */
function BoomerangVideo({ src, speed = 1, className, ...rest }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let rewinding = false
    let frameId = null
    let lastTime = 0

    const startForward = () => {
      rewinding = false
      video.currentTime = 0
      video.play().catch(() => {})
    }

    const startRewind = () => {
      video.pause()
      rewinding = true
      lastTime = performance.now()
      frameId = requestAnimationFrame(step)
    }

    const step = (now) => {
      const delta = ((now - lastTime) / 1000) * speed
      lastTime = now

      const next = video.currentTime - delta
      if (next <= 0) {
        // Hit the head of the clip — hand control back to forward playback.
        video.currentTime = 0
        frameId = null
        startForward()
        return
      }

      video.currentTime = next
      frameId = requestAnimationFrame(step)
    }

    // `ended` only fires on the forward legs, since rewinding is paused.
    const handleEnded = () => {
      if (!rewinding) startRewind()
    }

    video.addEventListener('ended', handleEnded)
    video.play().catch(() => {})

    return () => {
      video.removeEventListener('ended', handleEnded)
      if (frameId !== null) cancelAnimationFrame(frameId)
    }
  }, [src, speed])

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      preload="auto"
      className={className}
      {...rest}
    />
  )
}

export default BoomerangVideo
