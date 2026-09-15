import { motion, useReducedMotion } from 'motion/react'
import AppleCardsCarousel from '../ui/AppleCardsCarousel.jsx'
import bunny from '../../assets/light/decorations/bunny-run/sprite.webp'
import carousel from '../../assets/light/decorations/carousel-optimized.webp'
import './Projects.css'

export default function Projects() {
  const reducedMotion = useReducedMotion()
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <motion.div className="projects__stage" initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }}
        transition={{ duration: reducedMotion ? 0 : .8, ease: 'easeOut' }}>
      <div className="projects__decoration" aria-hidden="true">
        <img src={carousel} alt="" width="600" height="600" />
      </div>
      <div className="projects__cards">
      <div className="projects__heading">
        <h2 id="projects-heading"><a className="projects__browse-link" href="?projects" aria-label="Projects — explore all side quests">Projects</a></h2>
      <div className="bunny-lane" aria-hidden="true" style={{ '--bunny-sprite': `url("${bunny}")` }}>
        <div className="bunny-lane__track">
          {[0, 1].map(copy => <div className="bunny-lane__group" key={copy}>
            {[0, 1, 2, 3, 4, 5, 6].map(index => <span className="bunny-runner" key={index} style={{ '--phase': `${(index % 4) * -.4}s` }} />)}
          </div>)}
        </div>
      </div>
      </div>
      <motion.div className="projects__card-reveal"
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .2 }}
        transition={{ delay: reducedMotion ? 0 : .45, duration: reducedMotion ? 0 : .9, ease: 'easeOut' }}>
        <AppleCardsCarousel />
      </motion.div>
      </div>
      </motion.div>
    </section>
  )
}
