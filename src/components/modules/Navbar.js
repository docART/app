import React, { Coomponent } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({match}) => {
    const links = [
        <NavLink to="/" className="nav-link w-nav-link">←  Inicio</NavLink>
    ];

    switch (match.path) {
        case '/':
            links.push(<NavLink to="/prototype/form" className="nav-link w-nav-link">Compartir Prototipo</NavLink>);
            break;
        case '/prototypes/:name':
            links.push(<NavLink to={`/prototypes/${match.params.name}/recipes`} className="nav-link w-nav-link">Recetas</NavLink>)
            links.push(<NavLink to={`/prototypes/${match.params.name}/insights`} className="nav-link w-nav-link">Mapa de aprendizaje</NavLink>)
            break;
    }

    return (
        <div data-collapse="medium" data-animation="default" data-duration="400" className="navbar w-nav">
            <div className="w-container">
                <NavLink to="/" className="brand-block w-clearfix w-nav-brand">
                    <h1 className="logo-title">docART</h1>
                </NavLink>
                <nav className="nav-menu w-nav-menu">
                    {links}
                </nav>
                <div className="menu-button w-nav-button">
                    <div className="w-icon-nav-menu"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
