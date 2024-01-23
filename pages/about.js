import Head from 'next/head'
import NextImage from 'next/image'
import Layout from '../components/layout/layout'
import { Heading, Flex, Box, Text } from '@chakra-ui/react'
import SkillPill from '../components/ui/skillPill'

const Home = () => {
  return (
    <Box>
      <Head>
        <title>About | Philemon Heng</title>
      </Head>
      <Layout>
        <Flex justify="center" textAlign="center">
          <Flex flexDirection="column" align="center" maxW="600px">
            <Heading fontSize="2.5rem" mb={{ base: 4, md: 16 }}>
              About
            </Heading>
            <NextImage
              src="/images/about-me-pic.jpeg"
              alt="about-me-pic"
              width={200}
              height={200}
              style={{ borderRadius: '50%' }}
            />
            <Box mt={4} mb={8}>
              <Text fontSize="1.5rem" fontWeight={700}>
                Philemon Heng
              </Text>
              <Text fontSize="1.2rem" color="gray">
                Web Developer
              </Text>
            </Box>
            <Text fontSize="1.2rem" color="gray">
              {`I'm a web developer who loves building tools that positively impact
            others' lives. Learning many new technologies and skills over the
            years has revealed to me how much more I have yet to learn. This
            motivates me to strive to continually grow my knowledge and skills
            so as to deliver high-quality solutions on time and within budget.`}
            </Text>
            <Flex mt={8} flexWrap="wrap" justify="center">
              {[
                'React',
                'NextJS',
                'ExpressJS',
                'Python',
                'PostgreSQL',
                'MongoDB',
                'Material-UI',
              ].map((skillName, i) => {
                return <SkillPill key={i} name={skillName} />
              })}
            </Flex>
          </Flex>
        </Flex>
      </Layout>
    </Box>
  )
}

export default Home
