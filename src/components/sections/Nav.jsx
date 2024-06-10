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
  const [manuLink,setManuLink] = useState(1);

  const getBorderBottom = (linkNumber) => {
    return manuLink === linkNumber ? "2px solid black" : "none";
  };

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
        <MenuItem to="/" _hover={{color: "teal"}} onClick={() => setManuLink(1)} borderBottom={getBorderBottom(1)}>Home</MenuItem>
        <MenuItem to="/about" _hover={{color: "teal"}} onClick={() => setManuLink(2)} borderBottom={getBorderBottom(2)}>About</MenuItem>
        <MenuItem to="/contact" _hover={{color: "teal"}} onClick={() => setManuLink(3)} borderBottom={getBorderBottom(3)}>Contact</MenuItem>
        {user && <MenuItem to="/Orders" _hover={{color: "teal"}} onClick={() => setManuLink(4)} borderBottom={getBorderBottom(4)}>Orders</MenuItem>}

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
