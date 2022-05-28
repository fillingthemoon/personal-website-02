import { VStack, Box, Text, Link, Image } from '@chakra-ui/react'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ProjectCard = (props) => {
  const { title, content, image, dateAndTime } = props

  return (
    <Link
      display="flex"
      href={'google.com'}
      target="_blank"
      rel="noreferrer"
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Box
        cursor="pointer"
        border="1px solid"
        borderColor="grayLL"
        borderRadius="10px"
        overflow="hidden"
        _hover={{
          borderColor: 'grayL',
        }}
      >
        <Image
          src={image.fields.file.url}
          h="250px"
          w="100%"
          alt="project-item"
          objectFit="cover"
        />
        <Box p={6} flexGrow={1}>
          <Text
            fontWeight="bold"
            textAlign="center"
            fontSize="1.5rem"
            color="blue"
            mb={4}
          >
            {title}
          </Text>
          <VStack alignItems="flex-start" textAlign="justify">
            {documentToReactComponents(content)}
          </VStack>
        </Box>
      </Box>
    </Link>
  )
}

export default ProjectCard
