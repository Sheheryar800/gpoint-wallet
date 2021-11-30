import React from 'react';
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Img from '../assets/images/Crypto_1304x600/Crypto_1304x600.png'

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
    currencies:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px auto',
        '& img':{
            width: '50px',
            height: '50px',
            objectFit: 'contain',
            objectPosition: 'center',
        },
        '& span':{
            fontSize: '1.3rem',
            paddingLeft: '10px',
        }
    }
});

function Crypto() {
    const classes = useStyles();
    const cryptocurrencies = [
        {
            symbol: 'USDT',
            icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
        },
        {
            symbol: 'BTC',
            icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        },
        {
            symbol: 'ETH',
            icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
        },
        {
            symbol: 'BCH',
            icon: 'https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png',
        },
        {
            symbol: 'XRP',
            icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ripple-XRP-icon.png',
        },
        {
            symbol: 'LTC',
            icon: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png',
        },
        {
            symbol: 'EOS',
            icon: 'https://cryptologos.cc/logos/eos-eos-logo.png',
        },
        {
            symbol: 'ADA',
            icon: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
        },
        {
            symbol: 'SOL',
            icon: 'https://solana.com/branding/new/logomark/logomark-mono.png',
        },
        {
            symbol: 'BNB',
            icon: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
        },
        {
            symbol: 'TRX',
            icon: 'https://cryptologos.cc/logos/tron-trx-logo.png',
        },
        {
            symbol: 'IOTA',
            icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/IOTA-MIOTA-icon.png',
        },
        {
            symbol: 'MKR',
            icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Maker-MKR-icon.png',
        },
        {
            symbol: 'DOGE',
            icon: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png',
        },
        {
            symbol: 'DOT',
            icon: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
        },
        {
            symbol: 'XLM',
            icon: 'https://cryptologos.cc/logos/stellar-xlm-logo.png',
        },
        {
            symbol: 'IMC',
            icon: 'https://iconape.com/wp-content/png_logo_vector/imc-information-multimedia-communication-logo.png',
        },
    ]

    return (
        <>
            <section className={classes.root}>
                <Grid container width={'70%'} textAlign={'center'}>
                    <Grid item xs={12} width={'100%'}>
                        <img src={Img} alt="Crypto" className={classes.image} />
                    </Grid>
                    <Grid item xs={12} className={classes.text}>
                        <h1>Crypto on Venmo</h1>
                        <h1>Your journey starts here</h1>
                        <p>With GPointWallet serving as your trusted intermediary, you can instantly gain access a number of supported cryptocurrencies, including BTC, ETH, and IMC. Buy, Sell, HODL.</p>
                        <p>Currently, GPoint Wallet is the only Wallet available for download offering support for the IMC Token.</p>
                    </Grid>
                </Grid>
            </section>
            <section className={classes.root2}>
                <h1>Crypto</h1>
                <h2>With GPoint Wallet, gain access to a plethora of supported cryptocurrencies, including:</h2>
                <Grid container spacing={4} mb={5} width={'70%'} mx={'auto'} textAlign={'center'} justifyContent={'center'} alignItems={'center'}>
                    {cryptocurrencies.map((crypto, index) => (
                        <Grid item xs={4} className={classes.currencies} key={index}>
                            <img src={crypto.icon} alt={crypto.symbol} />
                            <span>{crypto.symbol}</span>
                        </Grid>
                    ))}
                </Grid>
            </section>
        </>
    )
}

export default Crypto
