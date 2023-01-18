import errorMessages from "../../common/messages/errorMessages";
import throwStatusError from "./throwStatusError";

const fetchWeather = async (weatherUrl) => {
  const weatherResponse = await fetch(weatherUrl);
  // throwStatusError(weatherResponse.status, import.meta.env.DEV ? weatherResponse.message : errorMessages.fetchError)
  return weatherResponse.json();
}

export default fetchWeather;
