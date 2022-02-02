import React from 'react';
import { Grid } from '@mui/material';

function TradItem({image,title,subTitle}) {
  return (
      <>
      <img src={image} className='w-100' />
      <h2 className='text-center'>{title}</h2>
      <p className='text-center'>{subTitle}</p>
      </>
  );
}

export default TradItem;
