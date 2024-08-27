import React from 'react';
import PropTypes from 'prop-types';
import './SemiCircleProgressBar.css';
import logo from "../../assests/money-bag.png";

const SemiCircleProgressBar = ({
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
  const R = (width / 2) - strokeWidth;

  const clampedPercentage = Math.min(percentage, 100);

  let circumference = PI * R; 
  const offset = circumference - (clampedPercentage / 100) * circumference;
  // let offset = circumference - (percentage / 100) * circumference;
  let gradientId = `${primaryColor[0]}${primaryColor[1]}${primaryColor[2]}`.replace(/#/g, '');

  return (
    <div
      className="circle-container"
      style={{
        height: `${width / 2}px`, 
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
        className="svg-container"
        width="90%"
        height="90%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${width / 2}`} 
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="3%" stopColor={primaryColor[0]} />
            <stop offset="28%" stopColor={primaryColor[1]} />
            <stop offset="100%" stopColor={primaryColor[2]} />
          </linearGradient>
        </defs>
        <path
          d={`M ${strokeWidth},${width / 2} A ${R},${R} 0 0 1 ${width - strokeWidth},${width / 2}`}
          strokeWidth={strokeWidth}
          fill="transparent"
          stroke={secondaryColor}
        />
        <path
          className="styled-circle"
          d={`M ${strokeWidth},${width / 2} A ${R},${R} 0 0 1 ${width - strokeWidth},${width / 2}`}
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

SemiCircleProgressBar.defaultProps = {
  width: 120,
  strokeWidth: 5,
  strokeLinecap: 'round',
  fontSize: 'inherit',
  fontColor: 'inherit',
  fontFamily: 'inherit',
  primaryColor: ['#00BBFF', '#92d7f1'],
  secondaryColor: 'transparent',
  fill: 'transparent',
};

export default SemiCircleProgressBar;

