import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import MainImage from "../../assets/images/How_it_works_Main_image_820x735/How_it_works_Main_image_820x735.png";

const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: "#eff6ff",
        padding: "0px",
        margin: "118px 0 0 0",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    mainContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    mainImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        margin: "0px",
        padding: "0px",
    },
    mainImgContainer: {
        position: "relative",
        width: "100%",
    },
    mainImgText: {
        fontSize: "1.5rem",
        textAlign: "left",
        paddingTop: "300px",
    },
    resizeMainImgText: {
        textAlign: "left",
    },
    mainImgTextContainer: {
        width: "100%",
        height: "100%",
        paddingTop: "100px",
    },
    marquee: {
        width: "100%",
        fontSize: "4rem",
        position: "absolute",
        top: "300px",
    },
    resizeMarque: {
        width: "100%",
        height: "100%",
        fontSize: "2rem",
        position: "absolute",
        top: "350px",
    },
    resizeMainImgContainer: {
        position: "relative",
        width: "100%",
        height: "100%",
    },
}));

export default function MainScreen() {
    const [webView, setWebView] = useState(true);

    const classes = useStyle();
    const handleResize = () => {
        window.innerWidth < 900 ? setWebView(false) : setWebView(true);
    };
    useEffect(() => {
        handleResize();
        window.onresize = handleResize;
    }, []);
    const text = (
        <>
            <h1> How it Works </h1>{" "}
            <p>
                Simply download the Gpoint Wallet for Android or iOS to begin securely
                buying, selling, sending, receiving, and storing cryptocurrency directly
                from your device.Just link your bank account, debit card, or credit card
                to get started.{" "}
            </p>{" "}
            <p>
                For even greater convenience and access to our lucrative rewards
                program, get your free GPoint Debit Card once you create an
                account.Spend crypto from anywhere!
            </p>{" "}
        </>
    );
    return (
        <section className={classes.root}>
            <Grid container className={classes.mainContainer}>
                <Grid item xs={12} className={classes.mainImgTextContainer}>
                    <marquee className={webView ? classes.marquee : classes.resizeMarque}>
                        <h1>
                            For even greater convenience and access to our lucrative rewards
                            program, get your free GPoint Debit Card once you create an
                            account.Spend crypto from anywhere!
                        </h1>{" "}
                    </marquee>{" "}
                    <Grid container justifyContent={"center"} alignItems={"top"}>
                        {" "}
                        {webView ? (
                            <>
                                <Grid item xs={12} md={4} mx={"auto"}>
                                    <div className={classes.mainImgText}> {text} </div>{" "}
                                </Grid>{" "}
                                <Grid
                                    item
                                    xs={12}
                                    md={7}
                                    className={classes.mainImgContainer}
                                    mx={"auto"}
                                >
                                    <img
                                        src={MainImage}
                                        className={classes.mainImg}
                                        alt="main image"
                                    />
                                </Grid>{" "}
                            </>
                        ) : (
                            <>
                                <Grid
                                    item
                                    xs={12}
                                    md={7}
                                    className={classes.resizeMainImgContainer}
                                >
                                    <img
                                        src={MainImage}
                                        className={classes.mainImg}
                                        alt="main image"
                                    />
                                </Grid>{" "}
                                <Grid item xs={12} md={5}>
                                    <div className={classes.resizeMainImgText}> {text} </div>{" "}
                                </Grid>{" "}
                            </>
                        )}{" "}
                    </Grid>{" "}
                </Grid>{" "}
            </Grid>{" "}
        </section>
    );
}
