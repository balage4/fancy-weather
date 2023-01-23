import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navigation from '../navigation/Navigation';
import styles from '../../common/styles/layoutStyles';

const Layout = ({ children, sidebar }) => {
  return (
    <Container
      className="main-container"
      fluid="md"
      style={styles.mainContainer}>
      <Navigation />
      <Container>
        <Row style={styles.row}>
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
