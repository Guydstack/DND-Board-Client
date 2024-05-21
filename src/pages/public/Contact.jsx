import {
  Box,
  Heading,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import axios from 'axios';
import { toast } from "react-toastify";
import Faq from "../../components/sections/Faq";




function Contact() {

  const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false });
  
  const handleSubmit = async (values, actions) => {
    try {
      const url = import.meta.env.VITE_CONTACT_ENDPOINT;
      // Make a POST request to your backend API endpoint
      const response = await axios.post(url, values);
  
      // Check if the request was successful
      if (response.status === 200) {
        console.log('Form data sent to MongoDB successfully:', response.data);
        actions.resetForm();
        toast.success(`Thank you, ${values.name}! Your message has been successfully sent. We'll get back to you shortly.`);
        // You can perform additional actions here if needed
      } else {
        console.error('Failed to send form data to MongoDB:', response.data);
        toast.error(`Oops, something went wrong while sending your message, ${values.name}. Please try again later.`);
      }
    } catch (error) {
      console.error('Error sending form data to MongoDB:', error);
      toast.error(`Oops, something went wrong while sending your message, ${values.name}. Please try again later.`);
    }
  
    // Set submitting to false after the submission process is complete
    actions.setSubmitting(false);
  };
  


  return (
    <>
    <Box minH="65vh" maxWidth="90%" mx="auto" py={110} px={4}>
      <Flex direction='column' alignItems="center">
        <Heading as="h1" size="xl" mb={6} textAlign={"center"}>
          DND BALANCE BOARD
        </Heading>
      </Flex>

      <Flex direction={isMobile ? 'column' : 'row'} alignItems='center' gap={20} mt={8}>
        <Box flex="1" width={"100%"}>
          <Heading as="h2" mb={5}>
            Contact
          </Heading>
          <Text as="h3" size="sm" mb={10}>
          You talk and we listen. That’s how we live every day, and that’s what gets us up in the morning. 
          Our customer experience team is always stoked and ready to answer to all of your questions! 
          </Text>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="name">
              {({ field }) => (
                <FormControl id="name" isRequired mb={4}>
                  <FormLabel>Your Name</FormLabel>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Enter your name"
                  />
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field }) => (
                <FormControl id="email" isRequired mb={4}>
                  <FormLabel>Email Address</FormLabel>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter your email address"
                  />
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ field }) => (
                <FormControl id="message" isRequired mb={4}>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    {...field}
                    placeholder="Enter your message"
                    rows={4}
                  />
                </FormControl>
              )}
            </Field>
            <Button
              type="submit"
              colorScheme="teal"
              size="lg"
              isLoading={isSubmitting}
            >
              Send Message
            </Button>
          </Form>
        )}
      </Formik>
        </Box>

      <Box flex="1" width={"100%"} display="flex" flexDirection="column">
      <Image 
      src='https://res.cloudinary.com/doxiillcn/image/upload/v1714900470/mddrgzjcfj17yyvablkd.jpg' 
      alt='DND באלאנס בורד' 
      boxSize='300px'
      objectFit='cover'
      alignSelf={"center"}
      />
          <Faq/>
      </Box>
      </Flex>
    </Box>
    </>
  );
}

export default Contact;


{/* <Flex direction="row" alignItems="center">
<Text as="h3" size="sm" mb={1} textAlign={"center"} >
  0503504937
</Text>
<Heading as="h3" size="sm" mb={2} paddingLeft={2} textAlign={"center"} dir="rtl">
  טלפון:
</Heading>
</Flex>
<Flex direction="row" alignItems="center">
<Text as="h3" size="sm" mb={1} textAlign={"center"} dir="rtl">
 dahan.nature.design@gmail.com
</Text>
<Heading as="h3" size="sm" mb={1} mr={2} paddingLeft={2} textAlign={"center"} dir="rtl">
  מייל:
</Heading>
</Flex> */}