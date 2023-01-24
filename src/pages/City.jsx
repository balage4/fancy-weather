import { useEffect, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { fetchAllWeatherData } from '../utilities/fetchUtils/fetchWeather';
import forecastReducer from '../common/reducers/forecastReducer';
import CityWeatherCard from '../components/current/CityWeatherCard';
import fetchCityDataInitialState from '../common/reducers/initialState';
import weatherReducer from '../common/reducers/weatherReducer';
import ForecastCard from '../components/foreacast/ForeCastCard';
import Spinner from 'react-bootstrap/Spinner';
import handleValidCities from '../utilities/handleValidCities';
import { useSelector } from 'react-redux';
import AlertAbsolute from '../components/layout/AlertAbsolute';
import handleResponses from '../common/responseHandlers/handleSuccessResponse';
import handleFetchErrors from '../common/responseHandlers/handleFetchErrors';

const City = () => {
  const navigate = useNavigate();
  const { cityname } = useParams();
  const citiesStore = useSelector((state) => state.cities.value);

  const [weatherState, weatherDispatch] = useReducer(
    weatherReducer,
    JSON.parse(JSON.stringify(fetchCityDataInitialState))
  );

  const [forecastState, forecastDispatch] = useReducer(
    forecastReducer,
    JSON.parse(JSON.stringify(fetchCityDataInitialState))
  );

  useEffect(() => {
    handleValidCities(citiesStore, cityname, navigate);
    fetchAllWeatherData(cityname)
      .then((res) => handleResponses(res, weatherDispatch, forecastDispatch))
      .catch((res) =>
        handleFetchErrors(res, weatherDispatch, forecastDispatch)
      );
  }, [cityname]);

  return (
    <>
      <Container>
        {weatherState.loading && (
          <Spinner animation="border" variant="warning" />
        )}
        {!weatherState.loading && !weatherState.error && (
          <CityWeatherCard weatherData={weatherState.data} />
        )}
      </Container>
      <Container>
        {forecastState.loading && <Spinner animation="border" variant="info" />}
        {!forecastState.loading && !forecastState.error && (
          <ForecastCard forecastData={forecastState.data} />
        )}
      </Container>
      {!weatherState.loading && weatherState.error && (
        <AlertAbsolute message={weatherState.data} />
      )}
      {!forecastState.loading && forecastState.error && (
        <AlertAbsolute message={forecastState.data} />
      )}
    </>
  );
};

export default City;
