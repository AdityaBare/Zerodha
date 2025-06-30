import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top ps-lg-4 pe-lg-4 border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand ms-sm-4 ms-lg-5 ps-lg-4 active" to="/">
          <img src="/logo.svg" style={{ width: "23%" }} alt="Logo" className="ms-lg-5" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mt-3" id="navbarNavDropdown">
          <ul className="navbar-nav pe-lg-5">
            <li className="nav-item">
              <Link className="nav-link mt-sm-2" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mt-sm-2" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mt-sm-2 text-muted" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mt-sm-2" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mt-sm-2" to="/support">Support</Link>
            </li>
               <li className="nav-item">
              <Link className="nav-link mt-sm-2" to="/login">Login</Link>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
