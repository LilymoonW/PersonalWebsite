import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { projects, projectLinkLabels } from '../projects/projectData.js'
import ProjectImageGallery from './ProjectImageGallery.jsx'

export function ProjectCard({ project, duplicate, framed = false, onPlaybackChange }) {
  const [hovered, setHovered] = useState(false)
  const [keyboardFocused, setKeyboardFocused] = useState(false)

  useEffect(() => {
    const reset = () => { setHovered(false); setKeyboardFocused(false) }
    window.addEventListener('blur', reset)
    window.addEventListener('pageshow', reset)
    document.addEventListener('visibilitychange', reset)
    return () => {
      window.removeEventListener('blur', reset)
      window.removeEventListener('pageshow', reset)
      document.removeEventListener('visibilitychange', reset)
    }
  }, [])

  return (
    <article className="project-carousel__card" tabIndex={duplicate ? -1 : 0} aria-label={project.title}
      data-active={hovered || keyboardFocused || undefined} data-video={Boolean(project.video) || undefined} data-gallery={Boolean(project.images) || undefined}
      onPointerMove={event => { if (event.pointerType === 'mouse') setHovered(true) }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={event => setKeyboardFocused(event.target.matches(':focus-visible'))}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardFocused(false)
      }}>
      <div className="project-card__visual">
        <div className="project-card__media" data-layout={project.imageLayout}>
          {project.images ? <ProjectImageGallery images={project.images} title={project.title} duplicate={duplicate} /> : project.video ? <video controls playsInline preload="none" poster={project.image}
            width="1080" height="2400" aria-label={`${project.title} app demonstration`}
            tabIndex={duplicate ? -1 : 0}
            onPlay={() => onPlaybackChange?.(true)}
            onPause={() => onPlaybackChange?.(false)}
            onEnded={() => onPlaybackChange?.(false)}>
            <source src={project.video} type="video/mp4" />
          </video> : <img src={project.image} alt={`${project.title} project preview`} loading="lazy" draggable="false" />}
        </div>
        <div className="project-card__overlay">
          {framed && <p className="project-card__description">{project.description}</p>}
          {project.links.length > 0 && <div className="project-card__links">
            {project.links.map(link => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                tabIndex={duplicate ? -1 : 0}
                onClick={event => {
                  setHovered(false)
                  setKeyboardFocused(false)
                  if (event.detail > 0) event.currentTarget.blur()
                }}
                aria-label={`${link.label || projectLinkLabels[link.type] || link.type} — ${project.title} (opens in a new tab)`}>
                <span aria-hidden="true">↗</span>
                {link.label || projectLinkLabels[link.type] || link.type}
              </a>
            ))}
          </div>}
        </div>
      </div>
      <div className="project-card__caption">
        <h3>{project.title}</h3>
        <ul className="project-card__tags" aria-label="Project highlights">
          {project.tags.map(tag => <li key={tag} data-live={tag === 'Live' || undefined}>{tag}</li>)}
        </ul>
        {!framed && <p className="project-card__description">{project.description}</p>}
      </div>
    </article>
  )
}

export default function AppleCardsCarousel() {
  const [paused, setPaused] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [keyboardActive, setKeyboardActive] = useState(false)
  useEffect(() => {
    const reset = () => setKeyboardActive(false)
    window.addEventListener('blur', reset)
    return () => window.removeEventListener('blur', reset)
  }, [])
  const reducedMotion = useReducedMotion()
  const manual = paused || reducedMotion || keyboardActive

  return (
    <div className="project-gallery">
      <div className="project-gallery__controls">
        <span>{manual ? 'Scroll to explore' : 'A few things I’ve made'}</span>
        {!reducedMotion && <button type="button" aria-pressed={paused} aria-controls="project-carousel"
          onClick={() => setPaused(value => !value)}>
          <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span> {paused ? 'Play carousel' : 'Pause carousel'}
        </button>}
      </div>
      <div id="project-carousel" className="project-carousel" data-manual={manual || undefined} data-playing={playing || undefined}
        role="region" aria-label="Projects carousel"
        onFocusCapture={event => {
          if (event.target.matches(':focus-visible')) setKeyboardActive(true)
        }}
        onBlurCapture={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) setKeyboardActive(false)
        }}>
        <div className="project-carousel__track" style={{ '--scroll-duration': `${projects.length * 12}s` }}>
          {(manual ? [0] : [0, 1]).map(copy => (
            <div className="project-carousel__group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {projects.map(project => <ProjectCard key={project.id} project={project} framed duplicate={copy === 1} onPlaybackChange={setPlaying} />)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
