import React,{Component} from 'react';
import {Input, Switch, Box, Flex, Select, Textarea, Text, FormControl} from '@chakra-ui/react';
import { useForm, UseFormRegisterReturn } from 'react-hook-form'

function ApplicationPage() {

    return (
        <Flex direction='column' alignItems='center' justifyContent='center'>
            <form>
                <Text>Section 1: Personal Essays</Text>
                <Text>The final section of our application involves two 250-word essays. If reapplying you may choose to reuse your response to prompt 1, but please submit a new response to prompt 2.</Text>
                <Text> Prompt 1: We allow you to choose between 2 prompts for this essay.</Text>
                <Text> NOTE: Please indicate your prompt choice at the top of your response</Text>
                <Text> Choice 1: What is an activity or interest you have pursued deeply? Describe your experience in doing so. This can relate to an organization you've been a part of, an individual achievement, or any topic you are passionate about.</Text>
                <Text> Choice 2: What is a significant challenge you had to overcome? How have you grown from that experience?</Text>

                <Text>Section 2: Personal Documents</Text>
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
                
                <Text>Section 3: Basic Information</Text>
                <Text>First and Last Name</Text>
                <Input placeholder="John Doe"></Input>
                <Text>Intended Graduation Year</Text>
                <Select placeholder='Class of ____'>
                    <option value='junior'>2023</option>
                    <option value='sophomore'>2024</option>
                    <option value='freshman'>2025</option>
                </Select>
                <Text>Class Level</Text>
                <Select variant='outline' placeholder='Class' >
                    <option value='option1'>Freshman</option>
                    <option value='option2'>Sophomore</option>
                    <option value='option3'>Junior</option>
                </Select>
                <Text>What is your major?</Text>
                <Input placeholder="Major"></Input>
                <Text>What is your GPA?</Text>
                <Input placeholder="GPA"></Input>
                <Text>What is your gender?</Text>
                <Input placeholder="Gender"></Input>
                <Text>How did you hear about Berkeley Consulting?</Text>
                <Select placeholder='How did you hear about BC?'>
                    <Input placeholder="How did you hear about BC?"></Input>
                </Select>
                <Text>Are you reapplying?</Text>
                <Select placeholder='Reapplying?'>
                    <option value='option1'>Yes</option>
                    <option value='option1'>No</option>
                </Select>
                <Text>Are you free on Tuesday Nights?</Text>
                <Select placeholder='Are you free on Tuesday Nights?'>
                    <option value='option1'>Yes</option>
                    <option value='option1'>No</option>
                </Select>
            </form>
        </Flex>

    )
}

export default ApplicationPage;