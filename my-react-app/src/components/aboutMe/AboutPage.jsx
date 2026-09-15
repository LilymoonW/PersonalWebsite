import { useEffect, useRef, useState } from 'react'
import Nav from '../navbar/Nav.jsx'
import './AboutPage.css'

const image = name => `/images/about/${name === 'coffee' ? 'coffee-upright' : name}.webp`
const spotifyPlaylist = 'https://open.spotify.com/playlist/0hFtcgNXNCZ29w87yNXZ8z'
const itemLinks = {
  'chocolate-cherry-cake': { url: 'https://livforcake.com/black-forest-cake/', label: 'Black Forest Cake — open recipe in a new tab' },
  headphones: { url: spotifyPlaylist, label: 'My headphones — open Spotify playlist in a new tab' },
  'brown-university-ribbons-restored': { url: 'https://ballroom.mit.edu/index.php/category/results/', label: 'Ballroom ribbons — open competition results in a new tab' },
}
const introduction = 'A senior at Wellesley College studying computer science. I am passionate about creating intuitive, user-centered experiences at the intersection of design and technical implementation.'
const stickers = [
  { id: 'text-sticker', alt: 'Text sticker', kind: 'text', x: 55, y: 15, width: 59, angle: 0 },
  { id: 'about-sticker', alt: 'About Me sticker', kind: 'title', x: 28, y: 8, width: 35, angle: 0 },
]
let entrancePlayed = false
let topItemLayer = 6
const keepsakes = [
  { id: 'budapest-postcard', alt: 'Budapest', x: 26, y: 28, width: 33, angle: 17 },
  { id: 'dance-postcard', alt: 'Ballroom Dance', x: 53, y: 33, width: 33, angle: -29 },
  { id: 'brown-university-ribbons-restored', alt: 'Brown University ballroom competition ribbons', x: 84, y: 22, width: 23, angle: 4 },
  { id: 'headphones', alt: 'My headphones', x: 75, y: 36, width: 24, angle: 12 },
  { id: 'controller', alt: 'Playstation Controller', x: 24, y: 47, width: 27.52, angle: -8 },
  { id: 'hirono', alt: 'Hirono collectible figure', x: 40, y: 47, width: 16, angle: -3 },
  { id: 'camera', alt: 'Camera', x: 59, y: 53, width: 31, angle: 9 },
  { id: 'coffee', alt: 'Latte', x: 76, y: 52, width: 22, angle: 0 },
  { id: 'fruit-tea', alt: 'Fruit tea', x: 34, y: 63, width: 17, angle: -18 },
  { id: 'cookiedough', alt: 'Meet Cookiedough!', x: 17, y: 67, width: 23, angle: -8 },
  { id: 'chocolate-cherry-cake', alt: 'Black Forest Cake', x: 86, y: 71, width: 24, angle: 5 },
]

const notes = {
  cookiedough: 'This is Cookiedough, named because she looks like cookie dough ice cream! What a cutie. She’s a Jack Russell–Chihuahua mix, but she’s bigger than both of them!',
  'budapest-postcard': 'I studied abroad in Budapest for a semester! It gave me a more global perspective on the computer science industry.',
  'dance-postcard': 'I was part of the MIT Ballroom Dance Team! I competed at schools across the East Coast, including Columbia, Tufts, MIT, and Brown.',
  'brown-university-ribbons-restored': 'Ribbons from Brown University’s ballroom competition.',
  headphones: 'Music and true crime podcasts are part of my everyday rotation. Recommendations are welcome!',
  controller: 'Last summer, I played a lot of Overcooked on PlayStation! I would love to develop something like it one day.',
  hirono: 'This one is the Voyager from the Reshape series. It represents adventure and exploration despite setbacks, and the courage to keep moving forward.',
  camera: 'I like editing in my free time, and I’m trying to get better at photography and film! Maybe one day I’ll be making cinematic vlogs.',
  coffee: 'I was a barista at a coffee shop one summer! I learned how to do a little latte art there.',
  'fruit-tea': 'I worked at a boba shop one summer, too, and got to take home a lot of drinks! This one is my favorite.',
}

