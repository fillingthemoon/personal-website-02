import Head from 'next/head'
import Layout from '../components/layout/layout'
import { Heading, VStack, Flex, Box, Text } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box px={{ base: '4', md: '28' }}>
      <Head>
        <title>Home | Philemon Heng</title>
      </Head>
      <Layout>
        <Flex justify="center" my={14}>
          <VStack spacing={6} align="flex-start" textAlign="left" maxW="350px">
            <Heading fontSize="3rem">Hi there! 👋</Heading>
            <Text fontSize="2rem">Philemon here :)</Text>
            <Text fontSize="1.4rem" color="gray">
              Find out more about me and my work using the navbar above!
            </Text>
          </VStack>
        </Flex>
      </Layout>
    </Box>
  )
}

export default Home
