import React,{useRef, Component, useEffect, useState} from 'react';
import {Heading, Menu, MenuButton, MenuItem, MenuList, Button, Box, Flex, Text} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { ChevronDownIcon } from '@chakra-ui/icons'
import Confetti from 'react-confetti';

function Congratulations() {
    const email = sessionStorage.getItem("Email")
    const navigate = useNavigate();
    const logOut = async () => {
        const auth = getAuth();
        await signOut(auth).then(() => {
            navigate('/')
            sessionStorage.removeItem("Auth Token");
            sessionStorage.removeItem('Email');
            sessionStorage.removeItem('uid');
        }).catch((error) => {
            console.log('error');
        });
    }

    return (
        <Flex direction='column' alignItems='center'>
            <Box top="50px" width='95%'>
                <Flex direction="row" justifyContent='end'>
                    <Menu>
                        <MenuButton mt="1%" color="white" bgColor="#211E61" as={Button} rightIcon={<ChevronDownIcon />}>
                            Account
                        </MenuButton>
                        <MenuList>
                            <MenuItem>{email}</MenuItem>
                            <MenuItem onClick={logOut}>Log Out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Box> 
            <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            />
            <Heading mt='10%' size='lg'>
                Congratulations! You have submitted your application!
            </Heading>
        </Flex>
    )
}
export default Congratulations;