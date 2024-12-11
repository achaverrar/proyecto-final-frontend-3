const INVALID_NAME_CHARS_REGEX = /[^a-zA-zÀ-ú ]/;
const ADDRESS_REGEX = /^(.*[a-zA-ZÀ-ú]){4,}.*$/;
const PHONE_REGEX = /^([0-9]){10}$/;

const normalizeInput = (input) => input?.trim() || '';

const validators = {
  name: validateFullname,
  address: validateAddress,
  phone: validatePhone
};

export function validateFormData (formData) {
  const errors = {};
  let totalErrors = 0;

  for (const inputName in formData) {
    const validator = validators[inputName];
    const error = validator?.(formData[inputName]) || '';
    errors[inputName] = error;
    totalErrors += error === '' ? 0 : 1;
  }

  return { errors, totalErrors };
}

function validateFullname (input) {
  const normalizedInput = normalizeInput(input);
  let errorMessage = '';

  if (normalizedInput === '') {
    errorMessage = 'Debes ingresar un nombre';
  } else if (normalizedInput.length < 6) {
    errorMessage = 'Tu nombre completo debería tener al menos 6 letras';
  } else if (INVALID_NAME_CHARS_REGEX.test(normalizedInput)) {
    errorMessage = 'Tu nombre no debería tener números ni símbolos';
  }

  return errorMessage;
}

function validateAddress (input) {
  const normalizedInput = normalizeInput(input);
  let errorMessage = '';

  if (normalizedInput === '') {
    errorMessage = 'Debes ingresar una dirección';
  } else if (normalizedInput.length < 10) {
    errorMessage = 'Tu dirección debería tener al menos 10 caracteres';
  } else if (!ADDRESS_REGEX.test(normalizedInput)) {
    errorMessage = 'Tu dirección debería tener al menos 4 letras';
  }

  return errorMessage;
}

function validatePhone (input) {
  const normalizedInput = normalizeInput(input);
  let errorMessage = '';

  if (normalizedInput === '') {
    errorMessage = 'Debes ingresar un número de teléfono';
  } else if (normalizedInput.length !== 10) {
    errorMessage = 'Tu número de teléfono debería tener exactamente 10 dígitos';
  } else if (!PHONE_REGEX.test(normalizedInput)) {
    errorMessage = 'Tu número de teléfono solo debería tener dígitos';
  }

  return errorMessage;
}

export default {
  name: validateFullname,
  address: validateAddress,
  phone: validatePhone
};
