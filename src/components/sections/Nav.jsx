import SearchBar from "./SearchBar/SearchBar";
import { Button, ButtonGroup, Flex, Box, border, Text, Stack, useColorMode, Switch, IconButton, Center, Spacer,Avatar, AvatarBadge, AvatarGroup,  
  Modal, ModalContent,
  ModalCloseButton, useDisclosure, Input, InputGroup,InputLeftElement, InputRightElement, Fade } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineUser, AiOutlineShopping, AiOutlineSearch} from "react-icons/ai";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon, SearchIcon } from '@chakra-ui/icons'
import { AuthContext } from "../../context/AuthContext";
import {IoIosLogOut} from 'react-icons/io'
import { useNavigate } from 'react-router-dom';



import { BiUserCircle, BiHomeCircle } from "react-icons/bi";

import Logo from "../common/Logo";


import { Link } from "react-router-dom";
import ShoopingCart from "./ShoopingCart";

// function Nav() {
//   const [isOpen, setIsOpen] = useState(false);

//   const nav_styles = {
//     display: [isOpen ? "flex" : "none", "flex"],
//     gap: 5,
//     p: 7,
//   };

//   const button_styles = {
//     top: [2, 1],
//     left: 5,
//     display: ["inherit", "none"],
//   };

//   const changeOpen = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "white",
//         borderBottom:'solid 0.5px',
//         borderColor:'gray.1000',
//       }}
//     >
//       <Button onClick={changeOpen} sx={button_styles}>
//         <FaHamburger />
//       </Button>
//       <Flex
//         justifyContent="space-between"
//         color={'black'}
//         direction={["column", "row"]}
//         sx={nav_styles}
//       >
//         <ButtonGroup>
//           <Button
//             sx={{
//               _hover: {
//                 cursor: "pointer",
//                 border: "2px",
//                 borderColor: "white",
//               },
//               border: "none",
//             }}
//             variant="outline"
//           >
//             <Link to="/">
//               <BiHomeCircle />
//             </Link>
//           </Button>
//           <Button
//             sx={{
//               _hover: {
//                 cursor: "pointer",
//                 border: "2px",
//                 borderColor: "white",
//               },
//               border: "none",
//             }}
//             variant="outline"
//           >
//             <Link to="/about">about</Link>
//           </Button>
//           <Button
//             sx={{
//               _hover: {
//                 cursor: "pointer",
//                 border: "2px",
//                 borderColor: "white",
//               },
//               border: "none",
//             }}
//             variant="outline"
//           >
//             <Link to="/contact">contact</Link>
//           </Button>
//         </ButtonGroup>
//         <div /* style={{ position: "relative" }} */>
//           <Box
//             as={Link}
//             to="/"
//             style={{
//               clipPath: "circle(50% at 50% 50%)",
//               backgroundImage: "url('/public/logo transparent.png')",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//               backgroundSize: "cover",
//               width: "85px",
//               height: "85px",
//               position: "absolute",
//               top: "0.8%",
//             }}
//           ></Box>
//         </div>
//         <ButtonGroup>
//           <Button
//             sx={{
//               _hover: {
//                 cursor: "pointer",
//                 border: "2px",
//                 borderColor: "white",
//               },
//               border: "none",
//             }}
//             variant="outline"
//           >
//             <BiUserCircle />
//           </Button>
//           <Button
//             sx={{
//               _hover: {
//                 cursor: "pointer",
//                 border: "2px",
//                 borderColor: "white",
//               },
//               border: "none",
//             }}
//             variant="outline"
//           >
//             <Link to="/register">register</Link>
//           </Button>
//           <Button
//             sx={{
//               _hover: {
//                 cursor: "pointer",
//                 border: "2px",
//                 borderColor: "white",
//               },
//               border: "none",
//             }}
//             variant="outline"
//           >
//             <Link to="/login">login</Link>
//           </Button>
//           <Button
//             sx={{
//               _hover: {
//                 cursor: "pointer",
//                 border: "2px",
//                 borderColor: "white",
//               },
//               border: "none",
//             }}
//             variant="outline"
//           >
//             <Link to="/orders">orders</Link>
//           </Button>
//           <Button
//             sx={{
//               _hover: {
//                 cursor: "pointer",
//                 border: "2px",
//                 borderColor: "white",
//               },
//               border: "none",
//             }}
//             variant="outline"
//           >
//             logout
//           </Button>
//           <Button
//           sx={{
//             _hover: {
//               cursor: "pointer",
//               border:'2px', borderColor:'white'
//             },
//             border:"none"
//           }}
//           variant="outline">
//             {/* <ShoppingCart /> */}
//           </Button>
//         </ButtonGroup>
//       </Flex>
//     </div>
//   );
// }


