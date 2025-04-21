import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#F83780', color: 'black' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: 'orange' }}>AtifRestaurant</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'black' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" style={{ color: 'black' }}>Menu</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                Category
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>Fast Food Item </a></li>
                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>Chicken Item</a></li>
                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>Mutton Item</a></li>
                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>Biryani Item</a></li>
                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>chapati Item</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#" style={{ color: 'black' }}>Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true" style={{ color: 'black' }}>Disabled</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* This moves the Login and Signup to the right */}
            <li className="nav-item">
              <Link className="nav-link" to="/login" style={{ color: 'black' }}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup" style={{ color: 'black' }}>Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

