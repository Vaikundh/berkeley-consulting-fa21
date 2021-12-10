import React from 'react'
import logo from './logo.svg'
import './App.css'
import LoginOrSignup from './Pages/Portal/LoginOrSignup'
import { ChakraProvider, Box, Center } from '@chakra-ui/react'
import Fonts from './Pages/Fonts'

function App() {
    return (
        <>
            <ChakraProvider>
                <Box height="100vh">
                    <LoginOrSignup />
                </Box>
            </ChakraProvider>
        </>
    )
}

export default App
