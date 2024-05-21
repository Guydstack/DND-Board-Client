  import { Modal, ModalContent, ModalCloseButton, useDisclosure, Input, InputGroup,InputLeftElement, InputRightElement, 
          ModalOverlay, Button, Fade, Box, Slide, Collapse,useBreakpointValue, Flex, Text } from "@chakra-ui/react";
  import { useContext, useEffect, useState } from "react";
  import { AiOutlineSearch, AiOutlineClose} from "react-icons/ai";
  import { SearchIcon } from '@chakra-ui/icons'
  import { AuthContext } from "../../../context/AuthContext";
  import ProductCard from "../../partials/products/ProductCard";

  // import "../../../../src/components/sections/SearchBar/SearchBar-Chakra.css"

  // const SearchBar = () =>{
  //   const { isOpen, onOpen, onClose } = useDisclosure()
  //   const {searchTerm, setSearchTerm} = useContext(AuthContext);
  

  //   function updateMaxHeight (newValue){
  //     if (newValue === 1) {    
  //       document.documentElement.style.setProperty('--max-height', '150px');
  //     } else 
  //     document.documentElement.style.setProperty('--max-height', 'auto');
  //   };



  
  //   return (
  //     <>
  //       <AiOutlineSearch color={"black"} size={25} onClick={() => { onOpen(); updateMaxHeight(1); }} style={{ cursor: "pointer" }} />
  
  //       <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false} closeOnOverlayClick={false}>
  //         <ModalContent display="flex" alignItems="center" justifyContent="center">
  //           <InputGroup>
  //           <Input
  //             placeholder="Enter Something..."
  //             _placeholder={{ color: "black" }}
  //             onChange={(e) => setSearchTerm(e.target.value)}
  //             value={searchTerm}
  //           />
  //             <InputLeftElement>
  //               <SearchIcon />
  //             </InputLeftElement>
  //             <InputRightElement>
  //               <ModalCloseButton top={1} onClick={() => { setSearchTerm(""); updateMaxHeight(2); }}/>
  //             </InputRightElement>
  //           </InputGroup>
  //         </ModalContent>
  //       </Modal>
  //     </>
  //   )
  // };


  // const SearchBar = () => {
    
  //   const { isOpen, onToggle } = useDisclosure()
  //   const {searchTerm, setSearchTerm, searcOnNavOpen} = useContext(AuthContext);

    
  //   const handleClose = () => {
  //     setSearchTerm(""); // Clear the search term
  //     onToggle(); // Close the search bar
  //   };

  //   const topPosition = useBreakpointValue({ base: searcOnNavOpen ? '265px' : '120px', md: '120px' }); // Adjust the breakpoint and top values as needed


  
  //   return (
  //     <>
  //       <AiOutlineSearch color={"black"} size={25} onClick={onToggle} style={{ cursor: "pointer" }} />
  //       <Collapse in={isOpen} style={{ position:'fixed', top: topPosition, left: '50%', transform: 'translate(-50%, -50%)', width:'50%'}}>
  //           <InputGroup>
  //           <Input
  //             placeholder="Enter Something..."
  //             _placeholder={{ color: "black" }}
  //             onChange={(e) => setSearchTerm(e.target.value)}
  //             value={searchTerm}
  //             borderRadius={100}
  //             backgroundColor={"white"}
  //             _focusVisible={"none"}
  //             borderColor={"gray.200"}
  //           />
  //             <InputLeftElement>
  //               <SearchIcon />
  //             </InputLeftElement>
  //             <InputRightElement>
  //               <AiOutlineClose color={"black"} size={20} onClick={handleClose} style={{ cursor: "pointer" }} />
  //             </InputRightElement>
  //           </InputGroup>
  //       </Collapse>
  //     </>
  //   )
  // }


    const SearchBar = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {searchTerm, setSearchTerm, FilterdProducts, setFilterdProducts, AllProducts} = useContext(AuthContext);

  
    //implement search input
    useEffect(() => {
      const searchResults = AllProducts.filter(
        (product) =>
          product.product_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      setFilterdProducts(searchResults);
    }, [searchTerm, isOpen]);


    return (
      <>
        <AiOutlineSearch color={"black"} size={25} onClick={onOpen} style={{ cursor: "pointer" }} />
  
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalContent display="flex" alignItems="center" justifyContent="flex-start" maxW="90%" top={10} 
              maxHeight="80vh" 
              overflowY="auto" 
          >
            <InputGroup mb={2} width={"90%"} position={"fixed"} zIndex={99}>
            <Input
              placeholder="Enter Something..."
              background={"white"}
              color={"black"}
              _placeholder={{ color: "black" }}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
              <InputLeftElement color={"black"}>
                <SearchIcon />
              </InputLeftElement>
              <InputRightElement color={"black"}>
                <ModalCloseButton top={1} onClick={() => { setSearchTerm(""); onClose; }}/>
              </InputRightElement>
            </InputGroup>
            <Flex flexWrap="wrap" my={5} justifyContent={{ base: "center", md: "space-between" }}>
    
            {FilterdProducts.length > 0 ? (
            FilterdProducts.map((product) => (
              <ProductCard 
                key={product._id}
                product={product}
                //  addToCart={addToCart}
              />
            ))
          ) : (
            <Text marginTop={10}>No results found</Text>
          )}
    
            </Flex>
          </ModalContent>
        </Modal>
      </>
    )
  };



  export default SearchBar;
