import NextImage from 'next/image'
import { VStack, Box, Flex, Text, Link } from '@chakra-ui/react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ProjectCard = (props) => {
  const { title, description, image, url } = props

  return (
    <Link
      display="flex"
      href={url}
      target="_blank"
      rel="noreferrer"
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Box
        cursor="pointer"
        border="1px solid"
        borderColor="gray.100"
        borderRadius="10px"
        overflow="hidden"
        _hover={{
          borderColor: 'gray.200',
        }}
      >
        <Flex justifyContent="center">
          <NextImage
            src={`https:${image.fields.file.url}`}
            alt="project-item"
            width={500}
            height={500}
          />
        </Flex>
        <Box p={6} flexGrow={1}>
          <Text
            fontWeight="bold"
            textAlign="center"
            fontSize="1.5rem"
            color="primary.500"
            mb={4}
          >
            {title}
          </Text>
          <VStack alignItems="flex-start" textAlign="justify">
            {documentToReactComponents(description)}
          </VStack>
        </Box>
      </Box>
    </Link>
  )
}

export default ProjectCard
