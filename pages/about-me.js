import Head from 'next/head'
import { Heading, VStack, Flex, Box, Text } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box px={{ base: '4', md: '28' }}>
      <Head>
        <title>About Me | Philemon Heng</title>
      </Head>
      <Flex justify="center" my={20}>
        <VStack spacing={6} align="flex-start" textAlign="left" fontWeight={800}>
          <Heading>
            Hi there! 👋
          </Heading>
          <Text fontSize="1.7rem" fontWeight={400}>
            Philemon here :)
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}

export default Home
