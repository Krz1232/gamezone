/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// Redux Toolkit
import popularGamesReducer from "./Redux/popularGames/PopSlice"
import newGamesReducer from './Redux/newGames/newGamesSlice';
import upComingReducer from './Redux/UpComingGames/upCSlice';
import { configureStore } from '@reduxjs/toolkit';

// React Redux
import { Provider } from 'react-redux';


const store = configureStore({
  reducer : {
    popular : popularGamesReducer,
    up_coming : upComingReducer,
    new_games : newGamesReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

