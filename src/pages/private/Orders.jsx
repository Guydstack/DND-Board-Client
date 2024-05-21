import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import axios from "axios";
import { useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState, useEffect } from "react";





const Orders = () => {
  const { user } = useContext(AuthContext);
  const userOrders = useLoaderData();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const filterUserOrders = userOrders?.orders.filter(order => order?.fireBase_uid === user?.uid);
    setOrders(filterUserOrders);
  }, [user]);

    // Function to format date
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString(); // Adjust format as needed
    };

    console.log(user);


      // Function to map status number to string
  const getStatusString = (statusNumber) => {
    switch (statusNumber) {
      case 1:
        return "New";
      case 2:
        return "Processing";
      case 3:
        return "Done";
      case 4:
        return "Canceled";
      default:
        return "Unknown";
    }
  };

  // Assuming orders data is passed as props or fetched from an API
  // const orders = [
  //   { id: 1, date: '2023-05-22', total: 29.99, status: 'Delivered' },
  //   { id: 2, date: '2023-05-18', total: 49.99, status: 'Shipped' },
  //   { id: 3, date: '2023-05-15', total: 19.99, status: 'Processing' },
  // ];

  return (
    <Box minH="65vh" maxW="1000px" mx="auto" py={110} px={4}>
        <Heading as="h1" size="xl" mb={6} textAlign={"center"}>
          My Orders
        </Heading>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Date</Th>
            <Th>Total</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.order_number}>
              <Td>{order.order_number}</Td>
              <Td>{formatDate(order.created_at)}</Td>
              <Td>${order.total_price}</Td>
              <Td>{getStatusString(order.status)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};


export const getUserOrders = async () => {
  try {
    const { data } = await axios.get(
      "https://dnd-board.onrender.com/orders/managers/all"
    );
    return data;
  } catch (error) {
    return error.response.data.error;
  }
};




export default Orders;
