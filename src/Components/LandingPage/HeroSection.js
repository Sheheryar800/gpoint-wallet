import React from 'react';
import { Grid } from '@mui/material';

function HeroSection() {
  return (
    <>
        <Grid container justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12} md={6}>
                <h3>GPoint Wallet</h3>
                <h1 style={{fontSize: '50px'}}>Quick, Convenient, Secure</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget consectetur sagittis, nisl nunc
                    aliquet nunc, euismod aliquam nunc nisl eget consectetur
                    sagittis, nisl nunc aliquet nunc, euismod aliquam nunc
                    nisl eget consectetur sagittis, nisl nunc aliquet nunc,
                    euismod aliquam nunc.
                </p>
            </Grid>
        </Grid>
    </>
);}

export default HeroSection;
