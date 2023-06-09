const env = import.meta.env;

const {
  VITE_WEATHER_API_KEY,
  VITE_WEATHER_API_PROTOCOL,
  VITE_WEATHER_API_API,
  VITE_WEATHER_API_HOST,
  VITE_WEATHER_API_WEATHER_ROUTE,
  VITE_WEATHER_API_FORECAST_ROUTE,
  VITE_WEATHER_API_ICON_ROUTE,
  VITE_COUNTRY_FLAG_ICONS_API
} = env;

const lang = 'hu';
const forecastCount = 16;
const flagApi = VITE_COUNTRY_FLAG_ICONS_API;

const addLangQuery = (lang) => {
  if (lang) return `&lang=${lang}`
  return '';
}

const BASE_API = `${VITE_WEATHER_API_PROTOCOL}://${VITE_WEATHER_API_API}.${VITE_WEATHER_API_HOST}`;
const baseIconUrl = `${VITE_WEATHER_API_PROTOCOL}://${VITE_WEATHER_API_HOST}/${VITE_WEATHER_API_ICON_ROUTE}`;

const getWeatherUrl = (cityName) => `${BASE_API}/${VITE_WEATHER_API_WEATHER_ROUTE}?q=${cityName}${addLangQuery(lang)}&appid=${VITE_WEATHER_API_KEY}`;
const getForecastUrl = (cityName) => `${BASE_API}/${VITE_WEATHER_API_FORECAST_ROUTE}?q=${cityName}&cnt=${forecastCount}&appid=${VITE_WEATHER_API_KEY}`;
const getFlagIconUrl = (lowerCaseCountryCode) => `${flagApi}/${lowerCaseCountryCode.toUpperCase()}`;

const apiUrl = {
  baseIconUrl,
  currentWeatherUrl: getWeatherUrl,
  forecastUrl: getForecastUrl,
  flagIconUrl: getFlagIconUrl
}

export default apiUrl;
