import Image from 'next/image'

import { Stack, Text } from '@chakra-ui/react'

const SkillCard = (props) => {
  const { name, imgSrc } = props

  return (
    <Stack
      my='4'
      spacing='2'
      transition="0.2s"
      _hover={{
        transform: 'scale(1.07)',
        transition: '0.2s',
      }}
    >
      <Image
        src={imgSrc}
        alt="skill"
        width="70"
        height="70"
        objectFit="scale-down"
        priority={true}
      />
      <Text textAlign='center'>{name}</Text>
    </Stack>
  )
}

export default SkillCard
