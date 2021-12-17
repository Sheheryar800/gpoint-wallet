import React from 'react';
import { makeStyles } from "@mui/styles";
import { Grid } from '@mui/material';


const useStyle = makeStyles(() => ({
    root:{
        textAlign: 'center',
        marginBottom: '50px',
    },
    background:{
        backgroundImage: `url(${require('../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Credit_Card_Images_1800x960.png').default})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#E5F3FF',
    },
    customButton:{
        backgroundColor: '#fff',
        color: '#000',
        border: '1px solid #000',
        padding: '0.7rem 1.5rem',
        borderRadius: '1rem',
        cursor: 'pointer',
        '&:hover':{
            backgroundColor: '#00A8E8',
            color: '#fff',
            border: '1px solid #00A8E8',
        } 
    },
}));

function Apply() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <div className={classes.background}>
                <Grid container spacing={0} p={10} justifyContent={'center'}>
                    <Grid item xs={12}>
                        <h1 style={{fontSize: '3.5rem'}}>Apply for the <br /> GPoint Credit Card</h1>
                    </Grid>
                    <Grid item xs={8}>
                        <p style={{fontSize: '1.5rem'}}>
                            Sit back and watch as your balance continues to grow as you take advantage of GPoint Rewards on your typical everyday purchases
                        </p>
                    </Grid>
                    <Grid item xs={12}>
                        <button className={classes.customButton}>Learn more</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Apply
