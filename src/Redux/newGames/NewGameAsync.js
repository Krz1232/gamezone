/* eslint-disable */
// import the URL
import { newGames } from "../../components/url/API";

// importing createAsync Thunk Function
import { createAsyncThunk } from "@reduxjs/toolkit";


const fetchNewGames = createAsyncThunk("/fetchNewGames", () => {
    return (
        fetch(newGames).then( response => response.json()).then( data => data.results)
    )
})

export default fetchNewGames;