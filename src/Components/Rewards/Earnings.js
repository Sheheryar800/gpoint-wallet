import React from 'react'
import { makeStyles } from "@mui/styles";
import { Grid } from '@mui/material';


const useStyle = makeStyles(() => ({
    root:{
        textAlign: 'center',
    },
    h1:{
        fontSize: '4.5rem',
    },
}));


function Earnings() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <h1 className={classes.h1}>It’s easy to start <br /> earning</h1>
            <Grid container spacing={10} justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={12} sm={8} md={3}>
                    <Grid container>
                        <Grid item sm={12}>
                            <img width={'100%'} src={require('../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Get_Cash_Reward.png').default} alt="Earn 1" />
                            <img width={'100%'} src='https://images.ctfassets.net/gkyt4bl1j2fs/2HpjisuodQIvGXMU7NyhOh/2d923a52b72c8e6c2ace16a08e69d6f3/how-it-works-separator.svg' alt=""/>
                            <Grid container alignItems={'flex-start'} justifyContent={'center'}>
                                <Grid item sm={'2'}>
                                    <h1 style={{margin: '18.72px 0px'}}>1</h1>
                                </Grid>
                                <Grid item sm={'10'} textAlign={'left'}>
                                    <h3 style={{marginTop: '27px'}}>Get Venmo</h3>
                                    <p>Get the Venmo app to apply for the Venmo Credit Card</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8} md={3}>
                    <Grid container>
                        <Grid item sm={12}>
                            <img width={'100%'} src={require('../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Get_GPoint_Wallet_V1.png').default} alt="Earn 2" />
                            <img width={'100%'} src='https://images.ctfassets.net/gkyt4bl1j2fs/2HpjisuodQIvGXMU7NyhOh/2d923a52b72c8e6c2ace16a08e69d6f3/how-it-works-separator.svg' alt=""/>
                            <Grid container alignItems={'flex-start'} justifyContent={'center'}>
                                <Grid item sm={'2'}>
                                    <h1 style={{margin: '18.72px 0px'}}>2</h1>
                                </Grid>
                                <Grid item sm={'10'} textAlign={'left'}>
                                    <h3 style={{marginTop: '27px'}}>Shop and spend</h3>
                                    <p>If approved, use the Venmo Credit Card for purchases everywhere Visa® cards are accepted.</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8} md={3}>
                    <Grid container>
                        <Grid item sm={12}>
                            <img width={'100%'} src={require('../../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Get_GPoint_Wallet_V2.png').default} alt="Earn 3" />
                            <img width={'100%'} src='https://images.ctfassets.net/gkyt4bl1j2fs/2HpjisuodQIvGXMU7NyhOh/2d923a52b72c8e6c2ace16a08e69d6f3/how-it-works-separator.svg' alt=""/>
                            <Grid container alignItems={'flex-start'} justifyContent={'center'}>
                                <Grid item sm={'2'}>
                                    <h1 style={{margin: '18.72px 0px'}}>3</h1>
                                </Grid>
                                <Grid item sm={'10'} textAlign={'left'}>
                                    <h3 style={{marginTop: '27px'}}>Get cash rewards</h3>
                                    <p>Automatically earn cash back based on your spending, right to your Venmo account.</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Earnings
