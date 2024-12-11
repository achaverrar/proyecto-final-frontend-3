import { Link } from 'react-router-dom';
import { Button, Container } from '../UI';
import './EmptyCart.css';

export const EmptyCart = () => {
  return (
    <Container className='container--empty-cart'>
      <h2 className='empty-cart__heading'>Aún no tienes pizzas en el carrito...</h2>
      <Button color='success' as={Link} to='/'>
        Volver al menú
      </Button>
    </Container>
  );
};
