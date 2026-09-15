import { lazy, Suspense, useEffect } from 'react'
import Nav from './components/navbar/Nav.jsx'
import Hero from './components/hero/Hero.jsx'
import About from './components/aboutMe/About.jsx'
const AboutPage = lazy(() => import('./components/aboutMe/AboutPage.jsx'))
import Gradient from './components/gradient/Gradient.jsx'
import Projects from './components/projects/Projects.jsx'
const ProjectsPage = lazy(() => import('./components/projects/ProjectsPage.jsx'))
import Experiences from './components/experiences/Experiences.jsx'
const ExperiencePage = lazy(() => import('./components/experiences/ExperiencePage.jsx'))
import Contact from './components/contact/Contact.jsx'
import BunnyFooter from './components/footer/BunnyFooter.jsx'
import LoadingScreen from './components/loading/LoadingScreen.jsx'
import { useRoute, routeKey } from './router/useRoute.js'
import './App.css'

function PageContent({ route }) {
  const { hash } = route
  useEffect(() => {
    const id = hash
    if (!['about', 'projects', 'experience', 'contact'].includes(id)) return
    let cancelled = false
    const align = () => {
      if (!cancelled) document.getElementById(id)?.scrollIntoView({ block: 'start', behavior: 'instant' })
    }
    const cancel = () => { cancelled = true }
    // React creates the anchor after the browser's initial fragment navigation.
    const frame = requestAnimationFrame(align)
    const afterLoad = () => { document.fonts.ready.then(align) }
    if (document.readyState === 'complete') afterLoad()
    else window.addEventListener('load', afterLoad, { once: true })
    // Never pull the visitor back after they start navigating themselves.
    // Bound a frame later: arriving here from a nav click means the click's own
    // pointerdown/keydown is still in flight, and it would cancel this scroll
    // before it ever ran.
    const events = ['wheel', 'touchstart', 'pointerdown', 'keydown']
    const listen = requestAnimationFrame(() =>
      events.forEach(event => window.addEventListener(event, cancel, { passive: true })))
    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      cancelAnimationFrame(listen)
      window.removeEventListener('load', afterLoad)
      events.forEach(event => window.removeEventListener(event, cancel))
    }
  }, [hash])

  if (route.page === 'projects') return <><ProjectsPage /><BunnyFooter /></>
  if (route.page === 'about') return <><AboutPage /><BunnyFooter /></>
  if (route.page === 'experience') return <><ExperiencePage id={route.experienceId} /><BunnyFooter /></>

  return (
    <>
      <Nav />

      {/* Hero and #about share ONE wash spanning both, rather than a
          wash each. Two separate ones inevitably showed a seam where they
          met and got sliced by their own containers; a single field
          flows behind both with nothing to cut it. */}
      <div className="hero-about">
        <Gradient
          className="hero-about__wash"
          liquid
          blobs={[
            /* Weighted to the left and fading out to the right, so the
               colour pools beside the content and the page stays white
               where the text sits. */
            {
              color: '#f5e68f',
              at: { x: 8, y: 30 },
              size: 56,
              height: 36,
              intensity: 0.8,
              blur: 90,
              shape: 'splosh',
              speed: 21,
            },
            {
              color: 'var(--accent)',
              at: { x: 16, y: 42 },
              size: 52,
              height: 34,
              intensity: 0.42,
              blur: 85,
              speed: 17,
              delay: -6,
            },
            {
              color: '#dba7e4',
              at: { x: 10, y: 58 },
              size: 48,
              height: 30,
              intensity: 0.4,
              blur: 88,
              shape: 'splosh',
              speed: 24,
              delay: -11,
            },
            {
              color: '#9bbcf1',
              at: { x: 66, y: 62 },
              size: 58,
              height: 40,
              intensity: 0.7,
              blur: 92,
              speed: 19,
              delay: -3,
            },
            {
              color: '#f7c2da',
              at: { x: 40, y: 72 },
              size: 50,
              height: 30,
              intensity: 0.36,
              blur: 90,
              shape: 'splosh',
              speed: 15,
              delay: -8,
            },
          ]}
        />
        <Hero />
        <About />
      </div>

      <Projects />
      <Experiences />
      <div className="contact-footer">
        <Contact />
      </div>
    </>
  )
}

export default function App() {
  const route = useRoute()
  return <LoadingScreen><Suspense fallback={<p role="status" style={{ padding: 32 }}>Loading…</p>}><PageContent route={route} key={routeKey(route)} /></Suspense></LoadingScreen>
}
