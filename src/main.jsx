import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    black: '#000000',
    blue: '#4C5FD5',
    grey: "#dadbf1",
    white: '#fff'
  }
}

const theme = extendTheme ({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
