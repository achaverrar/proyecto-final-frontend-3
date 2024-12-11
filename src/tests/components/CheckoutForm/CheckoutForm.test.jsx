import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckoutForm } from '../../../components/CheckoutForm/CheckoutForm';
import { MemoryRouter } from 'react-router-dom';

beforeEach(() => vi.resetAllMocks());

afterEach(() => cleanup());

describe('<CheckoutForm />', () => {
  const validUser = {
    name: 'Juan Pérez',
    address: 'Calle Ficticia',
    phone: '0123456789'
  };

  const renderCheckoutForm = (props = {}) => {
    return render(
      <MemoryRouter>
        <CheckoutForm {...props} />
      </MemoryRouter>
    );
  };

  test('Renders form inputs and submit button', () => {
    renderCheckoutForm();

    // Assert the presence of labeled input fields
    const inputFields = ['nombre', 'dirección', 'teléfono'];
    inputFields.forEach(field => {
      const input = screen.queryByLabelText(new RegExp(field, 'i'));
      expect(input).not.toBeNull();
    });

    // Assert presence of button
    const submitButton = screen.queryByRole('button', { name: /confirmar/i });
    expect(submitButton).not.toBeNull();

    // Assert button has the correct type
    expect(submitButton.getAttribute('type')).toBe('submit');
  });

  test('Fields are editable', async () => {
    renderCheckoutForm();

    const fields = [
      { label: /nombre/i, value: validUser.name },
      { label: /dirección/i, value: validUser.address },
      { label: /teléfono/i, value: validUser.phone }
    ];

    for (const { label, value } of fields) {
      const input = screen.getByLabelText(label);
      await userEvent.type(input, value);
      expect(input.value).toBe(value);
    }
  });

  test('Submission is successful for valid data', async () => {
    const onSuccessMock = vi.fn();
    renderCheckoutForm({ onSuccess: onSuccessMock });

    const fields = [
      { label: /nombre/i, value: validUser.name },
      { label: /dirección/i, value: validUser.address },
      { label: /teléfono/i, value: validUser.phone }
    ];

    for (const { label, value } of fields) {
      const input = screen.getByLabelText(label);
      await userEvent.type(input, value);
    }

    const submitButton = screen.getByRole('button', { name: /confirmar/i });
    await userEvent.click(submitButton);

    expect(onSuccessMock).toBeCalled(1);
  });

  test('Submission fails for invalid data', async () => {
    const onSuccessMock = vi.fn();
    renderCheckoutForm({ onSuccess: onSuccessMock });

    // Submit from with invalid data (empty fields)
    const submitButton = screen.getByRole('button', { name: /Confirmar/i });
    await userEvent.click(submitButton);

    expect(onSuccessMock).not.toHaveBeenCalled();
  });

  test('Displays error messages when submitting invalid data', async () => {
    const onSuccessMock = vi.fn();
    renderCheckoutForm({ onSuccess: onSuccessMock });

    const invalidUser = {
      name: 'Juan', // Short name
      address: ' ', // Empty address
      phone: '123' // Invalid phone
    };

    const fields = [
      { label: /nombre/i, value: invalidUser.name },
      { label: /dirección/i, value: invalidUser.address },
      { label: /teléfono/i, value: invalidUser.phone }
    ];

    // Check there are no errors showing
    for (const { label } of fields) {
      const input = screen.getByLabelText(label);
      expect(input.getAttribute('aria-describedby')).toBeNull();
    }

    // Fill form with invalid data
    for (const { label, value } of fields) {
      const input = screen.getByLabelText(label);
      await userEvent.type(input, value);
    }

    const submitButton = screen.getByRole('button', { name: /Confirmar/i });
    await userEvent.click(submitButton);

    // Check for error messages
    const errorMessages = screen.queryAllByRole('alert');
    expect(errorMessages).toHaveLength(3);

    const errorMessageIds = errorMessages.map(errorMessage => errorMessage.id);
    fields.forEach(({ label }) => {
      const input = screen.getByLabelText(label);
      const errorId = input.getAttribute('aria-describedby');
      expect(errorMessageIds).toContain(errorId);
    });
  });
});
