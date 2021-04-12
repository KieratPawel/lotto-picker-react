import React from "react";
import Ball from "./Ball";

const Result = (props) => {
  if (props.warning === true) {
    return <div className="result">Wprowadź w pola poprawne wartości</div>;
  } else if (props.warning === "changeOfParameters") {
    return null;
  } else {
    const balls = props.numbers.map((ball) => (
      <Ball key={ball + Math.random()} val={ball} />
      //random value added to key to rerender component with animation
    ));
    return <div className="result">{balls}</div>;
  }
};

export default Result;
