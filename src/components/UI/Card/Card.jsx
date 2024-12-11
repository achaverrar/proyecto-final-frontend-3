import './Card.css';

/**
 * A customizable card component.
 *
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the card.
 * @param {string} [props.className] - An optional additional class name to apply to the card.
 * @param {'vertical' | 'horizontal'} [props.orientation='vertical'] - The orientation of the card. Can be 'vertical' (default) or 'horizontal'.
 *
 * @returns {React.Element} The rendered card element.
 */
export const Card = ({ children, className = '', orientation = 'vertical' }) => {
  const classes = `card card--${orientation} ${className}`;
  return <article className={classes}>{children}</article>;
};

/**
 * A component to render an image inside the card.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alt text for the image.
 * @param {string} [props.className] - An optional additional class name to apply to the image.
 *
 * @returns {React.Element} The rendered image element.
 */
const CardImage = ({ src, alt, className = '' }) => (
  <img src={src} alt={alt} className={`card__image ${className}`} />
);

/**
 * A component to render the header section of the card.
 *
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to be rendered in the header.
 *
 * @returns {React.Element} The rendered header element.
 */
const CardHeader = ({ children }) => (
  <header className='card__header'>{children}</header>
);

/**
 * A component to render the body section of the card.
 *
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to be rendered in the body.
 * @param {string} [props.className] - An optional additional class name to apply to the body.
 *
 * @returns {React.Element} The rendered body element.
 */
const CardBody = ({ children, className = '' }) => (
  <section className={`card__body ${className}`}>{children}</section>
);

/**
 * A component to render the footer section of the card.
 *
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The content to be rendered in the footer.
 * @param {string} [props.className] - An optional additional class name to apply to the footer.
 *
 * @returns {React.Element} The rendered footer element.
 */
const CardFooter = ({ children, className = '' }) => {
  return <footer className={`card__footer ${className}`}>{children}</footer>;
};

/**
 * A component to separate sections in the card.
 *
 * @returns {React.Element} The rendered divider element.
 */
const CardDivider = () => (
  <hr className='card__divider' />
);

Card.Image = CardImage;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Divider = CardDivider;
