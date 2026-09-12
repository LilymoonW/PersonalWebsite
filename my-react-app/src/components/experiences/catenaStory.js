// Founding story and product showcase. PDFs remain private working context;
// only the selected design-system excerpts are imported into the site.
const assets = import.meta.glob(['../../assets/Julienne/**/*.{png,jpg,mp4}', '!../../assets/Julienne/demo Videos/**'], { eager: true, query: '?url', import: 'default' })
const asset = path => assets[`../../assets/Julienne/${path}`]
const screen = (path, caption) => ({ src: asset(`prototyping/${path}.png`), alt: caption, caption })
const visual = (path, caption) => ({ src: asset(path), alt: caption, caption, contain: true })
const demo = (name, title, text) => ({ src: asset(`showcase/${name}.mp4`), poster: asset(`showcase/${name}.jpg`), title, text })

export const catenaStory = {
  kind: 'founding-story',
  titleLines: ['Catena', 'A cozy place to focus'],
  brand: { primary: '#EEA965', secondary: '#563D29' },
  tags: ['Co-founder & CTO', 'Design & Engineering'],
  overview: [
    'I co-founded Julienne Studios to build Catena: a cozy focus app where study sessions help you cook recipes, care for cats, and grow a café. It brings together the things I love most—building useful products, visual design, games, and systems that help people.',
    'I lead product design and engineering, from the first Figma screens to a working app built with React Native, Firebase, TanStack Query, and Zustand. Along the way, I have worked with artists and musicians, invited students into our beta, and shared what we are building with a growing community.',
  ],
  links: [
    { label: 'Visit Catena', href: 'https://catenafocus.com/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@catenafocus' },
    { label: 'Instagram', href: 'https://www.instagram.com/catenafocus/' },
  ],
  video: { id: 'FSNHMygcYk4', title: 'The story behind Catena — project explanation', caption: 'A closer look at the project and how I am bringing it to life.' },
  sections: [
    {
      id: 'why-catena', navLabel: 'Why I started', kicker: 'A personal starting point', title: 'A focus app I wanted to come back to',
      paragraphs: [
        'I have used Pomodoro apps for years, starting with Forest. They helped me focus when I used them, but opening the app and building a lasting habit was still difficult. I kept coming back to that gap: how could starting a study session feel like something I wanted to do?',
        'During my freshman year, I designed a “cozy focus” prototype in Figma. I eventually put it down and built Sugar and Focus, a simpler web app that brought a smaller version of the idea to life. Catena grew from that first exploration.',
        'The cats cooking food are central to the idea. A session becomes a small act of care, and progress becomes something you can see in your café. I wanted productivity to feel caring and sustainable, with room to return after an off day.',
      ],
    },
    {
      id: 'research', navLabel: 'Listening & learning', kicker: 'Understanding the problem', title: 'The hard part was coming back',
      paragraphs: [
        'I explored attention, habit formation, and motivation, then compared Forest, Focus Friend, and Finch through mechanics, dynamics, and aesthetics: what people do, what patterns those actions create, and how the experience feels.',
        'An introductory questionnaire of 61 students gave that exploration a more personal scale. Forty respondents said they struggled to focus often or always. When people described leaving previous focus apps, forgetting about them and losing interest appeared more often than complaints about features.',
      ],
      metrics: [{ value: '61', label: 'Students in the introductory questionnaire' }, { value: '26', label: 'Mentions of forgetting a previous app' }, { value: '19', label: 'Mentions of losing interest' }],
      note: 'An exploratory, network-sourced questionnaire—not a representative market sample. Reasons for stopping are mentions, not mutually exclusive groups.',
      comparison: [
        { name: 'Forest', lesson: 'Visible progress can make a session feel meaningful.', direction: 'Explore ways to encourage a return without making an interrupted session feel like a lasting failure.' },
        { name: 'Focus Friend', lesson: 'A companion and a room to decorate make focusing feel personal.', direction: 'Give the café more to discover over time, and make space for focusing together.' },
        { name: 'Finch', lesson: 'Care, customization, and small moments of connection can support a return habit.', direction: 'Bring that warmth into a shared focus experience with cats, recipes, and a growing world.' },
      ],
    },
    {
      id: 'prototypes', navLabel: 'Early prototypes', kicker: 'From Figma to a world', title: 'Finding Catena’s personality',
      paragraphs: ['The first prototype centered on goals and timers. The next iteration made cooking the main story: starting a session, resting, and completing a dish. Comparing these screens shows how the product moved from a utility with a cat character toward a more expressive, illustrated experience.'],
      screenGroups: [
        { title: 'Initial idea · goals and timers (2024)', images: [screen('initial ui/01-welcome', 'An early Julienne welcome screen'), screen('initial ui/05-emilys-kitchen', 'Personal goals in Emily’s Kitchen'), screen('initial ui/06-create-a-new-goal', 'Creating a study goal'), screen('initial ui/07-study-timer-outline', 'The original focus timer')] },
        { title: 'Second prototype · cooking becomes the story (2025)', images: [screen('second prototype/01-welcome', 'A more playful illustrated welcome'), screen('second prototype/04-cooking-macarons', 'A focus session framed as cooking'), screen('second prototype/06-resting', 'A dedicated rest state'), screen('second prototype/07-macarons-complete', 'Finishing a dish'), screen('second prototype/09-journal', 'A journal for study progress')] },
        { title: 'Color experiments · warmth, contrast, and hierarchy', images: [screen('color experimentation/01-journal-sage-header-brown-background', 'Sage header with a brown journal background'), screen('color experimentation/02-journal-cream-header-sage-background', 'Cream header with a sage journal background'), screen('color experimentation/04-macarons-pink', 'A pink completion screen'), screen('color experimentation/05-macarons-orange', 'An orange completion screen')] },
      ],
    },
    {
      id: 'visual-world', navLabel: 'The café world', kicker: 'Art direction', title: 'Making the café feel lived in',
      text: 'Illustrated counters, food, furniture, and expressive cats give the focus loop a place to live. I bring the visual direction and interface together while collaborating with artists and musicians to give Catena its atmosphere.',
      gallery: [visual('concept art/background concept art/01-cafe-interior-background.jpg', 'Background concept: the café counter, kitchen, and pastry display.'), visual('concept art/background concept art/02-chef-cat-concept.png', 'An early chef-cat character concept.')],
    },
    {
      id: 'design-system', navLabel: 'Design system', kicker: 'Creating consistency', title: 'Turning a visual language into a system',
      paragraphs: ['As the app grew, I created a design system to carry the same personality across screens. It defines the palette, typography, spacing, shapes, and reusable components, so new features can feel like part of the same café.', 'Warm cream surfaces and brown text form the foundation. Apricot draws attention to a primary action, while sage and blush support secondary actions and feedback. Julienne display lettering brings character to titles; Fredoka supports everyday interface text.'],
      gallery: [visual('showcase/design-colors.png', 'Selected design-system excerpt: accent and feedback colors.'), visual('showcase/design-type.png', 'Selected excerpt: display typography and size hierarchy.'), visual('showcase/design-buttons.png', 'Selected excerpt: primary, secondary, navigation, and destructive actions.')],
      textAfter: 'The system also documents inputs, shop cards, headers, overlays, and letter-in-envelope rewards. Defining these patterns connects the illustration and interaction work to reusable implementation decisions.',
    },
    {
      id: 'features', navLabel: 'Inside the app', kicker: 'Design meets engineering', title: 'Focus, cook, and make yourself at home',
      text: 'I build the app with React Native and Firebase, using TanStack Query and Zustand to manage data and state. These recordings show how the focus experience connects to recipes, the café, and time with friends.',
      demos: [
        demo('multiplayer', 'A shared study room', 'Create a room and share its link so friends can join a focus session. The quiet presence of others becomes part of the experience.'),
        demo('cook', 'Turn ingredients into recipes', 'Choose a dish and use collected ingredients to cook it. The cooking loop gives study rewards a purpose in the café.'),
        demo('cafe', 'Care for your café', 'Serve food and spend time in a space filled with visiting cats. The café makes progress visible and personal.'),
        demo('book', 'A book of discoveries', 'Browse recipes, cats, and scenes. The book brings the world’s collections together in one familiar place.'),
        demo('stats', 'See your study rhythm', 'Review sessions and patterns across days, weeks, and months, with room for both focus and rest.'),
        demo('widgets', 'Keep focus close by', 'A home-screen widget keeps the session visible outside the app, carrying the character and timer into everyday phone use.'),
      ],
      moreDemos: [demo('shop', 'The shop', 'Browse the items that help your café grow.'), demo('letter', 'Letters from the café', 'Small narrative moments bring personality to the experience.'), demo('daily check', 'A daily return', 'A check-in creates a familiar moment when opening the app.'), demo('leaderboard', 'Community progress', 'A view of study activity alongside other users.'), demo('profile', 'Your profile', 'A personal place within the Catena world.'), demo('loading', 'Entering Catena', 'The first moments of arriving in the app.')],
    },
    {
      id: 'online-mode', navLabel: 'Across screen sizes', kicker: 'Focusing together', title: 'One room, different screens',
      text: 'I explored joining and waiting-room states on both mobile and desktop. The core actions stay simple: enter your name, join the room, and see the session state. The layout gives the same cat and timer more breathing room on a larger screen.',
      gallery: [screen('multiplayer screen sizes ui/online mode/02-join-room-desktop', 'Desktop prototype: joining a study room'), screen('multiplayer screen sizes ui/online mode/10-preparing-desktop', 'Desktop prototype: preparing for a session')],
      screenGroups: [{ title: 'Mobile companions', images: [screen('multiplayer screen sizes ui/online mode/01-join-room-mobile', 'Join a room'), screen('multiplayer screen sizes ui/online mode/05-waiting-mobile', 'Wait for the host'), screen('multiplayer screen sizes ui/online mode/09-preparing-mobile', 'Prepare to focus'), screen('multiplayer screen sizes ui/online mode/11-on-break-mobile', 'Take a break')] }],
    },
    {
      id: 'beta', navLabel: 'Our first beta', kicker: 'Building with students', title: 'Inviting people into Catena',
      paragraphs: ['Our closed beta brought together 71 users. I used interviews, surveys, and analytics to inform product decisions and prioritization. Three-week retention reached 42.7%, giving us an early signal of whether people were returning.', 'The invitation and thank-you materials extended the café’s visual language beyond the app. They made joining the beta feel like an invitation into the world we were building.'],
      metrics: [{ value: '71', label: 'Closed-beta users' }, { value: '42.7%', label: 'Retention at three weeks' }],
      note: 'Early results from the closed-beta cohort; distinct from the introductory research questionnaire.',
      gallery: [visual('marketing design/03-catena-waitlist-poster.png', 'Inviting students to join the Catena waitlist.'), visual('marketing design/02-catena-beta-test-flyer.png', 'The beta invitation: introducing the app, its features, and how to join.'), visual('marketing design/01-catena-thank-you-gift.jpg', 'Thank-you artwork for the beta community.')],
    },
    {
      id: 'sharing', navLabel: 'Sharing the journey', kicker: 'Marketing & community', title: 'Showing the work as we build',
      paragraphs: ['Creating Catena also means explaining it. I make social media videos and visual materials that introduce the app, show its features, and share the process behind it. YouTube and Instagram give people a way to follow along before they join.', 'The waitlist poster, beta invitation, and project video carry the same cats, warm colors, and café narrative into our outreach. Catena has now attracted more than 300 waitlist signups.'],
      socialVideos: [
        { platform: 'YouTube', title: 'Study with me · Cozy Cat Café', embed: 'https://www.youtube-nocookie.com/embed/mRVnpSxs3Fg', href: 'https://www.youtube.com/watch?v=mRVnpSxs3Fg' },
        { platform: 'YouTube', title: 'Focus timer · Matcha Latte & Cat Café', embed: 'https://www.youtube-nocookie.com/embed/yO4dUhi4EqM', href: 'https://www.youtube.com/watch?v=yO4dUhi4EqM' },
        { platform: 'Instagram', title: 'From the Catena Instagram · Reel 1', embed: 'https://www.instagram.com/reel/Db34hqpvfy6/embed/', href: 'https://www.instagram.com/catenafocus/reel/Db34hqpvfy6/' },
        { platform: 'Instagram', title: 'From the Catena Instagram · Reel 2', embed: 'https://www.instagram.com/reel/DbrvKeOt4r_/embed/', href: 'https://www.instagram.com/catenafocus/reel/DbrvKeOt4r_/' },
      ],
      links: [{ label: 'Watch on YouTube', href: 'https://www.youtube.com/@catenafocus' }, { label: 'Follow on Instagram', href: 'https://www.instagram.com/catenafocus/' }],
    },
    {
      id: 'status-team', navLabel: 'Status & team', kicker: 'Still building', title: 'A small team, a growing café',
      paragraphs: ['Catena is an ongoing startup. Alongside the closed beta and 300+ waitlist signups, we secured $50K through CU Innovation Lab to support the work. I continue to lead product strategy, design, and engineering as the app develops.', 'Building it is a collaborative effort. I work with artists and musicians to bring the café to life, connecting product decisions and engineering with the people creating its world. These are a few moments with the team along the way.'],
      photos: [{ src: asset('showcase/team-cafe.jpg'), alt: 'The Catena team together at a café.' }, { src: asset('showcase/team-dinner.jpg'), alt: 'The team sharing a meal.' }, { src: asset('showcase/team-together.jpg'), alt: 'A candid photo of the team together.' }],
      links: [{ label: 'Explore Catena', href: 'https://catenafocus.com/' }],
      closing: 'More coming…',
    },
  ],
}
