const env = import.meta.env;

const {
  VITE_WEATHER_API_KEY,
  VITE_WEATHER_API_PROTOCOL,
  VITE_WEATHER_API_HOST,
} = env;

const getBaseApiWeatherUrl = (cityName) => `${VITE_WEATHER_API_PROTOCOL}://${VITE_WEATHER_API_HOST}?q=${cityName}&appid=${VITE_WEATHER_API_KEY}`;

export default getBaseApiWeatherUrl;