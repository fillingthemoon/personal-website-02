import {
  Box,
  VStack,
  Container,
  Text,
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box py={8}>
      <Container maxW="container.lg">
        <VStack spacing={2}>
          <Text>&copy; 2022 Philemon Heng</Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer
