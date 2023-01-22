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
      name: this.getForecastDateOfMonthLiteral(dayIndex),
      minTemp: roundToFloat(Number(day.temp.min - kelvinLevel)),
      maxTemp: roundToFloat(Number(day.temp.max - kelvinLevel)),
    }));
  }


  getCountedDateObject(dayCount) {
    const date = new Date();
    return new Date(date.setDate(date.getDate() + dayCount));
  }

  getForecastDateOfMonthLiteral(dayCount) {
    const countedDate = this.getCountedDateObject(dayCount);
    const month = months[countedDate.getMonth()];
    return `${month} ${countedDate.getDate()}.`;
  }

  getForecast() {
    return {
      temperatures: this.getTemperaturesForecast(),
    }
  }

}
