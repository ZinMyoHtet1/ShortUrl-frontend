/* eslint-disable react/prop-types */
import "./input.css";

const Input = ({ placeholder, size = "full", name, value, handleChange }) => {
  return (
    <div className={`input ${size}`}>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        required={true}
      />
    </div>
  );
};

export default Input;
