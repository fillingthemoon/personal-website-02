import Image from 'next/image'

import { Stack, Box, Text, Link } from '@chakra-ui/react'

const ProjectCard = (props) => {
  const { title, description, imgSrc, url } = props

  return (
    <Link
      my='4'
      href={url}
      target="_blank"
      rel="noreferrer"
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Stack
        maxWidth="350px"
        spacing={2}
        alignItems="center"
        m={2}
        p={10}
        cursor="pointer"
        boxShadow="lg"
        transition="0.2s"
        _hover={{
          transform: 'scale(1.07)',
          transition: '0.2s',
        }}
      >
        <Stack spacing="6">
          <Box>
            <Image src={imgSrc} alt="project" objectFit="scale-down" priority={true}/>
          </Box>
          <Text
            fontWeight="bold"
            textAlign="center"
            fontSize="2xl"
            color="blue"
          >
            {title}
          </Text>
          <Text lineHeight='1.7'>{description}</Text>
        </Stack>
      </Stack>
    </Link>
  )
}

export default ProjectCard
