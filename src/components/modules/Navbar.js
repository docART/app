import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({match}) => {
    const links = [
        <NavLink key="home" exact to="/" className="nav-link" activeClassName="active">←  Inicio</NavLink>
    ];

    switch (match.path) {
        case '/':
            links.push(<NavLink key="form" exact to="/prototype/form" className="nav-link" activeClassName="active">Compartir Prototipo</NavLink>);
            break;
        case '/prototypes/:name':
        case '/prototypes/:name/long':
        case '/prototypes/:name/recipes/:section/:file?':
            links.push(<NavLink key="quick" exact to={`/prototypes/${match.params.name}`} className="nav-link" activeClassName="active">Receta rápida</NavLink>)
            links.push(<NavLink key="long" exact to={`/prototypes/${match.params.name}/long`} className="nav-link" activeClassName="active">Receta lenta</NavLink>)
            links.push(<NavLink key="insights" exact to={`/prototypes/${match.params.name}/insights`} className="nav-link" activeClassName="active">Mapa de aprendizaje</NavLink>)
            break;
        default:
            break;
    }

    return (
      <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <NavLink class="navbar-brand" to="/">
          <h1 className="logo-title">docART</h1>
        </NavLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              {links}
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
};

export default Navbar;
