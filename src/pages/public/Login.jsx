import { Box, Heading, FormControl, FormLabel, Input, Button, Text } from '@chakra-ui/react';
import { useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, rtdb, db } from '../../../firebase_config'
import { AuthContext } from '../../context/AuthContext';
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom';
import { set , ref , update} from 'firebase/database';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc
} from "firebase/firestore";
import CustomSpinner from '../../components/common/CustomSpinner';


const initialForm = {
  user_email: "",
  user_name: "",
  user_phone: null,
  active: false,
};

const Login = () => {

  const [signUp, setSignUp] = useState(false);
  const {setUser, user, googleSignIn, onLoad, setOnLoad} = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState(initialForm);
  const navigate = useNavigate();
  const reference = collection(db, "users");
  const [loading, setLoading] = useState(false); // State to track loading state
  const [inValidUser, setInValidUser] = useState(false); // State to track invalid login



  useEffect(() => {
    if (user) {
      navigate("/");
    } 
  }, [user]);



    //add User With fireStore
    async function createUser(id) {
      console.log(id);
      try {
        const userDocRef = doc(reference, id); // Get a reference to the document with the specified ID
        await setDoc(userDocRef, {
          name:userProfile.user_name,
          email:userProfile.user_email,
          phone:userProfile.user_phone,
          created_at: new Date().toISOString(), // Add registration date
        });
      } catch (error) {
        console.log(error);
      }
    };

  function handleChange(e) {
    const {value , name} = e.target;
     setUserProfile({...userProfile,[name]:value})
   }

   async function registerUser() {
    try {
      setLoading(true); // Start loading
      //for Auth Service
    const {user_email , user_password} = userProfile;
    const { user } = await createUserWithEmailAndPassword(auth, user_email, user_password);
    //for RealTime Database
     const reference = ref(rtdb,`users/${user.uid}`)
      await set(reference, {
      user_name:userProfile.user_name,
      user_email:userProfile.user_email,
      user_phone:userProfile.user_phone,
      created_at: new Date().toISOString(), // Add registration date
    });
      setUserProfile(initialForm)
      createUser(user.uid)
      setInValidUser(false); // Reset invalid login state on successful registration
    } catch (error) {
      console.log(error);
      setLoading(false); // Stop loading
    }
  }


  async function loginUser() {
    try {
      setLoading(true); // Start loading
      const { user_email , user_password } = userProfile;
      const { user } = await signInWithEmailAndPassword(
        auth,
        user_email,
        user_password
      );
      const reference = ref(rtdb,`users/${user.uid}`)
      await update(reference,{active:true})
      setUserProfile(initialForm)
      setUser(user);
      setInValidUser(false); // Reset invalid login state on successful login
    } catch (error) {
      console.log(error);
      setInValidUser(true) // Set invalid login state on error
      setLoading(false); // Stop loading
    } 
  };



  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setOnLoad(false); // After 10 seconds, set onLoad to false
    }, 5000); // 10 seconds in milliseconds

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []); // Run only once on component mount



  return (
    <Box minH="65vh" maxW="600px" mx="auto" py={110} px={4}>
      {onLoad || loading ?  (<CustomSpinner />) : (
      <>
        <Heading as="h1" size="xl" mb={6} textAlign={"center"}>
          {signUp ? 'Sign Up' : 'Login' }
        </Heading>
        {signUp && (
        <FormControl id="name" isRequired mb={4}>
          <FormLabel>Your Name</FormLabel>
          <Input
          onChange={(e) => handleChange(e)}
          name="user_name"
          value={userProfile.user_name}
          type="text" placeholder="Enter your name" />
        </FormControl>
      )}
      {signUp && (
        <FormControl id="phone" isRequired mb={4}>
          <FormLabel>Your Phone</FormLabel>
          <Input
          onChange={(e) => handleChange(e)}
          name="user_phone"
          value={userProfile.user_phone}
          type="number" placeholder="Enter Phone number" />
        </FormControl>
      )}
      <FormControl id="email" isRequired mb={4}>
        <FormLabel>Email Address</FormLabel>
        <Input
          value={userProfile.user_email}
          onChange={(e) => handleChange(e)}
          name="user_email"
          type="email"
          placeholder="Enter your email address"
        />
      </FormControl>
      <FormControl id="password" isRequired mb={4}>
        <FormLabel>Password</FormLabel>
        <Input
          value={userProfile.user_password}
          onChange={(e) => handleChange(e)}
          name="user_password"
          type="password"
          placeholder="Enter your password"
        />
      </FormControl>
             {inValidUser && (
            <Text color="red.500" mb={4}>Password or email is incorrect.</Text>
          )}
      <Button 
        onClick={ signUp ? registerUser : loginUser }
        colorScheme="teal" 
        size="lg" mb={4}>
        {signUp ? 'Sign Up' : 'Login' }
      </Button>
        <GoogleButton
          onClick={() => googleSignIn()}
        />
      <Text mt={2} cursor={'pointer'} color={'blue.400'} onClick={() => setSignUp(prev => !prev)}>{ signUp ? "You Need To Sign Up?" : "You Have Already an Account?" }</Text>
      </>
      )}
    </Box>
  );
};

export default Login;
