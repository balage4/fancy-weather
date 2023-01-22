import roundToFloat from "../../utilities/roundToFloat";
import twoDigits from "../../utilities/twoDigits";

export default class CityForecast {

  data;

  constructor(rawForecast) {
    this.data = rawForecast;
  }

  getTemperaturesForecast() {
    const kelvinLevel = 273.15;
    const d = new Date();
    const dayLiteral = (dayIndex) => `${twoDigits(d.getDate() + dayIndex)}`;

    return this.data.list.map((day, dayIndex) => ({
      name: dayLiteral(dayIndex + 1),
      minTemp: roundToFloat(Number(day.temp.min - kelvinLevel)),
      maxTemp: roundToFloat(Number(day.temp.max - kelvinLevel)),
    }));
  }

  getForecast() {
    return {
      temperatures: this.getTemperaturesForecast()
    }
  }

}