const env = import.meta.env;

const {
  VITE_WEATHER_API_KEY,
  VITE_WEATHER_API_PROTOCOL,
  VITE_WEATHER_API_API,
  VITE_WEATHER_API_HOST,
  VITE_WEATHER_API_WEATHER_ROUTE,
  VITE_WEATHER_API_ICON_ROUTE
} = env;

const lang = 'hu';

const addLangQuery = (lang) => {
  if (lang) return `&lang=${lang}`
  return '';
}
const baseIconUrl = `${VITE_WEATHER_API_PROTOCOL}://${VITE_WEATHER_API_HOST}/${VITE_WEATHER_API_ICON_ROUTE}`;
const getBaseApiWeatherUrl = (cityName) => `${VITE_WEATHER_API_PROTOCOL}://${VITE_WEATHER_API_API}.${VITE_WEATHER_API_HOST}/${VITE_WEATHER_API_WEATHER_ROUTE}?q=${cityName}${addLangQuery(lang)}&appid=${VITE_WEATHER_API_KEY}`;

const apiURl = {
  baseIconUrl,
  baseApiUrl: getBaseApiWeatherUrl,
}

export default apiURl;
