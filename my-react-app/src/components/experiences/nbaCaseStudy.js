// Case study for the NBA internship, rendered by ExperiencePage when an
// experience declares `caseStudy`. Diagrams are crops of my own showcase
// slides, taken above the deck's footer so no internal slide furniture is
// carried onto the public site.
import diagramTesting from '../../assets/light/nba/diagram-testing.webp'
import diagramTicket from '../../assets/light/nba/diagram-ticket.webp'
import photoPortrait from '../../assets/light/nba/photo-portrait.webp'
import photoInterns from '../../assets/light/nba/photo-interns.webp'
import photoMentor from '../../assets/light/nba/photo-mentor.webp'
import uiHideScores from '../../assets/light/nba/ui-hide-scores.webp'
import uiStatsDropdown from '../../assets/light/nba/ui-stats-dropdown.webp'
import uiCalendar from '../../assets/light/nba/ui-calendar.webp'
import uiEmailValidation from '../../assets/light/nba/ui-email-validation.webp'

import nbaLogo from '../../assets/light/nba/nba-logo.svg'

export const nbaCaseStudy = {
  titleLines: ['DTC Web', 'Engineering Intern'],
  // Logo source: https://commons.wikimedia.org/wiki/File:National_Basketball_Association_logo_2017-present.svg
  brand: { primary: '#1d428a', secondary: '#c8102e', logo: { src: nbaLogo, alt: 'NBA' } },
  tags: ['AI Automation', 'Frontend'],

  overview: [
    'I spent the summer on the NBA’s Direct-to-Consumer Web Engineering team, working on NBA.com.',
    'My work fell into three threads: shipping fan-facing frontend features, removing friction from how the team shipped and verified its own work, and writing the documentation that made both durable after I left.',
  ],

  sections: [
    {
      id: 'hide-scores',
      kicker: 'Frontend | Fan Experience',
      title: 'Extending Hide Scores to playmaker banners',
      star: {
        situation:
          'Hide Scores lets fans who are behind on a game browse NBA.com without having the result spoiled. However, the toggle does not cover banners, which could still contain spoilers.',
        task:
          'Inspect how to make banners honor the same fan preference as the rest of the page, without impacting load performance.',
        action: [
          'Audited how existing Hide Scores functionality works and examined how banners are created and managed.',
          'Mocked data for spoiler-free and spoiler content to see performance.',
          'Wrote up findings on two possible solutions and a proposed solution, as well as considerations.',
          'Presented findings to the cross-platform team.',
        ],
        result:
          'Accepted proposed solution — fans won’t get spoiled by banners on web.',
      },
      figure: {
        src: uiHideScores,
        alt: 'The Hide Scores toggle switched on, next to a large promotional banner on NBA.com inviting fans to watch all NBA games.',
        contain: true,
      },
    },
    {
      id: 'accessibility',
      kicker: 'Frontend | UI',
      title: 'Improving accessibility',
      text:
        'There were inconsistencies across different pages of NBA.com and accessibility concerns, as well as bugs to fix and catch.',
      gallery: [
        {
          src: uiCalendar,
          alt: 'The NBA.com schedule calendar for September 2026, with the current date marked.',
          caption: 'Highlighted current date on games calendar',
        },
        {
          src: uiStatsDropdown,
          alt: 'The team selector on the NBA.com Stats page, open and showing the list of teams with names and logos.',
          caption: 'Team names, not just logos',
        },
        {
          src: uiEmailValidation,
          alt: 'An email input on NBA.com showing the validation message “Email address is required.”',
          caption: 'Improving accessibility on selected input',
          span: true,
        },
      ],
    },
    {
      id: 'code-health',
      kicker: 'Frontend | Code Health',
      title: 'Cleaning up old code',
      text:
        'Refactored legacy components, replaced TailwindCSS, added testing, and removed PropTypes, as well as resolved production issues and reported new bugs.',
    },
    {
      id: 'automations',
      kicker: 'Workflow Automations | AI',
      title: 'Decreasing friction for development',
      items: [
        {
          figure: {
            src: diagramTesting,
            alt: 'Flowchart of the testing instructions automation. Blue path: testing instructions written on the GitHub PR, PR merged, automation triggered, ticket ID extracted and appended to the PR description for QA. Red path below shows the replaced manual loop: QA receives a ticket with no test instructions, QA messages the developer, developer adds test instructions.',
          },
          text:
            'When a pull request merged, the ticket reached QA with no testing instructions attached. The instructions usually existed — the developer had written them on the PR — but nothing carried them across the GitHub-to-Jira boundary. QA would receive a ticket they could not act on, message the developer, wait for a reply, and only then start testing. The solution was to copy existing instructions over after a PR.',
        },
        {
          figure: {
            src: diagramTicket,
            alt: 'Flowchart of Jira ticket creation from a GitHub reply. Blue path: reviewer identifies an out-of-scope issue, replies in thread with @create-jira-ticket, automation triggers, ticket is created from thread context with an in-thread confirmation and a PM alert. Red path below shows the replaced manual process: go to Jira, create ticket, fill in fields manually, reply in thread, ping PM for sprint planning.',
          },
          text:
            'During code review, a reviewer often spots something real but out of scope for the current PR. Filing it meant leaving the review: open Jira, create a ticket, fill in every field by hand, return to the thread to say a ticket exists, then ping the PM to get it into sprint planning. The solution was a simple command which integrates AI to gather context, create the ticket, and alert relevant parties.',
        },
        {
          text:
            'I also worked with the Android team to copy over files, adapting them for web use, to allow users to ask questions about the repo and create tickets directly from Slack with Claude integrations.',
        },
      ],
    },
    {
      id: 'impact',
      title: 'The Impact',
      text:
        'I was able to contribute to documentation that makes the Web Team’s initiatives easier to discover, understand, and contribute to, including creating new documentation around automations. I helped reduce friction between development and QA by automating repetitive Jira processes and contributed to a cross-team initiative focused on improving workflows. I also worked on code cleanup to make existing code easier to understand and maintain.',
      photos: [
        { src: photoMentor, alt: 'Lilymoon Whalen in conversation with a colleague across a conference table at the NBA office.' },
        { src: photoPortrait, alt: 'Lilymoon Whalen holding a basketball, photographed during her NBA internship.' },
        { src: photoInterns, alt: 'The 2026 NBA intern cohort standing together in front of an NBA-logo backdrop with the Larry O’Brien Championship Trophy.' },
      ],
    },
  ],
}
