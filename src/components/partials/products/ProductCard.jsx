import {
  Box,
  Center,
  Heading,
  Text,
  Divider,
  Stack,
  Image,
  CardBody,
  Card,
  CardFooter,
  ButtonGroup,
  Button,
  HStack,
  Flex
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { AuthContext } from "../../../context/AuthContext";
import { CartContext } from "../../../context/CartContext";
import {useContext} from "react"

function ProductCard({ product }) {
  const navigate = useNavigate();
  const {colorM, setManuLink} = useContext(AuthContext);
  const { addToCart } = useContext(CartContext)


  return (
    <Box boxShadow="lg" p="0" rounded="lg" bg="white" maxW="xs" my={10}>
      <Center >
      <Box id={product._id} >
      <Card >
          <CardBody >
            <Flex justifyContent={"center"}>
              <Image
                onClick={() => {
                  navigate(`/product/${product._id}`);
                  setManuLink(0);
                }}
                style={{ cursor: "pointer" }}
                // maxH={"fit-content"}
                // width={300}
                height={"330px"}
                width={"auto"}
                src={product.product_image}
                borderRadius="lg"
              />
            </Flex>
            <Stack mt="6" spacing="3">
              <Heading size="sm" textAlign="center">{product.product_name}</Heading>
              <Text fontSize="xs" overflowY="hidden" height={10} textAlign="center">
                {product.product_description}
              </Text>
              <Text  color={ colorM ? "white" : "#1c1c1ca6" } fontSize="2xl" textAlign="center">
                ${product.product_price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="teal" onClick={() => {navigate('/purchase'); addToCart(product); setManuLink(0);} }>
                Buy now
              </Button>
              <Button
                variant="ghost"
                colorScheme="teal"
                onClick={() => {
                  addToCart(product);
                }}
              >
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
      </Center>
    </Box>
  );
}

export default ProductCard;
