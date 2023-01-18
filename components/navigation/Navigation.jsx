import { Navbar, Container, Nav } from 'react-bootstrap';

const Navigation = () => {
  const navMenus = [
    {
      name: 'Home',
      href: '/',
    },
  ];

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Weather-Forecast</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navMenus.map((navMenu, index) => (
              <Nav.Link key={`navmenu_${index}`} href={navMenu.href}>
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
