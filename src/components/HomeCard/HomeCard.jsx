import { Link } from 'react-router-dom';
import { useItemsContext } from '../../hooks';
import { Ingrendients } from '..';
import { Button, Card, FormattedPrice } from '../UI';
import './HomeCard.css';

export const HomeCard = ({ item }) => {
  const { id, img, ingredients, name, price } = item;
  const { onAdd } = useItemsContext();
  const handleAddToCart = () => onAdd(item);

  return (
    <Card>
      <Card.Image src={img} className='home-card__image' />
      <Card.Body>
        <h2 className='home-card__heading'>{name}</h2>
        <Card.Divider />
        <Ingrendients ingredients={ingredients} id={id} />
      </Card.Body>
      <Card.Footer className='home-card__footer'>
        <FormattedPrice className='home-card__price' value={price} />
        <div className='home-card__buttons'>
          <Button color='danger' onClick={handleAddToCart} className='home-card__button'>
            Añadir al carrito 🛒
          </Button>
          <Button
            color='brand'
            as={Link}
            to={`/pizza/${id}`}
            className='home-card__button'
          >
            Ver más 👀
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};
