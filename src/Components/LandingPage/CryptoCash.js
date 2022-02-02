import React from 'react';
import { Grid } from '@mui/material';
import {Button} from 'react-bootstrap'
import Img1 from '../../assets/images/GPoint_Debit_Card/GPoint_Debit_Card_980x882/GPoint_Debit_Card_Reload&Relax_Image_980x882.png'
import cryptocards from '../../assets/images/crypto_cash/cryptocards.png';


function CryptoCash() {
  return (
    <>
    <Grid container px={5}  style={{backgroundColor:'#EFF5FF',paddingTop:'100px',paddingBottom:'100px'}}  >
        <Grid item pl={3} xs={12} md={6} className='cryptoCard' style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
            <Grid container justifyContent={'center'}  alignItems={'center'} style={{width:'300px',height:'150px',backgroundColor:'white',}}>
                <div>
                    <p >Ceate you free <strong>Gpoint Wallet account</strong></p>
                   <form style={{display:'flex',justifyContent:'space-between'}}>
                        <input style={{padding:'9px'}} placeholder='Email address' />
                        <Button style={{padding:'10px',verticalAlign:'initial'}} >Sign up</Button>
                    </form>
               </div>
               
            </Grid>
        </Grid>
        <Grid item xs={12} md={6} mt={3} style={{paddingRight:'10%'}} >
            <h1 style={{fontSize:'3.5rem'}}>Spend your crypto like cash</h1>
            <p className='my-5' style={{fontSize:'1.2rem'}}><strong>Convert crypto into dollars with zero fees
            using Gpoint Wallet and the Gpoint Wallet
            Prepaid Visa Card.</strong></p>
            <p>Buy and sell crypto tokens with fiat currencies using
            your Gpoint Wallet and Gpoint Wallet Prepaid Visa
            Card and earn unlimited Gpoints back anywhere that
            accepts Visa when you make purchases!</p>
            <p>Begin growing your digital assets today when you
            download the Gpoint Wallet and apply for the
            Gpoint Wallet Prepaid Visa Card!</p>
        </Grid>
    </Grid>
    </>
  );
}

export default CryptoCash;
