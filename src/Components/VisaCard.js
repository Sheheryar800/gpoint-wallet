import React from 'react';

function VisaCard({image,title,subTitle}) {
  return (
      <>
      <div style={{width:'40%'}}>
        <img src={image} className='w-100' />
      </div>
      <h2 style={{color:'#89A6E4'}} >{title}</h2>
      <p style={{color:'#AFCEE0'}}  >{subTitle}</p>
      </>
  );
}

export default VisaCard;
