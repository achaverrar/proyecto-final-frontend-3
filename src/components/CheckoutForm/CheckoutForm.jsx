import { Link } from 'react-router-dom';
import { Button, Container, TextField } from '../UI';
import { useState } from 'react';
import { validateFormData } from '../../utils/inputValidators';

const INITIAL_FORM_STATE = {
  name: '',
  address: '',
  phone: ''
};

export const CheckoutForm = ({ onSuccess }) => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_STATE);
  const [formErrors, setFormErrors] = useState(INITIAL_FORM_STATE);

  const resetForm = () => setFormValues(INITIAL_FORM_STATE);

  const handleChange = ({ target }) =>
    setFormValues((prevData) => ({
      ...prevData,
      [target.name]: target.value
    }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const { errors, totalErrors } = validateFormData(formValues);
    setFormErrors(errors);

    if (totalErrors === 0) {
      resetForm();
      onSuccess();
    }
  };

  return (
    <Container className='container--checkout'>
      <h2 className='checkout__heading'>Información del domicilio</h2>
      <p className='checkout__description'>
        Por favor, ingresa tus datos para recibir el domicilio:
      </p>
      <form
        className='checkout__form' role='form' onSubmit={handleSubmit}
      >
        <TextField
          id='name'
          name='name'
          label='Nombre completo'
          onChange={handleChange}
          value={formValues.name}
          error={formErrors.name}
        />
        <TextField
          id='address'
          name='address'
          label='Dirección'
          onChange={handleChange}
          value={formValues.address}
          error={formErrors.address}
        />
        <TextField
          id='phone'
          name='phone'
          label='Teléfono'
          onChange={handleChange}
          value={formValues.phone}
          error={formErrors.phone}
        />
        <div className='checkout__buttons'>
          <Button
            color='success' type='submit' className='checkout__button'
          >
            Confirmar
          </Button>
          <Button color='danger' as={Link} to='/' className='checkout__button'>
            Volver al inicio
          </Button>
        </div>
      </form>
    </Container>
  );
};
