import "./RadioButton.scss";

const RadioButton = ({ options, status, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name="status"
            value={option.value}
            checked={status === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
