import { useContext, useEffect, useState, useRef } from "react";
import ProductCard from "../../../components/partials/products/ProductCard";
import axios from "axios";
import { useLoaderData, useLocation } from "react-router-dom";
import { Box, Heading, Text, Container, Flex, IconButton, HStack, Button, Center, Card, CardHeader, CardBody, Image, useBreakpointValue } from "@chakra-ui/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { AuthContext } from "../../../context/AuthContext";
import Prallex from "../../../components/sections/Prallex";
import Logo from "../../../components/common/Logo";
import { MdExpandMore, MdExpandLess } from 'react-icons/md';



// import { CartContext } from "../../../context/CartContext";

function Products() {
  const scrollRef = useRef(null);
  const proModelsRef = useRef(null);
  const kidsModelsRef = useRef(null);

  const products = useLoaderData();
  const {searchTerm, FilterdProducts, setFilterdProducts, setAllProducts, colorM} = useContext(AuthContext);
  // const [FilterdProducts, setFilterdProducts] = useState(products);


    //implement search input
    // useEffect(() => {
    //   const searchResults = products.filter(
    //     (product) =>
    //       product.product_description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //       product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
  
    //   setFilterdProducts(searchResults);
    // }, [searchTerm]);


  // const { addToCart } = useContext(CartContext);


  useEffect(() => {
    setAllProducts(products)
  },[products])

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "auto" });
  };
  
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };


  
  return (
    <>
      <Box minH="65vh" maxW="100%" mx="auto" py={110} px={4}>

      <Box position="relative" width="100%">
        <Box
          as="video"
          src="/public/DND_Balance_Board_Video.mp4"
          alt="home page video"
          objectFit="cover"
          width="100%"
          sx={{
            aspectRatio: "16/9",
            maxH: "450px",
          }}
          autoPlay
          muted
          loop
          />

          <Box
            position="absolute"
            bottom="20px"
            left="20px"
            display="flex"
            flexWrap="wrap"
            gap="20px"
          >
            <Button  backgroundColor={"white"} height={"50px"} width={"100px"} onClick={() => scrollToSection(proModelsRef)} color={"black"}>PRO</Button>
            <Button  backgroundColor={"white"} height={"50px"} width={"100px"} onClick={() => scrollToSection(kidsModelsRef)} color={"black"}>KIDS</Button>
          </Box>
        </Box>

          <Heading as="h2" size="xl" mb={5} mt={5} textAlign={"center"}>
          באלאנס בורד ללא תחרות
          </Heading>
          {/* <Text my={5} textAlign={"center"} dir="rtl" lang="he">
              הבאלאנס בורד שלנו בעל שייפ ייחודי המאפשר הנאה מרבית עם עיצוב מלא בסטייל!
              הוא מבטא את כל הגישה הסביבתית והמחויבות לאיכות גבוהה. 
              הבורד עשוי מלוח בירץ׳ אירופאי באיכות הגבוהה ביותר ומצופה בפורניר אלון למראה אלגנטי ומיוחד.
              כל בורד מקבל חריטה של גל העשוי גם הוא מפורניר אגוז אמריקאי, המודבק בטכניקת אינטרסיה. כל בורד בעבודת יד שונה מקודמו וייחודי בפני עצמו, ניתן להזמין חריטה/אינטרסיה בהתאמה אישית. 
              הבורדים שלנו לא רק מהנים, אלה משמשים כפריט עיצובי ייחודי המושך את העין ויוצר אווירה מושלמת בכל חלל. השילוב של פורניר נותן תחושה של מוצר חיי בעל אופי ואלגנטיות. ואת הטאצ‘ הסופי מעניקים לו באמצעות שמן ווקס אקולוגי המדגיש את טקסטורת העץ הטבעית.
              ​הרולר מיוצר אצלנו בעבודת חריטה ייחודית, ועשוי משכבות של עץ אורן ממוחזר העטוף בשעם ומאפשר תנועה חלקה ומגע מושלם בין הבורד למשטח. הרולר נשאר יציב, עמיד בפני שחיקה, ושומר על צורתו לנצח.
          </Text> */}

          <Box>
            <Text dir='rtl' textAlign={"center"}>
              הבאלאנס בורד שלנו בעל שייפ ייחודי המאפשר הנאה מרבית עם עיצוב מלא בסטייל!
              הוא מבטא את כל הגישה הסביבתית והמחויבות לאיכות גבוהה. 
            </Text>

              {expanded ? (

            <Text dir='rtl' textAlign={"center"}>
                  הבורד עשוי מלוח בירץ׳ אירופאי באיכות הגבוהה ביותר ומצופה בפורניר אלון למראה אלגנטי ומיוחד.
                  כל בורד מקבל חריטה של גל העשוי גם הוא מפורניר אגוז אמריקאי, המודבק בטכניקת אינטרסיה. כל בורד בעבודת יד שונה מקודמו וייחודי בפני עצמו, ניתן להזמין חריטה/אינטרסיה בהתאמה אישית. 
                  הבורדים שלנו לא רק מהנים, אלה משמשים כפריט עיצובי ייחודי המושך את העין ויוצר אווירה מושלמת בכל חלל. השילוב של פורניר נותן תחושה של מוצר חיי בעל אופי ואלגנטיות. ואת הטאצ‘ הסופי מעניקים לו באמצעות שמן ווקס אקולוגי המדגיש את טקסטורת העץ הטבעית.
                  הרולר מיוצר אצלנו בעבודת חריטה ייחודית, ועשוי משכבות של עץ אורן ממוחזר העטוף בשעם ומאפשר תנועה חלקה ומגע מושלם בין הבורד למשטח. הרולר נשאר יציב, עמיד בפני שחיקה, ושומר על צורתו לנצח.
            </Text>

              ) : (
                ""
              )}
                <Flex justifyContent={"center"}>
                  <IconButton
                    top={"50px"}
                    zIndex={89}
                    backgroundColor={"blackAlpha.100"}
                    borderRadius={"50%"}
                    icon={expanded ? <MdExpandLess size={"40px"} /> : <MdExpandMore size={"40px"} />} 
                    onClick={toggleExpanded}
                    aria-label={expanded ? "Show less" : "Show more"}
                    variant="ghost"
                  />
                </Flex>
          </Box>

          <Prallex/>

          <Heading as="h2" size="md" mt={10} ref={proModelsRef} textAlign={"center"}>
          Balance Board Pro
          </Heading>
          <Box position="relative">
            <Flex
              ref={scrollRef}
              alignItems="center"
              gap={5}
              mx={10}
              overflowX="auto"
              css={{
                "&::-webkit-scrollbar": {
                  width:"10px",
                  height:"3px"
                },
                "&::-webkit-scrollbar-track": {
                  background: "#319795",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "black",
                },
              }}
            >
              {/* {products?.map((product) => (
                <ProductCard 
                  key={product._id}
                  product={product}
                  // addToCart={addToCart}
                />
              ))} */}

                {products?.filter((product) => 
                  product.categories.some((category) => category.category_name === "Balance Board")
                  ).map((product) => (
                    <ProductCard 
                      key={product._id}
                      product={product}
                    />
                  ))}
            </Flex>
            <IconButton
              icon={<SlArrowLeft color={colorM ? "white" : "black"}/>}
              aria-label="Scroll left"
              position="absolute"
              borderRadius={"none"}
              left="0"
              bottom="50%"
              sx={{
                display: { base: "none", sm: "none", md: "inline", lg: "inline" },
                background: "rgba(255, 255, 255, 0)",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0)",
                },
                "&:active": {
                  background: "none",
                },
              }}
              onClick={() => { scrollRef.current.scrollLeft -= 1000; }}
            />
            <IconButton
              icon={<SlArrowRight color={colorM ? "white" : "black"}/>}
              aria-label="Scroll right"
              position="absolute"
              borderRadius={"none"}
              right="-25px"
              bottom="50%"
              sx={{
                display: { base: "none", sm: "none", md: "inline", lg: "inline" },
                background: "rgba(255, 255, 255, 0)",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0)",
                },
                "&:active": {
                  background: "none",
                },
              }}
              onClick={() => { scrollRef.current.scrollLeft += 1000; }}
            />
          </Box>

          <Heading as="h2" size="md" mt={10} ref={kidsModelsRef} textAlign={"center"}>
          Balance Board Kids
          </Heading>
          
          <Box
              w='100%'
              h="fit-content"
              pos='relative'
              overflow='hidden'
              mt={10}
          >
          <Box
            bgImage="https://res.cloudinary.com/doxiillcn/image/upload/v1714113582/stzlzfdqm1fef6na1cbo.jpg"
            bgPosition={"bottom"}
            bgSize={isMobile ? 'cover' : 'cover'}
            bgAttachment='fixed'
            bgRepeat="no-repeat"
            h='100%'
            pos='absolute'
            top='0'
            left='0'
            right='0'
            bottom='0'
            zIndex='-1'
          />
            <Flex flexWrap="wrap" my={5} justifyContent={{ base: "center", md: "space-evenly" }}>
              {products?.filter((product) => 
                  product.categories.some((category) => category.category_name === "Balance Board Kids")
                )
                .map((product) => (
                    <ProductCard 
                      key={product._id}
                      product={product}
                    />
                ))}
                <Card maxW='lg' my={10} boxShadow="lg" p="0" rounded="lg" bg="white">
                <CardHeader>
                  <Heading as="h2" size="xl" dir="rtl" textAlign={"center"} color={"black"}>
                  בלנס בורד - עכשיו גם לילדים
                  </Heading>
                </CardHeader>
                  <CardBody padding={0} margin={0}>
                  <Text as={"p"} dir="rtl" m={5} textAlign={"justify"} color={"black"}>
                                    לפי שנדבר על בלנס בורד ולמה בכלל צריך לוח איזון מעץ לילדים, הרשו לנו לשאול אתכם ההורים שאלה - באיזה גיל כדאי להתחיל לעסוק בפעילות גופנית?
                    התשובה ידועה מראש, כבר בגיל הילדות צריך ללמד את הילדים לעסוק בפעילות גופנית. זוהי התקופה בה גופם ונפשם של הילדים עוברים תהליך התפתחות מואץ. ולכן נרצה כבר עכשיו להשקיע בפיתוח המיומנויות המוטוריות, והקניית הרגלי חיים נכונים כבר מגיל צעיר.
                    וזאת נוכל לעשות בעזרת לוח איזון לילדים. יש בו שילוב של פעילות משחק מאתגרת, יחדיו עם אימון טוב וחשוב לגוף וגם למוח.
                  </Text>
                  <Flex justifyContent={"center"} mb={5}>
                    <Image src="https://res.cloudinary.com/doxiillcn/image/upload/v1714231773/bwacjvma0uxwm916lq7s.jpg" alt={"Balance Board Kids"} height={"250px"} />
                  </Flex>
                  
                  </CardBody>
                </Card>
            </Flex>
          </Box>


        {/* <Flex flexWrap="wrap" my={5} justifyContent={{ base: "center", md: "space-between" }}>
          {products?.map((product) => (
         <ProductCard 
         key={product._id}
         product={product}
        //  addToCart={addToCart}
         />
          ))}
        </Flex> */}

        <Heading as="h1" size="xl" mb={5} mt={5} textAlign={"center"}>
        באלאנס בורד DND
        </Heading>
        <Text my={5} textAlign={"center"} dir="rtl" lang="he">
                  עבורנו, ייצור נקי ואקולוגי היא יותר מסתם אסטרטגיה שיווקית; עבורנו קיימות סביבתית היא חלק מרכזי בחזון שלנו והיא באה לידי ביטוי בתהליכי הייצור והמוצרים שלנו. 
          אנו מודעים ומחויבים לאחריותנו כלפי הסביבה, וברוח זו אנו עובדים עם ספקים אזוריים ומוסמכים העומדים בסטנדרטים שלנו.
          אנו מקפידים על בחירת חומרי הגלם ועובדים עם שיטות עיבוד ידני המעניקות למוצרינו את האפיון הייחודי, 
          לצד איכות גבוהה ללא פשרות וחיי מדף ארוכים. ועבורכם הנאה, לייפסטייל ושיפור היכולות הגופניות.
        </Text>

      </Box>
    </>
  );
}

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(
      "https://dnd-board.onrender.com/products/managers/all"
    );
    return data.products;
  } catch (error) {
    return error.response.data.error;
  }
};

export default Products;
