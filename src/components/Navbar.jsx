import React from "react";

function Navbar() {
  return (
    <div className="nav-Style" id="home">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Doctors">
                Doctor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Medicines">
                Medicine
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Daily-needs">
                Daily-Needs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Grocery">
                Grocery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Footer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
