import { createClient } from 'contentful'

export const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getProjectItems = async () => {
  const projectItems = await contentful.getEntries({
    content_type: 'project',
  })

  return projectItems.items
}
