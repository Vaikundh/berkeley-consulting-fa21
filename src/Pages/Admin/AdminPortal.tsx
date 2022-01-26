import {useEffect, useState} from 'react';
import { Menu, Center, MenuButton, MenuItem, MenuList, Button, Box, Flex, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Radio, RadioGroup, Stack, Select, HStack, Tag} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, get, update, query} from "firebase/database"
import { ChevronDownIcon } from '@chakra-ui/icons'

interface Application {
        "Class Level" : string
        "Free Tuesday": string
        "GPA": string
        "Gender": string
        "Grad Year": string
        "How did you hear": string
        "Major": string
        "Name": string
        "Phone Number": string
        "Preferred Email": string
        "Prompt 1": string
        "Prompt 1 Choice": string
        "Prompt 2": string
        "Reapplying": string
        "Second Major": string
        "Third Major": string
        "isSubmitted": boolean
        "Time Submitted": number
        "isAccepted": string
        uid?: string
}
function AdminPortal (): JSX.Element {
    //BEFORE MERGING TO MAIN, MAKE SURE TO CHANGE DB INFO
    const navigate = useNavigate();
    const email = sessionStorage.getItem("Email")  
    const [apps, setApps] = useState([] as Application[])
    const [filteredApps, setFilteredApps] = useState([] as Application[])
    const [option, setOption] = useState('option1');

    useEffect(() => {
        retrieveApps();
    }, [])

    const logOut = async () => {
        const auth = getAuth();
        await signOut(auth).then(() => {
            navigate('/')
            sessionStorage.removeItem("Auth Token");
            sessionStorage.removeItem('Email');
            sessionStorage.removeItem('uid');
        })
    }
    
    const db = getDatabase()
    
    const retrieveApps = async () => {
        const applications = (await get(query(ref(db, "/SubmittedApps/"))));
        const arr: Application[] = [];
        applications.forEach((app) => {
            const appValues = app.val()
            if (appValues.isSubmitted === true) {
                appValues.uid = app.key
                if (appValues.isAccepted == null || appValues.isAccepted == "") {
                    appValues.isAccepted = "undecided"
                }
                arr.push(appValues as Application)
            }
        })
        setApps(arr)
        console.log(apps);
    }

    const updateIsAccepted = (uid: string | undefined, val:string, index: number) => {
        update(ref(db, "/SubmittedApps/" + uid), {isAccepted: val}).then(() => {
            const modifiedApps : Application[] = apps;
            modifiedApps[index].isAccepted = val;
            setApps([...modifiedApps]);
            // modifiedApps.isAccepted = val;
        })
    }

    const filterView = (val: string) => {
        console.log(val)
        // if (val === "all") {
        //     setFilteredApps(apps)
        // } else if (val === "accepted") {
        //     setFilteredApps(getAccepted())
        // } else {
        //     setFilteredApps(getRejected())
        // }
    }

    // const handleSelect = (event) => {
    //     setOption(event.target.value);
    //   };
    
    return (
        
        <Box>
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
            <Flex direction="row" justifyContent='center'>
                <Text fontSize='50px' textStyle='heading'>Berkeley Consulting Admin Portal</Text> 
            </Flex>
            {/* Need to map over JSON objects, https://stackoverflow.com/questions/42352161/javascript-iterating-over-json-objects */}
            {/* <Select onChange={(value) => filterView(value)} placeholder='Select view'>
                <option value='all'>View All Applicants</option>
                <option value='accepted'>View Accepted Applicants</option>
                <option value='rejected'>View Rejected Applicants</option>
            </Select> */}
            {/* <Center width='80%' boxShadow='xl'> */}
                <Accordion allowMultiple>
                            {apps.map((app, index) => {
                                return (
                                    // <Flex alignItems='center' justifyContent="space-between">
                                    <AccordionItem>
                                        <h2>
                                            
                                            <AccordionButton height="50px">
                                            {/* Map over summary of user (name, email, class level, GPA, major, reapplying) */}
                                                <AccordionIcon />
                                                <HStack>
                                                    <Text ml='3px' mt='0px' mb='0px' fontSize="md">Name: {app.Name} | Email: {app["Preferred Email"]} | Class Level: {app["Class Level"]} | GPA: {app.GPA} | Major: {app.Major} | Reapplying: {app.Reapplying} </Text>
                                                    
                                                    {app.isAccepted == 'accepted'  ? (
                                                        <Tag colorScheme="green">Accepted</Tag>) : (app.isAccepted == "rejected" ? (<Tag colorScheme="red">Rejected</Tag>) : (<Tag >Undecided</Tag>)
                                                    )}  
                                                </HStack>
                                            </AccordionButton> 
                                            
                                        </h2>
                                        
                                        <AccordionPanel>
                                            <Text fontSize='md' mt='0' mb='0px'>
                                                Free Tuesday?: {app['Free Tuesday']}
                                            </Text>
                                            <Text fontSize='md' mt='0' mb='0px'>
                                                Gender: {app.Gender}
                                            </Text>
                                            <Text fontSize='md' mt='0' mb='0px'>
                                                Second Major: {app["Second Major"] == "" ? "None" : app["Second Major"]}
                                            </Text>
                                            <Text fontSize='md' mt='0' mb='0px'>
                                                Third Major: {app["Third Major"] == "" ? "None" : app["Third Major"]}
                                            </Text>
                                            <Text fontSize='md' mt='0' mb='0px'>
                                                Grad Year: {app['Grad Year']}
                                            </Text>
                                            <Text fontSize='md' mt='0' mb='0px'>
                                                How did you hear about us: {app['How did you hear']}
                                            </Text>
                                            <Text fontSize='md' mt='0' mb='0px'>
                                                Phone Number: {app['Phone Number']}
                                            </Text>
                                            <Text fontSize='md' mt='0' mb='0px'>
                                                Preferred Email: {app['Preferred Email']}
                                            </Text>
                                            {/* Resume
                                            Transcript
                                            Image */}
                                            <Text fontSize='md' mt='0' mb='0px'>
                                                Prompt 1 Choice: {app['Prompt 1 Choice']}
                                            </Text>
                                            <Text fontSize='md' mt='0' mb='0px'>
                                                Prompt 1 Response: {app['Prompt 1']}
                                            </Text>
                                            <Text fontSize='md' mt='0' mb='0px'>
                                                Prompt 2 Response: {app['Prompt 2']}
                                            </Text>
                                            <Text fontSize='md' mt='0' mb='0px'>
                                                Time Submitted: {new Date(app["Time Submitted"]).toLocaleString('en-us', {timeZone: 'PST'}) }
                                            </Text>
                                            <RadioGroup defaultValue={app.isAccepted} onChange={(value) => updateIsAccepted(app.uid, value, index)}>
                                                <Stack direction='row'>
                                                    <Radio colorScheme='green' value="accepted">Accepted</Radio>
                                                    <Radio colorScheme='red' value="rejected">Rejected</Radio>
                                                    <Radio value="undecided">Undecided</Radio>
                                                </Stack>
                                            </RadioGroup> 
                                        </AccordionPanel>
                                    </AccordionItem>
                                    // </Flex>
                                )
                            })}
                </Accordion>
            {/* </Center> */}
        </Box>
    )
}
export default AdminPortal;