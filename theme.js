import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: '#333',
      },
    },
  },
  colors: {
    black: '#333',
    blue: '#0078f7',
    gray: '#757575',
    grayL: '#d4d4d4',
    grayLL: '#ebebeb',
  },
  fonts: {
    body: 'Open Sans',
    heading: 'Open Sans',
  },
})

export default theme
