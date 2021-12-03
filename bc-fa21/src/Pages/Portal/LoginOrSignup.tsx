import React, { useState } from 'react';
import {Tabs, TabList, Tab, TabPanels, TabPanel, Box, Flex, Spacer, Text, Center} from '@chakra-ui/react'
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

// 2. Call `extendTheme` and pass your custom values

function LoginOrSignup() {
    const [isLogin, updateIsLogin] = useState(true)
    return (
        <div>
            <Box borderRadius='lg' borderWidth='1px' outline='black' bg='white' color="black" w='100%' p={4}>
            <Center>    
            <Text fontSize='2xl' fontWeight="600">{isLogin? "Welcome Back!" : "Welcome!"} </Text>    
            </Center>
            <Flex>
                <Tabs variant='enclosed-colored' align='center' mt={5}>
                    <TabList>
                        <Tab 
                        _selected={{ color: 'white', bg: '#211E61' }} 
                        _focus={{ boxShadow: 'none' }} 
                        onClick={(e) => {updateIsLogin(true)}} 
                        height='55px' width='50%'>
                            Login
                        </Tab>
                        <Tab 
                        _selected={{ color: 'white', bg: '#211E61' }} 
                        _focus={{ boxShadow: 'none' }} 
                        onClick={(e) => {updateIsLogin(false)}} 
                        height='55px' width='550%'>
                            Signup
                        </Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel padding={0}>
                            <Login/>
                        </TabPanel>
                        <TabPanel padding={0}>
                            <Signup/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>    
            </Box>
        </div>

    );
  }
  
  export default LoginOrSignup;