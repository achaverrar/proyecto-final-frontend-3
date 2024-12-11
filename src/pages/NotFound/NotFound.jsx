import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks';
import { Button, Container } from '../../components/UI';
import './NotFound.css';

export const NotFound = () => {
  useDocumentTitle('Página No Encontrada');

  return (
    <Container className='container--not-found'>
      <h1 className='not-found__heading'>¡Ups! Parece que alguien se comió tu pizza 🍕</h1>
      <div className='not-found__description'>
        <p>Pero ¡no te preocupes!</p>
        <p>Tenemos todo un menú que espera por ti 👨‍🍳</p>
      </div>
      <Button to='/' color='success' as={Link}>Volver al menú</Button>
    </Container>
  );
};
