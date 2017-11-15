import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const links = [
        <NavItem><NavLink key="home" exact to="/" className="nav-link" activeClassName="active">←  Inicio</NavLink></NavItem>
    ];
    const { match } = this.props;
    switch (match.path) {
        case '/':
            links.push(<NavItem><NavLink key="form" exact to="/prototype/form" className="nav-link" activeClassName="active">Compartir Prototipo</NavLink></NavItem>);
            break;
        case '/prototypes/:name':
        case '/prototypes/:name/long':
        case '/prototypes/:name/recipes/:section/:file?':
            links.push(<NavItem><NavLink key="quick" exact to={`/prototypes/${match.params.name}`} className="nav-link" activeClassName="active">Receta rápida</NavLink></NavItem>)
            links.push(<NavItem><NavLink key="long" exact to={`/prototypes/${match.params.name}/long`} className="nav-link" activeClassName="active">Receta lenta</NavLink></NavItem>)
            links.push(<NavItem><NavLink key="insights" exact to={`/prototypes/${match.params.name}/insights`} className="nav-link" activeClassName="active">Mapa de aprendizaje</NavLink></NavItem>)
            break;
        default:
            break;
    }
    return (
        <Navbar color="faded" fixed expand="md">
          <NavbarBrand href="/">docART</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links}
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default Header;
