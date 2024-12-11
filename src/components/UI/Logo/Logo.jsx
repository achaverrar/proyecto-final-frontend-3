import './Logo.css';

/**
 * Renders the app logo with optional custom styling.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className=undefined] - An optional custom class for styling the logo. Defaults to `undefined`.
 *
 * @returns {JSX.Element} The app logo.
 */
export const Logo = ({ className }) => {
  const classes = `logo ${className || ''}`;
  return (
    <span className={classes}>
      Pizza<b className='logo__emphasis'>Ya</b>!
    </span>
  );
};
