import React, { useState, SetStateAction } from 'react'
import {
    Box,
    Button,
    Input,
    Flex,
    Text,
    FormControl,
    HStack,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { EmailIcon, LockIcon, CheckIcon } from '@chakra-ui/icons'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import firebase_app from '../../../firebase'

interface SignUpProps {
    updateIsLogin: React.Dispatch<SetStateAction<boolean>>
}

type Inputs = {
    email: string
    password: string
    validatepass: string
}

function Signup(props: SignUpProps) {
    const [signUpError, updateError] = useState('')
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
            const auth = getAuth(firebase_app)
            if (data.password === data.validatepass) {
                await createUserWithEmailAndPassword(auth, data.email, data.password).then(
                    (userCredential) => {
                        const user = userCredential.user
                        console.log(user)
                        return user
                    }
                ).catch((error) => {
                    const errorCode = error.code
                    console.log(error)
                    updateError(errorCode)
                })
            } else {
                updateError("Passwords do not match.")
            }
    }

    return (
        <Flex height="100vh">
            <Box flex="1" bg="#211E61">
                <Flex direction="column" alignItems="center" pt="40%">
                    <Text
                        textAlign="center"
                        color="white"
                        fontSize={{ base: '18px', md: '24px', lg: '36px', xl: '48px' }}
                        fontFamily="P052"
                        fontStyle="normal"
                        fontWeight="bold"
                        mt="10%"
                    >
                        Already have an account?
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
                        bgColor="#211E61"
                        color="#F8F8F8"
                        _hover={{
                            color: '#211E61',
                            bg: '#F8F8F8',
                            borderColor: '#211E61',
                        }}
                        mt="10%"
                        height="60px"
                        width="30%"
                        onClick={() => props.updateIsLogin(true)}
                    >
                        Log In
                    </Button>
                </Flex>
            </Box>
            <Flex flex="2.5" bg="#F8F8F8" alignItems="start" justifyContent="center" pt="5%">
                <Flex direction="column" width="60%" alignItems="center" justifyContent="start">
                    <Text
                        color="#211E61"
                        fontSize="5xl"
                        fontFamily="P052"
                        fontStyle="normal"
                        fontWeight="bold"
                        mb="10%"
                        mt="6%"
                    >
                        Welcome!
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
                    </HStack>
                    <Text color="red">{signUpError}</Text>
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
                                        mb={5}
                                    />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<LockIcon color="gray.300" />}
                                    />
                                    <Input
                                        {...register('validatepass')}
                                        placeholder="confirm password"
                                        borderColor="darkgrey"
                                        mb={5}
                                    />
                                    <InputRightElement children={<CheckIcon color="green.500" />} />
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
                                    Create Account
                                </Button>
                            </Flex>
                        </form>
                    </FormControl>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Signup
