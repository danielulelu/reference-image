import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, extendTheme, theme as base } from '@chakra-ui/react'

const inputStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.black",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};


const theme = extendTheme (
  {
    colors: {
      black: '#000000',
      blue: '#4C5FD5',
      grey: "#dadbf1",
      white: '#fff'
    },

    fonts: {
      heading: `Montserat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },

    components: {
      Input: { ...inputStyles },
    }
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
