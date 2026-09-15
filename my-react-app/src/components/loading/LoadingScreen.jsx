import { useEffect, useState } from 'react'
import bunny from '../../assets/light/decorations/bunny-run/sprite.webp'
import './LoadingScreen.css'

export default function LoadingScreen({ children }) {
  const [loading, setLoading] = useState(true)
  const [hopping, setHopping] = useState(false)

  useEffect(() => {
    let active = true
    const timers = []
    const delay = ms => new Promise(resolve => timers.push(setTimeout(resolve, ms)))
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const sprite = new Image()
    sprite.src = bunny
    const hopCycle = Promise.race([sprite.decode().catch(() => {}), delay(200)]).then(() => {
      if (active) setHopping(true)
      return delay(250)
    })
    const assets = Promise.all([
      document.fonts.ready,
      ...Array.from(document.querySelectorAll('#hero img, #hero video[poster]')).map(element => {
        const preview = new Image()
        preview.src = element.poster || element.src
        return preview.decode().catch(() => {})
      }),
    ])
    // Reveal the page promptly; video playback must not block the site.
    Promise.all([hopCycle, Promise.race([assets, delay(1200)])]).then(() => {
      if (active) {
        document.body.style.overflow = previousOverflow
        setLoading(false)
      }
    })
    return () => {
      active = false
      timers.forEach(clearTimeout)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return <>
    <div className="site-content" inert={loading} style={loading ? { visibility: 'hidden' } : undefined}>{children}</div>
    {loading && <div className="loading-screen" role="status" aria-live="polite">
      <span className="loading-screen__bunny" data-hopping={hopping || undefined} aria-hidden="true"
        style={{ backgroundImage: `url("${bunny}")` }} />
      <p>Hopping in…</p>
    </div>}
  </>
}
