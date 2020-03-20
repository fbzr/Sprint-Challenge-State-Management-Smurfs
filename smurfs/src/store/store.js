import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import smurfsReducer from '../reducers/smurfs';
import { fetchData } from '../actions/smurfVillage';

const store = createStore(
    smurfsReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(fetchData());

export default store;