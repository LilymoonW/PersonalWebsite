import Nav from './components/navbar/Nav.jsx'
import Hero from './components/hero/Hero.jsx'
import About from './components/aboutMe/About.jsx'
import Gradient from './components/gradient/Gradient.jsx'
import Projects from './components/projects/Projects.jsx'
import Experiences from './components/experiences/Experiences.jsx'
import ExperiencePage from './components/experiences/ExperiencePage.jsx'
import Contact from './components/contact/Contact.jsx'
import './App.css'

function App() {
  const experienceId = new URLSearchParams(window.location.search).get('experience')
  if (experienceId !== null) return <ExperiencePage id={experienceId} />

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
              color: 'var(--glow-warm)',
              at: { x: 8, y: 30 },
              size: 46,
              height: 30,
              intensity: 0.55,
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
              color: '#bfbcef',
              at: { x: 66, y: 62 },
              size: 48,
              height: 32,
              intensity: 0.38,
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
      <Contact />
    </>
  )
}

export default App
