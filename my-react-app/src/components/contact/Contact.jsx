import phoneRest from '../../assets/light/phone/2.webp'
import phoneHover from '../../assets/light/phone/1.webp'
import MetalLogo from '../toolBands/MetalLogo'
import '../toolBands/ToolBands.css'
import './Contact.css'

const instagramUrl = 'https://www.instagram.com/lilymoonsun/'
const youtubeUrl = 'https://www.youtube.com/@lilymoon.whalen'

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <div className="contact__content">
          <div className="contact__copy">
            <h2 id="contact-title">Contact me</h2>
            <p>Let’s connect.</p>
            <div className="contact__socials" aria-label="Social profiles">
              <a className="contact__social tool-logo" href="https://www.linkedin.com/in/lilymoon-whalen-50020b252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
                <span className="tool-logo__art" aria-hidden="true" style={{ '--logo': "url('/logos/social/linkedin.svg')", '--tint': '#0a66c2' }}>
                  <span className="tool-logo__glow" />
                  <span className="tool-logo__frost" />
                  <span className="tool-logo__tint" />
                </span>
              </a>
              <a className="contact__social tool-logo" href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)">
                <span className="tool-logo__art" aria-hidden="true" style={{ '--logo': "url('/logos/social/instagram.svg')", '--tint': 'linear-gradient(35deg, #feda75, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5)' }}>
                  <span className="tool-logo__glow" />
                  <span className="tool-logo__frost" />
                  <span className="tool-logo__tint" />
                </span>
              </a>
              <a className="contact__social tool-logo" href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube (opens in a new tab)">
                <span className="tool-logo__art" aria-hidden="true" style={{ '--logo': "url('/logos/social/youtube.svg')", '--tint': '#ff0033' }}>
                  <span className="tool-logo__glow" />
                  <span className="tool-logo__frost" />
                  <span className="tool-logo__tint" />
                </span>
              </a>
              <a className="contact__social tool-logo" href="https://github.com/LilymoonW" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
                <span className="tool-logo__art" aria-hidden="true" style={{ '--logo': "url('/logos/social/github.svg')", '--tint': '#777780' }}>
                  <span className="tool-logo__glow" />
                  <span className="tool-logo__frost" />
                  <span className="tool-logo__tint" />
                  <MetalLogo src="/logos/social/github.svg" />
                </span>
              </a>
            </div>
          </div>
          <div className="contact__phone" aria-hidden="true">
            <img className="contact__phone-rest" src={phoneRest} alt="" width="600" height="600" />
            <img className="contact__phone-hover" src={phoneHover} alt="" width="600" height="600" />
          </div>
        </div>
      </div>
    </section>
  )
}
