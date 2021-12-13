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
                            <img width={'100%'} src="https://images.ctfassets.net/gkyt4bl1j2fs/6AMTSrzcHIi3PCW89Wn8Fs/2e60a7e87f905f027e2d517ce0d0ac2f/Mask-Group-_2_.png?w=432&h=457&q=50&fm=webp" alt="Earn 1" />
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
                            <img width={'100%'} src="https://images.ctfassets.net/gkyt4bl1j2fs/Pf3c6UjIgJHks91AAr8ZN/6575e2b43916d8c30a0657ffedc27f35/Mask-Group-_1_.png?w=432&h=457&q=50&fm=webp" alt="Earn 2" />
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
                            <img width={'100%'} src="https://images.ctfassets.net/gkyt4bl1j2fs/5QBGediMaSdCmGsC6NgirC/31a26e996530b5dc825f76af0f04d354/Mask-Group-_3_.png?w=432&h=457&q=50&fm=webp" alt="Earn 3" />
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
