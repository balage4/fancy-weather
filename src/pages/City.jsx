import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

const City = () => {
  const { cityname } = useParams();

  return <Container>{cityname}</Container>;
};

export default City;