// export const Nav = () => {
//   const { colorMode, toggleColorMode } = useColorMode()
//   const isDark = colorMode === 'dark'
//   const [display, changeDisplay] = useState('none')
//   const [isOpen, setIsOpen] = useState(false);
//   const changeOpen = () => {
//      setIsOpen(!isOpen);
//    };

//   return (
//     <Flex>
//       <Flex
//         w="100%"
//         pos="fixed"
//         // top="1rem"
//         // left="1rem"
//         zIndex={90}
//         align="center"
//         justifyContent={"center"}
//         backgroundColor="white"
//         borderBottom='solid 0.5px'
//         borderColor='gray.1000'
//       >


//         {/* Desktop */}
//         <Flex
//           display={['none', 'none', 'flex','flex']}
//         >
          
//           <Link to={"/"}>
//             <Button
//               variant="ghost"
//               aria-label="Home"
//               my={5}
//               w="100%"
//             >
//               Home
//             </Button>
//           </Link>

//           <Link to={"/about"}>
//             <Button
//               variant="ghost"
//               aria-label="About"
//               my={5}
//               w="100%"
//             >
//               About
//             </Button>
//           </Link>

//           <Link to={"/contact"}>
//             <Button
//               variant="ghost"
//               aria-label="Contact"
//               my={5}
//               w="100%"
//             >
//               Contact
//             </Button>
//           </Link>
//         </Flex>

//         {/* Mobile */}
//           <Button           
//             aria-label="Open Menu"
//             size="lg"
//             mr={2}
//             onClick={() => changeDisplay('flex')}
//             display={['flex', 'flex', 'none', 'none']}>
//             <HamburgerIcon />
//           </Button>
          
         
//           <Flex  margin="auto">
//                         <Button
//                             as={Link}
//                             to="/"
//                             _hover={"none"}
//                             clipPath= "circle(50% at 50% 50%)"
//                             backgroundColor={"transparent"}
//                             backgroundImage= "url('/public/logo transparent.png')"
//                             backgroundPosition= "center"
//                             backgroundRepeat= "no-repeat"
//                             backgroundSize= "cover"
//                             width= "55px"
//                             height= "55px"
//                             top= "15%"
//                             >
//                         </Button>            
//           </Flex>

//           <Flex
//                   alignItems="center"
//                   paddingRight={3}
//           >
//             <Switch
//               color="green"
//               isChecked={isDark}
//               onChange={toggleColorMode}
//             />
//           </Flex>
//       </Flex>

      

//       {/* Mobile Content */}
//       <Flex
//         w='100vw'
//         display={display}
//         bgColor="gray.50"
//         zIndex={99}
//         h="100vh"
//         pos="fixed"
//         top="0"
//         left="0"
//         overflowY="auto"
//         flexDir="column"
//       >
//         <Flex justify="flex-end">
//           <Button mt={2}
//             mr={2}
//             aria-label="Open Menu"
//             size="lg"
//             onClick={() => changeDisplay('none')}
//             >
//             <CloseIcon />
//           </Button>
//         </Flex>

