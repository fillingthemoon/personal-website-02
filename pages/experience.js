import Head from 'next/head'
import Layout from '../components/layout/layout'
import experienceData from '../data/experience'

import { Heading, Text, VStack, Flex, Box } from '@chakra-ui/react'

const Experience = (props) => {
  return (
    <Box>
      <Head>
        <title>Experience | Philemon Heng</title>
      </Head>
      <Layout>
        <Box>
          <Heading fontSize="2.5rem" mb={{ base: 4, md: 16 }}>
            Experience
          </Heading>
          <VStack spacing={10} align="flex-start">
            {props.experienceData.map((experience, i) => (
              <VStack key={i} align="flex-start">
                <Text
                  fontSize="1.3rem"
                  color="blue"
                  fontWeight={700}
                  textAlign="left"
                >
                  {experience.position}
                </Text>
                <Text fontSize="1.1rem" textAlign="left">
                  {experience.company}
                </Text>
                <Text fontSize="1rem" textAlign="left" color="gray">
                  {experience.duration}
                </Text>
              </VStack>
            ))}
          </VStack>
        </Box>
      </Layout>
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
