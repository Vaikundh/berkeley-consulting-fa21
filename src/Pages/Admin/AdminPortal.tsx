import {Menu, MenuButton, MenuItem, MenuList, Button, Box, Flex, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, get, query} from "firebase/database"
import { ChevronDownIcon } from '@chakra-ui/icons'

function AdminPortal (): JSX.Element {
    //BEFORE MERGING TO MAIN, MAKE SURE TO CHANGE DB INFO
    const navigate = useNavigate();
    const email = sessionStorage.getItem("Email")  

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
    // let apps
    // fix below, need to check SubmittedApps/uid/isSubmitted
    const retrieveApps = async () => {
        const applications = await get(query(ref(db, "/SubmittedApps/")))
        console.log(applications.toJSON())
        // apps = applications;
    }
    retrieveApps();
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
            <Text fontSize='50px' textStyle='heading'>Berkeley Consulting Admin Portal</Text> 
            {/* Need to map over JSON objects, https://stackoverflow.com/questions/42352161/javascript-iterating-over-json-objects */}
            <Accordion allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            {/* Map over summary of user (name, email, class level, GPA, major, reapplying) */}
                            <Box flex='1' textAlign='left'>
                            Applicant 1
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <Text>
                            Free Tuesday?: {}
                        </Text>
                        <Text>
                            Gender: {}
                        </Text>
                        <Text>
                            Grad Year: {}
                        </Text>
                        <Text>
                            How did you hear: {}
                        </Text>
                        <Text>
                            Reapplying?: {}
                        </Text>
                        <Text>
                            Phone Number: {}
                        </Text>
                        {/* Resume
                        Transcript
                        Image */}
                        <Text>
                            Prompt 1 Choice: {}
                        </Text>
                        <Text>
                            Prompt 1 Response: {}
                        </Text>
                        <Text>
                            Prompt 2 Response: {}
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}
export default AdminPortal;