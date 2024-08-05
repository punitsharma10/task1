import React,{ useEffect, useState,useRef } from 'react';
import './Figma1.css';
import { Circle } from 'rc-progress';

import logo from "../assests/manager.png";
import  burger from "../assests/burger.png";
import  taxi from "../assests/taxi.png";
import  car from "../assests/car.png";
import  vector from "../assests/Vector.png";
import  simlogo from "../assests/simlogo.png";

import Footer from './Footer/Footer';
import Figma1Common from './Figma1Common/Figma1Common';

const Figma1 = () => {

  return (
    <>
     <div className="container">
    <div className="summary-header">
      <div></div>
      <h2 className='heading-h2'>Summary</h2>
      <p className='date'>Dec, 2021</p>
    </div>
    <div className="card">
      <div className="card-title">
        <p className='family'>Family Card</p>
        <img src={simlogo} alt=""  style={{height: "25px", width:"41px"}}/>
      </div>
      <div className="card-balance">
        <p className='p-amount'>$6,750,30</p>
      </div>
      <div className="card-details">
        <span>.... .... .... 1234</span>
      </div>
      <div className='card-images'>
        <span className='card-logo card-logo1'><img src={logo} alt="" style={{height: "15px", width: "15px"}} /></span>
        <span className='card-logo card-logo2'><img src={logo} alt="" style={{height: "15px", width: "15px"}} /></span>
       <span className='card-logo card-logo3'><img src={logo} alt="" style={{height: "15px", width: "15px"}} /></span>
</div>

    </div>
    <div className='heading'><h3>Top Category</h3></div>
    <div className="top-categories">
       <Figma1Common
        percent="55"
        img={burger} 
        imgAlt="Food & Drink" 
        title="Food & Drink" 
        amount="$220 / month" 
      />
      <Figma1Common 
        percent="70"
        img={burger} 
        imgAlt="Food & Drink" 
        title="Food & Drink" 
        amount="$220 / month" 
      />
      <Figma1Common 
        percent="30"
        img={car} 
        imgAlt="Cart" 
        title="Cart" 
        amount="$200 / month" 
      />
      <Figma1Common 
        percent="40"
        img={taxi} 
        imgAlt="Taxi" 
        title="Taxi" 
        amount="$100 / month" 
      />
    </div>
    <Footer/>
  </div>
    </>
  );
}

export default Figma1;
