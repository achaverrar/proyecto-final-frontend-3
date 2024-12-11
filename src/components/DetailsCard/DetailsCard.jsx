import { useItemsContext } from '../../hooks';
import { Ingrendients } from '..';
import { Button, Card, FormattedPrice } from '../UI';
import './DetailsCard.css';

export const DetailsCard = ({ item }) => {
  const { id, img, desc, ingredients, name, price } = item;
  const { onAdd } = useItemsContext();
  const handleAddItem = () => onAdd(item);

  return (
    <Card orientation='horizontal'>
      <Card.Image src={img} className='details-card__image' />
      <Card.Body className='details-card__body'>
        <div className='details-card__body-top'>
          <h2 className='details-card__heading'>{name}</h2>
          <Card.Divider />
          <p>{desc}</p>
          <Ingrendients ingredients={ingredients} id={id} />
        </div>
        <Card.Divider />
        <div className='details-card__body-bottom'>
          <FormattedPrice
            tag='Precio:'
            value={price}
            className='details-card__price'
          />
          <Button color='danger' onClick={handleAddItem}>
            Añadir al carrito 🛒
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
