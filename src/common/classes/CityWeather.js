import apiURl from "../../utilities/fetchUtils/getBaseApiWeatherUrl";
import roundToFloat from "../../utilities/roundToFloat";
import twoDigits from "../../utilities/twoDigits";

export default class CityWeather {

  rawData;

  constructor(rawData) {
    this.data = rawData;
  }

  getTemperature() {
    const kelvinLevel = 273.15;
    return roundToFloat(Number(this.data.main.temp) - kelvinLevel);
  }

  getWindSpeed() {
    const kmhExchange = 3.6;
    return roundToFloat(Number(this.data.wind.speed) * 3.6);
  }
  getHumidity() {
    return this.data.main.humidity;
  }
  getWeatherString() {
    return `${this.data.weather[0].main}, ${this.data.weather[0].description}`
  }
  getCurrentTime() {
    const d = new Date();
    return `${twoDigits(d.getHours())}:${twoDigits(d.getMinutes())}`;
  }
  getWeatherIconUrl() {
    return `${apiURl.baseIconUrl}/${this.data.weather[0].icon}@2x.png`
  }
}
