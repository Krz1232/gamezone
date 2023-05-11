import { createSlice } from "@reduxjs/toolkit";


//import fetching function for popular games
import fetchGames from "./popAsync"

const initialState = {
    popIsLoading : false,
    popular : [],
    popError : ''
}

const popularGamesSlice = createSlice({
    name : "game",
    initialState: initialState,
    reducers : {
        requestFetch(state, action) {
            state.popular = []
        }
    },
    extraReducers : builder => {
        builder.addCase(fetchGames.pending, state => {
            state.popIsLoading = true
        })
        builder.addCase(fetchGames.fulfilled, (state, action) => {
            state.popIsLoading = false
            state.popular = action.payload
        }) 
        builder.addCase(fetchGames.rejected, (state, action) => {
            state.popIsLoading = false
            state.popular = []
            state.popError = action.error.message
        })
    }
})

export const { requestFetch } = popularGamesSlice.actions;
export default popularGamesSlice.reducer;