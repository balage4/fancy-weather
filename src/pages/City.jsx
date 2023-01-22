import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer, useState } from 'react';
import { fetchAllWeatherData } from '../utilities/fetchUtils/fetchWeather';
import forecastReducer from '../common/reducers/forecastReducer';
import errorMessages from '../common/messages/errorMessages';
import CityWeatherCard from '../components/current/CityWeatherCard';
import fetchCityDataInitialState from '../common/reducers/initialState';
import weatherReducer from '../common/reducers/weatherReducer copy';
import ForecastCard from '../components/foreacast/ForeCastCard';

const City = () => {
  const { cityname } = useParams();
  const [weatherState, weatherDispatch] = useReducer(
    weatherReducer,
    JSON.parse(JSON.stringify(fetchCityDataInitialState))
  );

  const [forecastState, forecastDispatch] = useReducer(
    forecastReducer,
    JSON.parse(JSON.stringify(fetchCityDataInitialState))
  );

  const handleResponses = async (responseArray) => {
    weatherDispatch({ type: 'success', payload: responseArray[0] });
    forecastDispatch({ type: 'success', payload: responseArray[1] });
  };

  const handleFetchErrors = (err) => {
    weatherDispatch({ type: 'error', payload: errorMessages.fetchError });
    forecastDispatch({ type: 'error', payload: errorMessages.fetchError });
  };

  useEffect(() => {
    fetchAllWeatherData(cityname)
      .then(handleResponses)
      .catch(handleFetchErrors);
  }, []);

  return (
    <>
      <Container>
        {weatherState.error && <p>{weatherState.data}</p>}
        {weatherState.loading && <p>loading...</p>}
        {!weatherState.loading && !weatherState.error && (
          <CityWeatherCard weatherData={weatherState.data} />
        )}
      </Container>
      <Container>
        {forecastState.error && <p>{forecastState.data}</p>}
        {forecastState.loading && <p>loading...</p>}
        {!forecastState.loading && !forecastState.error && (
          <ForecastCard forecastData={forecastState.data} />
        )}
      </Container>
    </>
  );
};

export default City;
