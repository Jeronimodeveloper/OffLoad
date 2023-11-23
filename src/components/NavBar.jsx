import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import logoOff from '../assets/logoOff.png'

const NavBar = () => {
  
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/"><img src={logoOff} alt=""></img></Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/products">Shop</Nav.Link>
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-decoration-none text-black ms-3" to="/category/equipamiento">Equipamiento</Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none text-black ms-3" to="/category/indumentaria">Indumentaria</Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none text-black ms-3" to="/category/proteccion">Proteccion</Link>
                  </li>
                </ul>
              </NavDropdown>
            </Nav>

            <Nav>
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </>
  )
}

export default NavBar
