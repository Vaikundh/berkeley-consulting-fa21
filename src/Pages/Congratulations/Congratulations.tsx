import React,{useRef, Component, useEffect, useState} from 'react';
import {Input, Menu, MenuButton, MenuItem, MenuList, Button, Box, Flex, Select, Textarea, Text, FormControl, FormLabel, FormHelperText, Heading, Radio, RadioGroup, Stack} from '@chakra-ui/react';
import { useForm, UseFormRegisterReturn } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database"
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti';

function Congratulations() {
    return (
        
        <Flex justifyContent='center' alignItems='center'>
            <Confetti
            width={window.innerWidth}
            height={window.innerWidth}
            />
            <Text>
                Congratulations!
            </Text>
        </Flex>
    )
}
export default Congratulations;