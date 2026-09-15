import { useEffect, useState } from 'react'
import './Nav.css'

const LINKS = [
  { id: 'about', label: 'about me' },
  { id: 'projects', label: 'projects' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact me' },
]

// `activeId` pins the underline on pages that have no sections to observe —
// a detail page still belongs to one of these links.
function Nav({ sticky = true, hrefBase = '', activeId }) {
  const [observed, setObserved] = useState('')
  const active = activeId ?? observed

  // Underline the link whose section is currently in view.
  useEffect(() => {
    const sections = LINKS.map(({ id }) => document.getElementById(id)).filter(
      Boolean,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

        if (visible) setObserved(visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`nav${sticky ? '' : ' nav--static'}`} aria-label="Main">
      <a className="nav__brand" href={hrefBase || './'} aria-label="Lilymoon Whalen — home">
        <span className="nav__mark" aria-hidden="true" />
      </a>
      <ul>
        {LINKS.map(({ id, label }) => (
          <li key={id}>
            <a
              href={['projects', 'about'].includes(id) ? `${hrefBase || './'}?${id}` : `${hrefBase}#${id}`}
              className={active === id ? 'active' : undefined}
              aria-current={active === id ? 'true' : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
