import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginOrSignup from './Pages/Portal/LoginOrSignup';
import { extendTheme, ChakraProvider, Box, Center} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      200: "#ffffff",
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
  components: {
    Tab: {
      baseStyle: {
        track: {
          _focus: {
            boxShadow: 'white'
          }
        }
      }
    }
  }
})


function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Center>
            <LoginOrSignup />
        </Center>
      </ChakraProvider>
    </div>
  );
}

export default App;
