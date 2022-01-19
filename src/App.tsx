import './App.css'
import LoginOrSignup from './Pages/Portal/LoginOrSignup'
import { ChakraProvider} from '@chakra-ui/react'
import ApplicationPage from './Pages/Application/ApplicationPage'
import ProtectedApplication from './Pages/Application/ProtectedApplication'
import ProtectedCongratulations from './Pages/Congratulations/ProtectedCongratulations'
import Congratulations from './Pages/Congratulations/Congratulations'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
    return (
        <>
            <ChakraProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginOrSignup />} />
                        <Route element={<ProtectedApplication />} >
                            <Route path="/application" element={<ApplicationPage />} />
                        </Route>
                        <Route element={<ProtectedCongratulations />} >
                            <Route path="/congratulations" element={<Congratulations />} />
                        </Route>
                    </Routes>
                </Router>
            </ChakraProvider>
        </>
    )
}

export default App;
