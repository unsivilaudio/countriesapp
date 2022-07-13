// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './slices/countries';
import continentsReducer from './slices/continents';

/////////////////////////////////////////////////////////////
// export const store = createStore(reducer);
export const store = configureStore({
    reducer: {
        continents: continentsReducer,
        countries: countriesReducer,
    },
});
