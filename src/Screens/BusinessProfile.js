import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Img1 from '../assets/images/Business_Profile/Business_Profile_1304x600/Business Profile_Main_1304x600_1.jpg'
import Img2 from '../assets/images/Business_Profile/Business_Profile_980x882/Business_Profile_980x882.jpg'
import { makeStyles } from '@mui/styles';

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
});

function BusinessProfile() {
    const classes = useStyles();
    const [webView, setWebView] = useState(true)
    const handleResize = () => {
        window.innerWidth < 900 ? setWebView(false): setWebView(true);
    }
    useEffect(() => {
        handleResize();
        window.onresize = handleResize;
    }, []);
    return (
        <>
            <section className={classes.root}>
                <Grid container width={'70%'} textAlign={'center'}>
                    <Grid item xs={12} width={'100%'}>
                        <img src={Img1} alt="Business Profile" className={classes.image} />
                    </Grid>
                    <Grid item xs={12} className={classes.text}>
                        <h1>Business Profile</h1>
                        <p>Partner with GPoint to provide cryptocurrency support for your customers and gain instant access to our thousands of users worldwide. Position your brand at the forefront of emerging payment solutions and watch your revenue grow.</p>
                    </Grid>
                </Grid>
            </section>
            <section>
                <Grid container mb={5} width={'70%'} mt={10} mx={'auto'} textAlign={'center'} justifyContent={'center'} alignItems={'center'}>
                    {webView 
                    ?   <>
                            <Grid item xs={12} md={6} className={classes.text} textAlign={'left'}>
                                <p>Set up a Business Profile to get started.</p>
                                <p>As a GPoint Partner, we’ll recommend traffic to your business, offer our customers exclusive rewards for shopping there, and promote your services to our users and Partners alike.</p>
                            </Grid>
                            <Grid item xs={12} md={6} width={'100%'}>
                                <img src={Img2} alt="Crypto" className={classes.image} />
                            </Grid>
                        </>
                    :   <>
                            <Grid item xs={12} md={6} width={'100%'}>
                                <img src={Img2} alt="Crypto" className={classes.image} />
                            </Grid>
                            <Grid item xs={12} md={6} className={classes.text} textAlign={'left'}>
                                <p>Work with us to set up cryptocurrency payments for your business through GPoint. </p>
                                <p>Not only do we make accepting cryptocurrency payments as a business-owner safe and convenient, but we’ve also assembled a community of like-minded, forward thinking customers ready to shop at stores like yours. </p>
                            </Grid>
                        </>
                    }
                </Grid>
            </section>
        </>
    )
}

export default BusinessProfile;
