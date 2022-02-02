import React from 'react';
import { Grid } from '@mui/material';
import Img1 from '../../assets/images/GPoint_Debit_Card/GPoint_Debit_Card_980x882/GPoint_Debit_Card_Dont_Panic_Image_980x882.png'

function HeroSection() {
  return (
    <>
        <Grid container justifyContent={'center'}  style={{backgroundColor:'#EFF5FF'}} px={3}>
            <Grid item xs={12} md={6} >
                <h3 className='mt-3'>GPoint Wallet</h3>
                <h1 className='mt-4' style={{fontSize: '70px'}}>Quick, Convenient, Secure</h1>
                <p className='mt-3'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget consectetur sagittis, nisl nunc
                    aliquet nunc, euismod aliquam nunc nisl eget consectetur
                    sagittis, nisl nunc aliquet nunc, euismod aliquam nunc
                    nisl eget consectetur sagittis, nisl nunc aliquet nunc,
                    euismod aliquam nunc.
                </p>
                <div style={{display:'flex'}} className='mt-4'>
                    <div className='pr-4'>
                        <p><i class="fas fa-check"></i></p>
                        <p><i class="fas fa-check"></i></p>
                        <p><i class="fas fa-check"></i></p>
                    </div>
                    <div>
                        <p><strong>1Gpoint = $1</strong></p>
                        <p><strong>Eligible for exclusive deals</strong></p>
                        <p><strong>Spend at Gpoint-affiliated online stores and Gpointaffiliated brick and mortar locales</strong></p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={6}  >
                  <img src={Img1} className='w-100' />
            </Grid>
        </Grid>
    </>
);}

export default HeroSection;
