const initialState = {
    smurfs: [],
    loading: true,
    error: ''
}

export default (state=initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        default:
            return state;
    }
}