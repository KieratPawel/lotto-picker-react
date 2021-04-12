import React from "react";

const Footer = () => {
  return (
    <footer>
      Made by Kieratex
      <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
    </footer>
  );
};

export default Footer;
