import Head from 'next/head'
import Layout from '../components/layout/layout'
import { Grid } from '@chakra-ui/react'

import projectsData from '../data/projects'
import ProjectCard from '../components/ui/projectCard'

import { Box, Heading } from '@chakra-ui/react'

const Projects = (props) => {
  return (
    <Box>
      <Head>
        <title>Projects | Philemon Heng</title>
      </Head>
      <Layout>
        <Heading fontSize="2.5rem" mb={{ base: 4, md: 16 }}>
          Projects
        </Heading>
        <Grid
          templateColumns={{ md: '1fr 1fr' }}
          columnGap={{ base: 10, lg: 20 }}
          rowGap={10}
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
        </Grid>
      </Layout>
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
