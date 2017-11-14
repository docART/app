import React, { Coomponent } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({match}) => {
    const links = [
        <NavLink exact to="/" className="nav-link w-nav-link" activeClassName="w--current">←  Inicio</NavLink>
    ];

    switch (match.path) {
        case '/':
            links.push(<NavLink exact to="/prototype/form" className="nav-link w-nav-link" activeClassName="w--current">Compartir Prototipo</NavLink>);
            break;
        case '/prototypes/:name':
            links.push(<NavLink exact to={`/prototypes/${match.params.name}`} className="nav-link w-nav-link" activeClassName="w--current">Receta breve</NavLink>)
            links.push(<NavLink exact to={`/prototypes/${match.params.name}/long`} className="nav-link w-nav-link" activeClassName="w--current">Receta lenta</NavLink>)
            links.push(<NavLink exact to={`/prototypes/${match.params.name}/insights`} className="nav-link w-nav-link" activeClassName="w--current">Mapa de aprendizaje</NavLink>)
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
