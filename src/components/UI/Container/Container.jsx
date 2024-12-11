import './Container.css';

/**
 * A container component that provides a responsive layout wrapper.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the container.
 * @param {string} [props.className] - Additional CSS class names to apply to the container.
 *
 * @returns {JSX.Element} The rendered container component.
 */
export const Container = ({ children, className }) => {
  const classes = `container ${className || ''}`;

  return <div className={classes}>{children}</div>;
};
