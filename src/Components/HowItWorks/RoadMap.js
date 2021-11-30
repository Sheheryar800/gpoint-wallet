import React, {useState, useEffect} from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        padding: '0px',
        margin: '0px',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading:{
        fontSize: '4rem',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
    
function RoadMAp({data, title}) {
    const classes = useStyles();
    
    const [webView, setWebView] = useState(true)
    const handleResize = () => {
        window.innerWidth < 900 ? setWebView(false): setWebView(true);
    }
    
    useEffect(() => {
        handleResize();
        window.onresize = handleResize;
    }, []);
    return (
        <section className={classes.root}>
            <h1 className={classes.heading}>{title}</h1>
            <Grid container width={'70%'} justifyContent={'center'} alignItems={'center'}>
                {data?.map((data) => (
                    webView ? data.id % 2 === 0
                                ?   <>
                                        <Grid item xs={12} sm={6} mt={5} p={3}>
                                            <img src={data.img} alt={data.title} className={classes.map}/>
                                        </Grid>
                                        <Grid item xs={12} sm={6} mt={5} p={3}>
                                            <h1>{data.id}, {data.title}</h1>
                                            <p>{data.text}</p>
                                        </Grid>
                                    </>
                                :   <>
                                        <Grid item xs={12} sm={6} mt={5} p={3}>
                                            <h1>{data.id}, {data.title}</h1>
                                            <p>{data.text}</p>
                                        </Grid>
                                        <Grid item xs={12} sm={6} mt={5} p={3}>
                                            <img src={data.img} alt={data.title} className={classes.map}/>
                                        </Grid>
                                    </>
                            :   <>
                                    <Grid item xs={12} mt={5} p={3}>
                                        <img src={data.img} alt={data.title} className={classes.map}/>
                                    </Grid>
                                    <Grid item xs={12} mt={5} p={3}>
                                        <h1>{data.id}, {data.title}</h1>
                                        <p>{data.text}</p>
                                    </Grid>
                                </>

                ))}
            </Grid>
        </section>
    )
}

export default RoadMAp
