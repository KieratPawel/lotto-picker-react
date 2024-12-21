import React from "react";
import Ball from "./Ball";

const Result = (props) => {
  if (props.warning === true) {
    return <div className="result">Wprowadź w pola poprawne wartości</div>;
  } else if (props.warning === "changeOfParameters") {
    return null;
  } else {
    const balls = props.numbers.map((ball, index) => (
      <Ball key={"ball" + index} val={ball} />
    ));
    return <div className="result">{balls}</div>;
  }
};

export default Result;
