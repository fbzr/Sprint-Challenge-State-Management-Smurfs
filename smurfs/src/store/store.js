import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import smurfsReducer from '../reducers/smurfs';

const store = createStore(
    smurfsReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;