import { useItemsContext } from '../../hooks';
import { Button, FormattedPrice } from '../UI';
import './CartItem.css';

export const CartItem = ({ item }) => {
  const { img, name, price, quantity } = item;
  const { onAdd, onRemove } = useItemsContext();
  const onAddHandler = () => onAdd(item);
  const onRemoveHandler = () => onRemove(item);

  return (
    <article className='cart-item'>
      <div className='cart-item__col cart-item__col--left'>
        <img src={img} alt={name} className='cart-item__image' />
        <span className='cart-item__name'>{name}</span>
      </div>
      <div className='cart-item__col cart-item__col--right'>
        <FormattedPrice className='cart-item__total-price' value={price * quantity} />
        <div className='cart-item__counter'>
          <Button
            color='danger'
            onClick={onRemoveHandler}
            className='cart-item__counter-button'
          >
            -
          </Button>
          <span className='cart-item__quantity'>{quantity}</span>
          <Button className='cart-item__counter-button' color='brand' onClick={onAddHandler}>
            +
          </Button>
        </div>
      </div>
    </article>
  );
};
