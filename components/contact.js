import { HStack, Link } from '@chakra-ui/react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const contactItems = [
  {
    url: 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjzw5zKk7fuAhXDT30KHcDQAQIQFjAAegQIARAC&url=https%3A%2F%2Fsg.linkedin.com%2Fin%2Fphilemonheng&usg=AOvVaw0oSGmlBwqSpuTH4MabH5lw',
    icon: <FaLinkedin />,
    color: '#0a66c2',
  },
  {
    url: 'https://github.com/fillingthemoon',
    icon: <FaGithub />,
    color: '#6e5494',
  },
  {
    url: 'mailto:philemon.hsy@gmail.com',
    icon: <IoMail />,
    color: '#EA4335',
  },
]

const ContactLink = (props) => {
  return (
    <Link
      fontSize="32px"
      transition="0.2s"
      _hover={{
        transition: '0.2s',
        color: props.color,
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
    <HStack spacing="4">
      {contactItems.map((contactItem, i) => {
        return (
          <ContactLink key={i} url={contactItem.url} color={contactItem.color}>
            {contactItem.icon}
          </ContactLink>
        )
      })}
    </HStack>
  )
}

export default Contact
