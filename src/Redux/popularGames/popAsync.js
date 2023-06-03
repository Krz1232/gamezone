/* eslint-disable */
//importing react redux things
// import { useDispatch } from "react-redux";

//importing redux toolkit things
import { createAsyncThunk } from "@reduxjs/toolkit";

// importing the API Endpoint for popular games
import { popular_games } from "../../components/url/API";



// Fetching Popular Games
 const fetchPopularGames = createAsyncThunk("/fetchGames", () => {
    return (
        fetch(popular_games).then(response => response.json()).then( data => data.results)
    )
})

export default fetchPopularGames;


