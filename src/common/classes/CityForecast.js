import roundToFloat from "../../utilities/roundToFloat";
import twoDigits from "../../utilities/twoDigits";
import months from "../date/months";

export default class CityForecast {

  data;

  constructor(rawForecast) {
    this.data = rawForecast;
  }

  getTemperaturesForecast() {
    const kelvinLevel = 273.15;

    return this.data.list.map((day, dayIndex) => ({
      name: this.getForecastDateOfMonth(dayIndex),
      minTemp: roundToFloat(Number(day.temp.min - kelvinLevel)),
      maxTemp: roundToFloat(Number(day.temp.max - kelvinLevel)),
    }));
  }

  getForecast() {
    return {
      temperatures: this.getTemperaturesForecast()
    }
  }

  getForecastDateOfMonth(dayCount) {
    const date = new Date();
    const countedDate = new Date(date.setDate(date.getDate() + dayCount));

    const month = months[countedDate.getMonth()];
    return `${month} ${countedDate.getDate()}.`;
  }
}
