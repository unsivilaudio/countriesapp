import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CountriesState {
    data: {
        [key: string]: any;
    }[];
    selectedIds: string[];
}

const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        data: [],
        selectedIds: [],
    },
    reducers: {
        setCountryData(
            state: CountriesState,
            action: PayloadAction<{ [key: string]: any }[]>
        ) {
            state.data = action.payload;
        },
        addCountriesChecked(
            state: CountriesState,
            action: PayloadAction<{ country: string; isChecked: boolean }>
        ) {
            const existsCountryInFavorite = state.selectedIds.includes(
                action.payload.country
            );

            if (!existsCountryInFavorite && action.payload.isChecked) {
                state.selectedIds.push(action.payload.country);
            }
        },
        removeCountriesChecked(state: CountriesState, action) {
            const isFilter = state.selectedIds.filter(
                (country: string) => country !== action.payload.country
            );

            state.selectedIds = [...isFilter];

            console.log(
                'REMOVE - isChecked:' + action.payload.isChecked + ' FALSE - '
            );
        },
    },
});

export const countriesActions = countriesSlice.actions;

export default countriesSlice.reducer;
