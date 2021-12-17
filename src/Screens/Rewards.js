import { makeStyles } from "@mui/styles";
import React from "react";
import { createTheme } from '@mui/material/styles';
import Main from "../Components/Rewards/Main";
import RoadMap from "../Components/HowItWorks/RoadMap";
import body1 from "../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Body_Images_880x980_1.png";
import body2 from "../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Body_Images_880x980_2.png";
import body3 from "../assets/images/GPoint_Wallet_Website_12_12_2021_Final/Body_Images_880x980_3.png";
import Rewarded from "../Components/Rewards/Rewarded";
import Earnings from "../Components/Rewards/Earnings";
import Apply from "../Components/Rewards/Apply";

const theme = createTheme({});

const useStyle = makeStyles(() => ({
    root: {
        backgroundColor: "#fff",
        padding: "0px",
        margin: "118px 0 0 0",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
}));


function Rewards() {
    const classes = useStyle();
    const data = [
        {id: 1, title: 'We do the math for you', text: 'Cash back rewards are determined automatically, so just swipe, tap and watch your Venmo balance grow.', img: body1},
        {id: 2, title: 'Use cash back to cash in on crypto', text: 'Just turn on crypto auto purchase, and choose from Bitcoin, Litecoin, Bitcoin Cash, and Ethereum. When cash back is transferred to your Venmo account at the end of every month, we’ll use it to automatically purchase crypto without any crypto transaction fee.', img: body2},
    ]
    const data2 = [
        {id: 1, title: 'Rake in the rewards', text: 'GPoint rewards are determined automatically, so all you need to do to do… is swipe! Or simply scan your QR code!', img: body3},
    ]
    return (
        <div className={classes.root}>
            <Main />
            <RoadMap data={data} title={''} />
            <Rewarded />
            <RoadMap data={data2} title={''} />
            <Earnings />
            <Apply />
        </div>
    )
}

export default Rewards