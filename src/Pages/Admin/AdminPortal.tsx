import {useEffect, useState} from 'react';
import { Menu, MenuButton, MenuItem, MenuList, Button, Box, Flex, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Radio, RadioGroup, Stack, Select, HStack, Tag, Link, InputGroup, Input, InputLeftElement} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, get, update, query} from "firebase/database";
import { ChevronDownIcon, SearchIcon} from '@chakra-ui/icons';
import { getDownloadURL, getStorage, ref as storageRef } from "firebase/storage";


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
        img?: string
        resume?: string
        transcript?: string
}
function AdminPortal (): JSX.Element {
    //BEFORE MERGING TO MAIN, MAKE SURE TO CHANGE DB INFO
    const navigate = useNavigate();
    const email = sessionStorage.getItem("Email")  
    const [apps, setApps] = useState([] as Application[])
    const [filteredApps, setFilteredApps] = useState([] as Application[])
    const [searchValue, setSearchValue] = useState("");
    // const [option, setOption] = useState('option1');

    const db = getDatabase()
    const storage = getStorage();

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

    
    const retrieveApps = async () => {
        const applications = (await get(query(ref(db, "/SubmittedApps/")))).val();
        const arr: Application[] = [];
        // for (DataSnapshot app : applications.getChildren()) {
        //     const appValues = app.val()
        //     if (appValues.isSubmitted === true) {
        //         appValues.uid = app.key
        //         getDownloadURL(storageRef(storage, appValues.uid + "/image")).then((url) => {
        //             appValues.img = url;
        //         })
        //         arr.push(appValues as Application);
        //     }
        // }
        for (const key in applications) {
            const appValues = applications[key]
            if (appValues.isSubmitted === true) {
                appValues.uid = key
                const imgUrl = await getDownloadURL(storageRef(storage, key + "/image")).catch((err) => {
                    console.log(err)
                    appValues.img = "";
                })
                appValues.img = imgUrl;
                const resumeUrl = await getDownloadURL(storageRef(storage, key + "/resume")).catch((err) => {
                    console.log(err)
                    appValues.resume = "";
                })
                appValues.resume = resumeUrl;
                const transcriptUrl = await getDownloadURL(storageRef(storage, key + "/transcript")).catch((err) => {
                    console.log(err)
                    appValues.transcript = "";
                })
                appValues.transcript = transcriptUrl;
                arr.push(appValues as Application);
            }
        }
        // applications.forEach((app) => {
        //     const appValues = app.val()
        //     if (appValues.isSubmitted === true) {
        //         appValues.uid = app.key;
        //         arr.push(appValues as Application);
        //     }
        // })
        setApps(arr)
        setFilteredApps(arr);
    }

    const updateIsAccepted = (uid: string | undefined, val:string, index: number) => {
        update(ref(db, "/SubmittedApps/" + uid), {isAccepted: val}).then(() => {
            const modifiedApps : Application[] = apps;
            modifiedApps[index].isAccepted = val;
            setApps([...modifiedApps]);
            // modifiedApps.isAccepted = val;
        })
    }

    let filteredArr = apps;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filterView = (e: any) => {
        const val = e.target.value;
        if (val === "all") {
            filteredArr = apps;
        } else if (val === "accepted") {
            filteredArr = []
            for (let i = 0; i < apps.length; i++) {
                if (apps[i].isAccepted == "accepted") {
                    filteredArr.push(apps[i]);
                }
                
            }
        } else if (val == 'rejected'){
            filteredArr = []
            for (let i = 0; i < apps.length; i++) {
                if (apps[i].isAccepted == "rejected") {
                    filteredArr.push(apps[i])
                }
                
            }
        } else if (val == 'undecided'){
            filteredArr = []
            for (let i = 0; i < apps.length; i++) {
                if (apps[i].isAccepted == "undecided" || apps[i].isAccepted == null ) {
                    filteredArr.push(apps[i])
                }
                
            }
        } else if (val == 'freshman'){
            filteredArr = []
            for (let i = 0; i < apps.length; i++) {
                if (apps[i]['Class Level'] == "Freshman") {
                    filteredArr.push(apps[i])
                }
                
            }
        } else if (val == 'sophomore'){
            filteredArr = []
            for (let i = 0; i < apps.length; i++) {
                if (apps[i]['Class Level'] == "Sophomore") {
                    filteredArr.push(apps[i])
                }
                
            }
        } else if (val == 'junior'){
            filteredArr = []
            for (let i = 0; i < apps.length; i++) {
                if (apps[i]['Class Level'] == "Junior") {
                    filteredArr.push(apps[i])
                }
                
            }
        }
        setFilteredApps(filteredArr);
    }
    
    // eslint-disable-next-line
    const searchQuery =  (e : any) => {
        const val = e.target.value;
        setSearchValue(val);
        filteredArr = [];
        for (let i = 0; i < apps.length; i++) {
            if (apps[i]['Name'].toLowerCase().includes(val.toLowerCase())) {
                filteredArr.push(apps[i]);
            }
        }
        setFilteredApps(filteredArr);
    }
    
    return (
        
        <Box>
            <Box top="50px" width='95%'>
                <Flex direction="row" justifyContent='end'>
                    <Menu>
                        <MenuButton mt="1%" ml="1%" color="white" bgColor="#211E61" as={Button} rightIcon={<ChevronDownIcon />}>
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
            <Flex direction="row" justifyContent="space-between">
                <InputGroup ml="10%" mr="5%">
                    <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                    />
                    <Input value={searchValue} onChange={searchQuery} placeholder='Search by name' />
                </InputGroup>
                <Select defaultValue="all" onChange={filterView} placeholder='Select view' mb="20px" width="25%" mr="10%">
                    <option value='all'>View All Applicants</option>
                    <option value='accepted'>View Accepted Applicants</option>
                    <option value='rejected'>View Rejected Applicants</option>
                    <option value='undecided'>View Undecided Applicants</option>
                    <option value='freshman'>View Freshman Applicants</option>
                    <option value='sophomore'>View Sophomore Applicants</option>
                    <option value='junior'>View Junior Applicants</option>
                </Select>
            </Flex>
            <Flex direction="row" justifyContent="flex-end">
                
            </Flex>
            
            {/* <Center width='80%' boxShadow='xl'> */}
            <Flex justifyContent='center'>
                <Box width='80%' borderWidth='1px' borderRadius='5px'>
                <Accordion allowMultiple>
                    {filteredApps.map((app, index) => {
                        return (
                            // <Flex alignItems='center' justifyContent="space-between">
                            <AccordionItem>
                                <h2>
                                    
                                    <AccordionButton height="50px">
                                    {/* Map over summary of user (name, email, class level, GPA, major, reapplying) */}
                                        <AccordionIcon />
                                        <HStack>
                                            <Text ml='3px' mt='0px' mb='0px' fontSize="md">Name: {app.Name} | Email: {app["Preferred Email"]} | Class Level: {app["Class Level"]} | Major: {app.Major} | Reapplying: {app.Reapplying} </Text>
                                            
                                            {app.isAccepted == 'accepted'  ? (
                                                <Tag colorScheme="green">Accepted</Tag>) : (app.isAccepted == "rejected" ? (<Tag colorScheme="red">Rejected</Tag>) : (<Tag >Undecided</Tag>)
                                            )}  
                                        </HStack>
                                    </AccordionButton> 
                                    
                                </h2>
                                
                                <AccordionPanel>
                                    <Flex justifyContent='center'>
                                        <Box width='80%' flex='center'>
                                            <Text fontSize='md' mt='3px' mb='0px'>
                                                GPA: {app.GPA}
                                            </Text>
                                            <Text fontSize='md' mt='3px' mb='0px'>
                                                Free Tuesday?: {app['Free Tuesday']}
                                            </Text>
                                            <Text fontSize='md' mt='3px' mb='0px'>
                                                Gender: {app.Gender}
                                            </Text>
                                            <Text fontSize='md' mt='3px' mb='0px'>
                                                Second Major: {app["Second Major"] == "" ? "None" : app["Second Major"]}
                                            </Text>
                                            <Text fontSize='md' mt='3px' mb='0px'>
                                                Third Major: {app["Third Major"] == "" ? "None" : app["Third Major"]}
                                            </Text>
                                            <Text fontSize='md' mt='3px' mb='0px'>
                                                Grad Year: {app['Grad Year']}
                                            </Text>
                                            <Text fontSize='md' mt='3px' mb='0px'>
                                                How did you hear about us: {app['How did you hear']}
                                            </Text>
                                            <Text fontSize='md' mt='3px' mb='0px'>
                                                Phone Number: {app['Phone Number']}
                                            </Text>
                                            <Text fontSize='md' mt='3px' mb='0px'>
                                                Preferred Email: {app['Preferred Email']}
                                            </Text>
                                            <HStack mt="15px">
                                                <Button>
                                                    <Link fontSize='md' mt='0' mb='0px' href={app.img} isExternal>Image</Link>
                                                </Button> 
                                                <Button>
                                                    <Link fontSize='md' mt='0' mb='0px' href={app.resume} isExternal>Resume</Link>
                                                </Button>
                                                <Button>
                                                    <Link fontSize='md' mt='0' mb='0px' href={app.transcript} isExternal>Transcript </Link>
                                                </Button>
                                            </HStack>
                                            
                                            <Text fontSize='md' mt='20px' mb='20px'>
                                                Prompt 1 Choice: {app['Prompt 1 Choice']}
                                            </Text>
                                            <Text fontSize='md' mt='0' mb='20px'>
                                                Prompt 1 Response: {app['Prompt 1']}
                                            </Text>
                                            <Text fontSize='md' mt='0' mb='20px'>
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
                                        </Box>
                                    </Flex>
                                </AccordionPanel>
                            </AccordionItem>
                            // </Flex>
                        )
                    })}
                </Accordion>
                </Box>
                </Flex>
            {/* </Center> */}
        </Box>
    )
}
export default AdminPortal;