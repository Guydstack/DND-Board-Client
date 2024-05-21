import {
  HStack,
  Box,
  Image,
  Text,
  Container,
  Heading,
  Button,
  Flex,
  Divider,
  Center,
  Tabs,
  TabPanels,
  TabPanel,
  Tab,
  TabList,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "@chakra-ui/react";
import { FaPlus, FaBalanceScale } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import CustomSpinner from "../../../components/common/CustomSpinner";
import CardsKids from "../../../components/sections/CardsKids";





function Product() {
  const [num, setNum] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const { addToCart, totalProducts, setTotalProducts } = useContext(CartContext);
  const [isKidsBoard, setIsKidsBoard] = useState(false);


  const [qty, setQty] = useState(1);

  // useEffect(() => {
  //   setTotalProducts(qty)
  // },[qty, setQty]);

  const increment = () => {
    setQty(qty + 1);
  };

  const decrement = () => {
    if (qty > 1) setQty(qty - 1);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);

        const { data } = await axios.get(
          `https://dnd-board.onrender.com/products/managers/by_id/${id}`
        );

        console.log(data);

        setProduct(data.product);

        data?.product.categories[0].category_name === "Balance Board Kids" && (setIsKidsBoard(true));
        
      } catch (error) {
        setError(error.response.data.error);
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, []);



  useEffect(() => {
    return () => {
      localStorage.removeItem("chosen");
    };
  }, []);
  return (
    <>
      {loading && <CustomSpinner/>}
      {error && <p>{error}</p>}
      {product && (
        <>
          <Flex margin="0 auto" direction="column" maxW="90%">
            <Flex
              minH="65vh"
              maxW="100%"
              mx="auto"
              mt={150}
              mb={50}
              px={4}
              align="center"
              direction={{base: "column", md: "column", lg: "row"}}
            >
              <Box flex={1}>
                <Tabs defaultIndex={0} variant='unstyled'>
                <TabPanels>
                  <Flex justifyContent={"center"}>
                    <TabPanel>
                      <Image src={product.product_image} alt={product.product_name} height={"450px"} />
                    </TabPanel>
                  </Flex>
                  <TabPanel>
                    {product?.categories[0].category_name === "Balance Board" ? (
                        <Image src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/ucnfwr3zmup1zeuzjzus.jpg" height={"450px"} />
                    ) : (
                        <Image src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/ypqci9ixyo2qc5fk2rzj.jpg" height={"450px"} />
                    )}
                  </TabPanel>
                  <TabPanel>
                  {product?.categories[0].category_name === "Balance Board" ? (
                        <Image src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/iush85cgq0qg51g49rd9.jpg" height={"450px"} />
                    ) : (
                        <Image src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/b6vut6p8ohwx2kpt4gtx.jpg" height={"450px"} />
                    )}
                  </TabPanel>
                  <TabPanel>
                  {product?.categories[0].category_name === "Balance Board" ? (
                        <Image src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/t6y0qzmgru5xu7pypzt8.jpg" height={"450px"} />
                    ) : (
                        <Image src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/r7sk1pkg915xuqcs41nm.jpg" height={"450px"} />
                    )}
                  </TabPanel>
                </TabPanels>
                <TabList>
                  <Tab>
                    <Box boxSize="50px">
                      <Image
                          src={product.product_image} 
                          alt={product.product_name}
                          boxSize="100%"
                          objectFit="cover"
                      />
                    </Box>
                  </Tab>
                  <Tab>
                    <Box boxSize="50px">
                      {product?.categories[0].category_name === "Balance Board" ? (
                       <Image
                         src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/ucnfwr3zmup1zeuzjzus.jpg" 
                         alt="באלאנס בורד"
                         boxSize="100%"
                         objectFit="cover"
                       />  
                      ) : (
                        <Image
                        src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/ypqci9ixyo2qc5fk2rzj.jpg" 
                        alt="באלאנס בורד ילדים" 
                        boxSize="100%"
                        objectFit="cover"
                        /> 
                      )}
                    </Box>
                  </Tab>
                  <Tab>
                    <Box boxSize="50px">
                      {product?.categories[0].category_name === "Balance Board" ? (
                        <Image
                        src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/iush85cgq0qg51g49rd9.jpg" 
                        alt="באלאנס בורד"
                        boxSize="100%"
                        objectFit="cover"
                        /> 
                        ) : (
                          <Image
                          src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/b6vut6p8ohwx2kpt4gtx.jpg" 
                          alt="באלאנס בורד ילדים" 
                          boxSize="100%"
                          objectFit="cover"
                        /> 
                        )}                      
                    </Box>
                  </Tab>
                  <Tab>
                    <Box boxSize="50px">
                      {product?.categories[0].category_name === "Balance Board" ? (
                        <Image
                        src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/t6y0qzmgru5xu7pypzt8.jpg" 
                        alt="באלאנס בורד"
                        boxSize="100%"
                        objectFit="cover"
                        /> 
                        ) : (
                          <Image
                          src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/r7sk1pkg915xuqcs41nm.jpg" 
                          alt="באלאנס בורד ילדים" 
                          boxSize="100%"
                          objectFit="cover"
                        /> 
                        )}                      
                    </Box>
                  </Tab>
                </TabList>
              </Tabs>
              </Box>
              <Box ml={4} flex={2}>
                <Heading as="h2" size="lg" mb={2} textAlign={"center"}>
                  {product.product_name}
                </Heading>
                <Divider mb={2} />
                <Text mb={2} textAlign={"center"}>{product.product_description}</Text>
                <Text fontWeight="bold" mb={2} textAlign={"center"}>
                  ${product.product_price}
                </Text>
    
                {/* <Button onClick={increment}>+</Button>
                <Text> {qty} </Text>
                <Button onClick={decrement}>-</Button> */}
                <Flex justifyContent={"center"}>
                  <Button
                    variant="solid" 
                    colorScheme="teal"
                    size="lg"
                    width={"200px"}
                    onClick={() => {
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </Button>

                  {/* <Link to={`/#${id}`}>
                    <Button>
                    Go Back
                    </Button>
                  </Link> */}
                </Flex>

                {product?.categories[0].category_name === "Balance Board" ? (
                <Box mt={5}>
                <Flex align="center" dir="rtl">
                    <FaPlus />
                    <Text as="p" mr={2}>
                        כל הדגמים מגיעים עם סטנד וגליל
                    </Text>
                </Flex>
                  <Flex align="center" dir="rtl">
                      <FaPlus />
                      <Text as="p" mr={2}>
                      ניתן להזמין חריטה/אינטרסיה בהתאמה אישית בתוספת תשלום
                      </Text>
                  </Flex>
                  <Flex align="center" dir="rtl">
                      <FaPlus />
                      <Text as="p" mr={2}>
                      כל בורד ייחודי בפני עצמו ומצופה בפורניר אלון משני צידוי
                      </Text>
                  </Flex>
                  <Flex align="center" dir="rtl">
                      <FaPlus />
                      <Text as="p" mr={2}>
                      הפורניר הינו טבעי לחלוטין ולכן עשויה להיות סטייה בטקסטורה 
                      </Text>
                  </Flex>
                </Box>
                        ) : (
                <Box mt={5}>
                <Flex align="center" dir="rtl">
                    <FaPlus />
                    <Text as="p" mr={2}>
                    כל הדגמים מגיעים עם קשת מובנת                    
                    </Text>
                </Flex>
                  <Flex align="center" dir="rtl">
                      <FaPlus />
                      <Text as="p" mr={2}>
                      ניתן להזמין חריטה/אינטרסיה בהתאמה אישית בתוספת תשלום
                      </Text>
                  </Flex>
                  <Flex align="center" dir="rtl">
                      <FaPlus />
                      <Text as="p" mr={2}>
                      כל בורד ייחודי בפני עצמו ומצופה בפורניר אלון משני צידוי
                      </Text>
                  </Flex>
                  <Flex align="center" dir="rtl">
                      <FaPlus />
                      <Text as="p" mr={2}>
                      הפורניר הינו טבעי לחלוטין ולכן עשויה להיות סטייה בטקסטורה 
                      </Text>
                  </Flex>
                </Box>
                        )}  

              </Box>
            </Flex>
              {isKidsBoard && <CardsKids />}
          </Flex>
             
        </>
      )}
    </>
  );
}

export default Product;
