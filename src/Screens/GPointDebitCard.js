import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Img1 from '../assets/images/GPoint_Debit_Card/GPoint_Debit_Card_1304x600/GPoint_Debit_Card_1304x600.jpg'
import Img2 from '../assets/images/GPoint_Debit_Card/GPoint_Debit_Card_980x882/GPoint_Debit_Card_Body_Track_Image_980x882.png'
import Img3 from '../assets/images/GPoint_Debit_Card/GPoint_Debit_Card_980x882/GPoint_Debit_Card_Dont_Panic_Image_980x882.png'
import Img4 from '../assets/images/GPoint_Debit_Card/GPoint_Debit_Card_980x882/GPoint_Debit_Card_Reload&Relax_Image_980x882.png'
import RoadMap from '../Components/HowItWorks/RoadMap';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fafafa',
        padding: '0px',
        margin: '118px 0 0 0',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    root2:{
        textAlign: 'center',
        '& h1':{
            fontSize: '4rem',
            fontWeight: 'bold',
        },
        '& h2':{
            fontSize: '1.7rem',
            fontWeight: 'bold',
        },
    },
    image:{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    text:{
        '& h1':{
            fontSize: '4rem',
        },
        '& p':{
            fontSize: '1.3rem',
        },
    },
    currencies:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px auto',
        '& img':{
            width: '50px',
            height: '50px',
            objectFit: 'contain',
            objectPosition: 'center',
        },
        '& span':{
            fontSize: '1.3rem',
            paddingLeft: '10px',
        }
    }
});


function GPointDebitCard() {
    const classes = useStyles();
    const data = [
        {id: 1, title: 'Low Fees', text: 'With low transaction fees, paying with crypto has never been cheaper.', img: Img2},
        {id: 2, title: 'Online and Offline Spending', text: 'Whether you intend to use your GPoint Debit Card to go out to eat at your favorite restaurant or while shopping online, we make paying with crypto safe and convenient.', img: Img3},
        {id: 3, title: 'Withdraw Your Crypto at an ATM', text: 'With the GPoint Debit Card, gain instant access to your cryptocurrency’s value by withdrawing it as cash from thousands of ATMs around the world. ', img: Img4},
    ]
    return (
        <>
            <section className={classes.root}>
                <Grid container width={'70%'} textAlign={'center'}>
                    <Grid item xs={12} width={'100%'}>
                        <img src={Img1} alt="Crypto" className={classes.image} />
                    </Grid>
                    <Grid item xs={12} className={classes.text}>
                        <h1>With GPointWallet, there’s always more than one way to pay.</h1>
                        <p>Whether you prefer sending cryptocurrency electronically across the blockchain or paying at the counter with a card, we got you covered.</p>
                    </Grid>
                </Grid>
            </section>
            <RoadMap data={data} title={'GPoint Debit Card'} />
        </>
    )
}

export default GPointDebitCard;