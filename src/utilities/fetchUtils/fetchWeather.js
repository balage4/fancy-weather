import throwStatusError from './throwStatusError';
import errorMessages from '../../common/messages/errorMessages';
import apiUrl from './apiUrl';

const fetchWeather = async (weatherUrl) => {

  const weatherResponse = await fetch(weatherUrl);
  throwStatusError(weatherResponse.status, weatherResponse.message || errorMessages.fetchError);
  return weatherResponse.json();
}


export const fetchAllWeatherData = async (cityName) => {
  const weather = fetch(apiUrl.currentWeatherUrl(cityName));
  const forecast = fetch(apiUrl.forecastUrl(cityName));
  return await Promise.all([weather, forecast]).then(res => Promise.all(res.map(res => res.json())));
}

export default fetchWeather;
