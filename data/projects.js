import { projects } from '../helper-files/images'

const {
  memoryGame,
  pomodoroTimer,
  qissa,
  sgMangroves,
  theOfficeScriptSearch,
  ticTacToe,
  trbc,
  bhb,
} = projects

const projectsData = [
  {
    url: 'https://theofficescriptsearch.vercel.app',
    title: 'The Office Script Search App',
    imgSrc: theOfficeScriptSearch,
    description:
      'This is a web app for searching for any line from the popular sitcom "The Office", built using Next.js, Chakra UI, Supabase, and Vercel.',
  },
  {
    url: 'https://sgtrbc.vercel.app',
    title: 'TRBC Website',
    imgSrc: trbc,
    description:
      'This is a website for Thomson Road Baptist Church, built using NextJS, Chakra UI, Contentful, and Vercel.',
  },
  {
    url: 'https://bhbonline.vercel.app/',
    title: 'Believers Hymn Book Online',
    imgSrc: bhb,
    description:
      'This is a web app for searching for any hymn from the Believers Hymn Book by phrase or hymn number.',
  },
  {
    url: 'https://talentdelhi6qissagoi.netlify.app/#/home',
    title: 'Talent Delhi-6 Qissa Goi (NGO) Website',
    imgSrc: qissa,
    description:
      'This is a website for the non-governmental organisation "Talent Delhi-6 Qissa Goi NGO Website", built using Vue, TailwindCSS, imagekit.io, and Netlify.',
  },
  {
    url: 'https://fillingthemoon.github.io/pomodoro-timer/',
    title: 'Pomodoro Timer',
    imgSrc: pomodoroTimer,
    description:
      'This is a pomodoro timer web app built using JavaScipt, CSS, and HTML.',
  },
  {
    url: 'https://fillingthemoon.github.io/memory-card/',
    title: 'Memory Game',
    imgSrc: memoryGame,
    description: 'This is a memory game built using React.',
  },
  {
    url: 'https://fillingthemoon.github.io/tictactoe/',
    title: 'Tic-Tac-Toe',
    imgSrc: ticTacToe,
    description:
      'This is a tic-tac-toe web app built using JavaScipt, CSS, and HTML.',
  },
]

export default projectsData
