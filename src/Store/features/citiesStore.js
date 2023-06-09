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
      localStorage.setItem('citiesForecast', JSON.stringify(updatedCities.payload));
      state.value = updatedCities.payload;
    }
  },
});

export const { setCities } = citiesSlice.actions;
export default citiesSlice.reducer
