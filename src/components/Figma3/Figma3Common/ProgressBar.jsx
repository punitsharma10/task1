import React from 'react';
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
    const styleObject = {
        width: `${progress}%`,
        backgroundImage: 'linear-gradient(to right, #9809D8, #FF005C )',
        height: 30,
        borderRadius: 20,
        textAlign: 'center',
        lineHeight: '30px', 
        color: "#F0EBFF"
    }

    return (
        <div className="progress-container">
            <div className="progress-bar">
                <div style={styleObject}>
                    {`${progress}%`}
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
