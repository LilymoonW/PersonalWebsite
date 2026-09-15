// Source: Lilymoon Whalen_Frontend Programmer Intern_20260902.pdf.
// LinkedIn could not be read without signing in. Dates follow the newer resume.
import { nbaCaseStudy } from './nbaCaseStudy.js'
import { catenaStory } from './catenaStory.js'
import { fertilityCaseStudy } from './fertilityCaseStudy.js'
import wellesleyLogo from '../../assets/wellesley/logo.png'
import reviewSlide from '../../assets/wellesley/review-slide.png'
import { serendipityStory } from './serendipityStory.js'
import nbaPortrait from '../../assets/light/nba/photo-portrait.webp'
import nbaInterns from '../../assets/light/nba/photo-interns.webp'
import catenaTeam from '../../assets/Julienne/showcase/team-together.jpg'
import catenaCafe from '../../assets/Julienne/showcase/cafe.jpg'
import fwrDemo from '../../assets/FWR/advocate-demo.mp4'
import fwrPoster from '../../assets/FWR/advocate-poster.jpg'
import macarons from '../../assets/serendipity/matcha-stack.jpg'
import macaronBox from '../../assets/serendipity/packaging.jpg'

export const experiences = [
  {
    id: 'julienne', title: 'Co-founder & CTO', company: 'Julienne Studios LLC', dates: 'Dec 2025 — Present',
    previews: [
      { src: catenaCafe, alt: 'The illustrated café inside the Catena app.', fit: 'contain' },
      { src: catenaTeam, alt: 'The Julienne Studios team together.' },
    ],
    caseStudy: catenaStory,
    socialLinks: [
      { label: 'Catena on YouTube', href: 'https://www.youtube.com/@catenafocus' },
      { label: 'Catena on Instagram', href: 'https://www.instagram.com/catenafocus/' },
    ],
    presentation: { titleLines: ['Co-founder', '& CTO'], tags: ['Product Design', 'Engineering'] },
    summary: 'I co-founded Julienne Studios and lead the design and engineering of our cross-platform gamified productivity app. I design the experience in Figma and build with React Native, Firebase, TanStack Query, and Zustand, coordinating development with artists and musicians. Our closed beta brought together 71 users and reached 42.7% retention at three weeks, informed by interviews, surveys, and analytics. I also secured $50K through CU Innovation Lab while leading product strategy and prioritization.',
    details: [
      'Lead architecture with React Native, Firebase, TanStack Query, and Zustand, and design end-to-end experiences in Figma.',
      'Catena has attracted 300+ waitlist signups.',
      'Coordinate development with artists and musicians, bringing animated features and creative work into the product.',
      'Ran a 71-user closed beta using interviews, surveys, and analytics, achieving 42.7% retention at three weeks.',
      'Secured $50K in funding through CU Innovation Lab while leading product strategy, prioritization, and outreach.',
    ],
  },
  {
    id: 'nba', title: 'DTC Web Engineering Intern', company: 'NBA', dates: 'Jun 2026 — Aug 2026',
    previews: [
      { src: nbaPortrait, alt: 'Lilymoon holding a basketball during her NBA internship.', fit: 'contain' },
      { src: nbaInterns, alt: 'The NBA intern cohort together at the NBA office.' },
    ],
    summary: 'I worked on NBA.com’s frontend, improving the interfaces for team rosters, featured videos, stats, games, and Hide Scores. Alongside resolving production issues, I modernized legacy components and wrote Jest tests to make the code easier to maintain. I also collaborated with QA, Android, and Product teams on AI-powered workflow automations across GitHub, Jira, and Slack, helping streamline handoffs and reduce repetitive engineering work.',
    details: [
      'Developed frontend enhancements and resolved production issues across Team Roster, Watch Featured, Stats, Games, and Hide Scores.',
      'Modernized legacy components and added Jest tests to improve maintainability and reliability.',
      'Collaborated with QA, Android, and Product on AI-powered GitHub, Jira, and Slack workflow automations.',
    ],
    caseStudy: nbaCaseStudy,
  },
  {
    id: 'fertility', title: 'Web Engineering Intern', company: 'Fertility Within Reach', dates: 'Feb 2025 — Dec 2026',
    previews: [
      { src: fwrDemo, poster: fwrPoster, type: 'video', alt: 'FWR advocacy page walkthrough: selecting states on the map and exploring state details.', fit: 'contain' },
    ],
    caseStudy: fertilityCaseStudy,
    presentation: { titleLines: ['Web Engineering', 'Intern'], tags: ['Frontend', 'Data Visualization'] },
    summary: 'I built interactive JavaScript visualizations that help visitors explore fertility healthcare legislation across all 50 states. To support them, I created structured JSON datasets covering state laws, exemptions, and healthcare initiatives. I also helped prototype website updates in Figma and improve navigation across pages such as Advocate, Publications, Media, and Podcasts, incorporating stakeholder and user feedback into the design and content.',
    details: [
      'Built JavaScript visualizations of fertility healthcare legislation across all 50 states, backed by structured JSON datasets of laws, exemptions, and initiatives.',
      'Prototyped in Figma and improved navigation, usability, and brand consistency across the website.',
      'Worked with stakeholders to incorporate feedback into the interface and make resources easier to discover.',
    ],
  },
  {
    id: 'wellesley', title: 'Data Structures Teaching Assistant', company: 'Wellesley College', dates: 'Sep 2024 — Dec 2025',
    previews: [{ src: reviewSlide, alt: 'A slide from my Data Structures review session illustrating hash collisions.', fit: 'contain' }],
    presentation: { titleLines: ['Data Structures', 'Teaching Assistant'], tags: ['CS 230', 'Teaching & Mentorship'] },
    brand: { primary: '#3a4483', secondary: '#b9c4e8', logo: { src: wellesleyLogo, alt: 'Wellesley College' } },
    summary: 'As a teaching assistant for CS 230: Data Structures at Wellesley College, I helped students work through course concepts in tutoring and review sessions. I held multiple exam review sessions and created review outlines and slides to guide students through the material. Across semesters, I graded homework assignments and exams for more than 150 students and provided feedback on exam design.',
    details: [
      'Held multiple review sessions to help students prepare for Data Structures exams and work through their questions.',
      'Created review outlines and slides covering topics such as object-oriented programming, linked lists, stacks, queues, trees, hashing, sorting, and runtime analysis.',
      'Graded many homework assignments, along with exams, for 150+ students across semesters and provided feedback on exam design.',
    ],
    resourcePreview: {
      src: reviewSlide,
      alt: 'CS 230 review slide with diagrams of linear probing and separate chaining, asking students to explain hash collisions and how to resolve them.',
      caption: 'A slide from my Data Structures review deck: discussing hash collisions through diagrams and practice questions.',
      span: true,
    },
    resources: [
      { title: 'Data Structures review slides', description: '28 slides reviewing core course topics.', file: 'review-slides.pdf' },
      { title: 'Midterm 2 review outline', description: '6 pages of concepts, explanations, and examples.', file: 'midterm-review-outline.pdf' },
      { title: 'Final review outline', description: '6 pages of review notes, including questions from the review session.', file: 'final-review-outline.pdf' },
      { title: 'Fall 2025 midterm 2 review outline', description: '6 pages of notes for the fall semester review.', file: 'fall-2025-midterm-review-outline.pdf' },
    ],
  },
  {
    id: 'serendipity', title: 'Founder', company: 'Serendipity', dates: 'May 2022 — Dec 2022',
    previews: [
      { src: macarons, alt: 'Matcha macarons I baked and photographed for Serendipity.' },
      { src: macaronBox, alt: 'Assorted Serendipity macarons arranged in their packaging.' },
    ],
    caseStudy: serendipityStory,
    presentation: { titleLines: ['Founder'], tags: ['Community', 'Fundraising'] },
    summary: 'I founded Serendipity, a virtual bake sale supporting the WEA Children’s Fund, inspired by my research on educational inequality and my love of baking for friends. I experimented with macaron flavors, created the logo and product photography, built a Square storefront, and ordered packaging. I also taught six children to bake macarons and discussed educational inequality with them. The project was featured in Greet Kirkland.',
    details: [
      'Raised $628 by organizing logistics, marketing, and sales for a fundraising initiative.',
      'Built a Square storefront, created a logo and product photography, experimented with flavors, and ordered packaging.',
      'Taught six children how to bake macarons and about educational inequality; featured in Greet Kirkland.',
    ],
  },
]
