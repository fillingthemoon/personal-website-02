import {
  Box,
  VStack,
  Container,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box py={4} bg={useColorModeValue('gray.100', 'gray.900')}>
      <Container maxW="container.lg">
        <VStack spacing={2}>
          <Text>&copy; 2021 Philemon Heng.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer
