import Head from 'next/head'
import Image from 'next/image'

import {
  languagesData,
  frameworksAndLibrariesData,
  toolsData,
  gisToolsData,
  databaseToolsData,
}
from '../data/skills'

const SkillsCard = (props) => {
  const {
    name,
    imgSrc,
  } = props

  return (
    <div className='skills-card'>
      <Image
          src={imgSrc}
          alt="skill"
          width="120"
          height="120"
          objectFit="scale-down"
        />
      <span>{name}</span>
    </div>
  )
}

const Skills = (props) => {
  const skillsDivs = [
    {
      id: 'skills-languages',
      title: 'Languages',
      data: props.languagesData,
    },
    {
      id: 'skills-frameworks-and-libraries',
      title: 'Frameworks and Libraries',
      data: props.frameworksAndLibrariesData,
    },
    {
      id: 'skills-tools',
      title: 'Tools',
      data: props.toolsData,
    },
    {
      id: 'skills-gis-tools',
      title: 'GIS Tools',
      data: props.gisToolsData,
    },
    {
      id: 'skills-database-tools',
      title: 'Database Tools',
      data: props.databaseToolsData,
    },
  ]

  return (
    <div>
      <Head>
        <title>skills</title>
      </Head>
      <div id="content-container">
        <h2 id="content-title">skills</h2>
        <div id="skills">
          {skillsDivs.map((skillsDiv, i) => (
            <div id={skillsDiv.id} className="skills-div" key={i}>
              <h2>{skillsDiv.title}</h2>
              <div className="skills-div-items">
                {skillsDiv.data.map((language, j) => (
                  <SkillsCard
                    key={j}
                    name={language.name}
                    imgSrc={language.imgSrc}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      languagesData,
      frameworksAndLibrariesData,
      toolsData,
      gisToolsData,
      databaseToolsData,
    },
    revalidate: 3600,
  }
}

export default Skills
