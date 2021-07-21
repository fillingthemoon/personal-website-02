import NavBar from './navbar'
import Footer from './footer'

import { Flex, Container } from '@chakra-ui/react'

const Layout = (props) => {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <NavBar />
      <Container maxW="container.lg" flexGrow="1" mb={20} mt={44}>
        <Flex justifyContent='center'>{props.children}</Flex>
      </Container>
      <Footer />
    </Flex>
  )
}

export default Layout