//         <Flex
//           flexDir="column"
//           align="center"
//         >
//           <Link to={"/"}>
//             <Button
//               variant="ghost"
//               aria-label="Home"
//               my={5}
//               w="100%"
//             >
//               Home
//             </Button>
//           </Link>

//           <Link to={"/about"}>
//             <Button
//               variant="ghost"
//               aria-label="About"
//               my={5}
//               w="100%"
//             >
//               About
//             </Button>
//           </Link>

//           <Link to={"/contact"}>
//             <Button
//               variant="ghost"
//               aria-label="Contact"
//               my={5}
//               w="100%"
//             >
//               Contact
//             </Button>
//           </Link>
//         </Flex>
//       </Flex>
//     </Flex>
//   )
// }



const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { colorMode, toggleColorMode } = useColorMode()
  const {setToggleColorM, setSearcOnNavOpen} = useContext(AuthContext);

  useEffect(() => {
    setSearcOnNavOpen(isOpen); // Update the search context value based on isOpen
  }, [isOpen, setSearcOnNavOpen]);


  useEffect(() => {
    setToggleColorM(colorMode === "dark");
  }, [colorMode]);

  return (
    <NavBarContainer {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <DarkMode colorMode={colorMode} toggleColorMode={toggleColorMode}/>
    </NavBarContainer>
  );
};


const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle} ml="auto">
      {isOpen ? <CloseIcon boxSize={5} /> : <HamburgerIcon boxSize={8} />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  const { user } = useContext(AuthContext);

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        backgroundColor={"white"}
        direction={["column", "column", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/contact">Contact </MenuItem>
        {user && <MenuItem to="/Orders">Orders </MenuItem>}
  
        {/* <MenuItem to="/register" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["primary_black.900", "primary_black.900", "primary_black.900", "primary_black.900"]}
            bg={["primary_black.100", "primary_black.100", "primary_black.100", "primary_black.100"]}
            _hover={{
              bg: ["primary_black.300", "primary_black.300", "primary_black.300", "primary_black.300"]
            }}
          >
            Create Account
          </Button>
        </MenuItem> */}
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  const navigate = useNavigate();
  const { user, logOut, setOnLoad } = useContext(AuthContext);
  const handleLogout = () => {
    navigate('/'); // Redirect to the home page
    logOut();
  };


  return (
    <Flex
      as="nav"
      align="center"
      position="fixed" 
      zIndex={99}
      justifyContent={"center"}
      justify={"space-between"}
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      borderBottom='solid 0.5px'
      borderColor='gray.1000'
      bg={["white", "white", "white", "white"]}
      color={["black", "black", "black", "black"]}
      {...props}
    >
      <Box position="absolute" left={5} top={5}>
        <Link to={"/"}>
          <Logo />
        </Link>
      </Box> 
      <Stack direction='row' position="absolute" right={[85, 20, 30, 5]}  top={9} >
        {/* <MenuItem to="/purchase">
          <AiOutlineShopping color={"black"} size={25} />
        </MenuItem> */}
        <ShoopingCart/>
        <MenuItem to={user ? "/user" : "/login"} onClick={() => setOnLoad(false)} >
          <AiOutlineUser color={"black"} size={25} />
        </MenuItem>
        <SearchBar/>
        {user && <IoIosLogOut onClick={handleLogout} size={25} cursor={"pointer"} />}
      </Stack>
      {children}
    </Flex>
  );
};



const DarkMode = ({colorMode, toggleColorMode}) => {
    
  return (
    <Flex position={"fixed"} bottom={10} left={2}>

    <Button 
    onClick={toggleColorMode} 
    backgroundColor={colorMode === "dark" ? "white" : "black"}
    borderRadius="100%"
    border="solid 2px"
    borderColor={"gray.400"}
    width= "55px"
    height= "55px"
    >

    {colorMode === "dark" ? <SunIcon /> : <MoonIcon color={colorMode === "dark" ? "black" : "white"}/>}

    </Button>
    </Flex>
  );

};

export default Nav;
