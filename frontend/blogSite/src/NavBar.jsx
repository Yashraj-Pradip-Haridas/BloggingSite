import React from "react";
import "./NavBar.css"; // Import the CSS file

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>My Blog</h2>
      </div>
      <ul className="navbar__links">
        <li className="navbar__item">
          <a href="#home" className="navbar__link">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="#about" className="navbar__link">
            About
          </a>
        </li>
        <li className="navbar__item">
          <a href="#blog" className="navbar__link">
            Blog
          </a>
        </li>
        <li className="navbar__item">
          <a href="#contact" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
