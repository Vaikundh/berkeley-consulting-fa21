import {Input, Image, Menu, MenuButton, MenuItem, MenuList, Button, Box, Flex, Select, Textarea, Text, FormControl, FormLabel, FormHelperText, Heading, Radio, RadioGroup, Stack, Alert, AlertDescription, AlertIcon, AlertTitle} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, set, get, DataSnapshot } from "firebase/database"
import { ChevronDownIcon } from '@chakra-ui/icons'


function AdminPortal () {
    //BEFORE MERGING TO MAIN, MAKE SURE TO CHANGE DB INFO
    const navigate = useNavigate();
    const email = sessionStorage.getItem("Email")  

    const logOut = async () => {
        const auth = getAuth();
        await signOut(auth).then(() => {
            navigate('/')
            sessionStorage.removeItem("Auth Token");
            sessionStorage.removeItem('Email');
            sessionStorage.removeItem('uid');
        })
    }
    
    return (
        <Flex direction='column' alignItems='center' >
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
            <Text fontSize='50px' textStyle='heading'>Berkeley Consulting Admin Portal</Text>
        </Flex>
    )
}
export default AdminPortal;