import Head from 'next/head'
import experienceData from '../data/experience'

import { Heading, Text, Stack, Box } from '@chakra-ui/react'

const Experience = (props) => {
  return (
    <Box px={{ base: '4' }} maxWidth='3xl'>
      <Head>
        <title>experience</title>
      </Head>
      <Heading mb={12}>experience</Heading>
      <Stack>
        {props.experienceData.map((experience, i) => (
          <Stack className="experience-item" key={i}>
            <Text>{experience.position}</Text>
            <Text>{experience.company}</Text>
            <Text>{experience.duration}</Text>
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
