import Head from 'next/head'
import { Flex } from '@chakra-ui/react'

import projectsData from '../data/projects'
import ProjectCard from '../components/ui/projectCard'

import { Box, Heading } from '@chakra-ui/react'

const Projects = (props) => {
  return (
    <Box px={{ base: '4', md: '28' }}>
      <Head>
        <title>Projects | Philemon Heng</title>
      </Head>
      <Heading textAlign={{ base: 'center', md: 'left' }} mb="10">Projects</Heading>
      <Flex
        flexWrap="wrap"
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
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
    </Box>
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
