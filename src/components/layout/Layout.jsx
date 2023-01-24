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
          <Col
            className="mt-3"
            lg={styles.mainColumns.col1.lg}
            xs={styles.mainColumns.col1.xs}>
            {children}
          </Col>
          <Col
            className="mt-3"
            lg={styles.mainColumns.col2.lg}
            xs={styles.mainColumns.col2.xs}>
            {sidebar}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Layout;
