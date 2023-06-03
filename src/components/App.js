/* eslint-disable */
import '../index.css';


import fetchPopularGames from "../Redux/popularGames/popAsync";
import fetchUpComingGames from "../Redux/UpComingGames/UpComingAsync";
import fetchNewGames from "../Redux/newGames/NewGameAsync";


// import hooks
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import react-router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from '../Layouts/RootLayout';
import Home from "./‌Home.js"
import GameDetail, { gameDetailLoader } from './GameDetail';
import Error from './Error';

// Routing

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/gamezone" element={<RootLayout />}>
      <Route exact index element={<Home />} />
      <Route 
        path="/gamezone/:text"
        element={<GameDetail />}
        loader={gameDetailLoader}
      />
    <Route path='*' element={<Error />} />
    </Route>
  )
)
function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchPopularGames());
    dispatch(fetchUpComingGames());
    dispatch(fetchNewGames());
    
  }, [dispatch]);


  return (
      <RouterProvider router={router} />
  )
}

export default App;
