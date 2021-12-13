import { makeStyles } from "@mui/styles";
import React from "react";
import MainImage from "../../assets/images/Business_Profile/Business_Profile_1304x600/Business Profile_Main_1304x600_1.jpg";
import { createTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 540,
        sm: 600,
        md: 700,
        lg: 1080,
        xl: 1920,
      },
    },
});

const useStyle = makeStyles(() => ({
    ching:{
        fontSize: "50px",
        position: "relative",
        '& p:before': {
            content: 'url("https://images.ctfassets.net/gkyt4bl1j2fs/43XZt7mbKc4JliiHb5ngKL/568aceaa0277b28690a7503edcacdd96/Credit_Card_Rewards_Bit01.svg")',
            position: 'absolute',
            top: '-20px',
            left: '-150px',

        },
        '& p:after': {
            content: 'url("https://images.ctfassets.net/gkyt4bl1j2fs/6pXbY0pG8cfsmBU6aTmXAt/e644132470f769c1838d7ad4bb1ec4e8/Group_5186.svg")',
            position: 'absolute',
            bottom: '20px',
            right: '-150px',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: "40px",
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "30px",
            '& p:before': {
                top: '-50px',
    
            },
            '& p:after': {
                bottom: '-10px',
            },
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: "50px",
            '& p:before': {
                content:'"" !important'
    
            },
            '& p:after': {
                content:'"" !important'
            },
        },
    },
    mainText:{
        fontSize: "20px",
        // fontWeight: "bold",
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            width: "80%",
        },
        '& a': {
            color: "#0074de",
            textDecoration: "none",
            transition: '0.3s',
            '&:hover': {
                textDecoration: "underline",
                color: "rgba(0,116,222,.7)",
            },
        },
    },
    estimated:{
        color: "#6b6e76",
        marginTop: "20px",
    }
}));


function Main() {
    const classes = useStyle();
    return (
        <>
            <div className={classes.ching}>
                <p>GPoint Rewards <br /> More *cha-ching.*</p>
            </div>
            <p className={classes.mainText}>Not only does the <Link to='/Debit/'>GPoint</Link> allow you to conveniently swap your crypto for <Link to='/Debit/'>GPoints</Link> and spend anywhere <Link to='/Debit/'>GPoint</Link> is accepted, you can also earn exciting and exclusive rewards everytime you shop at one of our dozens of <Link to='/Debit/'>GPoint</Link> affiliated locations. </p>
            <img src={MainImage} width={'90%'} alt=""/>
            <span className={classes.estimated}>Estimated cash back reward amounts shown are for illustrative purposes.</span>
        </>
    )
}

export default Main;



// GPoint Rewards
// Not only does the GPoint allow you to conveniently swap your crypto for GPoints and spend anywhere GPoint is accepted, you can also earn exciting and exclusive rewards everytime you shop at one of our dozens of GPoint affiliated locations. 
 
// GPoint rewards are determined automatically, so all you need to do to do… is swipe! Or simply scan your QR code!
 
// Sit back and watch as your balance continues to grow as you take advantage of GPoint Rewards on your typical everyday purchases