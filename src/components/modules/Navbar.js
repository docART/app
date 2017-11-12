import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar w-nav">
        <div className="w-container">
            <NavLink to="/" className="brand-block w-clearfix w-nav-brand">
                <h1 className="logo-title">docART</h1>
            </NavLink>
            <nav className="nav-menu w-nav-menu">
                <NavLink to="/" className="nav-link w-nav-link">←  INICIO</NavLink>
                <NavLink to="/prototype/form" className="nav-link w-nav-link">COMPARTIR PROTOTIPO</NavLink>
            </nav>
            <div className="menu-button w-nav-button">
                <div className="w-icon-nav-menu"></div>
            </div>
        </div>
    </div>
);

export default Navbar;
