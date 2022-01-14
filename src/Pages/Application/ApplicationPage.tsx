import React,{useRef, Component, useEffect, useState} from 'react';
import {Input, Button, Box, Flex, Select, Textarea, Text, FormControl, Heading, Radio, RadioGroup, Stack} from '@chakra-ui/react';
import { useForm, UseFormRegisterReturn } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";


function ApplicationPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [choice, setChoice] = useState('1');
    const navigate = useNavigate();

    const isInitialMount = useRef(true);
    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
          } else {
            const token = sessionStorage.getItem("Auth Token");
            console.log(token)
            if (token == null || token == '') {
                navigate('/');
            } else {
                navigate('/application');
            }
          }
    })
    
    const logOut = async () => {
        const auth = getAuth();
        await signOut(auth).then(() => {
            navigate('/')
            sessionStorage.removeItem("Auth Token");
            sessionStorage.removeItem('Email');
        }).catch((error) => {
            console.log('error');
        });
    }

    const onSubmit = (data: any) => {
        console.log(data);
        isInitialMount.current = true;
    };

    return (
        <Flex direction='column' alignItems='center' >
            <Box bg="#211E61" width='100%' height='40px'> Nav</Box>            
            <form onSubmit={handleSubmit(onSubmit)}>

                <Heading>Section 1: Basic Information</Heading>
                <Text>First and Last Name</Text>
                <FormControl>
                    <Input placeholder="John Doe" {...register('Name')}></Input>
                </FormControl>
                <Text>Intended Graduation Year</Text>
                <FormControl>
                    <Select placeholder='Class of ...' {...register('Grad Year')}>
                        <option value='Class of 2023'>2023</option>
                        <option value='Class of 2024'>2024</option>
                        <option value='Class of 2025'>2025</option>
                    </Select>
                </FormControl>
                <Text>Class Level</Text>
                <FormControl>
                    <Select variant='outline' placeholder='Class level' {...register('Class Level')}>
                        <option value='Freshman'>Freshman</option>
                        <option value='Sophomore'>Sophomore</option>
                        <option value='Junior'>Junior</option>
                    </Select>
                </FormControl>
                
                <Text>What is your major?</Text>
                <FormControl>
                    <Input isRequired placeholder="Major"></Input>
                </FormControl>
                
                <Text>What is your GPA?</Text>
                <FormControl>
                    <Input placeholder="GPA"></Input>
                </FormControl>
                
                <Text>What is your gender?</Text>
                <FormControl>
                    <Input placeholder="Gender"></Input>
                </FormControl>
                
                <Text>What is your phone number?</Text>
                <FormControl>
                    <Input placeholder="(XXX) XXX-XXXX"></Input>
                </FormControl>
                
                <Text>What is your preferred email address?</Text>
                <FormControl>
                    <Input placeholder="johndoe@berkeley.edu"></Input>
                </FormControl>

                <Text>How did you hear about Berkeley Consulting?</Text>
                <FormControl>
                    <Input placeholder="Enter your response"></Input>    
                </FormControl>
                
                <Text>Are you reapplying?</Text>
                <FormControl>
                    <Select placeholder='Select a response'>
                        <option value='option1'>Yes</option>
                        <option value='option1'>No</option>
                    </Select>
                </FormControl>
               
                <Text>Are you free on Tuesday Nights?</Text>
                <FormControl>
                    <Select placeholder='Select a response'>
                        <option value='option1'>Yes</option>
                        <option value='option1'>No</option>
                    </Select>
                </FormControl>
                
                <Heading>Section 2: Personal Documents</Heading>
                <Text>This section is used to roughly gauge your academic/professional interests.</Text>
                <Text>Resume Upload</Text>
                <Text>Putting together a resume can be daunting, so we've put together some tips and a template for you on our FAQ page.</Text>
                <Input type='file'/>
                <Text>Academic Transcipt Upload</Text>
                <Text>An unofficial copy from CalCentral will work perfectly fine here.</Text>
                <Input type='file'/>
                <Text>Photo of yourself</Text>
                <Text>This is not used to evaluate your application and is only seen after interviews.</Text>
                <Input type='file'/>

                <Heading>Section 3: Personal Essays</Heading>
                <Text
                    color="#211E61"
                    fontSize="2xl"
                    fontFamily="P052"
                    fontStyle="normal"
                    fontWeight="bold"
                >
                    The final section of our application involves two 250-word essays. If reapplying you may choose to reuse your response to prompt 1, but please submit a new response to prompt 2.
                </Text>
                <Text
                    color="#211E61"
                    fontSize="xl"
                    fontFamily="P052"
                    fontStyle="normal"
                    fontWeight="bold"
                > 
                    Prompt 1: We allow you to choose between 2 prompts for this essay.
                </Text>
                <Text
                    color="#211E61"
                    fontSize="md"
                    fontFamily="P052"
                    fontStyle="normal"
                    fontWeight="bold"
                > 
                    NOTE: Please indicate your prompt choice at the top of your response
                </Text>
                <Text
                    color="#211E61"
                    fontSize="lg"
                    fontFamily="P052"
                    fontStyle="normal"
                    fontWeight="bold"
                > 
                    Choice 1: What is an activity or interest you have pursued deeply? Describe your experience in doing so. This can relate to an organization you've been a part of, an individual achievement, or any topic you are passionate about.
                </Text>
                <Text
                    color="#211E61"
                    fontSize="lg"
                    fontFamily="P052"
                    fontStyle="normal"
                    fontWeight="bold"
                > 
                    Choice 2: What is a significant challenge you had to overcome? How have you grown from that experience?
                </Text>
                {/* <FormControl >
                    <RadioGroup value={choice} onChange={setChoice}>
                        <Stack direction='row' spacing={5}>
                            <Radio value='1'>Choice 1</Radio>
                            <Radio value='2'>Choice 2</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl> */}
                
                <FormControl>
                    <Textarea placeholder='Prompt 1 Response (max. 250 words)'/>
                </FormControl>
                
                <Text
                    color="#211E61"
                    fontSize="xl"
                    fontFamily="P052"
                    fontStyle="normal"
                    fontWeight="bold"
                > 
                    Prompt 2: Pick a company or NGO and discuss an opportunity it has or a problem it faces. Next, suggest a feasible strategic move (or strategic moves) you would make if you were its CEO. Explain your reasoning and describe your idea's intended impact.
                </Text>
                <FormControl>
                    <Textarea placeholder='Prompt 2 Response (max. 250 words)'/>
                </FormControl>
                <Button type="submit">Submit</Button>
            </form>
        </Flex>

    )
}

export default ApplicationPage;