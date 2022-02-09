import React, { useEffect, useState } from "react";
import LightSource from "../Lightsource/LightSource";

import classes from "./NeumorphDiv.module.css";
import { Directions } from "../Direction";

const NeomorphDiv = (props) => {
  useEffect(() => {
    props.initialise_rad();
  }, [props.size]);

  let whiteVerticalShadow=`${props.height}`;
  let whiteHorizontalShadow=`${props.height}`;
  let blackVerticalShadow=`${props.height}`;
  let blackHorizontalShadow=`${props.height}`;

  switch(props.lightSource)
  {
      case Directions.topLeft : {
          blackVerticalShadow=-blackVerticalShadow;
          blackHorizontalShadow=-blackHorizontalShadow;
          break;
      }
      case Directions.topRight :{
          whiteHorizontalShadow=-whiteHorizontalShadow;
          blackVerticalShadow=-blackVerticalShadow;
          break;
      } 
      case Directions.bottomRight:{
        whiteHorizontalShadow=-whiteHorizontalShadow;
        whiteVerticalShadow=-whiteVerticalShadow;  
        break;
      }
      case Directions.bottomLeft:{
          blackHorizontalShadow=-blackHorizontalShadow;
          whiteVerticalShadow=-whiteVerticalShadow;
      }
      default : break;
  }

  const style = {
    width: `${props.size}rem`,
    height: `${props.size}rem`,
    borderRadius: `${props.rad}rem`,
    boxShadow: `${whiteHorizontalShadow}rem ${whiteVerticalShadow}rem ${props.blur}rem #d1d9e6, 
                       ${blackHorizontalShadow}rem ${blackVerticalShadow}rem ${props.blur}rem #fff`,
  };

  return (
    <div className={classes.NeumorphDiv}>
      <div className={classes.NeumorphDiv__NeumorphItem} style={style}></div>
    </div>
  );
};

export default NeomorphDiv;
