import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navigation from '../navigation/Navigation';

const Layout = ({ children }) => {
  const styles = {
    mainContainer: {
      height: window.innerHeight,
      width: innerWidth,
      backgroundColor: 'beige',
    },
    contentAreaRatio: {
      col1: 8,
      col2: 4,
    },
  };

  return (
    <Container style={styles.mainContainer}>
      <Navigation />
      <Container>
        <Row>
          <Col sm={styles.contentAreaRatio.col1}>1</Col>
          <Col sm={styles.contentAreaRatio.col2}>2</Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Layout;
