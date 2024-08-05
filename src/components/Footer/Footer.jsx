import React from 'react';
import './Footer.css';

import { LuHome } from "react-icons/lu";
import { FaBagShopping } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { RiApps2Line } from "react-icons/ri";
import { PiChatCenteredDotsLight } from "react-icons/pi";

const Footer = ({color}) => {
  return (
    <div className='icons' style={{backgroundColor:color}}>
      <div className='home'> <LuHome size={18}/></div>
      <div className='bag'><FaBagShopping size={17}/></div>
      <div className='plussign'><FaCirclePlus size={39}/></div>
      <div className='riapp'><RiApps2Line size={17}/></div>
      <div className='pichat'><PiChatCenteredDotsLight size={15}/></div>
    </div>
  );
}

export default Footer;
