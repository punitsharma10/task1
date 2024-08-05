import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import ReviewsProvider from './ReviewsProvider';

const ReviewsBar = (props) => {
    const {score} = props;
    
    //function for calculating the color 
    const calcColor = (percent,start,end) => {
        let a = percent / 100,
        b = (end - start) * a,
        c = b + start;

        // return an CSS hsl color string
        return "hsl(" + c + ", 100%, 50%)";
    }
  return (
    <div>
        <ReviewsProvider valueStart={0} valueEnd={score}>
            {(value) =>(
                <CircularProgressbar
                value={value}
                text={`${value} %`}
                circleRatio={0.7}
                style={{
                    trai:{
                        strokeLinecap: "butt",
                        transform: "rotate(-126deg)",
                        transformOrigin: "center center"
                    },
                    path: {
                        strokeLinecap: "butt",
                        transform: "rotate(-126deg)",
                        transformOrigin: "center center",
                        stroke: calcColor(value, 0, 120),
                    },
                    text: {
                        fill: "#ddd"
                    },
                }}
                strokeWidth={10}
                />
            )}
        </ReviewsProvider>
    </div>
  );
}

export default ReviewsBar;
