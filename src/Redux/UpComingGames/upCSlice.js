/* eslint-disable */
// importing createSlice
import { createSlice } from "@reduxjs/toolkit"


//importing the async function
import fetchUpComingGames from "./UpComingAsync"


// initial state
const initialState = {
    upIsLoading : false,
    up_coming : [],
    upError : ""
}

const upComingSlice = createSlice({
    name : "up-coming",
    initialState : initialState,
    reducers : {

    },
    extraReducers : builder => {
        builder.addCase(fetchUpComingGames.pending, state => {
            state.upIsLoading = true
            state.up_coming = []
            state.upError = ""
        })
        builder.addCase(fetchUpComingGames.fulfilled, (state, action) => {
            state.upIsLoading = false
            state.up_coming = action.payload
            state.upError = ""
        })
        builder.addCase(fetchUpComingGames.rejected, (state, action) => {
            state.upIsLoading = false
            state.up_coming = []
            state.upError = action.error.message
        })
    }
    
})

export default upComingSlice.reducer

