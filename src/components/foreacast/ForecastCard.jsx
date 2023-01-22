import { Container, Row, Col } from 'react-bootstrap';
import TemperatureChart from './TemperatureChart';
import CityForecast from '../../common/classes/CityForecast';
import ForecastTable from './ForecastTable';

const ForecastCard = ({ forecastData }) => {
  const forecast = new CityForecast(forecastData).getForecast();
  console.log(forecastData);
  return (
    <Container fluid="md">
      <Row>
        <Col>
          {forecast && <TemperatureChart temperaturesData={forecast} />}
        </Col>
      </Row>
      <Row>
        <Col sm="md">{forecast && <ForecastTable data={forecast} />}</Col>
      </Row>
    </Container>
  );
};

export default ForecastCard;
