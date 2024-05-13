import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dataReducer from './reducers/dataReducer';

const initialState = {};

const rootReducer = combineReducers({
  data: dataReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState
});

export default store;
