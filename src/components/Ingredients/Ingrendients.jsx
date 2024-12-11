import './Ingredients.css';

export const Ingrendients = ({ ingredients, id }) => {
  return (
    <>
      <h3 className='ingredients__heading'>Ingredientes:</h3>
      <ul className='ingredients__list'>
        {ingredients.map((ingredient, index) => (
          <li key={`${id}-${index}`} className='ingredients__ingredient'>
            <span className='ingredients__ingredient-text'>{ingredient}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
