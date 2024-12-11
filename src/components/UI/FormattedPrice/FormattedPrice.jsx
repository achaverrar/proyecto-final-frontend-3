import { formatCurrency } from '../../../utils/currencyFormatter';

/**
 * Renders a price with an optional custom tag and formatted currency.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.tag] - An optional tag or text to display alongside the formatted price.
 * @param {number} props.value - The value to be formatted as currency.
 * @param {string} [props.className] - An optional custom class for styling the component.
 *
 * @returns {JSX.Element} The formatted price element with an optional tag.
 */
export const FormattedPrice = ({ tag, value, className }) => {
  const text = tag ? `${tag} ${formatCurrency(value)}` : formatCurrency(value);
  const classes = `formatted-price ${className || ''}`;

  return <span className={classes}>{text}</span>;
};
