import React from 'react';
import PropTypes from 'prop-types';
import './LinearProgressBar.css';
import logo from "../../assests/money-bag.png";

const LinearProgressBar = ({
  percentage,
  width,
  height,
  strokeWidth,
  fontSize,
  fontColor,
  fontFamily,
  primaryColor,
  secondaryColor,
  hidePercentageText,
  strokeLinecap
}) => {
  const progressBarStyle = {
    width: `${percentage}%`,
    height: `${strokeWidth}px`,
    background: `linear-gradient(to right, ${primaryColor.join(', ')})`,
    borderRadius: strokeLinecap === 'round' ? `${strokeWidth / 2}px` : '0',
  };
  return (
    <div
      className="linear-container"
      style={{
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor: secondaryColor,
        borderRadius: strokeLinecap === 'round' ? `${strokeWidth / 2}px` : '0',
      }}
    >
      {!hidePercentageText ? (
        // <div className="percentage-container">
             <div className={`percentage-container ${percentage > 50 ? 'center' : 'left'}`}>
          <span
            className="price"
            style={{
              fontSize,
              fontFamily,
              color: fontColor,
            }}
          >
            <p className='price-tag'>${percentage}</p>
          </span>
        </div>
      ) : null}

      <div
        className="progress-bar"
        style={progressBarStyle}
      ></div>
    </div>
  );
};

LinearProgressBar.defaultProps = {
  width: 220,
  height: 20,
  fontSize: 'inherit',
  fontColor: 'inherit',
  fontFamily: 'inherit',
  primaryColor: ['#00BBFF', '#92d7f1'],
  secondaryColor: '#e0e0e0',
  strokeLinecap: 'round',
};

export default LinearProgressBar;
