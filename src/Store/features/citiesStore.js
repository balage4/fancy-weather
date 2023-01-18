import { createSlice } from "@reduxjs/toolkit";


const getStorageValue = () => {
  const storageValue = localStorage.getItem('citiesForecast');
  if (!storageValue || !storageValue.length) return [];
  return JSON.parse(storageValue);
}

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    value: getStorageValue()
  },
  reducers: {
    setCities: (state, updatedCities) => {
      /* const citiesFromStorage = JSON.parse(localStorage.getItem('citiesForecast'))
      if (!citiesFromStorage) state.value = [];
      else state.value = citiesFromStorage; */
      localStorage.setItem('citiesForecast', JSON.stringify(updatedCities.payload))
    }
  },
});

export const { setCities } = citiesSlice.actions;
export default citiesSlice.reducer
