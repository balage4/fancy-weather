import throwStatusError from './throwStatusError';
import apiUrl from './apiUrl';

const fetchWeather = async (weatherUrl) => {
  const weatherResponse = await fetch(weatherUrl);
  throwStatusError(weatherResponse.status, weatherResponse.statusText);
  return weatherResponse;
}

const fetchAllWeatherData = async (cityName) => {
  const weather = fetchWeather(apiUrl.currentWeatherUrl(cityName));
  const forecast = fetchWeather(apiUrl.forecastUrl(cityName));
  return await Promise.all([weather, forecast]).then(res => Promise.all(res.map(res => res.json())));

}

export default fetchAllWeatherData;
