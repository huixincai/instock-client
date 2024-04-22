import "./DropDown.scss";

const DropDown = ({ label, options, value, onChange }) => {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="dropdown__input"
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
