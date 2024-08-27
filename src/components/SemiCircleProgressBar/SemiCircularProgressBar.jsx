import React from 'react';
import PropTypes from 'prop-types';
import './SemiCircularProgressBar.css';
import logo from "../../assests/money-bag.png";


const SemiCircularProgressBar = ({
    percentage,
    width,
    strokeWidth,
    fontSize,
    fontColor,
    fontFamily,
    primaryColor,
    secondaryColor,
    fill,
    hidePercentageText,
    strokeLinecap,
  }) => {
    const PI = 3.14;
    const R = (width / 2) - (strokeWidth * 2);
    const circumference = PI * R; // Half of the full circumference
    const offset = circumference - (percentage / 100) * circumference;
    const gradientId = `${primaryColor[0]}${primaryColor[1]}${primaryColor[2]}`.replace(/#/g, '');
  
    return (
      <div
        className="circle-container"
        style={{
          height: `${width / 2}px`, // Half the height for semi-circle
          width: `${width}px`,
        }}
      >
        {/* {!hidePercentageText ? (
          <div className="percentage-container">
            <span className="money-logo"
              style={{
                fontSize,
                fontFamily,
                color: fontColor,
              }}>
                <img src={logo} alt="" />
            </span>
            <span
              className="price"
              style={{
                fontSize,
                fontFamily,
                color: fontColor,
              }}
            >
              <p className='price-tag'>$1,235</p>
            </span>
          </div>
        ) : null} */}
  
        <svg
          width="100%"
          height="50%" // Half the height for semi-circle
          viewBox={`0 0 ${width} ${width / 2}`} // Adjust viewBox for semi-circle
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id={gradientId}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="44%" stopColor={primaryColor[0]} />
              <stop offset="72%" stopColor={primaryColor[1]} />
              <stop offset="100%" stopColor={primaryColor[2]} />
            </linearGradient>
          </defs>
          <path
            d={`
              M ${width / 2},${strokeWidth}
              a ${R},${R} 0 1,1 ${width - strokeWidth * 2},0
            `}
            strokeWidth={strokeWidth}
            fill="transparent"
            stroke={secondaryColor}
          />
          <path
            className="styled-path"
            d={`
              M ${width / 2},${strokeWidth}
              a ${R},${R} 0 1,1 ${width - strokeWidth * 2},0
            `}
            strokeWidth={strokeWidth}
            fill={fill}
            stroke={`url(#${gradientId})`}
            strokeLinecap={strokeLinecap}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
          />
        </svg>
      </div>
    );
  };
  
  SemiCircularProgressBar.defaultProps = {
    width: 300,
    strokeWidth: 5,
    strokeLinecap: 'round',
    fontSize: 'inherit',
    fontColor: 'inherit',
    fontFamily: 'inherit',
    primaryColor: ['#00BBFF', '#92d7f1'],
    secondaryColor: 'transparent',
    fill: 'transparent',
  };

export default SemiCircularProgressBar;
