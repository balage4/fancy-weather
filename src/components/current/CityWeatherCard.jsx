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

const CityWeatherCard=({ data })=> {

  const cityWeather = new CityWeather(data);

  return (
    <MDBContainer className="h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol md="6" lg="8" xl="4">
          <MDBCard style={{ color: '#4B515D', borderRadius: '35px' }}>
            <MDBCardBody className="p-4">
              <div className="d-flex">
                <MDBTypography tag="h6" className="flex-grow-1">
                  {data.name}
                </MDBTypography>
                <MDBTypography tag="h6">
                  {cityWeather.getCurrentTime()}
                </MDBTypography>
              </div>

              <div className="d-flex flex-column text-center mt-5 mb-4">
                <MDBTypography
                  tag="h6"
                  className="display-4 mb-0 font-weight-bold"
                  style={{ color: '#1C2331' }}>
                  {`${cityWeather.getTemperature()} °C`}
                </MDBTypography>
                <span className="small" style={{ color: '#868B94' }}>
                  {`${cityWeather.getWeatherString()}`}
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
                      {' '}
                      {cityWeather.getWindSpeed()} km/h
                    </span>
                  </div>
                  <div>
                    <MDBIcon
                      fas
                      icon="tint fa-fw"
                      style={{ color: '#868B94' }}
                    />{' '}
                    <span className="ms-1">{cityWeather.getHumidity()}%</span>
                  </div>
                  <div>
                    <MDBIcon
                      fas
                      icon="sun fa-fw"
                      style={{ color: '#868B94' }}
                    />{' '}
                    <span className="ms-1"> 0.2h </span>
                  </div>
                </div>
                <div>
                  <img src={cityWeather.getWeatherIconUrl()} />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default CityWeatherCard;