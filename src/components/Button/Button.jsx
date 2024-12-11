/* eslint-disable react/prop-types */
import "./button.css";

const Button = ({ label, isSubmitting = false }) => {
  return (
    <button className={`submitBtn btn ${isSubmitting}`} disabled={isSubmitting}>
      {isSubmitting ? "Creating..." : label}
    </button>
  );
};

export default Button;
