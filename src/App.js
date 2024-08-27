import logo from "./logo.svg";
import "./App.css";
// import SemiCircleProgressBar from "./components/Semi/SemiCircleProgressBar";
// import SemiCircularProgressBar from "./components/SemiCircleProgressBar/SemiCircularProgressBar";
// import LinearProgressBar from './components/LinearProgressBar/LinearProgressBar';
// import GradientCircleProgressbar from './components/ProgressBar/GradientCircleProgressbar';
// import Figma1 from './components/Figma1';
// import Figma2 from './components/Figma2';
import Figma3 from "./components/Figma3/Figma3";
// import ProgressBar from './components/Figma3/Figma3Common/ProgressBar';

function App() {
  return (
    <div className="App">
      {/* <Figma1/> */}

      <Figma3/>

      {/* <Figma1 /> */}

      {/* <SemiCircularProgressBar
        percentage={500}
        strokeWidth={16}
        primaryColor={["#FF005C", "#FF45E1", "#A400F1"]}
        secondaryColor="#F7E5FF"
        hidePercentageText={false}
      /> */}

      {/* <LinearProgressBar
  percentage={30} 
  height={20} 
  primaryColor={["#FF005C", "#FF45E1"]} 
  secondaryColor="#F7E5FF" 
  hidePercentageText={false} 
  strokeLinecap="round"
/> */}

      {/* <ProgressBar progress={70}/> */}
      {/* <GradientCircleProgressbar percentage={80} strokeWidth={10} secondaryColor="#f0f0f0"/>
        <GradientCircleProgressbar percentage={60} strokeWidth={8} primaryColor={["#11FFBD", "#AAFFB9"]} secondaryColor="#f0f0f0" /> */}
      {/* <GradientCircleProgressbar percentage={50} strokeWidth={16} primaryColor={["#FF005C", "#FF45E1", "#A400F1"]} secondaryColor="#F7E5FF" hidePercentageText={false}/> */}
      {/* <GradientCircleProgressbar percentage={60} strokeWidth={8} /> */}
    </div>
  );
}

export default App;
