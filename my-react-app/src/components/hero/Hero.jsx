import lilyVideo from '../../assets/light/videos/ditherLilies-loop.mp4'
import lilyPoster from '../../assets/light/videos/ditherLilies-poster.png'
import './Hero.css'

/**
 * Hero — empty scaffolding.
 *
 * The layout regions are here and wired up; the content is not. Fill in
 * the marked slots as the design settles.
 *
 * Assets waiting to be used (all WebP, in src/assets/light/):
 *   eyes/front/blink-front-01..10   dithered eyes, blink cycle
 *   eyes/left/look-left-01..17      look left cycle
 *   eyes/right/look-right-01..14    look right cycle
 *   decorations/decoration.webp     tall ASCII stipple figure
 *   decorations/bunny.webp          wide ASCII stipple strip
 *   phone/1.webp, phone/2.webp      600x600 squares
 *   videos/ditherLilies-loop.mp4    dithered lilies, ping-pong baked in
 *
 * To animate the eyes later, import a sequence with a glob and step an
 * index through it — the frames are numbered so sort order is play order:
 *
 *   const FRONT = Object.entries(
 *     import.meta.glob('../../assets/light/eyes/front/*.webp',
 *       { eager: true, import: 'default' }),
 *   )
 *     .sort(([a], [b]) => a.localeCompare(b))
 *     .map(([, src]) => src)
 */

function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero__inner">
        {/* Headline. */}
        <div className="hero__title">
          <p className="hero__eyebrow">portfolio</p>
          <h1>Lilymoon</h1>
        </div>

        {/* Centerpiece — the eyes, or whichever asset leads. */}
        <div className="hero__visual">
          {/* preload="metadata", not "auto": the poster carries first
              paint, so the 700KB loop should not compete with the
              fonts and first render for bandwidth. */}
          <video className="hero__video" src={lilyVideo}
            width="256" height="256" poster={lilyPoster}
            autoPlay loop muted playsInline preload="metadata" />
        </div>
      </div>

      {/* Decorations that sit outside the flow: stipple figure, bunny. */}
    </section>
  )
}

export default Hero
