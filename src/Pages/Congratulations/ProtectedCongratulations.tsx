import React,{useRef, Component, useEffect, useState} from 'react';
import {Input, Menu, MenuButton, MenuItem, MenuList, Button, Box, Flex, Select, Textarea, Text, FormControl, FormLabel, FormHelperText, Heading, Radio, RadioGroup, Stack} from '@chakra-ui/react';
import { useForm, UseFormRegisterReturn } from 'react-hook-form'
import { useNavigate , Navigate, Outlet} from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

function ProtectedCongratulations() {
    //Check user, if it's submitted navigate to Congratulations
    const db = getDatabase()
    const uid = sessionStorage.getItem("uid");
    const submitted = get(ref(db, "/SubmittedApps/" + uid)).then((submittedApp) => {
        
        if (submittedApp.val() == null) {
            console.log(submittedApp.val())
            console.log(submittedApp.key)
            return false
        }
        return true
    })
    if (uid === "hi") { //need to fix
        return <Navigate to="/" />
    }
    return <Outlet />;
    
    
}
export default ProtectedCongratulations;