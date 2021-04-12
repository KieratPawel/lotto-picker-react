import React from "react";
import baner from "./images/baner.jpg";

const Header = (props) => {
  return (
    <header>
      <h1 className="title">{props.title}</h1>
      <div id="bg"></div>
      <img className="banerImg" src={baner} alt="slots"></img>
    </header>
  );
};

export default Header;
