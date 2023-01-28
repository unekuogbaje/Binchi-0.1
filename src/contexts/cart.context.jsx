import { 
    createContext, 
    useState, 
    useEffect 
} from "react";

export const addCartItem = (cartItems, productToAdd) => {
  // check if productToAdd is in cartItems
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
      // meaning if cartItem's id value is equal to productToAdd id value, add said cartItem to cart
    );
  // if found, increase quantity
  
  if(existingCartItem) {
    return cartItems.map((cartItem) => 
    cartItem.id === productToAdd.id
    ? { ...cartItem, quantity: cartItem.quantity + 1 } 
    : cartItem
    );
  };

  // return new array with modified cartItems or new item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemTocart: () => {},
    cartItemCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        setCartItemCount(count);
    }, [cartItems]);
    

    const addItemTocart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { 
        isCartOpen, 
        setIsCartOpen,
        cartItems,
        addItemTocart,
        cartItemCount,
    };

    return (
        <CartContext.Provider value={value} >{children} </CartContext.Provider>
    )
};