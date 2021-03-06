import React, { useEffect, useState } from 'react'
import {
    Input,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Button,
    Box,
    Flex,
    Select,
    Textarea,
    Text,
    FormControl,
    FormLabel,
    FormHelperText,
    Heading,
    Radio,
    RadioGroup,
    Stack,
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { getDatabase, ref, set, get, DataSnapshot } from 'firebase/database'
import {
    getStorage,
    ref as storageRef,
    uploadBytes,
} from 'firebase/storage'
import wdb from '../../wdb.png'
// import { property } from 'lodash';

function ApplicationPage(): JSX.Element {
    const { register, handleSubmit, getValues, setValue } = useForm()
    const [submitting, setSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState(false)
    const [saveError, setSaveError] = useState(false)
    const [saveSuccess, setSaveSuccess] = useState(false)
    const [image, setImage] = useState<File>()
    const [resume, setResume] = useState<File>()
    const [transcript, setTranscript] = useState<File>()
    const [choice, setChoice] = useState('Choice 1')
    const navigate = useNavigate()

    const db = getDatabase()
    const storage = getStorage()

    const email = sessionStorage.getItem('Email')
    const uid = sessionStorage.getItem('uid')

    useEffect(() => {
        get(ref(db, '/SubmittedApps/' + uid)).then((data: DataSnapshot) => {
            // eslint-disable-next-line
            const jsonData: any = data.toJSON()
            if (jsonData != null) {
                for (const property in jsonData) {
                    if (jsonData[property] != '') {
                        setValue(property, jsonData[property])
                    }
                }
            }
        })
    }, [])

    // eslint-disable-next-line
    const onSubmit = (data: any) => {
        console.log(data)
        if (!image || ! transcript || ! resume) {
            setSubmitError(true)
            return;
        }
        setSubmitting(true)
        handleUpload(image, 'image').then(() => {
            handleUpload(transcript, 'transcript').then(() => {
                handleUpload(resume, 'resume').then(() => {
                    data['Time Submitted'] = new Date().getTime()
                    data['isSubmitted'] = true
                    set(ref(db, '/SubmittedApps/' + uid), data)
                        .then(() => {
                            setSubmitting(false)
                            setSubmitError(false)
                            navigate('/congratulations')
                        })
                        .catch((error) => {
                            console.log(error)
                            setSubmitError(true)
                        })
                })
            })
        })
    }

    // eslint-disable-next-line
    const onSave = (data: any) => {
        console.log(data)
        data['isSubmitted'] = false
        set(ref(db, '/SubmittedApps/' + uid), data)
            .then(() => {
                setSaveError(false)
                setSaveSuccess(true)
            })
            .catch((error) => {
                console.log(error)
                setSaveError(true)
                setSaveSuccess(false)
            })
        if (image) {
            handleUpload(image, 'image')
        }
        if (transcript) {
            handleUpload(transcript, 'transcript')
        }
        if (resume) {
            handleUpload(resume, 'resume')
        }
    }

    const logOut = async () => {
        const auth = getAuth()
        await signOut(auth).then(() => {
            navigate('/')
            sessionStorage.removeItem('Auth Token')
            sessionStorage.removeItem('Email')
            sessionStorage.removeItem('uid')
        })
    }

    // eslint-disable-next-line
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, f: (arg0: File) => any) => {
        if (e.target.files != null) {
            f(e.target.files[0])
        }
    }

    const handleUpload = (file: File, fileName: string) => {
        return uploadBytes(storageRef(storage, '' + uid + '/' + fileName), file)
    }

    return (
        <Flex direction="column" alignItems="center">
            <Box top="50px" width="95%">
                <Flex direction="row" justifyContent="end">
                    <Menu>
                        <MenuButton
                            mt="1%"
                            color="white"
                            bgColor="#211E61"
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                        >
                            Account
                        </MenuButton>
                        <MenuList>
                            <MenuItem>{email}</MenuItem>
                            <MenuItem onClick={logOut}>Log Out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Box>
            <Text fontSize="50px" textStyle="heading">
                Berkeley Consulting Spring 2022 Application
            </Text>
            <Text
                fontSize="24px"
                textStyle="heading"
                mt="1%"
                mb="2%"
                textAlign="center"
                width="70%"
            >
                This application does not have to be completed in one go. You may save your answers
                at any point by clicking the "Save" button located at the bottom of the page and
                continue editing at a later time, but the "Submit" button is final. Please email our
                Technical Director at brandon.guo@berkeley.edu if any questions or issues with the
                portal arise.
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex justifyContent="center">
                    <Box width="70%">
                        <Heading fontWeight={400} size="lg" mt="1%">
                            Section 1: Basic Information
                        </Heading>
                        <FormControl isRequired>
                            <FormLabel mt="1%" htmlFor="name">
                                First and Last Name
                            </FormLabel>
                            <Input placeholder="John Doe" {...register('Name')}></Input>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel mt="1%" htmlFor="grad-year">
                                Intended Graduation Year
                            </FormLabel>
                            <Select placeholder="Class of ..." {...register('Grad Year')}>
                                <option value="Class of 2023">2023</option>
                                <option value="Class of 2024">2024</option>
                                <option value="Class of 2025">2025</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel mt="1%" htmlFor="class-level">
                                Class Level
                            </FormLabel>
                            <Select
                                variant="outline"
                                placeholder="Class level"
                                {...register('Class Level')}
                            >
                                <option value="Freshman">Freshman</option>
                                <option value="Sophomore">Sophomore</option>
                                <option value="Junior">Junior</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel mt="1%" htmlFor="major">
                                What is your major?
                            </FormLabel>
                            <Input placeholder="Major" {...register('Major')}></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel mt="1%" htmlFor="major">
                                What is your second major? (Optional)
                            </FormLabel>
                            <Input placeholder="Second Major" {...register('Second Major')}></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel mt="1%" htmlFor="major">
                                What is your third major? (Optional)
                            </FormLabel>
                            <Input placeholder="Third Major" {...register('Third Major')}></Input>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel mt="1%" htmlFor="gpa">
                                What is your GPA?
                            </FormLabel>
                            <Input placeholder="GPA" {...register('GPA')}></Input>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel mt="1%" htmlFor="gender">
                                What is your gender?
                            </FormLabel>
                            <Input placeholder="Gender" {...register('Gender')}></Input>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel mt="1%" htmlFor="phone">
                                What is your phone number?
                            </FormLabel>
                            <Input
                                placeholder="(XXX) XXX-XXXX"
                                {...register('Phone Number')}
                            ></Input>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel mt="1%" htmlFor="email">
                                What is your preferred email address?
                            </FormLabel>
                            <Input
                                placeholder="johndoe@berkeley.edu"
                                {...register('Preferred Email')}
                            ></Input>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel mt="1%" htmlFor="BC">
                                How did you hear about Berkeley Consulting?
                            </FormLabel>
                            <Input
                                placeholder="Enter your response"
                                {...register('How did you hear')}
                            ></Input>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel mt="1%" htmlFor="reapplying">
                                Are you reapplying?
                            </FormLabel>
                            <Select placeholder="Select a response" {...register('Reapplying')}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </Select>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel mt="1%" htmlFor="tuesday">
                                Are you free on Tuesday Nights?
                            </FormLabel>
                            <Select placeholder="Select a response" {...register('Free Tuesday')}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </Select>
                        </FormControl>

                        <Heading fontWeight={400} size="lg" mt="2%">
                            Section 2: Personal Documents
                        </Heading>
                        <Text color="#211E61" fontSize="lg" fontStyle="normal" mt="1%">
                            This section is used to roughly gauge your academic/professional
                            interests.
                        </Text>

                        <FormControl isRequired>
                            <FormLabel htmlFor="resume" fontStyle="normal" mt="0.8%">
                                Resume Upload
                            </FormLabel>
                            <Input
                                type="file"
                                accept=".pdf"
                                {...register('Resume')}
                                onChange={(e) => {
                                    handleFileChange(e, setResume)
                                }}
                            />
                            <FormHelperText>
                                Putting together a resume can be daunting, so we've put together
                                some tips and a template for you on our FAQ page.
                            </FormHelperText>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor="transcript" fontStyle="normal" mt="1.5%">
                                Academic Transcipt Upload
                            </FormLabel>
                            <Input
                                type="file"
                                accept=".pdf"
                                {...register('Transcript')}
                                onChange={(e) => {
                                    handleFileChange(e, setTranscript)
                                }}
                            />
                            <FormHelperText>
                                An unofficial copy from CalCentral will work perfectly fine here.
                            </FormHelperText>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor="photo" fontStyle="normal" mt="1.5%">
                                {' '}
                                Photo of yourself{' '}
                            </FormLabel>
                            <Input
                                type="file"
                                accept="image/*"
                                {...register('Photo')}
                                onChange={(e) => {
                                    handleFileChange(e, setImage)
                                }}
                            />
                            <FormHelperText>
                                This is not used to evaluate your application and is only seen after
                                interviews.
                            </FormHelperText>
                        </FormControl>

                        <Heading fontWeight={400} size="lg" mt="2%">
                            Section 3: Personal Essays
                        </Heading>
                        <Text color="#211E61" fontSize="lg" fontStyle="normal" mt="1%">
                            The final section of our application involves two 250-word essays. If
                            reapplying you may choose to reuse your response to essay 1, but please
                            submit a new response to essay 2.
                        </Text>

                        <FormControl isRequired>
                            <FormLabel
                                htmlFor="choice-1"
                                color="#211E61"
                                fontSize="xl"
                                fontStyle="normal"
                                fontWeight="medium"
                                mt="1%"
                            >
                                {' '}
                                Essay 1: We allow you to choose between 2 prompts for this essay.
                            </FormLabel>
                            <Box>
                                <Text
                                    color="#211E61"
                                    fontSize="lg"
                                    fontStyle="normal"
                                    fontWeight="medium"
                                    mt="1%"
                                >
                                    Choice 1: What is an activity or interest you have pursued
                                    deeply? Describe your experience in doing so. This can relate to
                                    an organization you've been a part of, an individual
                                    achievement, or any topic you are passionate about.
                                </Text>
                                <Text
                                    color="#211E61"
                                    fontSize="lg"
                                    fontStyle="normal"
                                    fontWeight="medium"
                                    mt="1%"
                                >
                                    Choice 2: What is a significant challenge you had to overcome?
                                    How have you grown from that experience?
                                </Text>
                                <FormControl>
                                    <RadioGroup value={choice} onChange={setChoice}>
                                        <Stack
                                            direction="row"
                                            spacing={5}
                                            {...register('Prompt 1 Choice')}
                                        >
                                            <Radio value="Choice 1">Choice 1</Radio>
                                            <Radio value="Choice 2">Choice 2</Radio>
                                        </Stack>
                                    </RadioGroup>
                                </FormControl>
                            </Box>

                            <Textarea
                                mt="1%"
                                placeholder="Prompt 1 Response (max. 250 words)"
                                {...register('Prompt 1')}
                            />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel
                                mt="1.5%"
                                color="#211E61"
                                fontSize="xl"
                                fontStyle="normal"
                                fontWeight="medium"
                                htmlFor="choice-2"
                            >
                                {' '}
                                Essay 2: Pick a company or NGO and discuss an opportunity it has or
                                a problem it faces. Next, suggest a feasible strategic move (or
                                strategic moves) you would make if you were its CEO. Explain your
                                reasoning and describe your idea's intended impact.{' '}
                            </FormLabel>
                            <Textarea
                                placeholder="Prompt 2 Response (max. 250 words)"
                                {...register('Prompt 2')}
                            />
                        </FormControl>

                        <Button mt="1%" mb="1%" onClick={() => onSave(getValues())}>
                            Save
                        </Button>
                        <Button type="submit" mt="1%" ml="1%" mb="1%">
                            Submit
                        </Button>
                    </Box>
                </Flex>
                {submitting ? (
                    <Alert status="warning">
                        <AlertIcon />
                        <AlertTitle mr={2}>Saving...</AlertTitle>
                        <AlertDescription>
                            DO NOT EXIT the application while saving or your data may be lost.
                        </AlertDescription>
                    </Alert>
                ) : null}
                <Image
                    src={wdb}
                    alt="Created and Designed by Web Development at Berkeley"
                    height="75px"
                    flex="center"
                    padding="10px"
                />
                {saveError ? (
                    <Alert status="error">
                        <AlertIcon />
                        <AlertTitle mr={2}>Error while saving</AlertTitle>
                        <AlertDescription>
                            Please try again. If the error persists, contact us.
                        </AlertDescription>
                    </Alert>
                ) : null}
                {submitError ? (
                    <Alert status="error">
                        <AlertIcon />
                        <AlertTitle mr={2}>Error while submitting</AlertTitle>
                        <AlertDescription>
                            Please try again or refresh the page. If the error persists, contact us.
                        </AlertDescription>
                    </Alert>
                ) : null}
                {saveSuccess ? (
                    <Alert status="success">
                        <AlertIcon />
                        <AlertTitle mr={2}>Application was successfully saved!</AlertTitle>
                        <AlertDescription>
                            Make sure you submit your application when completed.
                        </AlertDescription>
                    </Alert>
                ) : null}
            </form>
        </Flex>
    )
}

export default ApplicationPage
