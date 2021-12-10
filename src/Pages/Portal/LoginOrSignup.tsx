import React, { useState } from 'react';
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { Box} from '@chakra-ui/react';
// import ApplicationPage from '../Application/ApplicationPage';

// 2. Call `extendTheme` and pass your custom values

function LoginOrSignup() {
  const [isLogin, updateIsLogin] = useState(true)

  // const transitions = useTransition(isLogin, {
  //   from: { position: 'absolute', opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   reverse: isLogin,
  //   delay: 200,
  //   config: config.molasses,
  //   onRest: () => set(!toggle),
  // })


    return (
      <Box>
        {isLogin? <Login updateIsLogin={updateIsLogin}/> : <Signup updateIsLogin={updateIsLogin}/>}
        {/* {transitions.map(({ item, key, props }) =>
        item ? (
          <Login updateIsLogin={updateIsLogin}/>
        ) : (
          <Signup updateIsLogin={updateIsLogin}/>
        )
    )} */}

        {/* <ApplicationPage/> */}
      </Box>
    )
  }

  export default LoginOrSignup;


          // <Center>
        //     <Box borderRadius='lg' borderWidth='1px' outline='black' bg='white' color="black" w='100%' p={4}>
        //         <Center>
        //             <Text fontSize='2xl' fontWeight="600">{isLogin? "Welcome Back!" : "Welcome!"} </Text>
        //         </Center>
        //         <Flex>
        //             <Tabs variant='enclosed-colored' align='center' mt={5}>
        //                 <TabList>
        //                     <Tab
        //                     _selected={{ color: 'white', bg: '#211E61' }}
        //                     _focus={{ boxShadow: 'none' }}
        //                     onClick={(e) => {updateIsLogin(true)}}
        //                     height='55px' width='50%'>
        //                         Login
        //                     </Tab>
        //                     <Tab
        //                     _selected={{ color: 'white', bg: '#211E61' }}
        //                     _focus={{ boxShadow: 'none' }}
        //                     onClick={(e) => {updateIsLogin(false)}}
        //                     height='55px' width='50%'>
        //                         Signup
        //                     </Tab>
        //                 </TabList>

        //                 <TabPanels>
        //                     <TabPanel padding={0}>
        //                         <Login/>
        //                     </TabPanel>
        //                     <TabPanel padding={0}>
        //                         <Signup/>
        //                     </TabPanel>
        //                 </TabPanels>
        //             </Tabs>
        //         </Flex>
        //     </Box>
        // </Center>
        // <Login/>
    //     <Router>
    //         <Switch>
    //             <Route path="/src/Pages/Login/Login">
    //                 <Login />
    //             </Route>
    //             <Route path="/src/Pages/Signup/Signup">
    //                 <Signup />
    //             </Route>
    //         </Switch>
    //   </Router>
