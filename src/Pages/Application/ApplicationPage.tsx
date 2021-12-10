import React,{Component} from 'react';
import {Input, Switch, Box, Flex, Select, Textarea} from '@chakra-ui/react';
import { useForm, UseFormRegisterReturn } from 'react-hook-form'

function ApplicationPage() {

    return (
        <Flex direction='column' alignItems='center' justifyContent='center'>
            <Input placeholder='email@berkeley.edu' borderColor="darkgrey" width="70%" height="60px" mt={5} />
            <Textarea placeholder='Here is a larger box.' />
            <Switch colorScheme='blue' />
            <Select variant='outline' placeholder='Year' >
                <option value='option1'>Freshman</option>
                <option value='option2'>Sophomore</option>
                <option value='option3'>Junior</option>
                <option value='option3'>Senior</option>
            </Select>
            <Input type='file'/>
        </Flex>

    )
}

export default ApplicationPage;