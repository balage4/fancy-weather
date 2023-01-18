import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import CitiesForm from '../components/form/CitiesForm';

const Home = () => {
  return (
    <Container>
      <CitiesForm />
    </Container>
  );
};

export default Home;
