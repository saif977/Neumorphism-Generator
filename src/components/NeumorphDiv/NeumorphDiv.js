import React, { useEffect, useState } from "react";
import LightSource from "../Lightsource/LightSource";
import {LightenDarkenColor} from "lighten-darken-color"
import classes from "./NeumorphDiv.module.css";
import { Directions } from "../Direction";

const NeomorphDiv = (props) => {
  let whiteVerticalShadow = `${props.height}`;
  let whiteHorizontalShadow = `${props.height}`;
  let blackVerticalShadow = `${props.height}`;
  let blackHorizontalShadow = `${props.height}`;
  
  const lightenColor=`${LightenDarkenColor(props.color,20)}`;
  const darkenColor=`${LightenDarkenColor(props.color,-25)}`;
  //let neumorphDivColor=``

  console.log(props.neumorphType)
  useEffect(() => {
    props.initialise_rad();
  }, [props.size]);

   switch(props.neumorphType)
   {

   }

    switch (props.lightSource) {
      case Directions.topLeft: {
        whiteHorizontalShadow = -whiteHorizontalShadow;
        whiteVerticalShadow = -whiteVerticalShadow;
        break;
      }
      case Directions.topRight: {
        blackHorizontalShadow = -blackHorizontalShadow;
        whiteVerticalShadow = -whiteVerticalShadow;
        break;
      }
      case Directions.bottomRight: {
        blackVerticalShadow = -blackVerticalShadow;
        blackHorizontalShadow = -blackHorizontalShadow;
        break;
      }
      case Directions.bottomLeft: {
        whiteHorizontalShadow = -whiteHorizontalShadow;
        blackVerticalShadow = -blackVerticalShadow;
      }
      default:
        break;
    }
  

  const style = {
    backgroundColor:props.color,
    width: `${props.size}rem`,
    height: `${props.size}rem`,
    borderRadius: `${props.rad}rem`,
    boxShadow: `${whiteHorizontalShadow}rem ${whiteVerticalShadow}rem ${props.blur}rem ${lightenColor}, 
                       ${blackHorizontalShadow}rem ${blackVerticalShadow}rem ${props.blur}rem ${darkenColor}`,
  };

  return (
    <div className={classes.NeumorphDiv}>
      <div className={classes.NeumorphDiv__NeumorphItem} style={style}></div>
    </div>
  );
};

export default NeomorphDiv;
