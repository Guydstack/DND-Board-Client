import { Flex, Box, Heading, Text, Icon } from "@chakra-ui/react";
import { CiGlobe, CiDeliveryTruck, CiMedal } from "react-icons/ci";


function TextWithIcons() {
  return (
    <Box py={10}>
      <Flex
        width="90%"
        mx="auto"
        gap={10}
        direction={{ base: "column", md: "row" }}
        alignItems="stretch" // Make all items stretch to match the tallest one
        color="black"
      >
        <Flex
          flex="1"
          bg="white"
          p={6}
          borderRadius="md"
          boxShadow="md"
          alignItems="center"
          flexDirection="column" // Align content vertically
        >
          <Icon as={CiDeliveryTruck} boxSize={10} color="green.500" mb={4} />
          <Box textAlign="center">
            <Heading as="h3" size="md" mb={2} dir="rtl">
              משלוח חינם
            </Heading>
            <Text dir="rtl">
            משלוח חינם בהזמנה מעל 600 ש״ח
            </Text>
          </Box>
        </Flex>

        <Flex
          flex="1"
          bg="white"
          p={6}
          borderRadius="md"
          boxShadow="md"
          alignItems="center"
          flexDirection="column" // Align content vertically
        >
          <Icon as={CiGlobe} boxSize={10} color="blue.500" mb={4} />
          <Box textAlign="center">
            <Heading as="h3" size="md" mb={2} dir="rtl">
            ייצור בר סביבתי
            </Heading>
            <Text dir="rtl">
            המוצרים שלנו יוצרים פליטת פחמן קטנה
            </Text>
          </Box>
        </Flex>

        <Flex
          flex="1"
          bg="white"
          p={6}
          borderRadius="md"
          boxShadow="md"
          alignItems="center"
          flexDirection="column" // Align content vertically
        >
          <Icon as={CiMedal} boxSize={10} color="purple.500" mb={4} />
          <Box textAlign="center">
            <Heading as="h3" size="md" mb={2} dir="rtl">
            איכות גבוהה ביותר
            </Heading>
            <Text dir="rtl">
            כל מוצר נעשה ומתוחזק בזהירות ובאכפתיות על ידינו            
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default TextWithIcons;
