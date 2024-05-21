import {
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { useContext, useEffect, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const PurchasePage = () => {
  const navigate = useNavigate();
  const { cartItems, userData, setUserData } = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputName, setInputName] = useState (false);
  const [inputEmail, setInputEmail] = useState (false);
  const [inputPhone, setInputPhone] = useState (false);
  const [inputStreet, setInputStreet] = useState (false);
  const [inputCity, setInputCity] = useState (false);
  const [inputBuilding, setInputBuilding] = useState (false);
  const [formSubmitted, setFormSubmitted] = useState(false);


  useEffect(() => {
    setUserData({
      name: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      building: ''
    });
  }, []);


 
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };


  const handleSubmit = () => {
    setIsSubmitting(true);
    // Perform any additional validation if required
    // For simplicity, let's assume all fields are required
    if (
      userData.name &&
      userData.email &&
      userData.phone &&
      userData.street &&
      userData.city &&
      userData.building
    ) {
      navigate("/checkout");
    } else {
      // toast.error("Please fill in all required fields.");
      setIsSubmitting(false);
      setFormSubmitted(true); // Set formSubmitted to true when the form is submitted
    }
  };


// This useEffect updates the input error states based on userData when the form is submitted
useEffect(() => {
  if (formSubmitted) {
    setInputName(userData.name === '' ? true : false);
    setInputEmail(userData.email === '' ? true : false);
    setInputPhone(userData.phone === '' ? true : false);
    setInputStreet(userData.street === '' ? true : false);
    setInputCity(userData.city === '' ? true : false);
    setInputBuilding(userData.building === '' ? true : false);
  }
}, [userData, formSubmitted]);


  
  return (
    <Box minH="65vh" maxW="90%" mx="auto" py={10} px={4}>
      <Heading as="h2" size="xl" mb={4}>
        Order Items
      </Heading>
      <Box mb={4}>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th minW={170}>Quantity</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartItems.map((item) => (
              <Tr key={item._id}>
                <Td>{item.product_name}</Td>
                <Td>${item.product_price}</Td>
                <Td>
                  <Text mx={1.5} as="b">
                    {item.quantity}
                  </Text>
                </Td>
                <Td>${(item.quantity * item.product_price).toFixed(2)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
      <Heading as="h2" size="xl" mb={4}>
        Customer and Shipping Details
      </Heading>
      <Box mb={4}>
        <Flex direction="column" mb={4}>

          <FormControl isRequired isInvalid={inputName}>
            <FormErrorMessage>Full name is required.</FormErrorMessage>
            {/* <FormLabel>Full Name</FormLabel> */}
            <Input
              onChange={handleChange}
              name="name"
              placeholder="Full name"
              mb={2}
            />
          </FormControl>

          <FormControl isRequired isInvalid={inputEmail}>
            {/* <FormLabel>Email</FormLabel> */}
            <FormErrorMessage>Email is required.</FormErrorMessage>
            <Input
              onChange={handleChange}
              name="email"
              placeholder="Email"
              mb={2}
            />
          </FormControl>

          <FormControl isRequired isInvalid={inputPhone}>
            {/* <FormLabel>phone</FormLabel> */}
            <FormErrorMessage>Phone is required.</FormErrorMessage>
            <Input
              onChange={handleChange}
              name="phone"
              placeholder="Phone"
              mb={2}
            />
          </FormControl>

          <FormControl isRequired isInvalid={inputStreet}>
            {/* <FormLabel>street</FormLabel> */}
            <FormErrorMessage>Street is required.</FormErrorMessage>
            <Input
              onChange={handleChange}
              name="street"
              placeholder="Address"
              mb={2}
            />
          </FormControl>

          <FormControl isRequired isInvalid={inputCity}>
            {/* <FormLabel>city</FormLabel> */}
            <FormErrorMessage>City is required.</FormErrorMessage>
            <Input
              onChange={handleChange}
              name="city"
              placeholder="City"
              mb={2}
            />
          </FormControl>

          <FormControl isRequired isInvalid={inputBuilding}>
            {/* <FormLabel>building</FormLabel> */}
            <FormErrorMessage>Building is required.</FormErrorMessage>
            <Input
              onChange={handleChange}
              name="building"
              placeholder="Building"
              mb={2}
            />
          </FormControl>

        </Flex>
      </Box>
      <Button onClick={handleSubmit} colorScheme="teal" isLoading={isSubmitting}>
        Check Out
      </Button>
    </Box>
  );
};

export default PurchasePage;

