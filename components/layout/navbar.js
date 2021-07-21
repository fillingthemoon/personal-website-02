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

const links = [
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
      fontSize="2xl"
      _hover={{
        textDecoration: 'none',
        color: 'white',
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
    <Box shadow='md' py={2}>
      <Container maxW="container.lg">
        <Flex h={16} alignItems={'center'} justify={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            backgroundColor="white"
            transition="0.2s"
            _hover={{
              transform: 'scale(1.3)',
              transition: '0.2s',
            }}
          />
          <NextLink href="/">
            <Link
              fontSize="2xl"
              fontWeight="bold"
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Box as="span" color="blue">
                Phil
              </Box>
              emon Heng
            </Link>
          </NextLink>
          <HStack as={'nav'} spacing={8} display={{ base: 'none', md: 'flex' }}>
            {links.map((link, i) => (
              <NavLink key={i} name={link.name} href={link.href} />
            ))}
          </HStack>
        </Flex>

        {/* Hambuger menu */}
        {isOpen ? (
          <Box pb={4} pl={2} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link, i) => (
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
