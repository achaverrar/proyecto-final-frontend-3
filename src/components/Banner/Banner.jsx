import { Container, Logo } from '../UI';
import './Banner.css';

export const Banner = () => {
  return (
    <section className='banner'>
      <Container className='container--banner'>
        <h2 className='banner__heading'><Logo /></h2>
        <p className='banner__description'>Rápido, delicioso y al alcance de un clic.</p>
      </Container>
    </section>
  );
};
