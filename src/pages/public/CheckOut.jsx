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
    Image,
  } from "@chakra-ui/react";
  import { useContext, useEffect } from "react";
  import { CartContext } from "../../context/CartContext";
  import {AuthContext} from "../../context/AuthContext"
  import { useState } from "react";
  import { toast } from "react-toastify";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  import { PayPalButtons } from "@paypal/react-paypal-js";

function CheckOut() {
    const navigate = useNavigate();
    const { cartItems, setCartItems, totalPrice, paypalOrder, userData, setUserData } = useContext(CartContext);
    const {user} = useContext(AuthContext);

    
    
    // const [payment, setPayment] = useState(null);
    const [errorInTranstion, setErrorInTranstion] = useState(null);
  
    const [total, setTotal] = useState(6.00);
  
    const [paymentsValues, setPaymentValues] = useState({
      credit: "",
      exp: "",
      cvv: "",
    });

    
    const handleChangeCredit = ({ target }) => {
      const { name, value } = target;
      setPaymentValues({ ...paymentsValues, [name]: value });
    };
  
  
  
    const placeOrder = async () => {
      try {
        // const {data : payment_status} = await axios.post('http://localhost:4000/payments/pay',{credit_number:paymentsValues.credit});
  
        // setPayment(payment_status);
  
        try {
          const { data: order_status } = await axios.post(
            "https://dnd-board.onrender.com/orders/add",
            {
              customer_details: {
                customer_name: userData.name,
                customer_email: userData.email,
                customer_phone: userData.phone,
                customer_address: {
                  city: userData.city,
                  street: userData.street,
                  building: userData.building,
                },
              },
              payment_details: {
                terminal_number: paymentsValues.credit,
                transaction_number: paymentsValues.exp,
                last_digits: paymentsValues.cvv,
              },
              products: cartItems.map((pr) => {
                return {
                  product: pr._id,
                  RTP: pr.product_price,
                  quantity: pr.quantity,
                };
              }),
            }
          );
  
          navigate("/");
  
          console.log(order_status);
          setCartItems([]);
          alert(
            `you order is placed, order number : ${order_status.order_number}`
          );
        } catch (error) {
          console.log(error);
          toast.error(error.response.data.error);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
      }
    };
  
    const createOrder = (data, actions) => {
      return actions.order.create({
        purchase_units: [{
          description: "DESCRIPTION GOES HERE",
          amount: {
            value: totalPrice,
            currency_code: "ILS",
            breakdown: {
              item_total: {
                currency_code: "ILS",
                value: totalPrice
              }
            }
          },
          items: [...paypalOrder],
            },
      ],
      });
    }
  
  
    async function onApprove(data, actions) {
      const order = await actions.order.capture();
      if (order.status) {
              addUserOrder(order, data);
              setCartItems([]);
              setUserData({});
              navigate("/");
      }
  };
  
    function onError(err) {
      console.log(err);
      setErrorInTranstion("error in transtion");
    }
  
    const addUserOrder = async (order,data) => {
      
      const userOrderData = 
      {
        customer_details: {
          customer_name: userData.name,
          customer_email: userData.email,
          customer_phone: userData.phone,
          customer_address: {
            city: userData.city,
            street: userData.street,
            building: userData.building,
          },
        },
        fireBase_uid: user ? user.uid : "Not a User",

        payment_details: {
          terminal_number: data.paymentSource,
          transaction_number: data.paymentID,
          last_digits: 111,
        },
        products: cartItems.map((pr) => {
          return {
            product: pr._id,
            product_name: pr.product_name,
            product_Img: pr.product_image,
            RTP: pr.product_price,
            quantity: pr.quantity,
          };
        }),
      };
        console.log(cartItems);
        console.log(userOrderData);
        console.log(order);
        console.log(data);
  
      try {
        const response = await axios({
          method: 'POST',
          url: 'https://dnd-board.onrender.com/orders/add',
          headers: {
            'Content-Type': 'application/json',
          },
          data: userOrderData,
          withCredentials: true
        });
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error.response.data.error;
      }
    };
    
  
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
          Payment Options
        </Heading>

        <Heading as="h2" size="xl" mb={4}>
          Credit Card Details
        </Heading>
        <Box mb={4}>
          {/* Credit card details */}
           <Flex direction="column" mb={4}>
            <Input
              onChange={handleChangeCredit}
              placeholder="Card Number"
              mb={2}
              name="credit"
            />
            <Input name="exp" placeholder="Expiration Date" mb={2} onChange={handleChangeCredit}/>
            <Input name="cvv" placeholder="CVV" mb={2} onChange={handleChangeCredit} />
          </Flex> 
          <Box width={"400px"} textAlign={"center"}>
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}        
              />
          </Box>
        </Box>
        <Button onClick={placeOrder} colorScheme="teal">
          Place Order
        </Button>
      </Box>
    );
  };

export default CheckOut