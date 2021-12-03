import React from 'react';
import {Button, Input, Center} from '@chakra-ui/react'
function Signup() {
    return (
        <div className='container'>
            <Input placeholder='email@berkeley.edu' size='md' />
            <Input placeholder='Password' size='md' />
            <Input placeholder='Confirm Password' size='md' />
            <Button colorScheme='blue'>
                Sign Up
            </Button>
            
        </div>
    );
  }
  
  export default Signup;