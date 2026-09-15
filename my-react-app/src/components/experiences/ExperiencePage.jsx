import { useEffect, useState } from 'react'
import Nav from '../navbar/Nav.jsx'
import { experiences } from './experienceData.js'
import DemoCarousel from './DemoCarousel.jsx'
import './Experiences.css'
import './CaseStudy.css'

// Figures are wide by default and scroll inside their own frame. `contain`
// marks the ones that are screenshots rather than diagrams — those fit the
// column instead, since they read fine at column width.
function Figure({ figure }) {
  return (
    <figure className={`case-figure${figure.span ? ' case-figure--span' : ''}`}>
      <div className={figure.contain ? 'case-figure__frame' : 'case-figure__scroll'}>
        {figure.video ? <video controls playsInline preload="none" poster={figure.poster} width="1440" height="904" aria-label={figure.alt}>
          <source src={figure.video} type="video/mp4" />
        </video> : <img src={figure.src} alt={figure.alt} loading="lazy" decoding="async" />}
      </div>
      {figure.caption ? <figcaption>{figure.caption}</figcaption> : null}
    </figure>
  )
}

function StoryLinks({ links }) {
  if (!links?.length) return null
  return <ul className="story-links">{links.map(link => <li key={link.href}>
    <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
  </li>)}</ul>
}

// STAR block. Action is a list of things done, so it stays a list; the
// figure, when there is one, sits in the body column under the rows.
function Star({ star, figure }) {
  return (
    <div className="case-star">
      <div className="case-star__row">
        <p className="case-star__label">Situation</p>
        <p className="case-star__body">{star.situation}</p>
      </div>
      <div className="case-star__row">
        <p className="case-star__label">Task</p>
        <p className="case-star__body">{star.task}</p>
      </div>
      <div className="case-star__row">
        <p className="case-star__label">Action</p>
        <ul className="case-star__body case-star__actions">
          {star.action.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <div className="case-star__row">
        <p className="case-star__label">Result</p>
        <p className="case-star__body">{star.result}</p>
      </div>
      {figure ? <div className="case-star__row case-star__row--figure"><Figure figure={figure} /></div> : null}
    </div>
  )
}

// One section of the study. Each is a kicker + title followed by whichever
// blocks the data supplies: a STAR breakdown, a paragraph, figure-and-text
// items, a screenshot gallery, or a row of photos.
function Section({ section }) {
  return (
    <section className="case-section" id={section.id} aria-labelledby={`section-${section.id}`}>
      {section.kicker ? <p className="case-section__kicker">{section.kicker}</p> : null}
      <h2 className="case-section__title" id={`section-${section.id}`}>{section.title}</h2>

      {section.star ? <Star star={section.star} figure={section.figure} /> : null}
      {section.text ? <p className="case-section__text">{section.text}</p> : null}
      {section.paragraphs?.map(paragraph => <p className="case-section__text" key={paragraph}>{paragraph}</p>)}
      {section.metrics ? <dl className="story-metrics">{section.metrics.map(metric => <div key={metric.label}>
        <dt>{metric.label}</dt><dd>{metric.value}</dd>
      </div>)}</dl> : null}
      {section.note ? <p className="story-note">{section.note}</p> : null}
      {section.comparison ? <div className="story-comparison">{section.comparison.map(item => <div key={item.name}>
        <h3>{item.name}</h3><p>{item.lesson}</p><p><strong>My direction:</strong> {item.direction}</p>
      </div>)}</div> : null}
      {section.bullets ? <ul className="case-contributions">
        {section.bullets.map(item => <li key={item}>{item}</li>)}
      </ul> : null}

      {section.items ? section.items.map(item => (
        <div className="case-item" key={item.text}>
          {item.figure ? <Figure figure={item.figure} /> : null}
          <p className="case-section__text">{item.text}</p>
        </div>
      )) : null}

      {section.gallery ? <div className="case-gallery">
        {section.gallery.map(item => <Figure figure={{ ...item, contain: true }} key={item.src} />)}
      </div> : null}
      {section.screenGroups?.map(group => <div className="story-screen-group" key={group.title}>
        <h3>{group.title}</h3><div className="story-screens">{group.images.map(figure => <Figure key={figure.src} figure={{ ...figure, contain: true }} />)}</div>
      </div>)}
      {section.textAfter ? <p className="case-section__text story-after">{section.textAfter}</p> : null}
      {section.demos ? <DemoCarousel demos={[...section.demos, ...(section.moreDemos ?? [])]} /> : null}
      {section.socialVideos ? <div className="story-social-videos">
        {section.socialVideos.map(video => <figure className={`story-social-video story-social-video--${video.platform.toLowerCase()}`} key={video.embed}>
          <iframe src={video.embed} title={video.title} loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <figcaption><a href={video.href} target="_blank" rel="noopener noreferrer">{video.platform === 'YouTube' ? video.title : 'Watch this reel on Instagram'} ↗</a></figcaption>
        </figure>)}
      </div> : null}

      {section.photos ? <div className="case-photos">
        {section.photos.map(photo => <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" key={photo.src} />)}
      </div> : null}
      <StoryLinks links={section.links} />
      {section.resources ? <ul className="teaching-resources">{section.resources.map(resource => {
        const href = `${import.meta.env.BASE_URL}resources/cs230/${resource.file}`
        return <li key={resource.file}>
          <h3>{resource.title}</h3>
          <p>{resource.description}</p>
          <div>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`View ${resource.title} (PDF, opens in a new tab)`}>View PDF ↗</a>
            <a href={href} download={resource.file} aria-label={`Download ${resource.title} (PDF)`}>Download ↓</a>
          </div>
        </li>
      })}</ul> : null}
      {section.closing ? <p className="story-closing">{section.closing}</p> : null}
    </section>
  )
}

// Highlights whichever section is currently in view. rootMargin pulls the
// detection band up near the top of the viewport so the active item matches
// the heading the reader is actually looking at, not one a screen below.
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const nodes = ids.map(id => document.getElementById(id)).filter(Boolean)
    if (!nodes.length) return
    const seen = new Map()
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => seen.set(entry.target.id, entry.isIntersecting))
      const current = ids.find(id => seen.get(id))
      if (current) setActive(current)
    }, { rootMargin: '-12% 0px -70% 0px' })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [ids])
  return active
}

