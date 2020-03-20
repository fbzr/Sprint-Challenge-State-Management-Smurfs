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
        debugger
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
    try {
        const body = JSON.stringify({ name, age, height });
        const res = await axios.post('http://localhost:3333/smurfs/', body);
        dispatch({
            type: ADD_SMURF,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: ERROR,
            payload: `Error adding smurf: ${err.message}`
        });
    }
}

export const editSmurf = ({ name, age, height, id }) => async dispatch => {
    try {
        const body = JSON.stringify({ name, age, height });
        const res = await axios.put(`http://localhost:3333/smurfs/${id}`, body);

        dispatch({
            type: EDIT_SMURF,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: ERROR,
            payload: `Error editing smurf: ${err.message}`
        });
    }
}

export const removeSmurf = smurfId => async dispatch => {
    try {
        const res = await axios.delete(`http://localhost:3333/smurfs/${smurfId}`);
        
        dispatch({
            type: DELETE_SMURF,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: ERROR,
            payload: `Error deleting smurf: ${err.message}`
        });
    }
}