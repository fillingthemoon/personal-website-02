import { Box } from '@chakra-ui/react'

const skillPillDict = [
  {
    name: 'React',
    backgroundColor: '#61dafb',
    color: '#000000',
  },
  {
    name: 'NextJS',
    backgroundColor: '#000000',
  },
  {
    name: 'ExpressJS',
    backgroundColor: '#555555',
  },
  {
    name: 'Chakra UI',
    backgroundColor: '#319795',
  },
  {
    name: 'Python',
    backgroundColor: '#ffd343',
    color: '#000000',
  },
  {
    name: 'PostgreSQL',
    backgroundColor: '#336791',
  },
  {
    name: 'MongoDB',
    backgroundColor: '#13aa52',
  },
]

const SkillPill = (props) => {
  const { name } = props

  return (
    <Box
      borderRadius="5px"
      backgroundColor={
        skillPillDict.find((skillPill) => skillPill.name === name)
          ?.backgroundColor || 'black'
      }
      color={
        skillPillDict.find((skillPill) => skillPill.name === name)?.color ||
        'white'
      }
      fontSize="0.9rem"
      py={1}
      px={2}
      m={1}
    >
      {name}
    </Box>
  )
}

export default SkillPill
