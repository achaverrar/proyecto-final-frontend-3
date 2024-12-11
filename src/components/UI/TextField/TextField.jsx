import './TextField.css';

/**
 * Renders a text input field with an optional error message.
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The unique identifier for the input element.
 * @param {string} props.name - The name of the input element.
 * @param {string} props.label - The label associated with the input element.
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.onChange - The function to call when the input value changes.
 * @param {string} [props.className =""] - An optional custom class for styling the component.
 * @param {string} [props.error = ""] - An optional error message to display below the input field.
 *
 * @returns {JSX.Element} The text input field with an optional error message.
 */
export const TextField = ({
  id,
  name,
  label,
  value,
  onChange,
  className = '',
  error = ''
}) => {
  const classes = `textfield ${className || ''} ${error ? 'invalid' : ''}`;

  return (
    <div className={classes}>
      <label htmlFor={id} className='textfield__label'>
        {label}
      </label>
      <input
        type='text'
        name={name}
        id={id}
        className='textfield__input'
        onChange={onChange}
        value={value}
        aria-invalid={error !== ''}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p className='textfield__error' id={`${id}-error`} role='alert'>
          {error}
        </p>
      )}
    </div>
  );
};
