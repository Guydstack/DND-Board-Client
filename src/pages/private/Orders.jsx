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
      return date.toLocaleDateString(); 
    };


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
