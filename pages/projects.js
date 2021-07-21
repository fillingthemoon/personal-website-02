import Head from 'next/head'
import { Flex } from '@chakra-ui/react'

import projectsData from '../data/projects'
import ProjectCard from '../components/ui/projectCard'

const Projects = (props) => {
  return (
    <div>
      <Head>
        <title>projects</title>
      </Head>
      <Flex flexWrap="wrap" justifyContent="center">
        {props.projectsData.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              url={project.url}
            />
          )
        })}
      </Flex>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projectsData,
    },
    revalidate: 3600,
  }
}

export default Projects
