import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navigation from '../navigation/Navigation';

const Layout = ({ children, sidebar }) => {
  const styles = {
    contentAreaRatio: {
      col1: 9,
      col2: 3,
    },
  };

  return (
    <Container className="main-container" fluid="md">
      <Navigation />
      <Container>
        <Row style={{ height: '100%', minHeight: window.innerHeight }}>
          <Col className="mt-2" lg={styles.contentAreaRatio.col1}>
            {children}
          </Col>
          <Col className="mt-2" lg={styles.contentAreaRatio.col2}>
            {sidebar}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Layout;
