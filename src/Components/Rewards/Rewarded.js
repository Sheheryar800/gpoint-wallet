import React from 'react';
import { makeStyles } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
import Cards from './Cards';

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
        {id: 1,title: 'Transportation', img: 'https://images.ctfassets.net/gkyt4bl1j2fs/5Dgb0C79Haem9Ck1NjWTsS/d9cf4e5f3e2129e41314f90424ed816f/transportation.svg'},
        {id: 2,title: 'Travel', img: 'https://images.ctfassets.net/gkyt4bl1j2fs/34WCbNCKCXX5OCryR34Lzz/6e53655c5f9d573fdc893f4160f5aa0c/travel.svg'},
        {id: 3,title: 'Grocery', img: 'https://images.ctfassets.net/gkyt4bl1j2fs/4AvkVfYwTzLtEXYrn95j9U/e386b8d1926c2251b2c7f1f42fd0f79a/grocery.svg'},
        {id: 4,title: 'Entertainment', img: 'https://images.ctfassets.net/gkyt4bl1j2fs/QUX03obDRVqFpCTvgi0iU/c7a4f8f0689f6aa5167d0f5b622de1a1/entertainment.svg'},
        {id: 5,title: 'Dining & Nightlife', img: 'https://images.ctfassets.net/gkyt4bl1j2fs/khBTqGWdXJMkHkpfLooVQ/608eb91d75c51a79275ccf10b5694756/dining-nightlife.svg'},
        {id: 6,title: 'Bills & Utilities', img: 'https://images.ctfassets.net/gkyt4bl1j2fs/2x1jjGpqMHz0fAtKFKPeL3/9e536a2a4353c215ce3f4e942c3f633e/bills-utilities.png'},
        {id: 7,title: 'Health & Beauty', img: 'https://images.ctfassets.net/gkyt4bl1j2fs/jxEiDavyLxcTPd3dMMdro/39e20efd07c0822f54d349ef2d41d493/health-beauty.svg'},
        {id: 8,title: 'Gas', img: 'https://images.ctfassets.net/gkyt4bl1j2fs/wGYau9xTv5HD0nHclKIta/7a20dccfc7b96d8dc13cbbe9634cdc91/gas.svg'},
        {id: 9,title: 'Other', img: 'https://images.ctfassets.net/gkyt4bl1j2fs/t1KsUoXfCiGRd9La9P4xQ/5d9f7b222e1e84cf76c7995244046df8/other.svg'},
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
