import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const links = [
        <NavItem  key="home"><NavLink exact to="/" className="nav-link" activeClassName="active">←  Inicio</NavLink></NavItem>
    ];
    const { match } = this.props;
    switch (match.path) {
        case '/':
            links.push(<NavItem  key="form"><NavLink exact to="/prototype/form" className="nav-link" activeClassName="active">Compartir Prototipo</NavLink></NavItem>);
            break;
        case '/prototypes/:name':
        case '/prototypes/:name/long':
        case '/prototypes/:name/recipes/:section/:file?':
            links.push(<NavItem key="quick"><NavLink exact to={`/prototypes/${match.params.name}`} className="nav-link" activeClassName="active">Receta rápida</NavLink></NavItem>)
            links.push(<NavItem key="long"><NavLink exact to={`/prototypes/${match.params.name}/long`} className="nav-link" activeClassName="active">Receta lenta</NavLink></NavItem>)
            links.push(<NavItem key="insights"><NavLink exact to={`/prototypes/${match.params.name}/insights`} className="nav-link" activeClassName="active">Mapa de aprendizaje</NavLink></NavItem>)
            break;
        default:
            break;
    }
    return (
        <Navbar className="bg-light" fixed="top" light color="faded" expand="md">
          <div className="container">
          <NavbarBrand href="/">docART</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              {links}
            </Nav>
          </Collapse>
          </div>
        </Navbar>
    );
  }
}

export default Header;
