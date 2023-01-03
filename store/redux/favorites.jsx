import {createSlice} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        ids: []
    },
    reducers: { // Reducers are functions that are used to change state
        addFavorites: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorites: (state, action) => {
            /*
            * Splice:
            * 1st parameter (start) – The index at which to start changing the array.
            * 2nd parameter (deleteCount) An integer indicating the number of elements in the array to remove from start
            */
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        },
    }
});

export const addFavorite = favoritesSlice.actions.addFavorites;
export const removeFavorite = favoritesSlice.actions.removeFavorites;
export default favoritesSlice.reducer;