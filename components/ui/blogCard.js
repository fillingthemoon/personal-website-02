import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import {
  VStack,
  HStack,
  Avatar,
  Text,
  Link,
  Divider,
  Image,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { months } from '../../helper-files/dates'

const getNumWords = (content) => {
  const wordArr = content.content
    .map((contentItem) => contentItem.content[0].value)
    .join(',')
    .split(' ')

  return wordArr.length
}

const getReadTime = (numWords) => {
  return Math.round(numWords / 230)
}

const ProjectCard = (props) => {
  const { title, content, image, dateAndTime, slug, tags } = props

  const [readTime, setReadTime] = useState(0)

  const currMonth = months[new Date(dateAndTime).getMonth()]
  const currDay = new Date(dateAndTime).getDate()

  const contentFirstPar = {
    ...content,
    content: content.content.slice(0, 1),
  }

  const router = useRouter()

  useEffect(() => {
    const numWords = getNumWords(content)
    setReadTime(getReadTime(numWords))
  }, [])

  return (
    <NextLink href={`${router.asPath}/${slug}`} passHref>
      <Link
        display="flex"
        _hover={{ textDecoration: 'none' }}
        w="100%"
        maxH="180px"
      >
        <VStack flexGrow={1} align="flex-start" mr={10}>
          <HStack spacing={4}>
            <Avatar name="Philemon Heng" size="sm" />
            <Text>{`Philemon Heng`}</Text>
          </HStack>
          <Text
            fontWeight={700}
            fontSize={{ base: '1.5rem', md: '2rem' }}
            maxW="50vw"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {title}
          </Text>
          <VStack
            flexGrow={1}
            alignItems="flex-start"
            textAlign="justify"
            color="gray.300"
            sx={{
              '& > p': {
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              },
            }}
          >
            {documentToReactComponents(contentFirstPar)}
          </VStack>
          <HStack spacing={4} fontSize="0.9rem">
            <Text>{`${currMonth} ${currDay}`}</Text>
            <Divider orientation="vertical" />
            <Text>{`${readTime} min read`}</Text>
          </HStack>
        </VStack>
        <Image
          src={image.fields.file.url}
          alt="project-item"
          objectFit="cover"
          w="30%"
        />
      </Link>
    </NextLink>
  )
}

export default ProjectCard
