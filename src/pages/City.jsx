import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import getBaseApiWeatherUrl from '../utilities/getBaseApiWeatherUrl';

const City = () => {
  const { cityname } = useParams();

  const baseApiURl = getBaseApiWeatherUrl(cityname);

  useEffect(() => {
    fetch(baseApiURl)
      .then((res) => res.json())
      .then(console.log)
      .catch(console.error);
  }, []);

  return (
    <Container>
      <Card
        style={{
          width: '18rem',
        }}>{`Current weather for ${cityname}`}</Card>
    </Container>
  );
};

export default City;
