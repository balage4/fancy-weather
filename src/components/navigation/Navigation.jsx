import { Navbar, Container, Nav } from 'react-bootstrap';
import routes from '../../common/routes/routes';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Weather-Forecast</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routes
              .filter((route) => route.topMenu)
              .map((navMenu, index) => (
                <Nav.Link key={`navmenu_${index}`} href={navMenu.path}>
                  {navMenu.name}
                </Nav.Link>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
