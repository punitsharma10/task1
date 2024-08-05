import React from 'react';
import PropTypes from 'prop-types';
import './GradientCircleProgressBar.css';
import logo from "../../assests/money-bag.png";

const GradientCircleProgressbar = ({
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

  let circumference = 2 * PI * R;
  let offset = circumference - (percentage / 100) * circumference;
  let gradientId = `${primaryColor[0]}${primaryColor[1]}${primaryColor[2]}`.replace(/#/g, '');

  return (
    <div
      className="circle-container"
      style={{
        height: `${width}px`,
        width: `${width}px`,
      }}
    >
      {!hidePercentageText ? (
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
            <p className='price-tag'>$ 1,235</p>

            {/* {percentage}% */}
          </span>
        </div>
      ) : null}

      <svg
        width="100%"
        height="100%"
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
        <circle
          strokeWidth={strokeWidth}
          fill="transparent"
          r={R}
          cx={width / 2}
          cy={width / 2}
          stroke={secondaryColor}
          strokeDasharray={`${circumference} ${circumference}`}
        />
        <circle
          className="styled-circle"
          strokeWidth={strokeWidth}
          fill={fill}
          r={R}
          cx={width / 2}
          cy={width / 2}
          stroke={`url(#${gradientId})`}
          strokeLinecap={strokeLinecap}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          transform="rotate(-90, 0, 0)"
        />
      </svg>
    </div>
  );
};

GradientCircleProgressbar.defaultProps = {
  width: 220,
  strokeWidth: 5,
  strokeLinecap: 'round',
  fontSize: 'inherit',
  fontColor: 'inherit',
  fontFamily: 'inherit',
  primaryColor: ['#00BBFF', '#92d7f1'],
  secondaryColor: 'transparent',
  fill: 'transparent',
};

export default GradientCircleProgressbar;
