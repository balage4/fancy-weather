import { Container, Row, Col } from 'react-bootstrap';
import TemperatureChart from './TemperatureChart';
import CityForecast from '../../common/classes/CityForecast';
import ForecastTable from './ForecastTable';

const ForecastCard = ({ forecastData }) => {
  const forecast = new CityForecast(forecastData).getForecast();
  return (
    <Container fluid>
      <Row>
        <Col>
          {forecast && (
            <TemperatureChart temperaturesData={forecast.temperatures} />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <ForecastTable />
        </Col>
      </Row>
    </Container>
  );
};

export default ForecastCard;
