import React from 'react';
import MainScreen from '../Components/HowItWorks/MainScreen';
import RoadMap from '../Components/HowItWorks/RoadMap';
import Img1 from '../assets/images/How_It_Works_Body_980x882/How_It_Works_Body_1_980x882.jpg'
import Img2 from '../assets/images/How_It_Works_Body_980x882/How_It_Works_Body_2_980x882.jpg'
import Img3 from '../assets/images/How_It_Works_Body_980x882/How_It_Works_Body_3_980x882.jpg'
import Img4 from '../assets/images/How_It_Works_Body_980x882/ How_It_Works_Body_4_980x882.jpg'

function HowItWorks() {
    const data = [
        {id: 1, title: 'Load Fiat', text: 'Easily connect a bank account, debit card, or credit card to start sending money to your GPointWallet.', img: Img1},
        {id: 2, title: 'Buy Crypto', text: 'Once your fiat-funds are loaded into your GPointWallet, you can instantly buy a number of supported cryptocurrencies, including BTC, ETH, and IMC.', img: Img2},
        {id: 3, title: 'Send and Receive', text: 'Use your GPointWallet to deposit, accept, and send cryptocurrency anywhere on the blockchain.', img: Img3},
        {id: 4, title: 'Withdrawal', text: 'Sell your cryptocurrency for fiat anytime.', img: Img4},
    ]
    const title = 'How it works'
    return (
        <>
            <MainScreen />
            <RoadMap data={data} title={title} />
        </>
    )
}

export default HowItWorks;
