import {
    Box,
    Heading,
    Divider,
    Center,
    Tabs,
    TabPanels,
    TabPanel,
    Tab,
    TabList,
    CardFooter,
    Text, Container, Flex, IconButton, HStack, Button, Card, CardHeader, CardBody, Image
} from "@chakra-ui/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useContext, useEffect, useState, useRef } from "react";
import { GiMuscleUp, GiBodyBalance, GiHealing, GiTargetDummy } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";




function CardsKids() {
    const scrollRef = useRef(null);

    return (
        <>
            <Box direction={"column"} justifyContent={"space-evenly"}>
                <Heading as={"h2"} dir="rtl" textAlign={"center"} pb={"5"}>היתרונות של לוח איזון מעץ לילדים</Heading>
                <Text as={"p"} dir="rtl" mx={{ base: "0", md: "50px" }}>רבים מתייחסים אל הבלנס בורד ככלי לרכישת המיומנויות הדרושות לצורך גלישת גלים. ואכן זהו כלי יעיל מאוד בעזרתו הילדים יכולים לתרגל על יבש, ובבוא היום להגיע מוכנים אל הים ולהצליח לגלוש בצורה בטוחה. אך הרשו לנו להוציא את לוח האיזון מהקונטקסט של גלישת גלים, זהו כלי אימון מצוין בעזרתו ניתן להשיג מספר מטרות חשובות:
                </Text>
            </Box>
            <Box position="relative">
                <Flex
                    ref={scrollRef}
                    alignItems="center"
                    justifyContent={"space-evenly"}
                    gap={"60px"}
                    overflowX="auto"
                    css={{
                        "&::-webkit-scrollbar": {
                            width: "10px",
                            height: "3px"
                        },
                        "&::-webkit-scrollbar-track": {
                            background: "#319795",
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: "black",
                        },
                    }}
                >
                    <Box boxShadow="lg" p="0" rounded="lg" bg="white" maxW="xs" my={10}>
                        <Card height="360px" width="360px">
                            <CardHeader dir="rtl">
                                <Heading size='md'> מאפשר לשפר את המוטוריקה העדינה, הקואורדינציה והשמירה על איזון</Heading>
                            </CardHeader>
                            <CardBody dir="rtl" textAlign={"justify"}>
                                <Text>אלו הן מיומנויות חשובות בפעילויות רבות שהילדים יעשו במהלך חייהם, והדרך לשפר אותם היא רק באמצעות אימון. בעזרת בלנס בורד לילדים ניתן לשפר את המיומנויות הללו.</Text>
                            </CardBody>
                            <Flex justifyContent={"center"} mb={2} >
                                <FaBalanceScale size={100} />
                            </Flex>
                        </Card>
                    </Box>
                    <Box boxShadow="lg" p="0" rounded="lg" bg="white" maxW="xs" my={10}>
                        <Card height="360px" width="360px">
                            <CardHeader dir="rtl">
                                <Heading size='md'> לחזק את שרירי הליבה</Heading>
                            </CardHeader>
                            <CardBody dir="rtl" textAlign={"justify"}>
                                <Text>חיזוק שרירי הליבה הוא דבר חשוב מאוד. שרירי הליבה משפיעים על היציבה. שרירי ליבה חזקים מונעים כאבי גב ובעיות שונות בעתיד.</Text>
                            </CardBody>
                            <Flex justifyContent={"center"} mb={2} >
                                <GiBodyBalance size={100} />
                            </Flex>
                        </Card>
                    </Box>
                    <Box boxShadow="lg" p="0" rounded="lg" bg="white" maxW="xs" my={10}>
                        <Card height="360px" width="360px">
                            <CardHeader dir="rtl">
                                <Heading size='md'> חיזוק העצמות</Heading>
                            </CardHeader>
                            <CardBody dir="rtl" textAlign={"justify"}>
                                <Text>במקביל לחיזוק שרירי הליבה, הפעילות גם מעודדת את חיזוק והתפתחות העצמות.</Text>
                            </CardBody>
                            <Flex justifyContent={"center"} mb={2} >
                                <GiHealing size={100} />
                            </Flex>
                        </Card>
                    </Box>
                    <Box boxShadow="lg" p="0" rounded="lg" bg="white" maxW="xs" my={10}>
                        <Card height="360px" width="360px">
                            <CardHeader dir="rtl">
                                <Heading size='md'> חיזוק הביטחון העצמי</Heading>
                            </CardHeader>
                            <CardBody dir="rtl" textAlign={"justify"}>
                                <Text>בחיים כל ההתחלות הן קשות, אך הבורד מאפשר לילדים ללמוד שבעזרת אימון והתמדה כל אחד יכול להגיע להישגים.</Text>
                            </CardBody>
                            <Flex justifyContent={"center"} mb={2} >
                                <GiMuscleUp size={100} />
                            </Flex>
                        </Card>
                    </Box>
                    <Box boxShadow="lg" p="0" rounded="lg" bg="white" maxW="xs" my={10}>
                        <Card height="360px" width="360px">
                            <CardHeader dir="rtl">
                                <Heading size='md'> תורם לשיפור הריכוז והמיקוד</Heading>
                            </CardHeader>
                            <CardBody dir="rtl" textAlign={"justify"}>
                                <Text>פעילות המשחק על הבלנס בורד דורשת מהילד להתרכז. באופן טבעי הילדים לומדים להיות מרוכזים וממוקדים. הם מרגישים את גופם ומאזנים את שיווי המשקל. וכמו כל יכולת שמשפרים, יש לכך ערך גם בפעילויות אחרות.</Text>
                            </CardBody>
                            <Flex justifyContent={"center"} mb={2} >
                                <GiTargetDummy size={100} />
                            </Flex>
                        </Card>
                    </Box>


                </Flex>
                <IconButton
                    icon={<SlArrowLeft />}
                    aria-label="Scroll left"
                    position="absolute"
                    borderRadius={"none"}
                    left="-25px"
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
                    onClick={() => { scrollRef.current.scrollLeft -= 100; }}
                />
                <IconButton
                    icon={<SlArrowRight />}
                    aria-label="Scroll right"
                    position="absolute"
                    borderRadius={"none"}
                    right="-50px"
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
                    onClick={() => { scrollRef.current.scrollLeft += 100; }}
                />
            </Box>
        </>
    )
}

export default CardsKids