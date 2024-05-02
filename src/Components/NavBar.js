import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
    const itemCount = 5; // Número random
  
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Mi Tienda</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Productos {itemCount > 0 && <span className="badge bg-danger">{itemCount}</span>}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sucursales">Sucursales</NavLink>
              </li>
            </ul>
            <CartWidget /> 
          </div>
        </div>
      </nav>
    );
}

export default NavBar;