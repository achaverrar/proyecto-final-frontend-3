import { Fragment } from 'react';
import { useItemsContext } from '../../hooks';
import { HomeCard } from '../';
import { Container } from '../UI';
import './Pizzas.css';

export const Pizzas = () => {
  const { storeItems } = useItemsContext();

  return (
    <Container className='container--pizzas'>
      {storeItems.map((pizza) => (
        <Fragment key={pizza.id}>
          <HomeCard item={pizza} />
        </Fragment>
      ))}
    </Container>
  );
};
