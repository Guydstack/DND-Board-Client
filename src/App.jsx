import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
  Outlet
} from "react-router-dom";
import { Suspense , lazy, useContext } from 'react';
import { Spinner } from '@chakra-ui/react'
import CustomSpinner from "./components/common/CustomSpinner";


import Root from './pages/Root';

const About = lazy(() => import('./pages/public/About'));
const Contact = lazy(() => import('./pages/public/Contact'));
const Products = lazy(() => import('./pages/public/products/Products'));
import PurchasePage from "./pages/public/Purchase";
const Product = lazy(() => import('./pages/public/products/Product'));
const Orders = lazy(() => import('./pages/private/Orders'));
// const Purchase = lazy(() => import('./pages/public/Purchase'));
const Login = lazy(() => import('./pages/public/Login'));
const User = lazy(() => import('./pages/private/User'));
import CheckOut from "./pages/public/CheckOut";



import { getAllProducts } from "./pages/public/products/Products";
import { getUserOrders } from "./pages/private/Orders";



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<Root/>}>
            <Route index loader={getAllProducts} element={<Products/>}/>
            <Route path="product/:id" element={<Product/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="orders" loader={getUserOrders} element={<Orders/>}/>
            <Route path="purchase" element={<PurchasePage/>}/>
            <Route path="checkout" element={<CheckOut/>}/>
            <Route path="user" element={<User/>}/>
        </Route>

    )
  )
  

  return (
    <>
      <Suspense 
      //   fallback={<Spinner
      //   thickness='4px'
      //   speed='0.65s'
      //   emptyColor='gray.200'
      //   color='blue.500'
      //   size='xl'
      // />}
      fallback={<CustomSpinner/>}
    >
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}

export default App


