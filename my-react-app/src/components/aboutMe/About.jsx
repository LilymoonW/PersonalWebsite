import { useState } from 'react'
import { frameAt } from '../eyes/animation.js'
import Eyes from '../eyes/Eyes.jsx'
import TextHoverEffect from '../ui/TextHoverEffect.jsx'
import portrait from '../../assets/light/decorations/decoration.webp'
import ToolBands from '../toolBands/ToolBands.jsx'
import './About.css'

function About() {
  const [targetFrame, setTargetFrame] = useState(0)
  const followPointer = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    setTargetFrame(frameAt(event.clientX - bounds.left, bounds.width))
  }
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      {/* Same liquid wash as the hero, in the lavender/pink of this
          section. It fades out at its own edges rather than being
          clipped, so it carries on into the next section instead of
          stopping at a hard line. */}
      <div className="about__inner">
        <img className="about__portrait" src={portrait} alt="" aria-hidden="true" />
        <div className="about__content">
          <div className="about__intro">
            <h2 id="about-heading"><a className="projects__browse-link" href="./?about">About Me</a></h2>
            <p>Senior at Wellesley College studying computer science, working at the intersection of design and technical implementation. In my free time I’m into art, music, true crime podcasts, and TV shows — feel free to send me recommendations.</p>
            <a className="about__more" href="./?about"><span>Learn more</span></a>
          </div>
          <Eyes className="about__eyes" targetFrame={targetFrame} />
          <p className="about__interests" aria-label="Design, Product, Code"
            onPointerMove={followPointer} onPointerDown={followPointer}
            onPointerLeave={() => setTargetFrame(0)} onPointerCancel={() => setTargetFrame(0)}>
            <TextHoverEffect />
          </p>
        </div>
      </div>
      <ToolBands />
    </section>
  )
}

export default About