function CaseStudy({ study, experience }) {
  const sections = [
    { id: 'overview', label: 'Overview' },
    ...study.sections.map(section => ({ id: section.id, label: section.navLabel ?? section.title })),
  ]
  const active = useActiveSection(sections.map(section => section.id))

  return (
    <article className={`case${study.kind === 'founding-story' ? ' case--catena' : ''}${study.kind === 'fertility-case-study' ? ' case--fertility' : ''}${study.kind === 'serendipity-story' ? ' case--serendipity' : ''}`} style={{ '--case-primary': study.brand.primary, '--case-secondary': study.brand.secondary }}>
          <nav className="case-nav" aria-label={study.kind === 'founding-story' ? 'Founding story sections' : 'Case study sections'}>
            <a className="case-nav__back" href="./#experience" aria-label="Back to experiences">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M20 12H4m7-7-7 7 7 7" /></svg>
              <span>BACK</span>
            </a>
            <ul>
              {sections.map(section => (
                <li key={section.id}>
                  <a href={`#${section.id}`} aria-current={active === section.id ? 'true' : undefined}>
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
      {/* Full-bleed band so the wash can spill to the viewport edge; the
          content inside lines up with the reading column below it. */}
      <header className="case-header">
        <div className="case-header__wash" aria-hidden="true" />
        <div className="case-header__inner">
          <div className="case-header__brand">
            {study.brand.logo ? <img className="case-header__logo" src={study.brand.logo.src}
              alt={study.brand.logo.alt} decoding="async" /> : null}
            <div className="case-header__heading">
              {!study.brand.logo ? <p className="case-header__company">{experience.company}</p> : null}
              <h1 className="case-header__title">{study.titleLines ? study.titleLines.map(line => <span key={line}>{line}</span>) : experience.title}</h1>
              <p className="case-header__dates">{experience.dates}</p>
            </div>
          </div>
          {study.tags ? <p className="case-header__tags">
            {study.tags.map(tag => <span key={tag}>{tag}</span>)}
          </p> : null}
        </div>
      </header>

      <div className="experience-page__inner">
        <div className="case-study">
          <div className="case-study__body">
            <section className="case-overview" id="overview" aria-labelledby="section-overview">
              <p className="case-overview__label" id="section-overview">Overview</p>
              {study.overview.map(paragraph => <p className="case-overview__text" key={paragraph}>{paragraph}</p>)}
              <StoryLinks links={study.links} />
              {!study.links && experience.socialLinks?.length ? <ul aria-label="Catena social media">
                {experience.socialLinks.map(link => <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>
                </li>)}
              </ul> : null}
              {study.video ? <figure className="story-explainer">
                <iframe src={`https://www.youtube-nocookie.com/embed/${study.video.id}`} title={study.video.title} loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                <figcaption>{study.video.caption} <a href={`https://www.youtube.com/watch?v=${study.video.id}`} target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></figcaption>
              </figure> : null}
            </section>

            {study.sections.map(section => <Section section={section} key={section.id} />)}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ExperiencePage({ id }) {
  const experience = experiences.find(item => item.id === id)

  if (experience) {
    const study = experience.caseStudy ?? {
      ...experience.presentation,
      brand: experience.brand ?? { primary: '#1d428a', secondary: '#c8102e' },
      overview: [experience.summary],
      sections: [{
        id: 'contributions',
        kicker: experience.company,
        title: 'Key contributions',
        bullets: experience.details,
      }, ...(experience.resources?.length ? [{
        id: 'review-materials',
        title: 'Review materials I made for students',
        text: 'I created these outlines and slides to support the review sessions I held for CS 230: Data Structures. Students could use them to revisit the concepts and examples after the sessions. View or download the original PDFs below.',
        resources: experience.resources,
        gallery: experience.resourcePreview ? [experience.resourcePreview] : undefined,
      }] : [])],
    }
    return (
      <main className="experience-page experience-page--wide">
        {/* Not sticky here — it scrolls away and hands the page over to the
            case study's own section rail. */}
        <Nav sticky={false} hrefBase="./" activeId="experience" />
        <CaseStudy study={study} experience={experience} />
      </main>
    )
  }

  return (
    <main className="experience-page">
      <Nav sticky={false} hrefBase="./" activeId="experience" />
      <div className="experience-page__inner">
        <a className="experience-page__back" href="./#experience">← Back to experiences</a>
        <h1>Experience not found</h1>
      </div>
    </main>
  )
}
