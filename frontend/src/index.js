import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './config/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
