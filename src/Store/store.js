import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './features/citiesStore';

export default configureStore({
  reducer: {
    cities: citiesReducer
  }
});
