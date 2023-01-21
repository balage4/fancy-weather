import throwStatusError from './throwStatusError';
import errorMessages from '../../common/messages/errorMessages';

const fetchWeather = async (weatherUrl) => {
  const weatherResponse = await fetch(weatherUrl);
  throwStatusError(weatherResponse.status, weatherResponse.message || errorMessages.fetchError);
  return weatherResponse.json();
}

export default fetchWeather;
