import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
        <Container>
        <Navbar.Brand href="#home">IT IN WAR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
    </Navbar>
  );
}

export default Navigation;