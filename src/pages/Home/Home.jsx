import { Banner, Pizzas } from '../../components';
import { useDocumentTitle } from '../../hooks';

export const Home = () => {
  useDocumentTitle('Inicio');

  return (
    <>
      <Banner />
      <Pizzas />
    </>
  );
};
