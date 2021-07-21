import NavBar from './navbar'
import Footer from './footer'

import { Flex, Container } from '@chakra-ui/react'
import Contact from '../contact'

const Layout = (props) => {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <NavBar />
      <Contact />
      <Container maxW="container.lg" flexGrow="1" mb={20} mt={20}>
        {props.children}
      </Container>
      <Footer />
    </Flex>
  )
}

export default Layout
