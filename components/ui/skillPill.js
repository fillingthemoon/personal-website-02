import { Box } from '@chakra-ui/react'

const skillPillDict = [
  {
    name: 'React',
    color: '#61dafb',
  },
]

const SkillPill = (props) => {
  const { name } = props

  return (
    <Box
      borderRadius="10px"
      backgroundColor={skillPillDict.find((skillPill) =>
        skillPill.name === name ? skillPill.color : 'black'
      )}
      color="white"
    >
      {name}
    </Box>
  )
}

export default SkillPill
