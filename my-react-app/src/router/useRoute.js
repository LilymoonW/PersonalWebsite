import { useEffect, useState } from 'react'

// The site is a single page: every internal link is intercepted and resolved
// here instead of reaching the browser, so nothing ever reloads and the
// loading screen plays exactly once per visit.

export function parseRoute(url = window.location) {
  const params = new URLSearchParams(url.search)
  if (params.has('about')) return { page: 'about', hash: '' }
  if (params.has('projects')) return { page: 'projects', hash: '' }
  const experienceId = params.get('experience')
  if (experienceId !== null) return { page: 'experience', experienceId, hash: '' }
  return { page: 'home', hash: url.hash.slice(1) }
}

// Identifies the page, not the position within it. A hash change scrolls the
// page it is already on; it must not remount and lose that page's state.
export function routeKey(route) {
  return route.page === 'experience' ? `experience:${route.experienceId}` : route.page
}

// Links that stay inside the site. Anything else — new tab, download, external
// host, modified click — is left to the browser.
function isInternalNavigation(event, anchor) {
  if (event.defaultPrevented || event.button !== 0) return false
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false
  if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return false
  return anchor.origin === window.location.origin
}

export function useRoute() {
  const [route, setRoute] = useState(() => parseRoute())

  useEffect(() => {
    const onClick = event => {
      const anchor = event.target.closest?.('a[href]')
      if (!isInternalNavigation(event, anchor)) return

      const next = parseRoute(anchor)
      const current = parseRoute()
      const samePage = routeKey(next) === routeKey(current)

      // A bare "#id" on the page it already points at: let the browser do its
      // native scroll, which it does better than we can.
      if (samePage && next.hash && anchor.getAttribute('href').startsWith('#')) return

      event.preventDefault()
      if (anchor.href === window.location.href) return
      window.history.pushState(null, '', anchor.href)
      setRoute(next)
      if (!samePage) window.scrollTo(0, 0)
    }

    const onPopState = () => setRoute(parseRoute())

    document.addEventListener('click', onClick)
    window.addEventListener('popstate', onPopState)
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('popstate', onPopState)
    }
  }, [])

  return route
}
