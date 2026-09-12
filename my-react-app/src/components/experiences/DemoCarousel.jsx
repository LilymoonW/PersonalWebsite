import { useEffect, useRef, useState } from 'react'

export default function DemoCarousel({ demos }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)
  const [compact, setCompact] = useState(() => window.matchMedia('(max-width: 520px)').matches)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const root = useRef(null)
  const count = compact ? 1 : Math.min(2, demos.length)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 520px)')
    const update = () => {
      root.current.querySelectorAll('video').forEach(video => video.pause())
      setPlaying(false)
      setCompact(media.matches)
    }
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 })
    observer.observe(root.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (paused || hovered || focused || playing || !visible || reducedMotion) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex(current => (current + 1) % demos.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [paused, hovered, focused, playing, visible, reducedMotion, demos.length])

  function navigate(next) {
    root.current.querySelectorAll('video').forEach(video => video.pause())
    setPlaying(false)
    setIndex((next + demos.length) % demos.length)
  }

  function onPlay(event) {
    root.current.querySelectorAll('video').forEach(video => {
      if (video !== event.currentTarget) video.pause()
    })
    setPlaying(true)
  }

  function onStop() {
    setPlaying([...root.current.querySelectorAll('video')].some(video => !video.paused && !video.ended))
  }

  return <div ref={root} className="demo-carousel" role="region" aria-roledescription="carousel" aria-label="Catena feature recordings"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocus={() => setFocused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
    <div className="demo-carousel__toolbar">
      <p>{String(index + 1).padStart(2, '0')} / {demos.length} <span>Explore the app</span></p>
      <div className="demo-carousel__controls">
        {!reducedMotion ? <button type="button" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Resume automatic carousel' : 'Pause automatic carousel'}>{paused ? 'Resume' : 'Pause'}</button> : null}
        <button type="button" onClick={() => navigate(index - 1)} aria-label="Previous feature">←</button>
        <button type="button" onClick={() => navigate(index + 1)} aria-label="Next feature">→</button>
      </div>
    </div>
    <div className="story-demos demo-carousel__slides" key={`${index}-${count}`}>
      {Array.from({ length: count }, (_, offset) => {
        const position = (index + offset) % demos.length
        const demo = demos[position]
        return <figure key={demo.src} role="group" aria-roledescription="slide" aria-label={`${position + 1} of ${demos.length}: ${demo.title}`}>
          <video controls playsInline preload="none" poster={demo.poster} aria-label={demo.title} onPlay={onPlay} onPause={onStop} onEnded={onStop}>
            <source src={demo.src} type="video/mp4" />
            <a href={demo.src}>Watch {demo.title}</a>
          </video>
          <figcaption><h3>{demo.title}</h3><p>{demo.text}</p></figcaption>
        </figure>
      })}
    </div>
    <div className="demo-carousel__dots" aria-label="Choose a feature">
      {demos.map((demo, position) => <button key={demo.src} type="button" aria-label={`Show ${demo.title}`} aria-current={index === position ? 'true' : undefined} onClick={() => navigate(position)} />)}
    </div>
  </div>
}
