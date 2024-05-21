import { Button , useDisclosure , Badge, Box} from '@chakra-ui/react';
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";
import ModalCart from './ModalCart';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';

function ShoopingCart() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { totalProducts } = useContext(CartContext)

  return (
    <>

<Box position="relative" onClick={onOpen} cursor="pointer">
  <AiOutlineShopping color="black" size={25}/>
  <Badge 
    fontSize="xs" // Adjust font size as needed
    colorScheme="transparent" 
    padding={0} 
    margin={0}
    position="absolute" 
    top="9px" // Adjust top position as needed
    right="6px" // Adjust right position as needed
    // borderRadius="50%" // Make the background completely round
    backgroundColor={totalProducts !== 0 ? "red.600" : "transparent"} // Conditionally set background color
    color="white" // Adjust color as needed
    zIndex="1"
    boxSize="13px" // Adjust box size to match badge size
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    {totalProducts}
  </Badge>
</Box>


  <ModalCart isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default ShoopingCart