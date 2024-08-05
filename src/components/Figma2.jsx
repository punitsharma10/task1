import React from "react";

import "./Figma2.css";
import logo from "../assests/saving.png";
import taxi from "../assests/taxi.png"
import pricebag from "../assests/money-bag.png";
import Vector from "../assests/Vector.png";

import Footer from "./Footer/Footer";
import Figma2Common from "./Figma2Common/Figma2Common";
import GradientCircleProgressbar from "./ProgressBar/GradientCircleProgressbar";

const Figma2 = () => {
  return (
    <div className="card">
      <div className="summary-header">
        <div className="summary-header2">
          <h3 className="headingh3">Expenses</h3>
          <p className="date">Dec, 2021</p>
        </div>
        <img src={Vector} alt="" style={{ height: "17px", width: "16px" }} />
      </div>
      <div>
          <GradientCircleProgressbar percentage={80} strokeWidth={17} primaryColor={["#FF45E1", "#FF005C", "#A400F1"]} secondaryColor="#F7E5FF" />
        </div>
      {/* <div className="balanceCircle">
        <div>
          <GradientCircleProgressbar percentage={50} strokeWidth={15} primaryColor={["#FF45E1", "#A400F1"]} secondaryColor="#F7E5FF" hidePercentageText={false}/>
        </div>
        <div>
          <img src={pricebag} alt="" />
        </div>
        <div className="price">$1,235</div>
      </div> */}
      <div className="main-card">
        <Figma2Common
          img={logo}
          title="Received cashback"
          subtitle="Transferred Money"
          date="10 Dec 2021"
          amount="+ $30.00"
        />
        <Figma2Common
          img={logo}
          title="Received cashback"
          subtitle="Transferred Money"
          date="10 Dec 2021"
          amount="+ $30.00"
        />
        <Figma2Common
          img={taxi}
          title="Uber"
          subtitle="Taxi service"
          date="12 Dec 2021"
          amount="- $10.00"
        />
        <Figma2Common
          img={logo}
          title="Umbrella Food Shop"
          subtitle="Card Payment"
          date="14 Dec 2021"
          amount="- $52.00"
        />
        <Figma2Common
          img={logo}
          title="Umbrella Food Shop"
          subtitle="Card Payment"
          date="14 Dec 2021"
          amount="- $52.00"
        />
      </div>
      <Footer color="#FFFFFF" />
    </div>
  );
};

export default Figma2;
