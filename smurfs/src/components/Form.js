import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
// Redux
import { useDispatch } from 'react-redux';
import  { addSmurf } from '../actions/smurfVillage';

const Form = () => {
    const dispatch = useDispatch();
    const [smurf, setSmurf] = useState({
        name: '',
        age: null,
        height: ''
    });

    const handleInputChange = e => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form onSubmit={ () => dispatch(addSmurf(smurf)) }>
            <TextField onChange={handleInputChange} value={smurf.name} id='name' name='name' type='text' label='Name' />
            <TextField onChange={handleInputChange} value={smurf.age} id='age' name='age' type='number' label='Age' />
            <TextField onChange={handleInputChange} value={smurf.height} id='height' name='height' type='text' label='Height' />
            <IconButton type='submit'>
                <Add />
            </IconButton>
        </form>
    )
}

export default Form
