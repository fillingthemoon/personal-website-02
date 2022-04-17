import { useEffect } from 'react'
import NavLink from './navlink'

import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Accordion,
  AccordionItem,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Contact from '../contact'
import SubmenuAccordion from './submenuAccordion'

const links = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'about',
    href: '/about',
  },
  {
    name: 'experience',
    href: '/experience',
  },
  {
    name: 'projects',
    href: '/projects',
  },
  // {
  //   name: 'skills',
  //   href: '/skills',
  // },
]

const MobileMenu = (props) => {
  const { isMobileMenuOpen } = props

  useEffect(() => {
    const bodyElm = document.getElementsByTagName('body')
    bodyElm[0].setAttribute(
      'style',
      `overflow:${isMobileMenuOpen ? 'hidden' : 'none'};`
    )
    console.log('hi')
  }, [isMobileMenuOpen])

  return isMobileMenuOpen ? (
    <Box display={{ lg: 'none' }} position="absolute" width="100vw">
      <Box backgroundColor="white" pb={2}>
        <Accordion allowToggle fontSize="1.1rem">
          {links.map((link, i) => {
            return !link.submenu ? (
              // Accordion navbar item
              <AccordionItem key={i} border="none">
                <NavLink name={link.name} href={link.href} accordion={true} />
              </AccordionItem>
            ) : (
              // Accordion item with a submenu containing other items
              <AccordionItem border="none" key={i}>
                <SubmenuAccordion
                  name={link.name}
                  href={link.href}
                  submenu={link.submenu}
                />
              </AccordionItem>
            )
          })}
        </Accordion>
      </Box>
      <Box backgroundColor="rgba(0,0,0,0.6)" height="100vh" />
    </Box>
  ) : null
}

const NavBar = () => {
  const {
    isOpen: isMobileMenuOpen,
    onOpen: onMobileMenuOpen,
    onClose: onMobileMenuClose,
  } = useDisclosure()

  return (
    <Box bg="white" position="sticky" zIndex={2} py={{ base: 2, md: 4 }}>
      <Container maxW="container.md">
        <Flex h={16} alignItems={'center'} justify={'space-between'}>
          <IconButton
            icon={
              isMobileMenuOpen ? (
                <CloseIcon fontSize="18px" />
              ) : (
                <HamburgerIcon fontSize="25px" />
              )
            }
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isMobileMenuOpen ? onMobileMenuClose : onMobileMenuOpen}
            backgroundColor="white"
            transition="0.2s"
            _hover={{
              transform: 'scale(1.2)',
              transition: '0.2s',
            }}
          />
          <Contact />
          <HStack as={'nav'} spacing={8} display={{ base: 'none', md: 'flex' }}>
            {links.map((link, i) => (
              <NavLink key={i} name={link.name} href={link.href} />
            ))}
          </HStack>
        </Flex>
      </Container>
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />
    </Box>
  )
}

export default NavBar
