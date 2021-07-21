import Head from 'next/head'
import experienceData from '../data/experience'

import { Heading, Text, Stack, Box } from '@chakra-ui/react'

const Experience = (props) => {
  return (
    <Box px={{ base: '4', md: '28' }}>
      <Head>
        <title>Experience | Philemon Heng</title>
      </Head>
      <Heading mb="16">Experience</Heading>
      <Stack spacing="10">
        {props.experienceData.map((experience, i) => (
          <Stack className="experience-item" key={i} spacing="1">
            <Text fontSize="xl" color="blue" fontWeight="bold">
              {experience.position}
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              {experience.company}
            </Text>
            <Text fontSize="md">{experience.duration}</Text>
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: {
      experienceData,
    },
    revalidate: 3600,
  }
}

export default Experience
