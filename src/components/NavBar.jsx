import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import logoOff from '../assets/logoOff.png'

const NavBar = () => {
  
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/"><img src={logoOff} alt=""></img></Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Shop</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Equipamiento</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Indumentaria
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Protección</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Indumentaria Personalizada
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
    </div>
  )
}

export default NavBar
