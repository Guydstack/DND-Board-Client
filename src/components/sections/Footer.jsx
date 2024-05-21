import { Box, Flex, Text, VStack, Divider, Stack } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";



const Footer = () => {
  return (
    <Box as="footer" py={8} bg="white" color="black"
    >
      <Flex direction={{ base: 'column', md: 'column' }} maxW="7xl" mx="auto">
        <Divider borderColor={"blackAlpha.300"} borderWidth={1} width={"auto"} />
        <VStack flex="1" paddingTop={5} paddingBottom={5} spacing={4} align={{ base: 'center', md: 'crnter' }}>
          <Stack spacing={2} direction='row'>
            <Link to="https://instagram.com/dnd.board" target="_blank"><FaInstagram/></Link>
            <Link to="https://facebook.com/Dahan.Nature.Design" target="_blank"><FaFacebookF/></Link>
          </Stack>
          <Text fontSize="lg" fontWeight="bold">
            DND BOARD
          </Text>
        </VStack>
        <VStack flex="1" spacing={3} align={{ base: 'center', md: 'center' }}>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"contact"}>FAQ</Link>
          <Link to={"contact"}>Contact</Link>
        </VStack>
        <VStack flex="1" spacing={3} align={{ base: 'center', md: 'center' }}>
          <Text fontSize='xs' paddingTop={5}>&copy; {new Date().getFullYear()} All rights reserved.</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
