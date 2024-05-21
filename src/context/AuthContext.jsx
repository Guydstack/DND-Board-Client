import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import { auth, rtdb } from "../../firebase_config"
import { ref , update} from 'firebase/database';
import CustomSpinner from "../components/common/CustomSpinner";

export const AuthContext = createContext();

function AuthProvider({ children }) {

  const [isAuth, setIsAuth] = useState(false);
  const [onLoad,setOnLoad] = useState(true);
  const [colorM, setToggleColorM] = useState(false);
  const [user, setUser] = useState(null);
  const [userDe, setUserDe] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [FilterdProducts, setFilterdProducts] = useState([]);
  const [AllProducts, setAllProducts] = useState([]);
  const [searcOnNavOpen, setSearcOnNavOpen] = useState(false);



  async function logOut(){
    try {
      await signOut(auth);
      await handleLogOut();
      setUser(null)
    } catch (error){
      console.log(error);
    }
  }

  async function handleLogOut(){
    const reference = ref(rtdb,`users/${user.uid}`);
    await update(reference,{
       active:false
    }).then(() => console.log('success'))
   }
  
  
  // console.log(user);

  async function handleUnload(e){
    e.preventDefault();
    const reference = ref(rtdb,`users/${user.uid}`);
    await update(reference,{
       active:false
    }).then(() => console.log('success'))
   }

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider)
}


useEffect(() => {
  onAuthStateChanged(auth,async(currentUser) => {
    setUser(currentUser)
    if(currentUser){
        const reference = ref(rtdb,`users/${currentUser.uid}`);
        await update(reference,{
            active:true
         }).then(() => console.log('success'))
    }
  })
},[user])

useEffect(() => {
  window.addEventListener('unload',handleUnload);

  return () => window.removeEventListener('unload',handleUnload)
  },[user])


  const value = { 
                  setIsAuth, isAuth, onLoad, setOnLoad, colorM, setToggleColorM,
                  user, setUser, logOut, googleSignIn, userDe, setUserDe, searchTerm, setSearchTerm,
                  searcOnNavOpen, setSearcOnNavOpen, FilterdProducts, setFilterdProducts, AllProducts, setAllProducts
                 };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
