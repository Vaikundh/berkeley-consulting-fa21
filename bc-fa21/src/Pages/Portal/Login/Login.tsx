import React from 'react';
import {Button, Input, Center, Box, Container} from '@chakra-ui/react'
function Login() {
    return (
        // <Container borderRadius='md' bg='blue' px={4} h={8}>
        //     <Input placeholder='email@berkeley.edu' size='md' />
        //     <Input placeholder='password' size='md' />
        //     <Button colorScheme='blue'>
        //         Log In
        //     </Button>
        // </Container>
        <div>
            <Input placeholder='email@berkeley.edu' size='md' />
            <Input placeholder='password' size='md' mt={5}/>
            <Button variant="outline" boxShadow='base' colorScheme='blue' mt={5} width="100%">
                    Log In
            </Button>
        </div>
    )
}

export default Login;