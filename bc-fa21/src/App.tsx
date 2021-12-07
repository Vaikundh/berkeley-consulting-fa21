import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginOrSignup from './Pages/Portal/LoginOrSignup';
import {ChakraProvider, Box, Center} from '@chakra-ui/react';
import theme from './Pages/themes';



function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Box height="100vh">
            <LoginOrSignup />
        </Box>
      </ChakraProvider>  
    </div>
  );
}

export default App;
