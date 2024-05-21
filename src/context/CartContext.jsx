import { createContext , useState , useEffect} from 'react';

export const CartContext = createContext();

function CartProvider({ children }){

    const [cartItems,setCartItems] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [paypalOrder, setPaypalOrder] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        building: "",
      });


    const addToCart = (product) => {
        //מתי שאני בוחר להכניס מוצר לעגלה 
        //עריכת בדיקה האם המוצר הוא קיים
        const existingItem = cartItems.find((item) => item._id === product._id);

        //אם הוא קיים
        if(existingItem) {
            const updatedCartItems = 
            cartItems.map((item) => product._id === item._id ? {...item,quantity:item.quantity + 1} : item)  
         setCartItems(updatedCartItems);
        }
        //במידה והמוצר לא קיים
        else setCartItems([...cartItems,{...product,quantity:1}])
    }

    const removeFromCart = (product) => {
        const existingItem = cartItems.find((item) => item._id === product._id);

        if(existingItem) {
            if(existingItem.quantity === 1){
                setCartItems((prevCart) => prevCart.filter((item) => item._id !== product._id))
            }
            else{
                const updatedCartItems = 
                cartItems.map((item) => item._id === product._id ? {...item,quantity:item.quantity - 1} : item)
                setCartItems(updatedCartItems)
            }
        }
    }

    const deleteFromCart = (product) => {
        setCartItems((prevCart) => prevCart.filter((item) => item._id !== product._id))
    }

    const resetCart = () => {
        setCartItems([])
    }

    useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems")
    if(storedCartItems) setCartItems(JSON.parse(storedCartItems))
    },[])

    useEffect(() => {
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
    }, [cartItems])

    useEffect(() => {
        const newPaypalOrder = cartItems.map((item) => {
          return  {
            name: item.product_name,
            quantity: item.quantity,
            unit_amount: {
              value: item.product_price,
              currency_code: "ILS",
            },
          }
        })
    
        setPaypalOrder(newPaypalOrder)
      },[cartItems])


      useEffect(() => {
        const updatedTotalPrice = cartItems.reduce(
            (total, item) => total + item.quantity * item.product_price
          ,0);
          setTotalPrice(updatedTotalPrice)
      },[cartItems])



    const value = {
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        resetCart,
        totalProducts,
        setTotalProducts,
        paypalOrder,
        totalPrice,
        userData, setUserData
    }

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}


export default CartProvider;