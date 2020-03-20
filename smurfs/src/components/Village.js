import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Material-ui
import { makeStyles } from '@material-ui/core';
import villageImg from '../img/village.jpg';
import smurfImg from '../img/smurf.png';
// Components
import Smurf from './Smurf';

const useStyles = makeStyles(theme => ({
    village: {
        backgroundImage: `url(${villageImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
}));

const Village = () => {
    const smurfs = useSelector(state => state.smurfs);
    const { village } = useStyles();
    return (
        <div className={village}>
            { smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            )) }
        </div>
    );
}

export default Village
