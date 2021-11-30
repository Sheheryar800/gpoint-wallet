import React from 'react'
import RoadMap from '../Components/HowItWorks/RoadMap'
import Img1 from '../assets/images/Direct_Deposit_Page/Direct_Deposit_Page_1_980x882.jpg'
import Img2 from '../assets/images/Direct_Deposit_Page/Direct_Deposit_Page_2_980x882.jpg'
import Img3 from '../assets/images/Direct_Deposit_Page/Direct_Deposit_Page_3_980x882.jpg'
import Img4 from '../assets/images/Direct_Deposit_Page/Direct_Deposit_Page_4_980x882.jpg'

function DirectDeposit() {
    const data = [
        {id: 1, title: 'Deposit Funds', text: 'Deposit funds directly from your bank account to your GPointWallet to start investing immediately.', img: Img1},
        {id: 2, title: 'Debit or Credit card', text: 'Or, link your debit or credit card to fund your account another way.', img: Img2},
        {id: 3, title: 'Fiat Funds', text: 'Easily send fiat-funds back to your bank account anytime. ', img: Img3},
        {id: 4, title: 'Download the App', text: 'Investing made simple. Just download the app and follow the instructions to get started.', img: Img4},
    ]
    const title = 'Direct Deposit'
    return (
        <div>
            <RoadMap data={data} title={title} />
        </div>
    )
}

export default DirectDeposit
