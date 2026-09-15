import advocateDemo from '../../assets/FWR/advocate-demo.mp4'
import advocatePoster from '../../assets/FWR/advocate-poster.jpg'
import logo from '../../assets/FWR/logo-optimized.webp'
import navigation from '../../assets/FWR/image-optimized.webp'
import podcasts from '../../assets/FWR/image copy-optimized.webp'
import publications from '../../assets/FWR/image copy 3-optimized.webp'
import documentation from '../../assets/FWR/image copy 4-optimized.webp'
import advocacy from '../../assets/FWR/image copy 5-optimized.webp'
import mapDesign from '../../assets/FWR/figma-2-optimized.webp'

// Portfolio narrative based on Lilymoon's account and project screenshots.
export const fertilityCaseStudy = {
  kind: 'fertility-case-study',
  titleLines: ['Web Engineering', 'Intern'],
  brand: { primary: '#006b91', secondary: '#b0e1ef', logo: { src: logo, alt: 'Fertility Within Reach' } },
  tags: ['Frontend', 'Accessible Design'],
  overview: [
    'At Fertility Within Reach, I worked on making complex fertility healthcare information easier to find and understand. My work combined custom frontend components, clearer navigation, and an interactive visualization of state legislation.',
    'I met directly with the cofounder each week to discuss content, refine designs, and review progress. Those conversations, along with board member feedback, shaped how I organized information and made the website more readable and consistent with the organization’s brand.',
  ],
  sections: [
    {
      id: 'brand-components',
      navLabel: 'Branded components',
      kicker: '01 · Visual design & frontend',
      title: 'Giving useful resources a clearer identity',
      text: 'The website contained valuable resources, but its components felt visually flat and disconnected from the brand. I created custom components using FWR’s blues and coral accents, bringing a consistent visual language to podcasts, publications, and homepage navigation.',
      items: [
        { figure: { src: navigation, contain: true, alt: 'Blue navigation cards for insurers, employers, legislators, clinicians, financial assistance, and other fertility resources.', caption: 'Descriptive navigation cards make the available resources easier to scan.' }, text: 'I paired clear titles with short descriptions so visitors could understand where each navigation button would take them. Consistent spacing and text hierarchy helped distinguish the choices.' },
        { figure: { src: podcasts, contain: true, alt: 'Three podcast cards with show artwork, episode descriptions, and coral Listen buttons.', caption: 'Podcast components combine recognizable imagery with a clear next action.' }, text: 'For podcasts and publications, I organized content into repeatable layouts with prominent headings and action buttons. The goal was to make each resource recognizable while keeping the pages visually connected.' },
        { figure: { src: publications, contain: true, alt: 'Publication components with article titles, authors, publication dates, journals, and Details buttons.', caption: 'Publication details use a consistent hierarchy to support scanning.' }, text: 'The publication layout gives titles, authors, dates, and journals distinct roles, helping readers locate the information they need.' },
      ],
    },
    {
      id: 'advocacy-navigation',
      navLabel: 'Advocacy navigation',
      kicker: '02 · Information architecture',
      title: 'Making self-advocacy easier to navigate',
      text: 'The Advocate for Yourself page was difficult to navigate. I added tab navigation at the top so visitors could move between guidance for communicating with insurers, employers, legislators, and clinicians. Within the content, I used brand colors, larger font sizes, and highlighted key points to establish a clearer reading order.',
      gallery: [{ src: advocacy, span: true, alt: 'Advocacy page with four audience tabs, an insurer communication video, and a section contents panel above the guidance.', caption: 'Audience tabs and section links give visitors a direct route into detailed guidance.' }],
    },
    {
      id: 'legislation-map',
      navLabel: 'Legislation map',
      kicker: '03 · Data visualization',
      title: 'Turning a long list into a state-by-state view',
      paragraphs: [
        'The Take Action page presented legislation as a long list with few visual cues. It was difficult to see how states differed or where FWR had contributed to advocacy. I built an interactive JavaScript map to give that information a geographic structure.',
        'I differentiated states by coverage category and highlighted FWR’s reach. State-specific information brought laws, exemptions, initiatives, and actions into a more organized view. I also added a glossary to explain key fertility healthcare terms alongside the advocacy content.',
      ],
      gallery: [{ video: advocateDemo, poster: advocatePoster, span: true, alt: 'FWR advocacy page and interactive state map walkthrough', caption: 'A walkthrough of the live advocacy page: clicking states to explore legislation and action resources.' }, { src: mapDesign, span: true, alt: 'Figma design of the state advocacy page showing a color-coded United States map, a coverage legend, state details, action guidance, and a fertility coverage glossary.', caption: 'Figma page design connecting the map, state details, and glossary. Shown as a project artifact.' }],
    },
    {
      id: 'data-handoff',
      navLabel: 'Data & documentation',
      kicker: '04 · Engineering & maintainability',
      title: 'Separating the data from the interface',
      paragraphs: [
        'I organized the state information into a structured JSON dataset and loaded it with JavaScript’s fetch API to populate the map and detail panel. Hosting the file separately on GitHub Pages also worked around GoDaddy’s HTML character limits.',
        'I wrote README documentation for future interns, explaining where the data lives and how to modify or replace the JSON file. Separating content from the interface gave future contributors a defined place to update information as legislation changed.',
      ],
      gallery: [{ src: documentation, span: true, alt: 'States Dictionary README describing the separately hosted JSON data, how to update it, and the fetch call used to load it.', caption: 'Handoff documentation for maintaining the state dataset.' }],
    },
    {
      id: 'iteration',
      navLabel: 'Collaboration & iteration',
      kicker: '05 · Working with stakeholders',
      title: 'Refining the details together',
      text: 'Weekly meetings with the cofounder kept the design grounded in the information FWR needed to communicate. I iterated on the interface in response to those discussions and board member feedback, including increasing text sizes and adjusting emphasis so key information was easier to read. Each round connected a specific piece of feedback to a concrete interface change.',
    },
    {
      id: 'learnings',
      navLabel: 'What I learned',
      title: 'Designing for understanding',
      paragraphs: [
        'This internship taught me to approach frontend engineering through design thinking: identify where people struggle, organize the information around their needs, and refine the interface through feedback. Branding, navigation, and readability all influence whether a resource feels approachable.',
        'I learned to consider accessibility in everyday design decisions, from font sizes and visual hierarchy to explaining unfamiliar terminology. For complex healthcare content, a clear interface can help people find their next step. Writing documentation extended that same care to the interns who would maintain the work after me.',
      ],
    },
  ],
}
