import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Navbar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" className="navbar-style">
        <NavbarBrand href="/"><img className="icon-page" src='https://www.flaticon.es/premium-icon/icons/svg/2480/2480809.svg'/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar className="nav-item">
              <DropdownToggle nav caret >
                Probabilidad básica
              </DropdownToggle>
              <DropdownMenu right>
                <NavLink href="">
                    <DropdownItem>
                    Espacio muestral
                    </DropdownItem>
                </NavLink>
                <NavLink to="">
                    <DropdownItem>
                    Eventos
                    </DropdownItem>
                </NavLink>
                <NavLink to="">
                    <DropdownItem>
                    Conteo de puntos muestrales
                    </DropdownItem>
                </NavLink>
                <NavLink to="">
                    <DropdownItem>
                    Reglas aditivas
                    </DropdownItem>
                </NavLink>
                <NavLink to="">
                    <DropdownItem>
                    Probabilidad condicional
                    </DropdownItem>
                </NavLink>
                <NavLink href="/Regla de bayes">
                    <DropdownItem>
                    Regla de bayes
                    </DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className="nav-item">
              <DropdownToggle nav caret >
                Variables aleatorias y distribuciones de probabilidad
              </DropdownToggle>
              <DropdownMenu right>
                <NavLink href="">
                    <DropdownItem>
                    Concepto de variable aleatoria
                    </DropdownItem>
                </NavLink>
                <NavLink href="/Distribucion discreta">
                    <DropdownItem>
                    Distribuciones discretas de probabilidad
                    </DropdownItem>
                </NavLink>
                <NavLink to="/">
                    <DropdownItem>
                    Distribuciones de probabilidad continua
                    </DropdownItem>
                </NavLink>
                <NavLink to="/">
                    <DropdownItem>
                    Distribuciones de probabilidad conjunta
                    </DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;