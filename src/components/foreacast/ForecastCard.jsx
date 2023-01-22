import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
          {forecast && (
            <>
              <h4>Temperature Diagram</h4>
              <TemperatureChart temperaturesData={forecast} />
            </>
          )}
        </Col>
      </Row>
      <Row>
        <Col sm="md">
          {forecast && (
            <>
              <h4>Daily Forecast</h4>
              <ForecastTable data={forecast} />
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ForecastCard;
