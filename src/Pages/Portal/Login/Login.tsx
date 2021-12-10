import React, { SetStateAction, useState } from 'react'
import {
    Button,
    Input,
    InputGroup,
    Box,
    Flex,
    Text,
    Center,
    FormControl,
    Spacer,
    HStack,
    InputLeftElement,
} from '@chakra-ui/react'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { FcGoogle } from 'react-icons/fc'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link as RouteLink,
} from 'react-router-dom'
import '../../../Backend/index'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDisclosure } from '@chakra-ui/react'
import signIn from '../../../Backend/Routes/signIn'

interface LoginProps {
    updateIsLogin: React.Dispatch<SetStateAction<boolean>>
}

type Inputs = {
    email: string
    password: string
}

function Login(props: LoginProps) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const success = await signIn(data.email, data.password)
        if (success) {
            console.log('yay') // go to application page
        } else {
            console.log("Couldn\'t log in")
        }
    }

    return (
        <Flex height="100vh">
            <Flex flex='2.5' bg='#F8F8F8' alignItems='start' justifyContent="center" pt="5%">
                <Flex direction="column" width="60%" alignItems="center" justifyContent="start">
                    <Text
                        color="#211E61"
                        fontSize="5xl"
                        fontFamily="P052"
                        fontStyle="normal"
                        fontWeight="bold"
                        mb="12%"
                        mt='7%'
                    >
                        Welcome Back!
                    </Text>
                    <HStack spacing="30px" mb={30}>
                        <Button
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
                        <Button
                            borderRadius="100px"
                            variant="outline"
                            fontSize="40px"
                            boxShadow="base"
                            colorScheme="facebook"
                            borderColor="darkgrey"
                            _hover={{
                                bg: '#F8F8F8',
                                borderColor: '#000000',
                            }}
                            mt={5}
                            height="80px"
                            width="80px"
                        >
                            <FaFacebook />
                        </Button>
                        <Button
                            borderRadius="100px"
                            variant="outline"
                            fontSize="40px"
                            boxShadow="base"
                            color="black"
                            borderColor="darkgrey"
                            _hover={{
                                bg: '#F8F8F8',
                                borderColor: '#000000',
                            }}
                            mt={5}
                            height="80px"
                            width="80px"
                        >
                            <FaGithub />
                        </Button>
                    </HStack>
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