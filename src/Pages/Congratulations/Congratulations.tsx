import React from 'react';
import {Heading, Menu, MenuButton, MenuItem, MenuList, Button, Box, Flex} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { ChevronDownIcon } from '@chakra-ui/icons'
import Confetti from 'react-confetti'

function Congratulations(): JSX.Element {
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
            console.log(error);
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
            <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={750} recycle={false}/>
            <Heading mt='18%' size='lg'>
                We thank you for taking the time to apply to Berkeley Consulting.
            </Heading>
        </Flex>
    )
}
export default Congratulations;
