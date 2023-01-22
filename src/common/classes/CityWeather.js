import apiUrl from "../../utilities/fetchUtils/apiUrl";
import twoDigits from "../../utilities/twoDigits";

export default class CityWeather {

  data;

  constructor(rawData) {
    this.data = rawData;
  }

  getTemperature() {
    const kelvinLevel = 273.15;
    return Math.round(Number(this.data.main.temp) - kelvinLevel);
  }

  getWindSpeed() {
    return Math.round(Number(this.data.wind.speed) * 3.6);
  }

  getWindDirection() {
    return Number(this.data.wind.deg);
  }

  getHumidity() {
    return this.data.main.humidity;
  }
  getWeatherString() {
    return `${this.data.weather[0].main}, ${this.data.weather[0].description}`
  }
  getLocalTime() {
    const d = new Date()
    d.setMinutes(d.getMinutes() + (this.data.timezone / 60) + d.getTimezoneOffset())
    return `${twoDigits(d.getHours())}:${twoDigits(d.getMinutes())}`;
  }
  getWeatherIconUrl() {
    return `${apiUrl.baseIconUrl}/${this.data.weather[0].icon}@2x.png`
  }

  getAllWeatherData() {
    return {
      temperature: this.getTemperature(),
      windSpeed: this.getWindSpeed(),
      windDirection: this.getWindDirection(),
      humidity: this.getHumidity(),
      weatherString: this.getWeatherString(),
      localTimeString: this.getLocalTime(),
      weatherIconUrl: this.getWeatherIconUrl(),
    }
  }
}
