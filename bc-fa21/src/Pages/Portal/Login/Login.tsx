import React from 'react';
import {Button, Input, Box, Flex, Text, Center} from '@chakra-ui/react'
function Login() {
    return (
    <Flex height='100vh' >
        <Box flex='2.5' bg='#F8F8F8'>
            <Flex direction="column" alignItems="center" justifyContent="center">
                <Text color='black' fontSize='35px' fontFamily="P052" fontStyle="normal" fontWeight="bold">Welcome Back!</Text>
                <Input placeholder='email@berkeley.edu' borderColor="darkgrey" width="70%" height="60px" mt={5} />
                <Input placeholder='password' borderColor="darkgrey" width="70%" height="60px" mt={5}/>
                <Button variant="outline" boxShadow='base' bgColor='#211E61' color="white" _hover={{ 
                    color: '#000000',
                    bg: '#F8F8F8',
                    borderColor: '#211E61'
                }}
                    mt={5} height="60px" width="30%">
                    Log In
                </Button>
            </Flex>
        </Box>
        <Box flex='1' bg='#211E61'>
            <Flex direction="column" alignItems="center" justifyContent="center">
                <Text color='white' fontSize='35px' fontFamily="P052" fontStyle="normal" fontWeight="bold">
                    New? Create Account
                </Text>
            </Flex>
        </Box>
    </Flex>
    )
}

export default Login;