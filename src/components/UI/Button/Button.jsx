import React from 'react';
import './Button.css';

/**
 * A customizable button component.
 *
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content of the button, typically text or elements.
 * @param {string} [props.className] - An optional additional class name to apply to the button.
 * @param {'success' | 'brand' | 'danger'} [props.color='success'] - The color variant of the button. Defaults to 'success'.
 * @param {React.ElementType} [props.as='button'] - The HTML element or React component to render the button as. Defaults to 'button'.
 * @param {Object} [props] - Additional props that are passed to the underlying element.
 *
 * @returns {React.Element} The rendered button element.
 */
export const Button = ({
  children,
  className,
  color = 'success',
  as = 'button',
  ...props
}) => {
  props.className = `button button--${color} ${className || ''}`;

  return React.createElement(as, props, children);
};
