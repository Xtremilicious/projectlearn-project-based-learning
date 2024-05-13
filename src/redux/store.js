import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dataReducer from './reducers/dataReducer';

// Define the initial state
const initialState = {};

// Create a rootReducer by combining all reducers
const rootReducer = combineReducers({
  data: dataReducer
});

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState
});

export default store;
