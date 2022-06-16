import Head from 'next/head'
import Layout from '../components/layout/layout'

import { getExperienceItems } from './api/experienceItems'

import { Heading, Text, VStack, Flex, Box } from '@chakra-ui/react'

const Experience = (props) => {
  const { experienceItemsRes } = props

  experienceItemsRes.sort((a, b) => a.fields.order - b.fields.order)

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
            {experienceItemsRes.map((experience, i) => {
              const { position, company, dates } = experience.fields

              return (
                <VStack key={i} align="flex-start">
                  <Text
                    fontSize="1.3rem"
                    color="primary.500"
                    fontWeight={700}
                    textAlign="left"
                  >
                    {position}
                  </Text>
                  <Text fontSize="1.1rem" textAlign="left">
                    {company}
                  </Text>
                  <Text fontSize="1rem" textAlign="left" color="gray">
                    {dates}
                  </Text>
                </VStack>
              )
            })}
          </VStack>
        </Box>
      </Layout>
    </Box>
  )
}

export async function getStaticProps(context) {
  const experienceItemsRes = await getExperienceItems()

  return {
    props: {
      experienceItemsRes,
    },

    revalidate: 60,
  }
}

export default Experience
