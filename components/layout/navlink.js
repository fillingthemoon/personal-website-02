import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const NavLink = ({ name, href, submenuItem, accordion }) => {
  return (
    <NextLink href={href} passHref>
      <Link
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
      </Link>
    </NextLink>
  )
}

export default NavLink
