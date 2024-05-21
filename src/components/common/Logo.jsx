import React from "react";
import { Box, Button, Link } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
        <Link
                as="button"
                to="/about"
                _hover={{ textDecoration: "none" }}
                clipPath= "circle(50% at 50% 50%)"
                backgroundColor={"transparent"}
                backgroundImage= "url('https://res.cloudinary.com/doxiillcn/image/upload/v1716324091/bhzuzydgfawneqgkzh1g.png')"
                backgroundPosition= "center"
                backgroundRepeat= "no-repeat"
                backgroundSize= "cover"
                width= "55px"
                height= "55px"
                variant="none"
                />
    </Box>
  );
}
