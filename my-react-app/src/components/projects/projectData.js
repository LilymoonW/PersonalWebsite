// Project content and images migrated from Lilymoon-Portfolio.
// Add any number of links: website, github, presentation, paper, social, prototype,
// devpost, or a custom type with a label. Only supplied URLs are rendered.
export const projectLinkLabels = {
  website: "Visit website", github: "GitHub", presentation: "Presentation",
  paper: "Read paper", social: "Social media", prototype: "View prototype",
  devpost: "View on Devpost",
}

export const projects = [
  {
    "id": "tagalong",
    "title": "TagAlong",
    "description": "Our app extracts information like location and name from short-form videos and organizes it into structured, actionable travel plans.",
    "image": "/projects/tagalong-preview.jpg",
    "video": "/projects/tagalong-demo.mp4",
    "imageLayout": "portrait",
    "tags": [
      "Research",
      "Social Media"
    ],
    "technologies": [],
    "links": [
      {
        "type": "paper",
        "url": "/resources/projects/tagalong-final-report.pdf"
      },
      {
        "type": "poster",
        "label": "Research poster",
        "url": "/resources/projects/tagalong-poster.html"
      },
      {
        "type": "results",
        "label": "Qualitative results",
        "url": "/projects/tagalong-qualitative-optimized.webp"
      }
    ]
  },
  {
    "id": "formula-sae",
    "title": "Formula SAE — Hydraulic Braking System",
    "description": "Spearheaded the assembly of a high-performance hydraulic braking system for the Formula SAE vehicle at Olin College of Engineering. Collaborated with cross-functional teams to integrate the braking system with other vehicle subsystems.",
    "image": "/projects/formula-3-optimized.webp",
    "imageLayout": "landscape",
    "tags": [
      "Hardware",
      "Mechanical Engineering"
    ],
    "technologies": [],
    "links": [],
    "images": [
      {
        "src": "/projects/formula-3-optimized.webp",
        "alt": "Me in the Formula SAE car at Olin College of Engineering"
      },
      {
        "src": "/projects/formula-2-optimized.webp",
        "alt": "The Formula SAE vehicle chassis in the workshop"
      },
      {
        "src": "/projects/formula-1-optimized.webp",
        "alt": "My signature alongside teammates’ signatures on the vehicle"
      }
    ]
  },
  {
    "id": "research-md",
    "title": "ResearchMD",
    "description": "Led front-end development using Figma and responsive design to deliver a clean, accessible UI. Mentored a junior developer and ran check-ins to align design and code quality.",
    "tags": [
      "Contract Work"
    ],
    "technologies": [
      "Figma"
    ],
    "links": [
      {
        "type": "design",
        "label": "View Figma design",
        "url": "https://www.figma.com/design/OBNDYzSvTE694yzpEDJdqz/ResearchMD?node-id=0-1&t=s9fY2w2YZAqeOcFA-1"
      }
    ],
    "image": "/projects/research-md-optimized.webp",
    "imageLayout": "landscape"
  },
  {
    "id": "whack-2026",
    "title": "WHACK 2026",
    "description": "Contributed to UI/UX design for Wellesley’s 2026 hackathon website, designing cloud artwork and helping with color selection, layout, and formatting.",
    "image": "/projects/whack-2026-optimized.webp",
    "imageLayout": "landscape",
    "tags": [
      "UI/UX Design",
      "Hackathon"
    ],
    "technologies": [],
    "links": [
      {
        "type": "website",
        "url": "https://www.wellesleyhacks.org/"
      }
    ]
  },
  {
    "id": "project-5",
    "title": "SMT Word Adventure",
    "description": "Built a full-stack application using Z3 for formal verification and utilized Flask for dynamic frontend. Modeled logic-based word puzzles and enabled real-time random generation and rendering in a web interface.",
    "image": "/projects/alexa-optimized.webp",
    "tags": [
      "Live",
      "Featured · Wellesley CS"
    ],
    "technologies": [
      "Python",
      "Flask",
      "Z3",
      "Alloy",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "links": [
      {
        "type": "website",
        "url": "https://finalproject-cs340.onrender.com/"
      },
      {
        "type": "github",
        "url": "https://github.com/LilymoonW/FinalProject_CS340"
      },
      {
        "type": "social",
        "label": "Wellesley CS feature",
        "url": "https://www.instagram.com/reel/DSLyYPODUrQ/"
      }
    ],
    "imageLayout": "landscape"
  },
  {
    "id": "shadow-quest",
    "title": "Shadow Quest",
    "description": "A short RPG created for my cinema class, using cute fantasy aesthetics to disguise a darker allegory about propaganda, scapegoating, and violence. Through branching endings and increasingly uncomfortable encounters, the game asks players to question violence committed under the guise of glory.",
    "image": "/projects/shadow-quest-optimized.webp",
    "imageLayout": "landscape",
    "tags": [
      "Game Dev",
      "Storytelling"
    ],
    "technologies": [
      "Godot"
    ],
    "links": [
      {
        "type": "website",
        "label": "Play on itch.io",
        "url": "https://lilysun.itch.io/shadow-quest"
      },
      {
        "type": "github",
        "url": "https://github.com/LilymoonW/cinema_multimedia_game"
      }
    ]
  },
  {
    "id": "pcos-ultrasound",
    "title": "Interpretable PCOS Ultrasound Classification",
    "description": "Built a computer vision pipeline for MIT 6.S058: Introduction to Computer Vision, fine-tuning ResNet18 to classify PCOS ultrasound images. Used Grad-CAM to visualize regions influencing predictions and evaluated the model’s limitations and generalizability.",
    "image": "/projects/pcos-grad-cam-optimized.webp",
    "imageLayout": "square",
    "tags": [
      "Computer Vision",
      "MIT 6.S058"
    ],
    "technologies": [
      "Python",
      "ResNet18",
      "Transfer Learning",
      "Grad-CAM"
    ],
    "links": [
      {
        "type": "paper",
        "label": "Read final report",
        "url": "/resources/projects/pcos-ultrasound-final-report.pdf"
      }
    ]
  },
  {
    "id": "project-0",
    "title": "Sugar & Focus",
    "description": "A cross-platform Pomodoro timer built with React and Electron, pairing focused study sessions with a cozy baking theme. Available on the web and as a desktop app, with 200+ downloads.",
    "image": "/projects/sugar&focus.png",
    "tags": [
      "Live"
    ],
    "technologies": [
      "React",
      "Electron",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "links": [
      {
        "type": "website",
        "url": "https://sugar-and-focus.vercel.app/"
      },
      {
        "type": "github",
        "url": "https://github.com/LilymoonW/sugar-and-focus"
      }
    ],
    "imageLayout": "portrait"
  },
  {
    "id": "project-8",
    "title": "Remembering and Recognizing Emotions with β-VAEs",
    "description": "Explored emotional generalization in human perception using β-VAEs. Designed an emoji-based emotion dataset with varying entropy, extended evaluation with confusion matrices and heatmaps, and ran experiments on real and synthetic data using a modified β-VAE.",
    "image": "/projects/emoji-optimized.webp",
    "tags": [
      "Data Generation/Analysis & Machine Learning"
    ],
    "technologies": [
      "Python",
      "Machine Learning",
      "β-VAE",
      "PyTorch",
      "Data Analysis"
    ],
    "links": [
      {
        "type": "paper",
        "url": "https://drive.google.com/file/d/10WE--5SllT6K4md5Su06FP9Eb41Am3Nq/view"
      },
      {
        "type": "github",
        "url": "https://github.com/LilymoonW/cs331-vae-project"
      }
    ],
    "imageLayout": "square"
  },
  {
    "id": "project-2",
    "title": "HealthBridge",
    "description": "Designed a Figma prototype for an interactive web app that demystifies healthcare insurance by simplifying jargon, estimating out-of-pocket costs, and featuring an AI chatbot for real-time support.",
    "image": "/projects/healthBridge-optimized.webp",
    "tags": [
      "Hackathon · HackBrown"
    ],
    "technologies": [
      "Figma",
      "UI/UX Design"
    ],
    "links": [
      {
        "type": "prototype",
        "url": "https://www.figma.com/proto/5S5Y3uOnQwg8QLGItxaOLU/HackBrown?node-id=11-882&p=f&t=lgEdfdDjBNaY75On-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=11%3A882"
      }
    ],
    "imageLayout": "landscape"
  },
  {
    "id": "project-11",
    "title": "Harmony",
    "description": "An interactive web app that makes piano lessons accessible for elementary students. I developed a system to transcribe audio recordings into notes using PyAudio and Librosa and compare them with MIDI-based sheet music using Python to calculate transcription accuracy.",
    "image": "/projects/harmony.png",
    "tags": [
      "Winner · Best Education Hack",
      "WHACK 2024"
    ],
    "technologies": [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "PyAudio",
      "Librosa",
      "MIDI"
    ],
    "links": [
      {
        "type": "github",
        "url": "https://github.com/LilymoonW/Whack-2024"
      }
    ],
    "imageLayout": "landscape"
  },
  {
    "id": "project-12",
    "title": "RFID Door Scanner",
    "description": "Our prototype opens the door when it reads a valid card and displays the status of the door on the TFT screen. It opens the door using a rack and gear system, in which the rack was 3D printed. We used one Arduino to control the RFID scanner and the LEGO motor. We used another Arduino to control the TFT screen.",
    "image": "/projects/scanner-optimized.webp",
    "tags": [
      "Hardware & Prototyping"
    ],
    "technologies": [
      "Arduino",
      "RFID",
      "3D Printing"
    ],
    "links": [
      {
        "type": "presentation",
        "url": "https://www.canva.com/design/DAGD2qxH4dQ/tLqNO3HhobpwKLWlOg1cEQ/edit"
      }
    ],
    "imageLayout": "portrait"
  },
  {
    "id": "project-4",
    "title": "Punchie Pass",
    "description": "A full-stack habit tracker built with React and Firebase, with Google Gemini integration for adaptive habit recommendations. Winner of Most Deployable Hack in November 2025.",
    "image": "/projects/punchiePass-optimized.webp",
    "tags": [
      "Live",
      "Winner · Most Deployable Hack"
    ],
    "technologies": [
      "React",
      "Firebase",
      "Google Gemini API",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "links": [
      {
        "type": "website",
        "url": "https://punchiepass.study/"
      }
    ],
    "imageLayout": "landscape"
  },
  {
    "id": "project-9",
    "title": "Bechdel-Hollywood Graph",
    "description": "Explored gender imbalance in films by examining a real data set of fifty Hollywood movies and running them through a quantitative test",
    "image": "/projects/graph-optimized.webp",
    "tags": [
      "Data Visualization & Analysis"
    ],
    "technologies": [
      "Data Analysis",
      "Java"
    ],
    "links": [
      {
        "type": "github",
        "url": "https://github.com/bowlingpinbird/cs230-project"
      }
    ],
    "imageLayout": "portrait"
  },
  {
    "id": "project-10",
    "title": "Wellesley Housing Selector",
    "description": "Prompts to answer questions and displays a list of rooms on the Wellesley campus which match user's requirements",
    "image": "/projects/housing-optimized.webp",
    "tags": [
      "Data Cleaning & Web Scraping"
    ],
    "technologies": [
      "Python",
      "Java",
      "Scraping Data",
      "Data Cleaning"
    ],
    "links": [
      {
        "type": "github",
        "url": "https://github.com/katiee374/Upskill_WellesleyHousing"
      }
    ],
    "imageLayout": "portrait"
  },
  {
    "id": "project-7",
    "title": "To Do App",
    "description": "A simple to do app that allows users to add new tasks, check off existing tasks, and remove tasks. Created using flutter and utilized hive for databasing.",
    "image": "/projects/todo.png",
    "tags": [
      "App Development"
    ],
    "technologies": [
      "Flutter",
      "Hive"
    ],
    "links": [
      {
        "type": "github",
        "url": "https://github.com/LilymoonW/todo"
      }
    ],
    "imageLayout": "portrait"
  },
  {
    "id": "project-3",
    "title": "Kirkland 12’s All Stars - Custom Poster Designs",
    "description": "Created two individual posters and one group poster for the Kirkland American 12's All Stars team, which were professionally printed and displayed.",
    "image": "/projects/poster-optimized.webp",
    "tags": [
      "Design"
    ],
    "technologies": [
      "Canva"
    ],
    "links": [],
    "imageLayout": "portrait",
    "images": [
      {
        "src": "/projects/poster-optimized.webp",
        "alt": "Original Kirkland All Stars poster design"
      },
      {
        "src": "/projects/poster-team-optimized.webp",
        "alt": "The printed team poster displayed at the baseball field"
      },
      {
        "src": "/projects/poster-signing-1-optimized.webp",
        "alt": "A player signing the printed Kirkland All Stars poster"
      },
      {
        "src": "/projects/poster-signing-2-optimized.webp",
        "alt": "Teammates gathered to sign the group poster"
      }
    ]
  }
]
