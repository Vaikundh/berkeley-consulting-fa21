import React from 'react';
import {Button, Input, Box} from '@chakra-ui/react'
function Login() {
    return (
        <Box className='container'>
            <Input placeholder='email@berkeley.edu' size='md' />
            <Input placeholder='password' size='md' mt={5}/>
            <Button variant="outline" boxShadow='base' colorScheme='blue' mt={5} width="100%">
                Log In
            </Button>
        </Box>
    )
}

export default Login;