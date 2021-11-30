import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Img1 from '../assets/images/Pay_In_Store/Pay_In_Store_1304x600/Pay_In_Store_1304x600.png'
import Img2 from '../assets/images/Pay_In_Store/Pay_In_store_980x880/Pay_In_store_1_980x880.jpg'
import Img3 from '../assets/images/Pay_In_Store/Pay_In_store_980x880/Pay_In_store_2_980x880.jpg'
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


function PayInStore() {
    const classes = useStyles();
    const data = [
        {id: 1, title: 'Pay with Crypto', text: 'Our intuitive design and secure platform allows you to easily and conveniently send dozens of supported cryptocurrencies directly from your Wallet to any address, anywhere in the world, instantly. That’s the power of crypto.', img: Img2},
        {id: 2, title: 'Pay with the Gpoint Prepaid Debit Card', text: 'As soon as you download the app you’re eligible to apply for our GPointDebit card. This prepaid debit card facilitates crypto payments through your Wallet, allowing you to buy whatever you want, anywhere Visa is accepted, with crypto.', img: Img3},
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
            <RoadMap data={data} title={'Pay in store'} />
        </>
    )
}

export default PayInStore