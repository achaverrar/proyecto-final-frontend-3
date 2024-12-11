import { useNavigate } from 'react-router-dom';
import { useDocumentTitle, useItemsContext } from '../../hooks';
import { EmptyCart, CheckoutForm } from '../../components';
import './Checkout.css';

export const Checkout = () => {
  useDocumentTitle('Domicilio');
  const { total, clearCart } = useItemsContext();
  const navigate = useNavigate();

  if (total === 0) return <EmptyCart />;

  const handleCheckout = () => {
    clearCart();
    alert('¡Muchas gracias por tu compra!\nTu pizza está en camino 😊');
    navigate('/');
  };

  return (
    <CheckoutForm onSuccess={handleCheckout} />
  );
};
