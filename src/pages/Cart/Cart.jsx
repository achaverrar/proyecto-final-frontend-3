import { useDocumentTitle, useItemsContext } from '../../hooks';
import { EmptyCart, Order } from '../../components';

export const Cart = () => {
  useDocumentTitle('Carrito');
  const { cartItems } = useItemsContext();

  return cartItems.length === 0
    ? <EmptyCart />
    : <Order cartItems={cartItems} />;
};
