import Head from 'next/head'

import { Box, Stack, HStack, Heading, Text } from '@chakra-ui/react'

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
    <Box px={{ base: '4', md: '28' }}>
      <Head>
        <title>Skills | Philemon Heng</title>
      </Head>
      <Heading mb="14">Skills</Heading>
      <Stack spacing="20">
        {skillsDivs.map((skillsDiv, i) => (
          <Stack key={i} >
            <Text
              fontWeight="bold"
              textAlign="center"
              fontSize="2xl"
              color="blue"
              mb='6'
            >
              {skillsDiv.title}
            </Text>
            <HStack flexWrap='wrap' spacing='10' justifyContent='center'>
              {skillsDiv.data.map((language, j) => (
                <SkillCard
                  key={j}
                  name={language.name}
                  imgSrc={language.imgSrc}
                />
              ))}
            </HStack>
          </Stack>
        ))}
      </Stack>
    </Box>
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
