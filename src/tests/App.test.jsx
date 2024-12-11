import { MemoryRouter } from 'react-router-dom';
import { describe, beforeEach, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemsProvider from '../context/ItemsContext';
import App from '../App';

beforeEach(() => {
  cleanup();
  vi.resetAllMocks();
});

describe('Successful Checkout Flow', () => {
  test('Add items to cart and submit form correctly', async () => {
    const mockPizza = {
      desc: 'La clásica de Nápoles, hecha arte. Disfruta de una base crujiente y ligera con salsa de tomate fresco, mozzarella fundida, un toque de albahaca y un chorrito de aceite de oliva virgen extra. ¡La tradición italiana en cada mordida!',
      id: 'P001',
      img: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c',
      ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
      name: 'Napolitana',
      price: 27500
    };

    // Mock the fetch API call to return the mock pizza data
    vi.spyOn(window, 'fetch').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve([mockPizza])
      });
    });

    // Render the application with required context
    render(
      <MemoryRouter initialEntries={['/']}>
        <ItemsProvider>
          <App />
        </ItemsProvider>
      </MemoryRouter>
    );

    // Verify initial cart total price is 0
    const cartLink = screen.getByRole('link', { name: /Ir al carrito/i });
    let totalPriceCart = extractTotalPrice(cartLink);
    expect(totalPriceCart).toBe(0);

    // Add item to cart and verify price update
    const addToCartButton = await screen.findByText(/Añadir al carrito/i);
    await userEvent.click(addToCartButton);
    totalPriceCart = extractTotalPrice(cartLink);
    expect(totalPriceCart).toBe(mockPizza.price);

    // Proceed to checkout
    await userEvent.click(cartLink);
    const checkoutLink = screen.getByRole('link', { name: /Pedir domicilio/i });
    await userEvent.click(checkoutLink);

    // Fill out checkout form
    const user = {
      name: 'Juan Pérez',
      address: 'Calle Ficticia',
      phone: '0123456789'
    };
    await fillCheckoutForm(user);

    // Mock alert function (used in submit handler)
    const mockAlert = vi.fn();
    global.alert = mockAlert;

    // Submit form and verify cart total is reset to 0
    const submitButton = screen.getByRole('button', { name: /Confirmar/i });
    await userEvent.click(submitButton);
    totalPriceCart = extractTotalPrice(cartLink);
    expect(totalPriceCart).toBe(0);
  });
});

// Helper function to extract the total price from the cart link
function extractTotalPrice (cartLink) {
  const extractedPrice = cartLink.textContent.split(/\s/)[2].replace('.', '');
  return Number.parseInt(extractedPrice);
}

// Helper function to fill out the checkout form
async function fillCheckoutForm ({ name, address, phone }) {
  const nameInput = screen.getByLabelText(/Nombre completo/i);
  await userEvent.type(nameInput, name);

  const addressInput = screen.getByLabelText(/Dirección/i);
  await userEvent.type(addressInput, address);

  const phoneInput = screen.getByLabelText(/Teléfono/i);
  await userEvent.type(phoneInput, phone);
}
