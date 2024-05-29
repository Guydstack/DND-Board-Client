import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Editable, Avatar, ButtonGroup, IconButton, Flex, 
    EditablePreview, Input, useEditableControls, EditableInput, Card, CardHeader, CardBody, Stack, StackDivider, 
    Text, CircularProgress, Button, Image } from '@chakra-ui/react';
import { EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons"
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { db, rtdb } from "../../../firebase_config";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    updateDoc,
    setDoc,
} from "firebase/firestore";
import { ref, update, set } from "firebase/database";
import CustomSpinner from '../../components/common/CustomSpinner';
import React from 'react';





function User() {
    const { user, userDe, setUserDe } = useContext(AuthContext);
    const reference = collection(db, "users");
    const [loading, setLoading] = useState(true);
    const [googleU,setGoogleU] = useState(false);


    // Check if User comes from Google or Normal Login
    useEffect(() => {
        if (user && user.emailVerified === true) {
            setGoogleU(true);
        } else if (user) {
            setGoogleU(false);
            getUsers();
        }
    }, [user]);


    //Get all user from Data Base Document
    async function getUsers() {
        try {
            const data = await getDocs(reference);
            const users = data.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            });
            await setUserDe(users);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };


    // Set User Details from Google
    const [googleUserData, setGoogleUserData] = useState({
        id:"",
        name:"",
        email:"",
        photoURL:"",
        phone: ""
    });


    // Function to filter user data based on user's ID    
    const filteredUser = userDe.length === 0 ? googleUserData : userDe.filter(u => u.id === user?.uid);



    // Set User Update Valus
        useEffect(() => {
            if (filteredUser.length > 0) {
                const newUserUpdate = {
                    name: filteredUser[0]?.name,
                    email: filteredUser[0]?.email,
                    phone: filteredUser[0]?.phone,
                };
                setUserUpdate(newUserUpdate)
            }
        }, [userDe]);
        

    // Set User Details from Google
    useEffect(() => {
        if (googleU && user?.providerData) {
            const userData = user.providerData.map(provider => ({
                name: provider.displayName,
                email: provider.email,
                photoURL: provider.photoURL,
                phone: provider.phoneNumber,
                id: provider.uid
            }));
    
            setGoogleUserData(userData);
            setLoading(false);
            createUser()
        }
    }, [googleU, user]);


    //add User from Google With fireStore
    async function createUser() {
      try { 
        const referenceRTD = ref(rtdb,`users/${user?.reloadUserInfo.localId}`)
        await update(referenceRTD, {
          user_name:user?.reloadUserInfo.displayName,
          user_email:user?.reloadUserInfo.email,
          user_phone:user?.reloadUserInfo.providerUserInfo[0].providerId
        });
      } catch (error) {
        console.log(error);
      }
    };


    // Set user details based on the new input Values
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserUpdate((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    // Set User Updated Details    
    const [userUpdate, setUserUpdate] = useState({
        name: "",
        email: "",
        phone: "",
    });


    // Updating user Details in the Database
    async function updateUser(id,updateData){
        const initialForm = {
            user_email: updateData.email,
            user_name: updateData.name,
            user_phone: updateData.phone,
        };

        try {
        // Update Firestore document
        const refDoc = doc(reference, id);
        await updateDoc(refDoc, updateData)
        // Update Realtime Database
            const rtdbRef = ref(rtdb, `users/${id}`);
            await update(rtdbRef, initialForm);
        } catch (error) {
        console.log(error)
        }
    };


    // Edit Buttons
    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup justifyContent='center' size='sm'>
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <IconButton size='sm' marginLeft={5} icon={<EditIcon />} {...getEditButtonProps()} />
        )
    };


    // Show a Spinner while Data Louding
    if (loading || !user) {
        return (
            <CustomSpinner />
        );
    };
    

    return (
        <Box minH="65vh" maxW="1000px" mx="auto" py={110} px={4}>
            {userDe && filteredUser.map((user) => (
             <React.Fragment key={user.id}>
            <Heading as="h2" size="xl" mb={4} textAlign={"center"}>
                User Details
            </Heading>
                {!googleU ? null : 
                <Flex justifyContent={"center"}>
                    {/* <Image
                    borderRadius='full'
                    boxSize='90px'
                    src={ user.photoURL ? user.photoURL : "hjh"}
                    alt="User"
                    my={5}
                    /> */}
                    <Avatar name={user.name} src={user.photoURL} size='xl' my={5} bgColor={"blackAlpha.400"} />
                </Flex>
                }
                <Card key={user.id}>
                    <CardHeader>
                        <Heading size='md'>{user.name}</Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Name
                                </Heading>
                                <Editable
                                    textAlign='left'
                                    defaultValue={user.name}
                                    pt={"2"}
                                    fontSize='sm'
                                    isPreviewFocusable={false}
                                >
                                    <EditablePreview />
                                    {/* Here is the custom input */}
                                    <Input as={EditableInput}
                                        onChange={handleChange}
                                        width={"20%"}
                                        name="name" 
                                        value={user.name}
                                    />
                                    {googleU ? null : <EditableControls />}  
                                </Editable>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Email
                                </Heading>
                                <Editable
                                    textAlign='left'
                                    defaultValue={user.email}
                                    pt={"2"}
                                    fontSize='sm'
                                    isPreviewFocusable={false}
                                >
                                    <EditablePreview />
                                    {/* Here is the custom input */}
                                    <Input as={EditableInput}
                                        onChange={handleChange}
                                        width={"20%"}
                                        name="email" 
                                        value={user.email}
                                    />
                                    {googleU ? null : <EditableControls />}  
                                </Editable>
                            </Box>
                            <Box>
                                <Heading size='xs' textTransform='uppercase'>
                                    Phone
                                </Heading>
                                <Editable
                                    textAlign='left'
                                    defaultValue={user.phone}
                                    pt={"2"}
                                    fontSize='sm'
                                    isPreviewFocusable={false}
                                >
                                    <EditablePreview />
                                    {/* Here is the custom input */}
                                    <Input as={EditableInput}
                                        onChange={handleChange}
                                        width={"20%"}
                                        name="phone" 
                                        value={user.phone}
                                    />
                                    {googleU ? null : <EditableControls />}  
                                </Editable>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
                </React.Fragment>   
            ))}
            {googleU ? null : <Button onClick={() => updateUser(filteredUser[0].id, userUpdate)} my={5}>Update</Button>}  
        </Box>
    )
}

export default User
