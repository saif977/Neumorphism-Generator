import React, { useEffect, useState } from "react";

// importing font aweosme -----------------------

// ----------------------

import Cockpit from "../components/Cockpit/Cockpit";
import NeomorphDiv from "../components/NeumorphDiv/NeumorphDiv";
import Control from "../components/Control/Control";
import CodeDisplay from "../components/CodeDisplay/CodeDisplay";
import LightSource from "../components/Lightsource/LightSource";
import { Directions } from "../Assets/Direction";
import { type } from "../Assets/Type";
import { useWindowSize } from "../hooks/useWindowSize";
import classes from "./App.module.css";
import NeuomorphType from "../components/NeumorphType/NeuomorphType";
import Color from "../components/Color/Color";

function App() {
  const {width}=useWindowSize();
  const [maxNeumorphDivSize,setmaxNeumorphDivSize]=useState(width>700?28:16);
  const [state, setState] = useState({
    size: `${maxNeumorphDivSize===28?25:12}`,
    radius: 2,
    height: 0.45,
    blur: 0.75,
  });

  if(width<701&&maxNeumorphDivSize===28)
  {
    setmaxNeumorphDivSize(16);
    setState((prevState) => ({
      ...prevState,
      'size': 14,
    }));
  }
  else if(width>700&&maxNeumorphDivSize===16)
  {
    setmaxNeumorphDivSize(28);
  }

  const [selectedLightSource, setSelectedLightsource] = useState(null);
  const [neumorphType, setNeumorphType] = useState(type.flat);
  const [color, setColor] = useState("#ECF0F3");
  const [neumorphBackground, setNeumorphBackground] = useState(color);
  const [showColor, setShowColor] = useState(false);
  const [whiteVerticalShadow, setWhiteVerticalShadow] = useState(state.height);
  const [whiteHorizontalShadow, setWhiteHorizontalShadow] = useState(
    state.height
  );
  const [blackVerticalShadow, setBlackVerticalShadow] = useState(state.height);
  const [blackHorizontalShadow, setBlackHorizontalShadow] = useState(
    state.height
  );
  const [inset, setInset] = useState(false);


//  useEffect(()=>{
//   setmaxNeumorphDivSize(document.documentElement.style.getPropertyValue("--width"));
//  },[maxNeumorphDivSize])

const changeHandler = (e, changeFor) => {
    // console.log(e);
    const value = e.target.value;
    setState((prevState) => ({
      ...prevState,
      [changeFor]: value,
    }));
  };

  const initialise_rad = () => {
    //console.log("setting")
    setState((prevState, props) => {
      return { ...prevState, height: 0.45, blur: 0.75 };
    });
  };

  // shouldComponentUpdate(nextProps,nextState){
  //   //console.log(state.size,nextState.size)
  //   if(state.size!=nextState.size);
  //    setState({
  //      height:1.8
  //    })
  //   return true;
  // }

  const changeColor=(newColor)=>{
    setColor(newColor);
    console.log(getComputedStyle(document.documentElement).getPropertyValue('--bgColor') )
    //document.documentElement.style.setProperty("color",newColor);
  }

  const style = {
    backgroundColor: color,
  };

  return (
    <div className={classes.App} style={style}>
      <Cockpit></Cockpit>
      <main className={classes.App__main}>
        <div
          className={`${classes.App__main__flexContainer} ${classes.flexContainer}`}
        >
          <div className={classes.flexContainer__leftContainer}>
            <div className={classes.LeftSubContainer}>
              <div
                className={`${classes.LightSourceTop} ${classes.LightSource}`}
              >
                <div className={classes.topLeft}>
                <LightSource
                  dir={Directions.topLeft}
                  selected={selectedLightSource}
                  changeLightSource={setSelectedLightsource}
                />
                </div>

                <LightSource
                  dir={Directions.topRight}
                  selected={selectedLightSource}
                  changeLightSource={setSelectedLightsource}
                />
              </div>
              <div className={classes.NeumorphContainer}>
                <NeomorphDiv
                  size={state.size}
                  radius={state.radius}
                  height={state.height}
                  blur={state.blur}
                  initialise_rad={initialise_rad}
                  lightSource={
                    selectedLightSource && selectedLightSource.dataset.dir
                  }
                  neumorphType={neumorphType}
                  color={color}
                  neumorphBackground={neumorphBackground}
                  setNeumorphBackground={setNeumorphBackground}
                  whiteHorizontalShadow={whiteHorizontalShadow}
                  setWhiteHorizontalShadow={setWhiteHorizontalShadow}
                  whiteVerticalShadow={whiteVerticalShadow}
                  setWhiteVerticalShadow={setWhiteVerticalShadow}
                  blackHorizontalShadow={blackHorizontalShadow}
                  setBlackHorizontalShadow={setBlackHorizontalShadow}
                  blackVerticalShadow={blackVerticalShadow}
                  setBlackVerticalShadow={setBlackVerticalShadow}
                  inset={inset}
                  setInset={setInset}
                ></NeomorphDiv>
              </div>
              <div
                className={`${classes.LightSourceBottom} ${classes.LightSource}`}
              >
                <LightSource
                  dir={Directions.bottomLeft}
                  selected={selectedLightSource}
                  changeLightSource={setSelectedLightsource}
                />

                <LightSource
                  dir={Directions.bottomRight}
                  selected={selectedLightSource}
                  changeLightSource={setSelectedLightsource}
                />
              </div>
            </div>
          </div>
          <div className={classes.flexContainer__rightContainer}>
            <div className={classes.RightSubContainer}>
              <div className={classes.SelectColor}>
                <span>select color: </span>
                <button
                className={classes.ShowColor}
                onClick={() => setShowColor(!showColor)}
              >
              </button>
              </div>
              <NeuomorphType
                neumorphType={neumorphType}
                setNeumorphType={setNeumorphType}
              />
              {showColor ? (
                <Color
                  color={color}
                  setColor={changeColor}
                  setShowColor={setShowColor}
                />
              ) : null}

              <Control
                size={state.size}
                radius={state.radius}
                height={state.height}
                blur={state.blur}
                change={changeHandler}
                maxNeumorphDivSize={maxNeumorphDivSize}

              ></Control>
              <CodeDisplay
                size={state.size}
                radius={state.radius}
                boxShadowX={state.height}
                boxShadowY={state.height}
                boxShadowBlur={state.blur}
                boxShadowColor1={state.boxShadowColor1}
                boxShadowColor2={state.boxShadowColor2}
                neumorphBackground={neumorphBackground}
                whiteHorizontalShadow={whiteHorizontalShadow}
                whiteVerticalShadow={whiteVerticalShadow}
                blackHorizontalShadow={blackHorizontalShadow}
                blackVerticalShadow={blackVerticalShadow}
                inset={inset}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
