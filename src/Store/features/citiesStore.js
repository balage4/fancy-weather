import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    value: localStorage.getItem('citiesForecast') || []
  },
  reducers: {
    setCities: (state, updatedCities) => {
      const citiesFromStorage = localStorage.getItem('citiesForecast')
      if (!citiesFromStorage) state.value = [];
      else state.value = citiesFromStorage;
      localStorage.setItem('citiesForecast', updatedCities.payload)
    }
  }
});

export const { setCities } = citiesSlice.actions;
export default citiesSlice.reducer
