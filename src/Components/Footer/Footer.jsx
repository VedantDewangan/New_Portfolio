import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Vedant Dewangan</h2>
        <p>Web Developer | Building Creative Solutions</p>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Vedant Dewangan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
