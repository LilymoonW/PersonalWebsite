import { motion, useReducedMotion } from 'motion/react'
import Timeline from '../ui/Timeline.jsx'
import { experiences } from './experienceData.js'
import './Experiences.css'

function ExperienceContent({ experience }) {
  const reducedMotion = useReducedMotion()
  const previews = experience.previews?.slice(0, 2) ?? []
  return (
    <>
      <p className="experience-summary">{experience.summary}</p>
      <div className={`experience-preview experience-preview--${previews.length}`}>
      {previews.map((photo, index) => photo.type === 'video' ? (
        <video key={photo.src} className={`experience-preview__image experience-preview__image--${index + 1}`}
          controls playsInline preload="none" poster={photo.poster} width="1440" height="904" aria-label={photo.alt}>
          <source src={photo.src} type="video/mp4" />
        </video>
      ) : <img
        className={`experience-preview__image experience-preview__image--${index + 1}${photo.fit === 'contain' ? ' experience-preview__image--contain' : ''}`}
        key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" decoding="async"
      />)}
      <div className="experience-actions">
        <motion.a className="learn-more" href={`?experience=${experience.id}`}
          aria-label={`Learn more about ${experience.title} at ${experience.company}`}
          whileHover={reducedMotion ? undefined : { scale: 1.045 }}
          whileTap={reducedMotion ? undefined : { scale: .97 }}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}>
          Learn more
        </motion.a>
      </div>
      </div>
    </>
  )
}

export default function Experiences() {
  const data = experiences.map(experience => ({ ...experience, content: <ExperienceContent experience={experience} /> }))
  return (
    <section id="experience" className="experiences" aria-labelledby="experiences-heading">
      <div className="experiences__inner">
        <h2 id="experiences-heading">Experiences</h2>
        <Timeline data={data} />
        <a className="experiences__linkedin" href="https://www.linkedin.com/in/lilymoon-whalen-50020b252/" target="_blank" rel="noreferrer">More on LinkedIn</a>
      </div>
    </section>
  )
}
