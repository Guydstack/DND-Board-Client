import { extendTheme } from "@chakra-ui/react";



const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E"
  },
  primary_black: {
    100: "#000000",
    200: "#1b1b1b",
    300: "#333333",
    400: "#4c4c4c",
    500: "#666666",
    600: "#7c7c7c",
    700: "#9d9d9d",
    800: "#bcbcbc",
    900: "#ffffff",
  },
};

// const fonts = {
//   heading: "'open-sans', sans-serif",
//   body: "'raleway', sans-serif",
// };



const customTheme = extendTheme({ colors });

export default customTheme;