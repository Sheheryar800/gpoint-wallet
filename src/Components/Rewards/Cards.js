import React from 'react'
import { makeStyles } from "@mui/styles";
import { Grid } from '@mui/material';


const useStyle = makeStyles(() => ({
    root:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        margin: '15px',
        '& img':{
            width: '100%',
            height: '100%',
        }

    },
}));


function Cards({data}) {
    const classes = useStyle();
    return (
        <Grid container width={'80%'} mx={'auto'} justifyContent={'center'} alignItems={'center'}>
            {data.map((item) => {
                return (
                    <Grid item xs={12} md={6} key={item.id}>
                        <Grid conatiner className={classes.root}>
                            <Grid item xs={4}>
                                <img src={item.img} alt={item.title} />
                            </Grid>
                            <Grid item xs={8} pl={3}>
                                <h3>{item.title}</h3>
                            </Grid>
                        </Grid>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default Cards
