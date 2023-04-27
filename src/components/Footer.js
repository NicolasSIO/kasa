import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <img
        src="./assets/img/logo.svg"
        alt="Logo Kasa"
        className="footer-logo"
      />
      <span className="footer-text">© 2020 Kasa. All rights reserved</span>
    </div>
  );
};

export default Footer;
