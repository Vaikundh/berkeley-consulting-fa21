import React from 'react';
import {Box, Button, Input} from '@chakra-ui/react'
function Signup() {
    return (
        <Box className='container'>
            {/* <Input placeholder='email@berkeley.edu' size='md' />
            <Input placeholder='Password' size='md' />
            <Input placeholder='Confirm Password' size='md' />
            <Button variant="outline" boxShadow='base' colorScheme='blue' mt={5} width="100%">
                Sign Up
            </Button> */}
            
            <Input placeholder='email@berkeley.edu' size='md' px={1}/>
            <Input placeholder='password' size='md' mt={5} px={1}/>
            <Input placeholder='confirm password' size='md' mt={5} px={1}/>
            <Button variant="outline" boxShadow='base' colorScheme='blue' mt={5} px={1} width="100%">
                Sign Up
            </Button>
        </Box>
        
    );
  }
  
  export default Signup;