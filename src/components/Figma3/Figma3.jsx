import React from 'react';
import "./Figma3.css";

import saving from "../../assests/saving.png"
import burger from "../../assests/burger.png"
import Footer from '../Footer/Footer';
import Figma3Common from './Figma3Common/Figma3Common';
const Figma3 = () => {
  return (
    <>
    <div className='card'>
      <div className='card1'>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <img className='saving-image' src={saving} alt="" />
        <h1 className='h1'>$3,400</h1>
        <p className='p-tag'>budget Limit for january</p>
      </div>
      <div className='card2'>
      <Figma3Common
        img={burger} 
        ptag="Food & Drink" 
        // ptagprice="$220.00/month" 
        // spent="Spent $60 from $100" 
         total={100}
         outof={60}
      /> 
      <Figma3Common
        img={burger} 
        ptag="Taxi Service" 
        // ptagprice="$400.00/month"     
        // spent="Overspending $100 from $400" 
        total={1000}
        outof={80}
      />
      </div>
      <div className='footer'><Footer/></div>
    </div>
    </>
  );
}

export default Figma3;
