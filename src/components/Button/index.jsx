import React from "react";
import "./Button.css";

const Button = (props) => {
  const { variant, children, onClick, left, right, className } = props;
  return (
    <button className={`btn btn--${variant} ${className}`} onClick={onClick}>
      {left && <div>{left}</div>}
      <div className="btn__title">{children}</div>
      {right && <div>{right}</div>}
    </button>
  );
};
export default Button;
