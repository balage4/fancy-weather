import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';
import CityWeather from '../../common/classes/CityWeather';
import WindDirection from './WindDirection';

const CityWeatherCard = ({ weatherData }) => {
  const cityWeather = new CityWeather(weatherData).getAllWeatherData();

  return (
    <MDBContainer>
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard style={{ color: '#4B515D', borderRadius: '10px' }}>
            <MDBCardBody className="p-4">
              <div className="d-flex">
                <MDBTypography tag="h6" className="flex-grow-1">
                  {weatherData.name}
                </MDBTypography>
                <MDBTypography tag="h6">
                  Local time: {cityWeather.localTimeString}
                </MDBTypography>
              </div>

              <div className="d-flex flex-column text-center mt-5 mb-4">
                <MDBTypography
                  tag="h6"
                  className="display-4 mb-0 font-weight-bold"
                  style={{ color: '#1C2331' }}>
                  {`${cityWeather.temperature} °C`}
                </MDBTypography>
                <span className="small" style={{ color: '#868B94' }}>
                  {`${cityWeather.weatherString}`}
                </span>
              </div>

              <div className="d-flex align-items-center">
                <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                  <div>
                    <MDBIcon
                      fas
                      icon="wind fa-fw"
                      style={{ color: '#868B94' }}
                    />{' '}
                    <span className="ms-1">
                      Wind speed: {cityWeather.windSpeed} km/h{' '}
                      {<WindDirection deg={cityWeather.windDirection} />}
                    </span>
                  </div>
                  <div>
                    <MDBIcon
                      fas
                      icon="tint fa-fw"
                      style={{ color: '#868B94' }}
                    />{' '}
                    <span className="ms-1">
                      Humidity: {cityWeather.humidity}%
                    </span>
                  </div>

                  <div>
                    <MDBIcon
                      fas
                      icon="sun fa-fw"
                      style={{ color: '#868B94' }}
                    />{' '}
                    <span className="ms-1">
                      {/*  <WindDirection deg={cityWeather.windDirection} /> */}
                    </span>
                  </div>
                </div>
                <div>
                  <img src={cityWeather.weatherIconUrl} />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CityWeatherCard;
