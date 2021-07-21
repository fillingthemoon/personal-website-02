import {
  projects,
} from '../helper-files/images'

const {
  memoryGame,
  pomodoroTimer,
  sgMangroves,
  theOfficeScriptSearch,
  ticTacToe,
  trbc,
} = projects

const projectsData = [
  {
    url: 'https://theofficescriptsearch.herokuapp.com',
    title: 'The Office Script Search App',
    imgSrc: theOfficeScriptSearch,
    description: 'This is a web app for searching for any line from the popular sitcom "The Office", built using React, Redux, AntDesign, Node, Express, MongoDB, and Heroku.',
  },
  {
    url: 'https://trbc.herokuapp.com',
    title: 'TRBC Website',
    imgSrc: trbc,
    description: 'This is a website for Thomson Road Baptist Church, built using React, Redux, AntDesign, Node, Express, MongoDB, and Heroku.',
  },
  {
    url: 'https://sgmangroves.com',
    title: 'SGMangroves',
    imgSrc: sgMangroves,
    description: 'SGMangroves, a web map application that provides users with an overview of Singapore\'s mangroves, was built using JavaScipt, CSS, HTML, MapBox GL JS, QGIS, and OpenStreetMap.'
  },
  {
    url: 'https://fillingthemoon.github.io/pomodoro-timer/',
    title: 'Pomodoro Timer',
    imgSrc: pomodoroTimer,
    description: 'This is a pomodoro timer web app built using JavaScipt, CSS, and HTML.',
  },
  {
    url: 'https://fillingthemoon.github.io/tictactoe/',
    title: 'Tic-Tac-Toe',
    imgSrc: ticTacToe,
    description: 'This is a tic-tac-toe web app built using JavaScipt, CSS, and HTML.',
  },
  {
    url: 'https://fillingthemoon.github.io/memory-card/',
    title: 'Memory Game',
    imgSrc: memoryGame,
    description: 'This is a memory game built using React.',
  },
]

export default projectsData