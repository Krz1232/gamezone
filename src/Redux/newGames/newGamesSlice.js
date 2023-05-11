// importing createSlice function
import { createSlice } from "@reduxjs/toolkit"

// importing the Async Thunk
import fetchNewGames from "./NewGameAsync"

// creating the state
const initialState = {
    newIsLoading : false,
    new_games : [],
    newError : ""
}

const newGamesSlice = createSlice({
    name : "new_Games",
    initialState : initialState,
    reducers : {

    },
    extraReducers : builder => {
        builder.addCase(fetchNewGames.pending, state => {
            state.newIsLoading = true
            state.new_games = []
            state.newError = ""
        })
        builder.addCase(fetchNewGames.fulfilled, (state, action) => {
            state.newIsLoading = false
            state.new_games = action.payload
            state.newError = ""
        })
        builder.addCase(fetchNewGames.rejected, (state, action) => {
            state.newIsLoading = false
            state.new_games = []
            state.newError = action.error.message
        })
    }
})

export default newGamesSlice.reducer