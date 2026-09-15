import Nav from '../navbar/Nav.jsx'
import carousel from '../../assets/light/decorations/carousel-optimized.webp'
import { ProjectCard } from '../ui/AppleCardsCarousel.jsx'
import { projects } from './projectData.js'
import './Projects.css'
import './ProjectsPage.css'

export default function ProjectsPage() {
  return (
    <div className="side-quests-page">
      <Nav sticky={false} hrefBase="./" activeId="projects" />
    <main className="side-quests">
      <header className="side-quests__intro">
        <img className="side-quests__carousel" src={carousel} alt="" aria-hidden="true" />
        <h1>A little design,<br />a lot of curiosity.<br /><em>Things I’ve made.</em></h1>
        <p className="side-quests__description">From hackathon builds and playful games to computer vision and hardware experiments. A collection of projects where I explore design and engineering, and learn by making.</p>
      </header>
      <div className="side-quests__grid">
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </main>

    </div>
  )
}
