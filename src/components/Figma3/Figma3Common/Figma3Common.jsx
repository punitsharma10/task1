import React from "react";
// import "./Figma3Common.css"
import { BsExclamationCircle } from "react-icons/bs";
import LinearProgressBar from "../../LinearProgressBar/LinearProgressBar";

// const calculatePercentage = (spent) => {
//   const regex = /(?:Spent|Overspending) \$([\d,]+) from \$([\d,]+)/;
//   const match = spent.match(regex);
//   if (match) {
//     const spentAmount = parseFloat(match[1].replace(/,/g, ''));
//     const totalAmount = parseFloat(match[2].replace(/,/g, ''));
//     if (totalAmount > 0) {
//       return ((spentAmount / totalAmount) * 100).toFixed(2);
//     }
//   }
//   return 0;
// };

const parseSpentString = (spent) => {
  const regex = /(?:Spent|Overspending) \$([\d,]+) from \$([\d,]+)/; // Updated regex
  const match = spent.match(regex);
  if (match) {
    const spentAmount = parseFloat(match[1].replace(/,/g, '')); // Extract spent amount
    const totalAmount = parseFloat(match[2].replace(/,/g, ''));
    if (totalAmount > 0) {
      const percentage = ((spentAmount / totalAmount) * 100).toFixed(2); // Calculate percentage
      return { spentAmount, percentage }; // Return both values
    }
  }
  return { spentAmount: 0, percentage: 0 };
};

const Figma3Common = ({ img, ptag, ptagprice, spent }) => {
  // const percentage = calculatePercentage(spent);
  const { spentAmount, percentage } = parseSpentString(spent);
  const message = percentage >= 50 ? "Oops!" : "Good Job !";
  const textColor = percentage >= 50 ? "#FF005C" : "#A400F1";

  return (
    <div className="inner-card">
      <div className="inner">
        <div className="burger-image">
          <img className="burgerlogo" src={img} alt="" />
        </div>
        <div>
          <p className="ptag">{ptag}</p>
          <p className="ptagprice">{ptagprice}</p>
        </div>
      </div>
      <div className="pg">
        <div className="linear-progress-bar">
          <LinearProgressBar
            percentage={percentage}
            spentAmount={spentAmount} 
            height={20}
            primaryColor={["#9809D8", "#FF005C"]}
            secondaryColor="#F7E5FF"
            hidePercentageText={false}
          />
        </div>
        {/* <div className='line-progress'><Line percent={50} strokeWidth={15} strokeColor="#9809D8" /></div> */}
        <p className="spent">{spent}</p>
      </div>
      <div className="brd"></div>
      <div>
        {/* <p className="base">{base}</p> */}
        <p className="base" style={{ color: textColor }}>{message}</p>
      </div>
    </div>
  );
};

export default Figma3Common;
