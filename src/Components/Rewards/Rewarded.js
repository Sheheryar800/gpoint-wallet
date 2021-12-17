import React from 'react';
import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
import Cards from './Cards';
import transportation from '../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Transportation.png';
import travel from '../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Travel.png';
import grocery from '../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Grocery.png';
import entertainment from '../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Entertainment.png';
import dining from '../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Dining_Nightlife.png';
import bills from '../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Bills_Utilities.png';
import health from '../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Health_Beauty.png';
import gas from '../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Gas.png';
import other from '../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Other.png';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 400,
        sm: 580,
        md: 816,
        lg: 1080,
        xl: 1920,
      },
    },
});

const useStyle = makeStyles(() => ({
    root:{
        marginTop: '100px',
        width: '70%',
    },
    h1:{
        fontSize: '240px',
        marginTop: '0rem',
        marginBottom: '0rem',
        position: 'relative',
        textAlign: 'center',
        [theme.breakpoints.down('lg')]: {
            fontSize: '165px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '115px',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '75px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '50px',
        },
        '&:before': {
            content: '""',
            fontSize: '3rem',
            height: '200px',
            width: '200px',
            background: 'url("https://images.ctfassets.net/gkyt4bl1j2fs/4a5r4VA2uRS3dGvme2XZmp/d9b0475bd35b4a4a6e02331a189f89d9/Group_5096.png") no-repeat bottom',
            backgroundSize: '200px',
            position: 'absolute',
            bottom: '-70px',
            left: '0',
            [theme.breakpoints.down('lg')]: {
                backgroundSize: '170px !important',
                height: '170px !important',
                width: '170px !important',
            },
            [theme.breakpoints.down('md')]: {
                backgroundSize: '140px !important',
                height: '140px !important',
                width: '140px !important',
            },
            [theme.breakpoints.down('sm')]: {
                backgroundSize: '100px !important',
                height: '100px !important',
                width: '100px !important',
                bottom: '-30px',
            },
            [theme.breakpoints.down('xs')]: {
                backgroundSize: '70px !important',
                height: '70px !important',
                width: '70px !important',
                bottom: '-30px',
            },
        },
        '&:after': {
            content: '""',
            fontSize: '3rem',
            height: '200px',
            width: '200px',
            background: 'url("https://images.ctfassets.net/gkyt4bl1j2fs/1quKSRjXu1mdSki7UExNrL/27b31fe12f17f8f63e2cc4be70b4cd03/Group_5097.png") no-repeat top',
            backgroundSize: '200px',
            position: 'absolute',
            top: '-70px',
            right: '0',
            [theme.breakpoints.down('lg')]: {
                backgroundSize: '170px !important',
                height: '170px !important',
                width: '170px !important',
            },
            [theme.breakpoints.down('md')]: {
                backgroundSize: '140px !important',
                height: '140px !important',
                width: '140px !important',
            },
            [theme.breakpoints.down('sm')]: {
                backgroundSize: '100px !important',
                height: '100px !important',
                width: '100px !important',
                top: '-30px',
            },
            [theme.breakpoints.down('xs')]: {
                backgroundSize: '70px !important',
                height: '70px !important',
                width: '70px !important',
                top: '-30px',
            },
        },
    },
    rewarded:{
        marginTop: '10rem',
        textAlign: 'center',
        fontSize: '3rem',
    },
}));

function Rewarded() {
    const classes = useStyle();
    const data = [
        {id: 1,title: 'Transportation', img: transportation},
        {id: 2,title: 'Travel', img: travel},
        {id: 3,title: 'Grocery', img: grocery},
        {id: 4,title: 'Entertainment', img: entertainment},
        {id: 5,title: 'Dining & Nightlife', img: dining},
        {id: 6,title: 'Bills & Utilities', img: bills},
        {id: 7,title: 'Health & Beauty', img: health},
        {id: 8,title: 'Gas', img: gas},
        {id: 9,title: 'Other', img: other},
    ]
    return (
        <div className={classes.root}>
            <h1 className={classes.h1}>Cash in</h1>
            <h1 className={classes.rewarded}>Get rewarded in these <br /> spending categories</h1>
            <Cards data={data} />
        </div>
    )
}

export default Rewarded
