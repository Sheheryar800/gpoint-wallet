import React from 'react';
import { Grid } from '@mui/material';
import TradItem from '../TradItem';
import sell from '../../assets/images/GPoint_Debit_Card/GPoint_Debit_Card_980x882/GPoint_Debit_Card_Reload&Relax_Image_980x882.png'
import cryptoCurrensises from '../../assets/images/crypto_cash/cryptoCurrensises.png';
import trade from '../../assets/images/crypto_cash/trade.png';
import earn from '../../assets/images/crypto_cash/earn.png';
import send from '../../assets/images/crypto_cash/send.png';




function TradSection() {
  return (
   <>
    <Grid container justifyContent={'space-evenly'} px={3} my={4}>
        <Grid item xs={12} md={2}>
            <TradItem image={cryptoCurrensises} title={'Buy'} subTitle={'Buy several supported cryptocurrencies,including IMC, BTC,ETH, and USDT'} />
        </Grid>
        <Grid item xs={12} md={2}>
            <TradItem image={sell} title={'Sell'} subTitle={'Safely sell your cryptocurrencies.'} />
        </Grid>
        <Grid item xs={12} md={2}>
            <TradItem image={trade} title={'Trade'} subTitle={'Exchange cryptocurrencies quickly and easily.'} />
        </Grid>
        <Grid item xs={12} md={2}>
            <TradItem image={earn} title={'Earn'} subTitle={'Accumulate Gpoints (1gp = $1), exchange for USD and withdrawn from your Gpoint Wallet!'} />
        </Grid>
        <Grid item xs={12} md={2}>
            <TradItem image={send} title={'Send'} subTitle={'Fast and free. Pay anyone, instantly.'} />
        </Grid>
    </Grid>
   </>   
  );
}

export default TradSection;
