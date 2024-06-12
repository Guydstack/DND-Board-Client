import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    UnorderedList,
    ListItem,
    Button,
    HStack,
    Text,
  } from "@chakra-ui/react";
  import { CartContext } from "../../context/CartContext";
  import { useContext, useState, useEffect } from "react";
  import { AiFillDelete } from "react-icons/ai";
  import { useNavigate } from "react-router-dom";
  import { AuthContext } from "../../context/AuthContext";


  
  function ModalCart({ isOpen: propIsOpen, onClose }) {
    const { cartItems, addToCart, removeFromCart, deleteFromCart , resetCart , setTotalProducts , totalProducts, totalPrice} =
    useContext(CartContext);
    const { setManuLink } = useContext(AuthContext);
    const navigate = useNavigate();


    
    const [isOpen, setIsOpen] = useState(propIsOpen);
    useEffect(() => {
      setIsOpen(propIsOpen);
    }, [propIsOpen]);
    

  
    useEffect(() => {
      const updatedTotalProducts = cartItems.reduce(
        (total, item) => total + item.quantity
      ,0);
  
      setTotalProducts(updatedTotalProducts)
    }, [cartItems]);
  
    return (
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"800px"} mx={"auto"}>
          <ModalHeader>Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {cartItems?.length === 0 ? (
              <p>Your Cart is Empty</p>
            ) : (
              <UnorderedList>
                {cartItems?.map((item) => (
                  <ListItem my={2} key={item._id}>
                    <Button mx={2} onClick={() => deleteFromCart(item)}>
                      X
                    </Button>
                    <Text
                      display={"inline-block"}
                      fontSize={"large"}
                      fontWeight={"semibold"}
                    >
                      {item.product_name} - ${item.product_price}
                    </Text>
                    <Button
                      mx={2}
                      colorScheme="red"
                      onClick={() => removeFromCart(item)}
                    >
                      -
                    </Button>
                    <Text display={"inline-block"} fontSize={"large"}>
                      {item.quantity}
                    </Text>
                    <Button
                      mx={3}
                      colorScheme="green"
                      onClick={() => addToCart(item)}
                    >
                      +
                    </Button>
                    <Text
                      display={"inline-block"}
                      fontSize={"large"}
                      fontWeight={"semibold"}
                    >
                      total: {(item.product_price * item.quantity).toFixed(2)}$
                    </Text>
                  </ListItem>
                ))}
              </UnorderedList>
            )}
              <Text color={'gray.300'} fontSize={'large'}>Total Product:{totalProducts}</Text>
              <Text color={'gray.300'} fontSize={'large'}>Total Price:{totalPrice}$</Text>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={30}>
              <Button onClick={() => {
                onClose();
                navigate('/purchase');
                setManuLink(0);
                }}>Purchase</Button>
              <Button colorScheme="teal" mr={3} onClick={resetCart}>
                <AiFillDelete />
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
  
  export default ModalCart;
  
