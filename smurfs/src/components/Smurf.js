// <img src={smurfImg} alt="After Nearly 60 Years, Does This New Instalment Of - Smurfs The Lost Village Characters @clipartmax.com" />
import React, { useState } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import  { editSmurf, removeSmurf } from '../actions/smurfVillage';
// Material-ui
import { makeStyles, Card, CardMedia, CardHeader, CardContent, Typography, TextField, IconButton } from '@material-ui/core';
import { Edit, Check, Delete } from '@material-ui/icons';

import smurfImg from '../img/smurf.png';

const useStyles = makeStyles(theme => ({
    container: {
        width: '20%',
        display: 'flex',
        flexDirection: 'column'
    },
    image: {
        height: '150px',
        objectFit: 'contain'
    },
    card: {
        
     },
     header: {
         paddingTop: '4px',
         paddingBottom: '4px'
     },
     content: {
        paddingTop: '4px',
        paddingBottom: '4px'
     }
}));

const Smurf = ({smurf}) => {
    const dispatch = useDispatch();
    const {name, age, height, id} = smurf;
    const { container, image, card, header, content } = useStyles();
    const [newValues, setNewValues] = useState({
        name,
        age,
        height,
        id
    });
    const [editing, setEditing] = useState(false);

    const handleInputChange = e => {
        setNewValues({
            ...newValues,
            [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(editSmurf(newValues));
        setEditing(false);
    }

    const handleDelete = e => {
        dispatch(removeSmurf(id));
    }

    return (
        <div className={container}>
        
            <img className={image} src={smurfImg} alt="Smurf" />
            <form onSubmit={handleSubmit}>
                <Card>
                    <CardMedia image={`url(${smurfImg})`} title="Live from space album cover" />
                    <CardHeader className={header} title={smurf.name} />
                    <CardContent className={content}>
                        {editing ? 
                        <TextField required id='age' name='age' type='number' value={newValues.age} onChange={handleInputChange} /> :
                        <Typography>Age: {age}</Typography> }

                        {editing ? 
                        <TextField required id='height' name='height' type='text' value={newValues.height} onChange={handleInputChange} /> :
                        <Typography>Height: {height}</Typography> }
                        {!editing && (
                        <IconButton onClick={() => setEditing(true)}>
                            <Edit />
                        </IconButton> )}
                        {editing && (
                        <IconButton type='submit'>
                            <Check />
                        </IconButton> )}
                        
                        <IconButton onClick={handleDelete}>
                            <Delete />
                        </IconButton>
                    </CardContent>
                </Card>
            </form>
        </div>
    )
}

export default Smurf