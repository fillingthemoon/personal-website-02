import Head from 'next/head'
import { Heading, VStack, Flex, Box, Text } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box px={{ base: '4', md: '28' }}>
      <Head>
        <title>About Me | Philemon Heng</title>
      </Head>
      <Flex justify="center" my={20}>
        <VStack spacing={6} align="flex-start" textAlign="left" maxW="350px">
          <Heading fontSize="3rem">Hi there! 👋</Heading>
          <Text fontSize="2rem" fontWeight={400}>
            Philemon here :)
          </Text>
          <Text fontSize="1.4rem" fontWeight={300}>
            Find out more about me and my work using the navbar above!
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}

export default Home
