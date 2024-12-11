import { createContext, useEffect, useState } from 'react';
import { getAllPizzas } from '../service/pizzaService';

export const ItemsContext = createContext({});

const INITIAL_CART = {
  cartItems: [],
  total: 0
};

const ItemsProvider = ({ children }) => {
  const [storeItems, setStoreItems] = useState([]);
  const [cartState, setCartState] = useState(INITIAL_CART);

  useEffect(() => {
    getAllPizzas().then((data) => setStoreItems(data));
  }, []);

  const getItemFromArray = (itemId, array) => {
    const item = array.find((item) => item.id === itemId);
    return item;
  };

  const getStoreItem = (itemId) => getItemFromArray(itemId, storeItems);

  const getQuantity = (itemId) => {
    return getItemFromArray(itemId, cartState.cartItems)?.quantity || 0;
  };

  const onAdd = (itemToAdd) => {
    const quantity = getQuantity(itemToAdd.id);
    const curItemState = { ...itemToAdd, quantity };
    if (!quantity) {
      addFirstToCart(curItemState);
    } else {
      increaseQuantity(curItemState);
    }
  };

  const onRemove = (itemToRemove) => {
    const quantity = getQuantity(itemToRemove.id);
    const curItemState = { ...itemToRemove, quantity };
    if (quantity === 1) {
      removeItemFromCart(curItemState);
    } else {
      decreaseQuantity(curItemState);
    }
  };

  const addFirstToCart = (itemToAdd) => {
    setCartState(({ cartItems, total }) => {
      return {
        cartItems: [...cartItems, { ...itemToAdd, quantity: 1 }],
        total: total + itemToAdd.price
      };
    });
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartState(({ cartItems, total }) => {
      return {
        cartItems: cartItems.filter((item) => item.id !== itemToRemove.id),
        total: total - itemToRemove.price
      };
    });
  };

  const clearCart = () => setCartState(INITIAL_CART);

  const changeQuantity = (itemToChange, changeInQuantity) => {
    const updatedItem = {
      ...itemToChange,
      quantity: itemToChange.quantity + changeInQuantity
    };

    setCartState(({ cartItems, total }) => {
      return {
        cartItems: cartItems.map((item) =>
          item.id === itemToChange.id ? updatedItem : item
        ),
        total: total + itemToChange.price * changeInQuantity
      };
    });
  };

  const increaseQuantity = (item) => changeQuantity(item, 1);

  const decreaseQuantity = (item) => changeQuantity(item, -1);

  return (
    <ItemsContext.Provider
      value={{
        storeItems,
        getStoreItem,
        onAdd,
        onRemove,
        clearCart,
        ...cartState
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
