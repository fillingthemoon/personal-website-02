import Image from 'next/image'

import { Stack, Box, Text } from '@chakra-ui/react'

const ProjectCard = (props) => {
  const { title, description, imgSrc } = props

  return (
    <Stack
      maxWidth="400px"
      spacing={2}
      m={8}
      p={4}
      cursor="pointer"
      boxShadow="md"
      transition="0.2s"
      _hover={{
        transform: 'scale(1.07)',
        transition: '0.2s',
      }}
    >
      <Box>
        <Image
          src={imgSrc}
          alt="product"
          width="300"
          height="300"
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
