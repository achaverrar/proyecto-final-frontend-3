import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDocumentTitle, useItemsContext } from '../../hooks';
import { DetailsCard } from '../../components';
import { Container } from '../../components/UI';
import './PizzaDetails.css';

export const PizzaDetails = () => {
  const { getStoreItem } = useItemsContext();
  const { id } = useParams();
  const [pizzaData, setPizzaData] = useState(null);
  useDocumentTitle(pizzaData?.name);

  useEffect(() => {
    const data = getStoreItem(id);
    setPizzaData(data);
  }, [id, getStoreItem]);

  return (
    <Container className='container--pizza-details'>
      {pizzaData && <DetailsCard item={pizzaData} />}
    </Container>
  );
};
