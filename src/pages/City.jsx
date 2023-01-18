import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import getBaseApiWeatherUrl from '../utilities/fetchUtils/getBaseApiWeatherUrl';
import fetchWeather from '../utilities/fetchUtils/fetchWeather';
import weatherReducer from '../common/reducers/fetchReducer';
import errorMessages from '../common/messages/errorMessages';

const City = () => {
  const { cityname } = useParams();
  const baseApiURl = getBaseApiWeatherUrl(cityname);

  const fetchInitialState = {
    loading: true,
    data: null,
    error: false,
  };

  const [state, dispatch] = useReducer(weatherReducer, fetchInitialState);

  useEffect(() => {
    fetchWeather(baseApiURl)
      .then((res) => dispatch({ type: 'success', payload: res }))
      .catch((err) =>
        dispatch({ type: 'error', payload: err || errorMessages.fetchError })
      );
  }, []);

  return (
    <Container>
      {state.loading ? (
        <p>loading...</p>
      ) : (
        <Card
          style={{
            width: '18rem',
          }}>{`Current weather for ${JSON.stringify(state.data)}`}</Card>
      )}
      {state.error && <p>{JSON.stringify(state.data)}</p>}
    </Container>
  );
};

export default City;
