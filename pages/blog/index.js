import Head from 'next/head'
import Layout from '../../components/layout/layout'
import { Grid } from '@chakra-ui/react'

import BlogCard from '../../components/ui/blogCard'

import { getBlogItems } from './../api/blogItems'

import { Box, Heading } from '@chakra-ui/react'

const Blogs = (props) => {
  const { blogItemsRes } = props

  blogItemsRes.sort(
    (a, b) => new Date(b.fields.dateAndTime) - new Date(a.fields.dateAndTime)
  )

  return (
    <Box>
      <Head>
        <title>Blog | Philemon Heng</title>
      </Head>
      <Layout>
        <Heading fontSize="2.5rem" mb={{ base: 4, md: 16 }}>
          Blog
        </Heading>
        <Grid
          templateColumns={{ md: '1fr 1fr' }}
          columnGap={{ base: 10, lg: 20 }}
          rowGap={10}
        >
          {blogItemsRes.map((project, i) => {
            const { title, content, image, dateAndTime } = project.fields

            return (
              <BlogCard
                key={i}
                title={title}
                content={content}
                image={image}
                dateAndTime={dateAndTime}
              />
            )
          })}
        </Grid>
      </Layout>
    </Box>
  )
}

export async function getServerSideProps(context) {
  const blogItemsRes = await getBlogItems()

  return {
    props: {
      blogItemsRes,
    },
  }
}

export default Blogs
