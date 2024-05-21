import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from './context/AuthContext';

import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./utils/theme";
import CartProvider from "./context/CartContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";





ReactDOM.createRoot(document.getElementById("root")).render(
  <PayPalScriptProvider options={{ clientId:import.meta.env.VITE_CLIENT_ID,currency:"ILS",intent:"capture" }}>
  <CartProvider>
      <AuthProvider>
        <ChakraProvider theme={customTheme}>
            <ToastContainer position="bottom-right" />
            <App />
        </ChakraProvider>
      </AuthProvider>
    </CartProvider>
  </PayPalScriptProvider>
);
