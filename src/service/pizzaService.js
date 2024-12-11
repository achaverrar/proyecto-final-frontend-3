const API_BASE_URL = 'http://localhost:3000/pizzas';

export const getAllPizzas = async () => {
  const response = await fetch(API_BASE_URL);
  return await response.json();
};
