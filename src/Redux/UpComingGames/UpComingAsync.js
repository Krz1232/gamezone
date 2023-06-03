
/* eslint-disable */
//importing createAsyncThunk
import { createAsyncThunk } from "@reduxjs/toolkit";


// importing the API Endpoint for up_coming Games
import { up_coming_games } from "../../components/url/API";



const fetchUpComingGames = createAsyncThunk("/fetchUpComingGames" , () => {
    return (
        fetch(up_coming_games).then( response => response.json()).then( data => data.results)
    )
})

export default fetchUpComingGames;