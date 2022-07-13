import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContinentsState {
    names: string[];
    selected: string | null;
}

const continentsSlice = createSlice({
    name: 'continents',
    initialState: {
        names: [],
        selected: null,
    },
    reducers: {
        setContinents(state: ContinentsState, action: PayloadAction<string[]>) {
            state.names = action.payload;
        },
        selectContinent(state: ContinentsState, action: PayloadAction<string>) {
            state.selected = action.payload;
        },
        resetContinent(state: ContinentsState) {
            state.selected = null;
        },
    },
});

export const continentsActions = continentsSlice.actions;

export default continentsSlice.reducer;
