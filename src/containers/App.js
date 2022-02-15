import React, { useState } from "react";

// importing font aweosme -----------------------

// ----------------------

import Cockpit from "../components/Cockpit/Cockpit";
import NeomorphDiv from "../components/NeumorphDiv/NeumorphDiv";
import Control from "../components/Control/Control";
import CodeDisplay from "../components/CodeDisplay/CodeDisplay";
import LightSource from "../components/Lightsource/LightSource";
import { Directions } from "../components/Direction";
import { type } from "../components/Assets/Type";

import classes from "./App.module.css";
import NeuomorphType from "../components/NeumorphType/NeuomorphType";
import Color from "../components/Color/Color";

function App() {
  const [state, setState] = useState({
    size: 25,
    rad: 2,
  });

  const [selectedLightSource, setSelectedLightsource] = useState(null);
  const [neumorphType, setNeumorphType] = useState(type.flat);
  const [color, setColor] = useState("#ECF0F3");
  const [showColor, setShowColor] = useState(false);

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
                <LightSource
                  dir={Directions.topLeft}
                  selected={selectedLightSource}
                  changeLightSource={setSelectedLightsource}
                />
                <LightSource
                  dir={Directions.topRight}
                  selected={selectedLightSource}
                  changeLightSource={setSelectedLightsource}
                />
              </div>
              <NeomorphDiv
                size={state.size}
                rad={state.rad}
                height={state.height}
                blur={state.blur}
                initialise_rad={initialise_rad}
                lightSource={
                  selectedLightSource && selectedLightSource.textContent
                }
                neumorphType={neumorphType}
                color={color}
              ></NeomorphDiv>
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
              <button
                className={classes.ShowColor}
                onClick={() => setShowColor(!showColor)}
              >
                select color
              </button>
              <NeuomorphType neumorphType={neumorphType} setNeumorphType={setNeumorphType} />
              {showColor ? (
                <Color
                  color={color}
                  setColor={setColor}
                  setShowColor={setShowColor}
                />
              ) : null}

              <Control
                size={state.size}
                rad={state.rad}
                height={state.height}
                blur={state.blur}
                change={changeHandler}
              ></Control>
              <CodeDisplay
                size={state.size}
                rad={state.rad}
                boxShadowX={state.height}
                boxShadowY={state.height}
                boxShadowBlur={state.blur}
                boxShadowColor1={state.boxShadowColor1}
                boxShadowColor2={state.boxShadowColor2}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
