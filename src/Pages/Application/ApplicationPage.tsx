import React,{useRef, Component, useEffect, useState} from 'react';
import {Input, Center, Menu, MenuButton, MenuItem, MenuList, Button, Box, Flex, Select, Textarea, Text, FormControl, FormLabel, FormHelperText, Heading, Radio, RadioGroup, HStack, Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useForm, UseFormRegisterReturn } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database"


function ApplicationPage() {
    const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm();
    const [choice, setChoice] = useState('1');
    const [finished, isFinished] = useState(false)
    const [submitError, setSubmitError] = useState(false)
    const [saveError, setSaveError] = useState(false)
    const [saveSuccess, setSaveSuccess] = useState(false)
    const navigate = useNavigate();
    const db = getDatabase();
    
    const email = sessionStorage.getItem("Email")  
    const uid = sessionStorage.getItem("uid")

    const savedData = get(ref(db, "/SavedApps/" + uid)).then((data) => {
        console.log(data)
        setValue('Name', 'test')
    }
    )
    

    // const isInitialMount = useRef(true);
    const onSubmit = (data: any) => {       
        console.log(data);
        set(ref(db, "/SubmittedApps/" + uid), data).then(() => {
            setSubmitError(false);
            navigate("/congratulations");
        }).catch((error) => {
            console.log(error);
            setSubmitError(true);
        })  
    };

    const onSave = (data: any) => {
        console.log(data);
        set(ref(db, "/SavedApps/" + uid), data).then(() => {
            setSaveError(false);
            setSaveSuccess(true);
        }).catch((error) => {
            console.log(error);
            setSaveError(true);
            setSaveSuccess(false);
        })
    }

    
    // useEffect(() => {
    //     if (isInitialMount.current) {
    //         isInitialMount.current = false;
    //       } else {
    //         const token = sessionStorage.getItem("Auth Token");
    //         console.log(token)
    //         if (token == null || token == '') {
    //             navigate('/');
    //         } else {
    //             navigate('/application');
    //         }
    //       }
    // })
    
    const logOut = async () => {
        const auth = getAuth();
        await signOut(auth).then(() => {
            navigate('/')
            sessionStorage.removeItem("Auth Token");
            sessionStorage.removeItem('Email');
            sessionStorage.removeItem('uid');
        }).catch((error) => {
            console.log('error');
        });
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
            <Heading>Berkeley Consulting Spring 2022 Application</Heading>          
            <form onSubmit={handleSubmit(onSubmit)}>
            <Flex justifyContent='center'>
                <Box width='70%'>
                    <Heading size="lg" mt="1%">Section 1: Basic Information</Heading>
                    <FormControl isRequired>
                        <FormLabel mt='1%' htmlFor='name' fontFamily="P052">First and Last Name</FormLabel>
                        <Input placeholder="John Doe" {...register('Name')}></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel mt='1%' htmlFor='grad-year' fontFamily="P052">Intended Graduation Year</FormLabel>
                        <Select placeholder='Class of ...' {...register('Grad Year')}>
                            <option value='Class of 2023'>2023</option>
                            <option value='Class of 2024'>2024</option>
                            <option value='Class of 2025'>2025</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel mt='1%' htmlFor='class-level' fontFamily="P052">Class Level</FormLabel>
                        <Select variant='outline' placeholder='Class level' {...register('Class Level')}>
                            <option value='Freshman'>Freshman</option>
                            <option value='Sophomore'>Sophomore</option>
                            <option value='Junior'>Junior</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel mt='1%' htmlFor='major' fontFamily="P052">What is your major?</FormLabel>
                        <Input placeholder="Major" {...register('Major')}></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel mt='1%' htmlFor='gpa' fontFamily="P052">What is your GPA?</FormLabel>
                        <Input placeholder="GPA" {...register('GPA')}></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel mt='1%' htmlFor='gender' fontFamily="P052">What is your gender?</FormLabel>
                        <Input placeholder="Gender" {...register('Gender')}></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel mt='1%' htmlFor='phone' fontFamily="P052">What is your phone number?</FormLabel>
                        <Input placeholder="(XXX) XXX-XXXX" {...register('Phone Number')}></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel mt='1%' htmlFor='email' fontFamily="P052">What is your preferred email address?</FormLabel>
                        <Input placeholder="johndoe@berkeley.edu" {...register('Preferred Email')}></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel mt='1%' htmlFor='BC' fontFamily="P052">How did you hear about Berkeley Consulting?</FormLabel>
                        <Input placeholder="Enter your response" {...register('How did you hear')}></Input>    
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel mt='1%' htmlFor='reapplying' fontFamily="P052">Are you reapplying?</FormLabel>
                        <Select placeholder='Select a response' {...register('Reapplying')}>
                            <option value='option1'>Yes</option>
                            <option value='option1'>No</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel mt='1%' htmlFor='tuesday' fontFamily="P052">Are you free on Tuesday Nights?</FormLabel>
                        <Select placeholder='Select a response' {...register('Free Tuesday')}>
                            <option value='option1'>Yes</option>
                            <option value='option1'>No</option>
                        </Select>
                    </FormControl>
                    
                    <Heading size='lg' mt="2%">Section 2: Personal Documents</Heading>
                    <Text
                        color="#211E61"
                        fontSize="xl"
                        fontFamily="P052"
                        fontStyle="normal"
                        fontWeight="bold"
                        mt='1%'
                    >
                        This section is used to roughly gauge your academic/professional interests.
                    </Text>

                    <FormControl isRequired>
                        <FormLabel 
                            htmlFor='resume'
                            fontFamily="P052"
                            fontStyle="normal"
                            mt='0.8%'
                        >
                            Resume Upload
                        </FormLabel>
                        <Input accept='.jpg' type='file' {...register('Resume')}/>
                        <FormHelperText>Putting together a resume can be daunting, so we've put together some tips and a template for you on our FAQ page.</FormHelperText>
                    </FormControl>
                    
                    <FormControl isRequired>
                        <FormLabel 
                            htmlFor='transcript'
                            fontFamily="P052"
                            fontStyle="normal"
                            mt='1.5%'
                        >
                            Academic Transcipt Upload
                        </FormLabel>
                        <Input type='file' {...register('Transcript')}/>
                        <FormHelperText>An unofficial copy from CalCentral will work perfectly fine here.</FormHelperText>
                    </FormControl>
                    
                    <FormControl isRequired> 
                        <FormLabel htmlFor='photo' fontFamily="P052" fontStyle="normal" mt='1.5%'> Photo of yourself </FormLabel>
                        <Input type='file' {...register('Photo')}/>
                        <FormHelperText>This is not used to evaluate your application and is only seen after interviews.</FormHelperText>
                    </FormControl>
                    
                    <Heading size="lg" mt="2%">Section 3: Personal Essays</Heading>
                    <Text
                        color="#211E61"
                        fontSize="xl"
                        fontFamily="P052"
                        fontStyle="normal"
                        fontWeight="bold"
                        mt = '1%'
                    >
                        The final section of our application involves two 250-word essays. If reapplying you may choose to reuse your response to prompt 1, but please submit a new response to prompt 2.
                    </Text>
                    
                    {/* <FormControl >
                        <RadioGroup value={choice} onChange={setChoice}>
                            <Stack direction='row' spacing={5}>
                                <Radio value='1'>Choice 1</Radio>
                                <Radio value='2'>Choice 2</Radio>
                            </Stack>
                        </RadioGroup>
                    </FormControl> */}
                    
                    <FormControl isRequired>
                        <FormLabel htmlFor="choice-1"
                            mt = '1.5%'
                            fontFamily="P052"
                            fontStyle="normal"
                            fontWeight="bold"> Prompt 1: We allow you to choose between 2 prompts for this essay.</FormLabel>
                        <Box ml='5%'>
                        <Text
                        fontFamily="P052"
                        fontStyle="normal"
                        fontWeight="bold"
                        > 
                            Choice 1: What is an activity or interest you have pursued deeply? Describe your experience in doing so. This can relate to an organization you've been a part of, an individual achievement, or any topic you are passionate about.
                        </Text>
                        <Text
                            fontFamily="P052"
                            fontStyle="normal"
                            fontWeight="bold"
                        > 
                            Choice 2: What is a significant challenge you had to overcome? How have you grown from that experience?
                        </Text>
                        </Box>
                        <Textarea mt='1%' placeholder='Prompt 1 Response (max. 250 words). NOTE: Please indicate your prompt choice at the top of your response.' {...register('Prompt 1')}/>
                    </FormControl>
                    
                    {/* <Text
                        color="#211E61"
                        fontSize="xl"
                        fontFamily="P052"
                        fontStyle="normal"
                        fontWeight="bold"
                    > 
                        Prompt 2: Pick a company or NGO and discuss an opportunity it has or a problem it faces. Next, suggest a feasible strategic move (or strategic moves) you would make if you were its CEO. Explain your reasoning and describe your idea's intended impact.
                    </Text> */}
                    <FormControl isRequired>
                        <FormLabel mt='1.5%' htmlFor="choice-2" fontFamily="P052"> Prompt 2: Pick a company or NGO and discuss an opportunity it has or a problem it faces. Next, suggest a feasible strategic move (or strategic moves) you would make if you were its CEO. Explain your reasoning and describe your idea's intended impact. </FormLabel>
                        <Textarea placeholder='Prompt 2 Response (max. 250 words)' {...register('Prompt 2')}/>
                    </FormControl>  
                    
                    <Button mt="1%" mb="1%" onClick={() => onSave(getValues())}>Save</Button>
                    <Button type="submit" mt="1%" ml='1%' mb="1%" >Submit</Button>
                    
                </Box>
            </Flex>
                {/* <HStack spacing='24px'>
                    <Button mt="1%" onClick={() => onSave(getValues())}>Save</Button>
                    <Button type="submit" mt="1%">Submit</Button>
                </HStack> */}
                {saveError ? <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle mr={2}>Error while saving</AlertTitle>
                    <AlertDescription>Please try again. If the error persists, contact us.</AlertDescription>
                </Alert> : null}
                {submitError ? <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle mr={2}>Error while submitting</AlertTitle>
                    <AlertDescription>Please try again. If the error persists, contact us.</AlertDescription>
                </Alert> : null }
                {saveSuccess ? <Alert status='success'>
                    <AlertIcon />
                    <AlertTitle mr={2}>Application was successfully saved!</AlertTitle>
                    <AlertDescription>Make sure you submit your application when completed.</AlertDescription>
                </Alert> : null }
            </form>
        </Flex>

    )
}

export default ApplicationPage;