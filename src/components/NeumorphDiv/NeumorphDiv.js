import React, { useEffect, useState } from "react";
import LightSource from "../Lightsource/LightSource";
import {LightenDarkenColor} from "lighten-darken-color"
import classes from "./NeumorphDiv.module.css";
import { Directions } from "../Direction";
import {type} from "../Assets/Type"

const NeomorphDiv = (props) => {
  let whiteVerticalShadow = `${props.height}`;
  let whiteHorizontalShadow = `${props.height}`;
  let blackVerticalShadow = `${props.height}`;
  let blackHorizontalShadow = `${props.height}`;
  
  const lightenColor=`${LightenDarkenColor(props.color,20)}`;
  const darkenColor=`${LightenDarkenColor(props.color,-25)}`;

  let neumorphBackground=`${props.color}`;
  let inset=false;
  //let neumorphDivColor=``

  document.documentElement.style.setProperty("--color",`${props.color}`);
  document.documentElement.style.setProperty("--lightenColor",`${lightenColor}`);
  document.documentElement.style.setProperty("--darkenColor",`${darkenColor}`);

  console.log(props.neumorphType)

  useEffect(() => {
    props.initialise_rad();
  }, [props.size]);



  
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
    
    switch(props.neumorphType)
    {
      case type.flat:{
        inset=false;
        neumorphBackground=`${props.color}`;
        break;}
        case type.inset : {
          inset=true;
          break;
        }
        case type.convex:{
          inset=false;
          neumorphBackground=`linear-gradient(to ${props.lightSource},${darkenColor},${lightenColor})`;
          break;
        }
        case type.concave:{
          inset=false;
          neumorphBackground=`linear-gradient(to ${props.lightSource},${lightenColor},${darkenColor})`;
          break;
        }
        default : break;
    }
    
  const style = {
    background:`${neumorphBackground}`,
    width: `${props.size}rem`,
    height: `${props.size}rem`,
    borderRadius: `${props.rad}rem`,
    boxShadow: `${inset?'inset':''} ${whiteHorizontalShadow}rem ${whiteVerticalShadow}rem ${props.blur}rem ${lightenColor}, 
    ${inset?'inset':''}   ${blackHorizontalShadow}rem ${blackVerticalShadow}rem ${props.blur}rem ${darkenColor}`,
  };

  return (
    <div className={classes.NeumorphDiv}>
      <div className={classes.NeumorphDiv__NeumorphItem} style={style}></div>
    </div>
  );
};

export default NeomorphDiv;
