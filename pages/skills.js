import Head from 'next/head'
import Image from 'next/image'

import {
  languagesData,
  frameworksAndLibrariesData,
  toolsData,
  gisToolsData,
  databaseToolsData,
} from '../data/skills'
import SkillCard from '../components/ui/skillCard'

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
      <div>
        <h2>skills</h2>
        <div>
          {skillsDivs.map((skillsDiv, i) => (
            <div id={skillsDiv.id} key={i}>
              <h2>{skillsDiv.title}</h2>
              {skillsDiv.data.map((language, j) => (
                <SkillCard
                  key={j}
                  name={language.name}
                  imgSrc={language.imgSrc}
                />
              ))}
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
