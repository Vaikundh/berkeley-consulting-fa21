// import './App.css'
import LoginOrSignup from './Pages/Portal/LoginOrSignup'
import theme from './theme'
import Fonts from './fonts'
import { ChakraProvider } from '@chakra-ui/react'
import ApplicationPage from './Pages/Application/ApplicationPage'
import ProtectedApplication from './Pages/Application/ProtectedApplication'
import ProtectedCongratulations from './Pages/Congratulations/ProtectedCongratulations'
import Congratulations from './Pages/Congratulations/Congratulations'
import AdminPortal from './Pages/Admin/AdminPortal'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedAdmin from './Pages/Admin/ProtectedAdmin'

function App(): JSX.Element {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Fonts />
                <Router>
                    <Routes>
                        <Route path='/' element={<LoginOrSignup />} />
                        <Route element={<ProtectedApplication />}>
                            <Route path='/application' element={<ApplicationPage />} />
                        </Route>
                        <Route element={<ProtectedCongratulations />}>
                            <Route path='/congratulations' element={<Congratulations />} />
                        </Route>
                        <Route element={<ProtectedAdmin />}>
                            <Route path='/admin' element={<AdminPortal />} />
                        </Route>
                    </Routes>
                </Router>
            </ChakraProvider>
        </>
    )
}

export default App
