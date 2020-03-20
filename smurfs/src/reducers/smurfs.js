import { FETCH_DATA, ERROR, ADD_SMURF, EDIT_SMURF, DELETE_SMURF } from '../actions/types';

const initialState = {
    smurfs: [],
    loading: true,
    error: ''
}

export default (state=initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        case FETCH_DATA:
            return {
                ...state,
                loading: false,
                error: '',
                smurfs: payload
            };
        case ADD_SMURF:
            return {
                ...state,
                loading: false,
                error: '',
                smurfs: payload
            };
        case EDIT_SMURF:
            return {
                ...state,
                loading: false,
                error: '',
                smurfs: payload
            };
        case DELETE_SMURF:
            return {
                ...state,
                loading: false,
                error: '',
                smurfs: payload
            };
        default:
            return state;
    }
}