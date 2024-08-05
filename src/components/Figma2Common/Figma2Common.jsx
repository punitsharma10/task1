import React from 'react';
import './Figma2Common.css'; 

const Figma2Common = ({ img, title, subtitle, date, amount }) => {
  const amountClass = amount.startsWith('+') ? 'prizeheading-positive' : 'prizeheading-negative';
  return (
    <div className='transaction-card'>
    <div className='card1'>
      <img className='img' src={img} alt="" />
      <div className='inner-card1'>
        <p className='headingh2'>{title}</p>
        <p className='headingh4'>{subtitle}</p>
      </div>
    </div>
    <div className='card2'>
      <p  className={`prizeheading ${amountClass}`}>{amount}</p>
      <p className='dateheading'>{date}</p>
    </div>
  </div>
  );
}

export default Figma2Common;
