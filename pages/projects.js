import Head from 'next/head'
import Layout from '../components/layout/layout'
import { Grid } from '@chakra-ui/react'

import ProjectCard from '../components/ui/projectCard'

import { getProjectItems } from './api/projectItems'

import { Box, Heading } from '@chakra-ui/react'

const Projects = (props) => {
  const { projectItemsRes } = props

  projectItemsRes.sort((a, b) => a.fields.order - b.fields.order)

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
          {projectItemsRes.map((project, i) => {
            const { title, description, image, url } = project.fields

            return (
              <ProjectCard
                key={i}
                title={title}
                description={description}
                image={image}
                url={url}
              />
            )
          })}
        </Grid>
      </Layout>
    </Box>
  )
}

export async function getStaticProps(context) {
  const projectItemsRes = await getProjectItems()

  return {
    props: {
      projectItemsRes,
    },

    revalidate: 60,
  }
}

export default Projects
