import apiUrl from "../../utilities/fetchUtils/apiUrl";
import months from "../date/months";

export default class CityForecast {

  data;

  constructor(rawForecast) {
    this.data = rawForecast;
  }

  getForecast() {
    const kelvinLevel = 273.15;

    return this.data.list.map((day, dayIndex) => {

      const monthAndDate = this.getForecastMonthAndDate(dayIndex);

      return {
        name: this.getMonthAndDateLiteral(monthAndDate),
        monthName: monthAndDate.month,
        dateNumber: monthAndDate.countedDate,
        minTemp: Math.round(Number(day.temp.min - kelvinLevel)),
        maxTemp: Math.round(Number(day.temp.max - kelvinLevel)),
        dayTemp: Math.round(Number(day.temp.day) - kelvinLevel),
        weatherMain: day.weather[0].main,
        weatherDescription: day.weather[0].description,
        weatherIconUrl: `${apiUrl.baseIconUrl}/${day.weather[0].icon}@2x.png`
      }
    })
  };


  getCountedDateObject(dayCount) {
    const date = new Date();
    return new Date(date.setDate(date.getDate() + dayCount));
  }

  getForecastMonthAndDate(dayCount) {
    const countedDate = this.getCountedDateObject(dayCount);
    const month = months[countedDate.getMonth()];
    return { month, countedDate: countedDate.getDate() };
  }

  getMonthAndDateLiteral({ month, countedDate }) {
    return `${month} ${countedDate}.`
  }

}
