import { Box, Text, Heading, useBreakpointValue } from '@chakra-ui/react';

const Prallex = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      w='100%'
      h='550px'
      pos='relative'
      overflow='hidden'

    >
      <Box
        bgImage="https://res.cloudinary.com/doxiillcn/image/upload/v1715616975/xjj3xrmychrfltidffim.jpg"
        bgSize={isMobile ? 'cover' : 'cover'}
        bgAttachment='fixed'
        bgRepeat="no-repeat"
        bgPos={isMobile ? 'center' : 'center 41%'} // Adjusted bgPos for mobile
        h='100%'
        pos='absolute'
        top='0'
        left='0'
        right='0'
        bottom='0'
        zIndex='-1'
      />
      <Box
        pos="absolute"
        top='50%'
        left="50%"
        transform='translate(-50%, -50%)'
        bg="white"
        p={10}
        borderRadius="md"
        textAlign="center"
        width={isMobile ? '80%' : '50%'}
        boxShadow="md"
        color="black"
      >
        <Heading>Our Stand</Heading>
        <Text dir='rtl' fontSize={isMobile ? 16 : 18}>
          כול בורד מגיע עם מעמד ייחודי ומרשים אשר מאפשר להניח את הבורד בצורה אופקית או אנכית. בחלקו האחורי של המעמד נמצא מיקום ייעודי בוא ניתן להעמיד את הגליל.
        </Text>
      </Box>
    </Box>
  );
};

export default Prallex;
