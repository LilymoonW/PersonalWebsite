import bunny from '../../assets/light/decorations/bunny-run/sprite.webp'
import '../projects/Projects.css'
import './BunnyFooter.css'

export default function BunnyFooter() {
  return (
    <footer className="bunny-footer">
      <div className="bunny-lane" aria-hidden="true" style={{ '--bunny-sprite': `url("${bunny}")` }}>
        <div className="bunny-lane__track">
          {[0, 1].map(copy => <div className="bunny-lane__group" key={copy}>
            {[0, 1, 2, 3].map(index => <span className="bunny-runner" key={index} style={{ '--phase': `${index * -.4}s` }} />)}
          </div>)}
        </div>
      </div>
      <a className="bunny-footer__home" href="./" aria-label="Back to home page">Home</a>
    </footer>
  )
}
