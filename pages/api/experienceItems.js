import { createClient } from 'contentful'

export const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const getExperienceItems = async () => {
  const experienceItems = await contentful.getEntries({
    content_type: 'experience',
  })

  return experienceItems.items
}
