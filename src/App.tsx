import './App.css'
import LoginOrSignup from './Pages/Portal/LoginOrSignup'
import { ChakraProvider, Box } from '@chakra-ui/react'

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

export default App;