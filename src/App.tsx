import './App.css'
import LoginOrSignup from './Pages/Portal/LoginOrSignup'
import { ChakraProvider, Box } from '@chakra-ui/react'
import ApplicationPage from './Pages/Application/ApplicationPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <ChakraProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginOrSignup />} />
                        <Route path="/application" element={<ApplicationPage />} />
                    </Routes>
                </Router>
            </ChakraProvider>
        </>
    )
}

export default App
