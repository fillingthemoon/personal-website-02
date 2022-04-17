import NavLink from './navlink'

import {
  Box,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const SubmenuAccordion = (props) => {
  const { name, href, submenu } = props

  return (
    <>
      <AccordionButton
        py={4}
        px={6}
        _hover={{ backgroundColor: 'white' }}
      >
        <Box
          fontSize="1.4rem"
          flex="1"
          textAlign="left"
          color="white"
          _hover={{
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          {name}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel
        p="10px 0"
        spacing="0"
        backgroundColor="white"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        fontSize="1.1rem"
      >
        {submenu.map((item, j) => (
          <NavLink
            key={j}
            name={item.name}
            href={href + item.href}
            accordion={true}
            submenuItem={true}
          />
        ))}
      </AccordionPanel>
    </>
  )
}

export default SubmenuAccordion
