import Img1 from '../../assets/images/Crypto_1304x600/Crypto_1304x600.png'
import React from 'react';
import { Grid } from '@mui/material';
import Img2 from '../../assets/images/go.PNG'
import VisaCard from '../VisaCard';
import cloud from '../../assets/images/crypto_cash/cloud.png';

function VisaCardSection() {
  return (
      <>
      <Grid container style={{backgroundColor:'Black',paddingTop:'70px',paddingBottom:'70px'}} justifyContent={'center'} >
          <div className='text-center'>
          <h1 style={{color:'#fff'}} className='mt-5 pt-5 vCardSecHead'>Prepaid Visa Card Perks & Benefits</h1>
           <img src={cloud} className='w-100' />
          </div>
          <Grid item style={{width:'60%'}} >
                <Grid container justifyContent={'space-between'} spacing={3}  >
                    <Grid item xs={12} md={6}  >
                        <VisaCard image={Img2} title={'Low Transaction Fees'} 
                        subTitle={'With low transaction fees, paying with crypto has never been more convenient! Withdraw Your Crypto With the Gpoint Wallet Prepaid Visa Card, gain instant access to your cryptocurrency’s value by withdrawing it as cash '} />
                    </Grid>
                    <Grid item xs={12} md={6}  >
                        <VisaCard image={Img2} title={'Low Transaction Fees'} 
                        subTitle={'With low transaction fees, paying with crypto has never been more convenient! Withdraw Your Crypto With the Gpoint Wallet Prepaid Visa Card, gain instant access to your cryptocurrency’s value by withdrawing it as cash '} />
                    </Grid>
                </Grid>
                <Grid container justifyContent={'space-between'} spacing={3}  >
                    <Grid item xs={12} md={6}  >
                        <VisaCard image={Img2} title={'Low Transaction Fees'} 
                        subTitle={'With low transaction fees, paying with crypto has never been more convenient! Withdraw Your Crypto With the Gpoint Wallet Prepaid Visa Card, gain instant access to your cryptocurrency’s value by withdrawing it as cash '} />
                    </Grid>
                    <Grid item xs={12} md={6}  >
                        <VisaCard image={Img2} title={'Low Transaction Fees'} 
                        subTitle={'With low transaction fees, paying with crypto has never been more convenient! Withdraw Your Crypto With the Gpoint Wallet Prepaid Visa Card, gain instant access to your cryptocurrency’s value by withdrawing it as cash '} />
                    </Grid>
                </Grid>
          </Grid>
      </Grid>
      </>
  );
}

export default VisaCardSection;
