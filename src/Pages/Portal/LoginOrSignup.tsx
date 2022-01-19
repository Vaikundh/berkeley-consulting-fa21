import { useState } from 'react'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import { Box } from '@chakra-ui/react'

function LoginOrSignup(): JSX.Element {
    const [isLogin, updateIsLogin] = useState(true)

    return (
        <Box>
            {isLogin ? (
                <Login updateIsLogin={updateIsLogin} />
            ) : (
                <Signup updateIsLogin={updateIsLogin} />
            )}
        </Box>
    )
}

export default LoginOrSignup
