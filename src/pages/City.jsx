import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import apiUrl from '../utilities/fetchUtils/apiUrl';
import fetchWeather from '../utilities/fetchUtils/fetchWeather';
import weatherReducer from '../common/reducers/fetchReducer';
import errorMessages from '../common/messages/errorMessages';
import CityWeatherCard from '../components/current/CityWeatherCard';
import fetchInitialState from '../common/reducers/initialState';

const City = () => {
  const { cityname } = useParams();
  const baseApiURl = apiUrl.currentWeatherUrl(cityname);

  const [state, dispatch] = useReducer(weatherReducer, fetchInitialState);

  useEffect(() => {
    fetchWeather(baseApiURl)
      .then((res) => dispatch({ type: 'success', payload: res }))
      .catch((err) => {
        dispatch({
          type: 'error',
          payload: errorMessages.fetchError,
        });
      });
  }, []);

  return (
    <Container>
      {state.error && <p>{state.data}</p>}
      {state.loading && <p>loading...</p>}
      {!state.loading && !state.error && <CityWeatherCard data={state.data} />}
    </Container>
  );
};

export default City;
