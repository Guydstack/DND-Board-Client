  import { Modal, ModalContent, ModalCloseButton, useDisclosure, Input, InputGroup,InputLeftElement, InputRightElement, 
          ModalOverlay, Button, Fade, Box, Slide, Collapse,useBreakpointValue, Flex, Text } from "@chakra-ui/react";
  import { useContext, useEffect, useState } from "react";
  import { AiOutlineSearch, AiOutlineClose} from "react-icons/ai";
  import { SearchIcon } from '@chakra-ui/icons'
  import { AuthContext } from "../../../context/AuthContext";
  import ProductCard from "../../partials/products/ProductCard";


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
