import React,{useRef, Component, useEffect, useState} from 'react';
import {Input, Menu, MenuButton, MenuItem, MenuList, Button, Box, Flex, Select, Textarea, Text, FormControl, FormLabel, FormHelperText, Heading, Radio, RadioGroup, Stack} from '@chakra-ui/react';
import { useForm, UseFormRegisterReturn } from 'react-hook-form'
import { useNavigate , Navigate, Outlet} from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

const ProtectedCongrats = () => {
	const [submitted, setSubmitted] = useState(false);
  
	const checkIfSubmitted = async (): Promise<boolean> => {
		const db = getDatabase();
    const uid = sessionStorage.getItem('uid');
    const application = await get(ref(db, "/SubmittedApps/" + uid));
    const submitted = application.val().isSubmitted;
    return submitted;
  }

  useEffect(() => {
		checkIfSubmitted().then(res => res && setSubmitted(true))
  }, []);
  
  return <>
    {submitted ? 
      <Navigate to="/congratulations" /> : <Outlet />}
    </>

};

// const PrivateRoute = () => {
//     const location = useLocation();
//     const { authLogin } = useContext(globalC);
//     console.log("authLogin", authLogin);
  
//     return authLogin ? (
//       <Route />
//     ) : (
//       <Redirect
//         to={{
//           pathname: "/login",
//           state: { from: location }
//         }}
//       />
//     );
//   };
export default ProtectedCongrats;