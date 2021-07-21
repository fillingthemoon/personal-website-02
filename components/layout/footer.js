import {
  Box,
  VStack,
  Container,
  Text,
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box py={4}>
      <Container maxW="container.lg">
        <VStack spacing={2}>
          <Text>&copy; 2021 Philemon Heng.</Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer
