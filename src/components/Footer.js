import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">
        <img
          src={process.env.PUBLIC_URL + "/logo192.png"}
          alt="Q-Link Logo"
          className="footer-logo-img"
        />{" "}
        Q-Link
      </div>
      <div className="footer-links">
        <a href="#research">🔬 Research</a>
        <a href="#company">🏢 Company</a>
        <a href="#support">💬 Support</a>
      </div>
      <div className="footer-contact">
        <p>support@q-link.com</p>
        <p>(415) 801-0572</p>
      </div>
    </div>
    <div className="footer-copy">© 2024 Q-Link, Established 2014</div>
  </footer>
);

export default Footer;
