import Image from 'next/image'

import { Stack, Box, Text } from '@chakra-ui/react'

const ProjectCard = (props) => {
  const { title, description, imgSrc } = props

  return (
    <Stack
      maxWidth="350px"
      spacing={2}
      alignItems="center"
      m={8}
      p={10}
      cursor="pointer"
      boxShadow="lg"
      transition="0.2s"
      _hover={{
        transform: 'scale(1.07)',
        transition: '0.2s',
      }}
    >
      <Box>
        <Image
          src={imgSrc}
          alt="project"
          objectFit="scale-down"
        />
      </Box>
      <Text fontWeight="600" textAlign="center">
        {title}
      </Text>
      <Text>{description}</Text>
    </Stack>
  )
}

export default ProjectCard
