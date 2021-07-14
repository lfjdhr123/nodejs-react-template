import React from "react";
import "./styles.scss";
const CounterBtn = ({ buttonName, clickHandler }) => {
  return (
    <button
      className="counter-btn-container"
      onClick={() => {
        clickHandler();
      }}
    >
      {buttonName}
    </button>
  );
};
export default CounterBtn;
