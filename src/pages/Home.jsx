import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import CitiesForm from '../components/form/CitiesForm';

const Home = () => {
  const cities = useSelector((state) => state.cities.value);
  console.log(cities);
  return (
    <Container>
      <CitiesForm />
    </Container>
  );
};

export default Home;
