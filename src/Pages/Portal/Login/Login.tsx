import React, { useState, SetStateAction } from 'react'
import {
    Button,
    Input,
    InputGroup,
    Box,
    Flex,
    Text,
    FormControl,
    HStack,
    InputLeftElement,
} from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { FcGoogle } from 'react-icons/fc'
import { useForm, SubmitHandler } from 'react-hook-form'
import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'
import firebase_app from '../../../firebase'
import { useNavigate } from "react-router-dom";

interface LoginProps {
    updateIsLogin: React.Dispatch<SetStateAction<boolean>>
}

type Inputs = {
    email: string
    password: string
}

function Login(props: LoginProps) {
    const [LogInError, updateError] = useState('')
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const auth = getAuth(firebase_app)
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
            .then((userCredential: any) => {
                const user = userCredential.user
                const token = userCredential._tokenResponse.refreshToken
                sessionStorage.setItem('Auth Token', token)
                sessionStorage.setItem('Email', user.email);
                sessionStorage.setItem('uid', user.uid);
                navigate("/application");
                return user
            })
            .catch((error) => {
                const errorCode = error.code
                updateError(errorCode)
            })
    }

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const auth = getAuth(firebase_app)
        await signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential: any) => {
                const user = userCredential.user
                const token = userCredential._tokenResponse.refreshToken
                sessionStorage.setItem('Auth Token', token)
                sessionStorage.setItem('Email', user.email);
                sessionStorage.setItem('uid', user.uid);
                navigate("/application");
                return user
            })
            .catch((error) => {
                const errorCode= error.code
                updateError(errorCode)
            })
        
    }
    const [show, setShow] = React.useState(false)
    return (
        <Flex height="100vh">
            <Flex flex="2.5" bg="#F8F8F8" alignItems="start" justifyContent="center" pt="5%">
                <Flex direction="column" width="60%" alignItems="center" justifyContent="start">
                    <Text
                        color="#211E61"
                        fontSize="5xl"
                        fontFamily="P052"
                        fontStyle="normal"
                        fontWeight="bold"
                        mb="12%"
                        mt="7%"
                    >
                        Welcome Back!
                    </Text>
                    <HStack spacing="30px" mb={30}>
                        <Button
                            onClick={signInWithGoogle}
                            fontSize="40px"
                            borderRadius="100px"
                            variant="outline"
                            boxShadow="base"
                            color="white"
                            borderColor="darkgrey"
                            _hover={{
                                color: '#000000',
                                bg: '#F8F8F8',
                                borderColor: '#000000',
                            }}
                            mt={5}
                            height="80px"
                            width="80px"
                            margin={0}
                        >
                            <FcGoogle />
                        </Button>
                    </HStack>
                    <Text color="red">{LogInError}</Text>
                    <FormControl>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Flex direction="column" justifyContent="center" alignItems="center">
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<EmailIcon color="gray.300" />}
                                    />
                                    <Input
                                        {...register('email')}
                                        placeholder="email@berkeley.edu"
                                        borderColor="darkgrey"
                                        mb={5}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<LockIcon color="gray.300" />}
                                    />
                                    <Input
                                        {...register('password')}
                                        type={show ? 'text' : 'password'}
                                        placeholder="password"
                                        borderColor="darkgrey"
                                    />
                                </InputGroup>
                                <Button
                                    type="submit"
                                    borderRadius="100px"
                                    variant="outline"
                                    boxShadow="base"
                                    bgColor="#211E61"
                                    color="white"
                                    _hover={{
                                        color: '#000000',
                                        bg: '#F8F8F8',
                                        borderColor: '#211E61',
                                    }}
                                    mt={5}
                                    height="60px"
                                    width="35%"
                                >
                                    Log In
                                </Button>
                            </Flex>
                        </form>
                    </FormControl>
                </Flex>
            </Flex>
            <Box flex="1" bg="#211E61">
                <Flex direction="column" alignItems="center" pt="60%">
                    <Text
                        color="white"
                        fontSize={{
                            base: '18px',
                            md: '24px',
                            lg: '36px',
                            xl: '48px',
                        }}
                        fontFamily="P052"
                        fontStyle="normal"
                        fontWeight="bold"
                    >
                        New? Join BC!
                    </Text>
                    <Text
                        color="white"
                        fontSize="28px"
                        fontFamily="P052"
                        fontStyle="normal"
                        fontWeight="bold"
                    >
                        Lorem Ipsum
                    </Text>
                    <Button
                        borderRadius="100px"
                        variant="outline"
                        fontSize={{
                            base: '8px',
                            md: '12px',
                            lg: '14px',
                            xl: '16px',
                        }}
                        bgColor="#211E61"
                        color="#F8F8F8"
                        _hover={{
                            color: '#211E61',
                            bg: '#F8F8F8',
                            borderColor: '#211E61',
                        }}
                        mt="10%"
                        height="60px"
                        width="40%"
                        onClick={() => props.updateIsLogin(false)}
                    >
                        Create Account
                    </Button>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Login
