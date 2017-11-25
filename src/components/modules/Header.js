import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem} from 'reactstrap';

class Header extends Component {
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
        const {match} = this.props;
        const links = [
            <NavItem key="home">
                <NavLink exact to="/" className="nav-link">← Inicio</NavLink>
            </NavItem>
        ];

        switch (match.path) {
            case '/':
                links.push(
                    <NavItem key="form">
                        <NavLink exact to="/prototype/form" className="nav-link">Compartir Prototipo</NavLink>
                    </NavItem>
                );
                break;
            case '/prototypes/:name':
            case '/prototypes/:name/long':
            case '/prototypes/:name/recipes/:section/:file?':
                links.push(
                    <NavItem key="quick">
                        <NavLink exact to={`/prototypes/${match.params.name}`} className="nav-link">Receta
                    rápida</NavLink></NavItem>
                );
                links.push(
                    <NavItem key="long">
                        <NavLink exact to={`/prototypes/${match.params.name}/long`} className="nav-link">Receta lenta</NavLink>
                    </NavItem>
                );
                links.push(
                    <NavItem key="insights">
                        <NavLink exact to={`/prototypes/${match.params.name}/insights`} className="nav-link">Mapa de aprendizaje</NavLink>
                    </NavItem>
                );
                break;
            default:
                break;
        }
        return (
            <Navbar className="bg-light" fixed="top" light color="faded" expand="md">
                <div className="container">
                    <Link to="/" className="navbar-brand">docART</Link>
                    <NavbarToggler onClick={this.toggleNavbar}
                                   className="mr-2"/>
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
