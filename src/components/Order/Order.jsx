import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useItemsContext } from '../../hooks';
import { CartItem } from '../CartItem/CartItem';
import { Button, Card, Container, FormattedPrice } from '../UI';
import './Order.css';

export const Order = ({ cartItems }) => {
  const { total } = useItemsContext();

  return (
    <Container className='container--order'>
      <h2 className='order__heading'>Detalles del pedido:</h2>
      <Card className='order__card'>
        <Card.Body className='order__card-body'>
          {cartItems.map((item, index) => (
            <Fragment key={item.id}>
              {index !== 0 && <Card.Divider />}
              <CartItem item={item} />
            </Fragment>
          ))}
        </Card.Body>
        <Card.Footer className='order__card-footer'>
          <FormattedPrice
            className='order__card-price'
            tag='Total:'
            value={total}
          />
          <Button color='success' as={Link} to='/checkout'>
            Pedir domicilio
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};