function MovableItem({ item, index, enabled, onSelect }) {
  const [landed, setLanded] = useState(false)
  const [peeled, setPeeled] = useState(false)
  // Store movement relative to the collage width, so resized layouts retain
  // the same arrangement instead of keeping desktop-sized pixel offsets.
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [raised, setRaised] = useState(0)
  const gesture = useRef(null)
  const suppressClick = useRef(false)
  const interactive = enabled || landed

  function start(event) {
    if (!interactive || event.button !== 0 || !event.isPrimary) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const sceneBounds = event.currentTarget.parentElement.getBoundingClientRect()
    gesture.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, origin: offset, bounds, sceneBounds, moved: false }
    suppressClick.current = false
    setRaised(++topItemLayer)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function move(event) {
    const drag = gesture.current
    if (!drag || drag.pointerId !== event.pointerId) return
    const dx = event.clientX - drag.x
    const dy = event.clientY - drag.y
    if (Math.hypot(dx, dy) > 6) drag.moved = true
    if (!drag.moved) return
    const clamp = (value, low, high) => Math.max(low, Math.min(high, value))
    setOffset({
      x: drag.origin.x + clamp(dx, drag.sceneBounds.left - drag.bounds.left, drag.sceneBounds.right - drag.bounds.right) / drag.sceneBounds.width * 100,
      y: drag.origin.y + clamp(dy, drag.sceneBounds.top - drag.bounds.top, drag.sceneBounds.bottom - drag.bounds.bottom) / drag.sceneBounds.width * 100,
    })
  }

  function finish(event) {
    const drag = gesture.current
    if (!drag || drag.pointerId !== event.pointerId) return
    suppressClick.current = drag.moved || event.type === 'pointercancel'
    gesture.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <button type="button" className={`collage-flight collage-item collage-item--${item.id}${item.kind ? ` collage-sticker collage-sticker--${item.kind}` : ''}${raised ? ' is-raised' : ''}`}
      style={{ '--x': `${item.x}%`, '--y': `${item.y}%`, '--width': `${item.width}%`, '--angle': `${item.angle}deg`, '--delay': `${850 + index * 85}ms`, translate: `${offset.x}cqw ${offset.y}cqw`, '--item-layer': raised || 6 }}
      disabled={!interactive} aria-label={item.kind ? `${item.alt} — ${peeled ? 'flatten' : 'peel'}` : itemLinks[item.id]?.label || `${item.alt} — view details`} aria-haspopup={item.kind || itemLinks[item.id] ? undefined : 'dialog'}
      aria-pressed={item.kind ? peeled : undefined} aria-describedby={item.kind === 'text' ? 'sticker-introduction' : undefined}
      onAnimationEnd={event => { if (event.animationName === 'fly-from-envelope') setLanded(true) }}
      onPointerDown={start} onPointerMove={move} onPointerUp={finish} onPointerCancel={finish}
      onLostPointerCapture={() => { gesture.current = null }}
      onClick={event => {
        if (suppressClick.current && event.detail !== 0) { suppressClick.current = false; return }
        if (item.kind) { setPeeled(!peeled); setRaised(++topItemLayer) }
        else onSelect(item)
      }}>
      {item.kind ? <>
        <img src={image(item.id)} className={peeled ? 'sticker-face is-hidden' : 'sticker-face'} alt="" draggable="false" />
        <img src={image(`${item.id}-peeled`)} className={peeled ? 'sticker-face' : 'sticker-face is-hidden'} alt="" draggable="false" />
      </> : <img src={image(item.id)} alt="" draggable="false" />}
    </button>
  )
}

export default function AboutPage() {
  const scene = useRef(null)
  const [alreadyPlayed] = useState(() => entrancePlayed)
  const [ready, setReady] = useState(alreadyPlayed)
  const [selected, setSelected] = useState(null)
  const dialog = useRef(null)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  function showItem(item) {
    if (itemLinks[item.id]) {
      window.open(itemLinks[item.id].url, '_blank', 'noopener,noreferrer')
      return
    }
    setSelected(item)
    dialog.current.showModal()
  }

  useEffect(() => {
    if (alreadyPlayed) return
    let cancelled = false
    const images = [...scene.current.querySelectorAll('img')]
    // Start only once the layered artwork can be displayed together.
    Promise.allSettled([...images.map(img => img.decode()), document.fonts.ready]).then(() => {
      if (cancelled) return
      entrancePlayed = true
      setReady(true)
    })
    return () => { cancelled = true }
  }, [alreadyPlayed])

  return (
    <div className="about-page">
      <Nav hrefBase="./" activeId="about" />
      <main className="about-collage">
        <div ref={scene} className={`about-collage__scene${ready ? ' is-ready' : ''}${alreadyPlayed ? ' has-played' : ''}`}>
          <img className="collage-envelope collage-envelope--back" src={image('envelope-open')} alt="An open envelope filled with things from my life" />
          <h1 className="collage-sr-only">About Me</h1>
          <p id="sticker-introduction" className="collage-sr-only">{introduction}</p>
          {stickers.map((item, index) => <MovableItem key={item.id} item={item} index={index - 2} enabled={alreadyPlayed || (ready && reducedMotion)} />)}
          {keepsakes.map((item, index) => (
            <MovableItem key={item.id} item={item} index={index} enabled={alreadyPlayed || (ready && reducedMotion)} onSelect={showItem} />
          ))}
          <img className="collage-envelope collage-envelope--front" src={image('envelope-front-pocket')} alt="" />
          <img className="collage-envelope collage-envelope--closed" src={image('envelope-closed')} alt="" />
        </div>
        <dialog ref={dialog} className={`keepsake-detail${['controller', 'camera'].includes(selected?.id) ? ` keepsake-detail--${selected.id}` : ''}`} aria-label={selected?.alt || 'Item details'} aria-describedby="keepsake-detail-description"
          onClick={event => { if (event.target === event.currentTarget) dialog.current.close() }}>
          {selected && <>
            <img className="keepsake-detail__item" src={image(selected.id)} alt={selected.alt} />
            <div className="keepsake-detail__card">
              <p id="keepsake-detail-description" tabIndex={-1} autoFocus>{selected.id === 'hirono' && 'I collect Hironos! '}{notes[selected.id]}</p>
            </div>
          </>}
        </dialog>
      </main>
    </div>
  )
}
