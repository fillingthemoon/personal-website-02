import NextLink from 'next/link'

import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Links = [
  {
    name: 'about me',
    href: '/',
  },
  {
    name: 'experience',
    href: '/experience',
  },
  {
    name: 'projects',
    href: '/projects',
  },
  {
    name: 'skills',
    href: '/skills',
  },
]

const NavLink = ({ name, href }) => (
  <NextLink href={href}>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: 'black',
      }}
    >
      {name}
    </Link>
  </NextLink>
)

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box borderBottom="1px solid black">
      <Container  maxW="container.lg">
        <Flex h={16} alignItems={'center'} justify={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <NavLink name="Philemon Heng" href="/" />
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link, i) => (
              <NavLink key={i} name={link.name} href={link.href} />
            ))}
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link, i) => (
                <NavLink key={i} name={link.name} href={link.href} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  )
}

export default NavBar
