import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Json Tree",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/jsontreeLight.webp",
      DARK: "/images/projects/jsontreeDark.webp",
    },
  },
  {
    index: 1,
    title: "Many Games",
    href: "/projects",
    tags: [
      "Reactjs",
      "Tailwindcss",
      "Scss",
      "Vite",
      "React-router-dom",
      "Redux",
      "Vercel",
    ],
    image: {
      LIGHT: "/images/projects/manyGamesLight.webp",
      DARK: "/images/projects/manyGamesDark.webp",
    },
  },
  {
    index: 2,
    title: "Kanban",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Vercel", "Zustand", "React DND"],
    image: {
      LIGHT: "/images/projects/kanbanLight.webp",
      DARK: "/images/projects/kanbanDark.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "OpenGym",
    favicon: "/images/projects/logos/opengym.ico",
    imageUrl: [
      "/images/projects/opengym1.webp",
      "/images/projects/opengym2.webp",
    ],
    description:
      "A real-time gym occupancy tracker for CMU students built with React, Node.js, Express, and MongoDB. Integrates Bluetooth sensors to display live availability across campus facilities.",
    sourceCodeHref: "https://github.com/cmubtg/open-gym",
    liveWebsiteHref: "https://cmuopengym.com/",
  },
  {
    name: "Pomoplanner",
    favicon: "/images/projects/logos/pomodoro.ico",
    imageUrl: [
      "/images/projects/pomodoro1.webp",
      "/images/projects/pomodoro2.webp",
      "/images/projects/pomodoro3.webp",
    ],
    description:
      "A full-stack productivity web app that generates personalized study schedules with a Pomodoro timer, AI-assisted task prioritization, and performance tracking dashboards.",
    sourceCodeHref: "https://github.com/jeongein574/Pomoplanner",
    liveWebsiteHref: "https://www.youtube.com/watch?v=JWPjaXTCYXY",
  },
  {
    name: "Wordish",
    favicon: "/images/projects/logos/wordish.ico",
    imageUrl: [
      "/images/projects/wordish1.webp",
      "/images/projects/wordish2.webp",
    ],
    description:
      "A Django-based web game inspired by Wordle, rebuilt entirely with server-side logic. The app renders each guess through Django views and templates, performing all validation and game processing on the backend without JavaScript. Built to demonstrate MVC architecture, form handling, and stateless design using Python and HTML/CSS.",
    sourceCodeHref: "https://github.com/jeongein574/Wordish",
  },
  {
    name: "My portfolio",
    favicon: "/EJ.ico",
    imageUrl: [
      "/images/projects/portfolio1.webp",
      "/images/projects/portfolio2.webp",
      "/images/projects/portfolio3.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/jeongein574/portfolio",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Covid Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
    sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
    liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  },
  {
    name: "Stock predictor",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
    sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  },
];
