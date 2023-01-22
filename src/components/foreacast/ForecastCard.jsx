import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import TemperatureChart from './TemperatureChart';
import CityForecast from '../../common/classes/CityForecast';

const ForecastCard = ({ forecastData }) => {
  const forecast = new CityForecast(forecastData).getForecast();
  console.log(forecast.temperatures);
  return (
    <Container fluid>
      <Row>
        {
          <Col>
            {forecast && (
              <TemperatureChart temperaturesData={forecast.temperatures} />
            )}
          </Col>
        }
      </Row>
      <Row>
        <Col>Daily</Col>
      </Row>
    </Container>
  );
};

export default ForecastCard;
