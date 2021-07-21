import { Container, HStack, Link } from '@chakra-ui/react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const ContactLink = (props) => {
  return (
    <Link
      fontSize="3xl"
      transition="0.2s"
      _hover={{
        transform: 'scale(1.2)',
        transition: '0.2s',
      }}
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </Link>
  )
}

const Contact = () => {
  return (
    <Container maxW="container.lg" mt={6}>
      <HStack justifyContent="flex-end" spacing="4" px={{base: '4', md: '0'}}>
        <ContactLink url="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjzw5zKk7fuAhXDT30KHcDQAQIQFjAAegQIARAC&url=https%3A%2F%2Fsg.linkedin.com%2Fin%2Fphilemonheng&usg=AOvVaw0oSGmlBwqSpuTH4MabH5lw">
          <FaLinkedin />
        </ContactLink>
        <ContactLink url="https://github.com/fillingthemoon">
          <FaGithub />
        </ContactLink>
        <ContactLink url="mailto:philemon.hsy@gmail.com">
          <IoMail />
        </ContactLink>
      </HStack>
    </Container>
  )
}

export default Contact
