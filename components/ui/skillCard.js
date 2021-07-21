import Image from 'next/image'

import { Stack, Box, Text } from '@chakra-ui/react'

const SkillCard = (props) => {
  const {
    name,
    imgSrc,
  } = props

  return (
    <div>
      <Image
          src={imgSrc}
          alt="skill"
          width="120"
          height="120"
          objectFit="scale-down"
        />
      <span>{name}</span>
    </div>
  )
}

export default SkillCard
