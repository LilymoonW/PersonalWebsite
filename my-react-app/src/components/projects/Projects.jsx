import { useState } from 'react'
import AppleCardsCarousel from '../ui/AppleCardsCarousel.jsx'
import bunny from '../../assets/light/decorations/bunny-run/sprite.webp'
import './Projects.css'

export default function Projects() {
  const [paused, setPaused] = useState(false)
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading" data-paused={paused}>
      <div className="projects__heading">
        <h2 id="projects-heading">Projects</h2>
        <button className="projects__pause" type="button" onClick={() => setPaused(value => !value)}
          aria-label={paused ? 'Play project animations' : 'Pause project animations'} aria-pressed={paused}>
          {paused ? <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M6 3 16 10 6 17Z" /></svg>
            : <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 4h3v12H5zm7 0h3v12h-3z" /></svg>}
        </button>
      </div>
      <AppleCardsCarousel paused={paused} />
      <div className="bunny-lane" aria-hidden="true" style={{ '--bunny-sprite': `url("${bunny}")` }}>
        <div className="bunny-lane__track">
          {[0,1].map(copy => <div className="bunny-lane__group" key={copy}>
            {[0,1,2,3,4,5,6,7].map(index => <span className="bunny-runner" key={index} style={{ '--phase': `${(index % 4) * -.4}s` }} />)}
          </div>)}
        </div>
      </div>
    </section>
  )
}
