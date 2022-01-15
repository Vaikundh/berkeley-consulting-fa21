import React,{useRef, Component, useEffect, useState} from 'react';
import {Input, Button, Box, Flex, Select, Textarea, Text, FormControl, Heading, Radio, RadioGroup, Stack} from '@chakra-ui/react';
import { useForm, UseFormRegisterReturn } from 'react-hook-form'
import { useNavigate, Route, Navigate, Outlet} from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

function ProtectedApplication() {
    const token = sessionStorage.getItem("Auth Token");
    if (token == null || token == '') {
        return <Navigate to="/" />;
    }
    return <Outlet />
}

export default ProtectedApplication;