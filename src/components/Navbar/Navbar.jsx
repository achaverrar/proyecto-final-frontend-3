import { Link } from 'react-router-dom';
import { useItemsContext } from '../../hooks';
import { Button, Container, FormattedPrice, Logo } from '../UI';
import './Navbar.css';

export const Navbar = () => {
  const { total } = useItemsContext();

  return (
    <header className='navbar'>
      <Container className='navbar__links'>
        <Button
          as={Link}
          to='/'
          color='brand'
          className='navbar__link navbar__link--brand'
        >
          🍕 <Logo className='navbar__logo' />
        </Button>
        <Button
          as={Link}
          to='/cart'
          color='brand'
          className='navbar__link navbar__link--cart'
          title='Ir al carrito'
          aria-label='Ir al carrito'
        >
          <FormattedPrice tag='🛒' value={total} />
        </Button>
      </Container>
    </header>
  );
};
