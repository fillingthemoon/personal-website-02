import { createClient } from 'contentful'

export const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getBlogItems = async () => {
  const blogItems = await contentful.getEntries({
    content_type: 'blog',
  })

  return blogItems.items
}
