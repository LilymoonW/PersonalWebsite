import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useReducedMotion } from 'motion/react'

export default function ProjectImageGallery({ images, title, duplicate }) {
  const [index, setIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const reducedMotion = useReducedMotion()
  const dialog = useRef(null)
  useEffect(() => {
    if (hovered || focused || expanded || reducedMotion) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex(current => (current + 1) % images.length)
    }, 4000)
    return () => window.clearInterval(timer)
  }, [hovered, focused, expanded, reducedMotion, images.length])
  const expand = () => { setExpanded(true); dialog.current.showModal() }
  const move = direction => setIndex(current => (current + direction + images.length) % images.length)
  const controls = () => <div className="project-image-gallery__controls">
    <button type="button" aria-label={`Previous image — ${title}`} onClick={() => move(-1)}>‹</button>
    <span>{index + 1} / {images.length}</span>
    <button type="button" aria-label={`Next image — ${title}`} onClick={() => move(1)}>›</button>
  </div>

  return <>
    <div className="project-image-gallery"
      onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true) }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
      <button type="button" className="project-image-gallery__image" tabIndex={duplicate ? -1 : 0}
        aria-label={`Expand image ${index + 1} — ${title}`} onClick={expand}>
        <img src={images[index].src} alt={images[index].alt} loading="lazy" draggable="false" />
        <span className="project-image-gallery__expand" aria-hidden="true">Expand</span>
      </button>
    </div>
    {createPortal(<dialog ref={dialog} className="project-image-dialog" aria-label={`${title} image gallery`}
      onClose={() => { setExpanded(false); setHovered(false) }}
      onClick={event => { if (event.target === event.currentTarget) dialog.current.close() }}
      onKeyDown={event => {
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
      }}>
      <button type="button" className="project-image-dialog__close" aria-label="Close gallery" onClick={() => dialog.current.close()} autoFocus>
        <span>Close</span><span aria-hidden="true">×</span>
      </button>
      <img src={images[index].src} alt={images[index].alt} />
      <p>{images[index].alt}</p>
      {controls()}
    </dialog>, document.body)}
  </>
}
