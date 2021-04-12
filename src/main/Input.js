import React from "react";

const Input = (props) => {
  return (
    <div className="input">
      <label>
        {props.type === "scope"
          ? "Wprowadź zakres"
          : "Wprowadź liczbę losowanych liczb"}
      </label>
      <input
        id={props.type}
        type="number"
        onChange={(e) => {
          props.onChange(e, props.type);
        }}
      ></input>
    </div>
  );
};

export default Input;
