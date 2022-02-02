import React from 'react';
import { Grid } from '@mui/material';
import {Button} from 'react-bootstrap'

function GpointWalet() {
  return (
      <>
      <Grid container className='wallet ' style={{height:'100vh',padding:'0 5rem'}} alignItems={'center'} justifyContent={'end'} >
       <Grid item md={4}>
       </Grid>
       <Grid item xs={12} md={8} >
           <Grid container justifyContent={'center'}>
             <h1 className='walletHeading' >Get the Gpoint Wallet Prepaid Visa Card</h1>
             <Button 
             className='mt-4'
             style={{backgroundColor:'#89A6E4',borderColor:'#89A6E4',
             borderRadius:'50px',padding:'20px 50px',fontSize:'25px',color:'black'}}
             ><strong>Download Now</strong></Button>
           </Grid>
       </Grid>
      </Grid>
      </>
  );
}

export default GpointWalet;
