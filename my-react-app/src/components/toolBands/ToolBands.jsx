import MetalLogo from './MetalLogo'
import './ToolBands.css'
const rows = [
  [['Python','python'],['Git','git'],['Claude Code','claude'],['React','react'],['GitHub','github'],['Confluence','confluence'],['Figma','figma'],['CSS','css']],
  [['Java','java'],['JavaScript','javascript'],['Firebase','firebase'],['Jest','jest'],['React Native','react'],['Slack','slack'],['Jira','jira'],['Tailwind CSS','tailwindcss']],
]
const tints = {
  python: 'linear-gradient(135deg, #3776ab 45%, #ffd343 55%)',
  git: '#f05032', claude: '#d97757', react: '#61dafb', github: '#777780',
  confluence: '#1868db', figma: 'linear-gradient(150deg,#f24e1e,#ff7262 25%,#a259ff 45%,#1abcfe 65%,#0acf83)',
  css: '#663399', java: 'linear-gradient(#e76f00,#5382a1)', javascript: '#f7df1e',
  firebase: 'linear-gradient(135deg,#ffc400,#ff9100,#dd2c00)', jest: '#c21325',
  slack: 'conic-gradient(#36c5f0,#2eb67d,#ecb22e,#e01e5a,#36c5f0)', jira: '#1868db', tailwindcss: '#06b6d4',
}
export default function ToolBands() {
  return <div className="tool-bands" role="region" aria-label="Tools I work with">
    {rows.map((row,index)=><div className="tool-band" key={index}>
      <div className="tool-band__track" style={{'--direction':index ? 'reverse':'normal'}}>
        {[0,1].map(copy=><div className="tool-band__group" key={copy} aria-hidden={copy ? true : undefined}>
          {[...row,...row].map(([name,slug],item)=><div className="tool-logo" key={`${name}-${item}`} aria-hidden={item >= row.length ? true : undefined}>
            <span className="tool-logo__art" role="img" aria-label={name} style={{'--logo':`url('/logos/${slug}.svg')`, '--tint':tints[slug]}}>
              <span className="tool-logo__glow" aria-hidden="true" />
              <span className="tool-logo__frost" />
              <span className="tool-logo__tint" aria-hidden="true" />
              {['github','firebase'].includes(slug) && <MetalLogo src={`/logos/${slug}.svg`} />}
            </span>
          </div>)}
        </div>)}
      </div>
    </div>)}
  </div>
}
