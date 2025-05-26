import React from "react";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="logo">
      <img
        src={process.env.PUBLIC_URL + "/logo192.png"}
        alt="Q-Link Logo"
        className="logo-img"
      />{" "}
      Q-Link
    </div>
    <nav className="nav">
      <a href="#how-it-works">📋 How It Works</a>
      <a href="#platform">🩺 Our Platform</a>
      <a href="#resources">📚 Resources</a>
      <a href="#research">🔬 Research</a>
      <a href="#login" className="login">
        Log In
      </a>
      <a href="#signup" className="signup">
        Sign Up
      </a>
    </nav>
  </header>
);

export default Header;
