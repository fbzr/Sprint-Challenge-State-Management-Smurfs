import axios from 'axios';
import {
    FETCH_DATA,
    ERROR,
    ADD_SMURF,
    EDIT_SMURF,
    DELETE_SMURF
} from './types';

export const fetchData = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:3333/smurfs');
        dispatch({
            type: FETCH_DATA,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: ERROR,
            payload: `Error fetching data: ${err.message}`
        });
    }
}

export const addSmurf = ({ name, age, height }) => async dispatch => {
    
}

export const editSmurf = ({ name, age, height, id }) => async dispatch => {
    
}

export const removeSmurf = smurfId => async dispatch => {
    
}