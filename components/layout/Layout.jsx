import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navigation from '../navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <Container>
      <Navigation />
      <Container>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Layout;
