import { Box, Text, Link, Image } from '@chakra-ui/react'

const ProjectCard = (props) => {
  const { title, description, imgSrc, url } = props

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
        borderColor="grayLL"
        borderRadius="10px"
        overflow="hidden"
        _hover={{
          borderColor: 'grayL',
        }}
      >
        <Image
          src={imgSrc}
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
          <Text lineHeight="1.7">{description}</Text>
        </Box>
      </Box>
    </Link>
  )
}

export default ProjectCard
