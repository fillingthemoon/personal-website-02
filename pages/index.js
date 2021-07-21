import Head from 'next/head'
import { Heading, Text, Stack, Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box px={{ base: '4', md: '20' }}>
      <Head>
        <title>about me</title>
      </Head>
      <Heading mb={10}>about me</Heading>
      <Stack
        fontSize='lg'
        spacing={8}
        textAlign='justify'
      >
        <Text>
          Since I was a kid, I&nbsp;ve loved building and putting things together;
          from experimenting with small toy sets to assembling IKEA furniture
          and now, to building websites. Beginning my journey, delving into
          environmental studies in university has really showed me the pressing
          need for further efforts in environmental sustainability around the
          world. Geographical Information Systems (GIS) proved to be valuable
          for this such as using remote sensing to detect LULC change over time
          and investigating the UHI effect and water/electricity consumption in
          Singapore. With more experience, GIS opened the doors for me into the
          world of tech.
        </Text>
        <Text>
          Taking a handful of computer science modules in university and online
          courses allowed me to, very early on, contribute to an open-source web
          application, through working in a team, developing handy features, and
          automating parts of my workflow. This experience also tremendously
          improved my skills in QGIS, PyQGIS, JavaScript, Python, JSON, and SVG.
          I then took on a task where I was exposed to APIs and web-scraping.
          Using the OneMap API and Python, I consolidated tens of thousands of
          residential records in Singapore including HDBs, condominiums, and
          landed property and mapped and digitised them in QGIS.
        </Text>
        <Text>
          More recently, I have been creating a few full stack end-to-end web
          applications and seek to further explore the field of full stack
          web-development and GIS and how these technologies can be used to
          positively impact others' lives and aid in environmental
          sustainability.
        </Text>
        <Text>
          Check out my GitHub page (sidebar) for more info and minor coding
          projects! :)
        </Text>
      </Stack>
    </Box>
  )
}

export default Home
