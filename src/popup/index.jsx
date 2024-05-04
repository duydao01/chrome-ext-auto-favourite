import React from 'react'
import ReactDOM from 'react-dom/client'
import { Popup } from './Popup'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('app')).render(

  <React.StrictMode>
    <ChakraProvider>
      <Popup />
    </ChakraProvider>
  </React.StrictMode>,
)
