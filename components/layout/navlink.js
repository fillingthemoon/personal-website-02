import NextLink from 'next/link'
import { Text } from '@chakra-ui/react'

const NavLink = ({ name, href, submenuItem, accordion }) => {
  return (
    <NextLink href={href} passHref>
      <Text
        fontSize="1.4rem"
        display="flex"
        py={accordion ? 4 : 0}
        px={accordion && submenuItem ? 12 : submenuItem ? 4 : accordion && 6}
        width={(submenuItem || accordion) && '100%'}
        _hover={{
          textDecoration: 'none',
          color: 'white',
          bg: 'black',
        }}
      >
        {name}
      </Text>
    </NextLink>
  )
}

export default NavLink
