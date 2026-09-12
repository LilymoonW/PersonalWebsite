import { experiences } from './experienceData.js'
import './Experiences.css'

export default function ExperiencePage({ id }) {
  const experience = experiences.find(item => item.id === id)

  return (
    <main className="experience-page">
      <div className="experience-page__inner">
        <a className="experience-page__back" href="./#experience">← Back to experiences</a>
        {experience ? <article>
          <h1>{experience.title}</h1>
          <p className="experience-timeline__company">{experience.company}</p>
          <p className="experience-timeline__dates">{experience.dates}</p>
          <p className="experience-summary">{experience.summary}</p>
          <ul className="experience-details__copy">
            {experience.details.map(detail => <li key={detail}>{detail}</li>)}
          </ul>
        </article> : <h1>Experience not found</h1>}
      </div>
    </main>
  )
}
