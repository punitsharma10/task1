import React ,{useState} from 'react';
import "./Figma1Common.css";
import {SemiCircleProgress }from 'react-semicircle-progressbar';
// import GradientCircleProgressbar from '../ProgressBar/GradientCircleProgressbar';

const Figma1Common = ({img,imgAlt,title,amount,percent}) => {
    // const [rangeval, setRangeval] = useState(null);
  return (
    <div className="category-card">
      {/* <div className='row mt-3'> */}

      {/* </div> */}
        {/* <div className='slider'>
        <input type="range" className="custom-range" min="199" max="3999" 
       onChange={(event) => setRangeval(event.target.value)} />
        </div> */}
        {/* <div className='semi-donut'>CSS</div> */}
        <div className='progressbar1'>
      <SemiCircleProgress
        percentage={percent}
        size={{
          width: 75,
          height: 75,
        }}
        strokeWidth={10}
        strokeColor="#FF45E1"
        hasBackground={true}
      />
    </div>
        <img src={img} alt={imgAlt} className="icon" />
        {/* <div> <GradientCircleProgressbar percentage={50} strokeWidth={7} secondaryColor="#f0f0f0"/></div> */}
        <div className="category-title">{title}</div>
        <div className="category-amount">{amount}</div>
      </div>
  );
}

export default Figma1Common;
