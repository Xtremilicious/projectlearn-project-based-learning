import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import dataReducer from './reducers/dataReducer';

const initialState = {};

const reducers = combineReducers({
  data: dataReducer
});

const store = initialState => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
}

export default store