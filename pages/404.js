import Head from 'next/head'
import NextLink from 'next/link'
import { VStack, Heading, Text, Link } from '@chakra-ui/react'
import Layout from '../components/layout/layout'

const Custom404 = (props) => {
  return (
    <div>
      <Head>
        <title>Error 404 Page Not Found</title>
      </Head>
      <Layout>
        <VStack>
          <VStack textAlign="center" spacing={4} width="100vw" py={14}>
            <Heading fontSize="3.5rem">404</Heading>
            <Text fontSize="2rem">{`This page doesn't exist.`}</Text>
            <NextLink href="/" passHref>
              <Link fontSize="1.5rem" color="primary.500">{`Return to the home page.`}</Link>
            </NextLink>
          </VStack>
        </VStack>
      </Layout>
    </div>
  )
}

export default Custom404
