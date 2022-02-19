import React, { useEffect, useState } from "react";
import LightSource from "../Lightsource/LightSource";
import { LightenDarkenColor } from "lighten-darken-color";
import classes from "./NeumorphDiv.module.css";
import { Directions } from "../Direction";
import { type } from "../Assets/Type";

const NeomorphDiv = (props) => {
  let whiteVerticalShadow = `${props.height}`;
  let whiteHorizontalShadow = `${props.height}`;
  let blackVerticalShadow = `${props.height}`;
  let blackHorizontalShadow = `${props.height}`;

  const lightenColor = `${LightenDarkenColor(props.color, 20)}`;
  const darkenColor = `${LightenDarkenColor(props.color, -25)}`;

  document.documentElement.style.setProperty("--color", `${props.color}`);
  document.documentElement.style.setProperty(
    "--lightenColor",
    `${lightenColor}`
  );
  document.documentElement.style.setProperty("--darkenColor", `${darkenColor}`);

  console.log(props.neumorphType);

  useEffect(() => {
    props.initialise_rad();
  }, [props.size]);

  useEffect(() => {
    console.log(props.lightSource);
    switch (props.lightSource) {
      case Directions.topLeft: {
        props.setWhiteVerticalShadow(-props.height);
        props.setWhiteHorizontalShadow(-props.height);
        props.setBlackHorizontalShadow(props.height);
        props.setBlackVerticalShadow(props.height);
        break;
      }
      case Directions.topRight: {
        props.setWhiteHorizontalShadow(-props.height);
        props.setBlackVerticalShadow(-props.height);
        props.setWhiteVerticalShadow(props.height);
        props.setBlackHorizontalShadow(props.height);

        break;
      }
      case Directions.bottomRight: {
        props.setBlackVerticalShadow(-props.height);
        props.setBlackHorizontalShadow(-props.height);
        props.setWhiteVerticalShadow(props.height);
        props.setWhiteHorizontalShadow(props.height);
        break;
      }
      case Directions.bottomLeft: {
        props.setBlackHorizontalShadow(-props.height);
        props.setWhiteVerticalShadow(-props.height);
        props.setBlackVerticalShadow(props.height);
        props.setWhiteHorizontalShadow(props.height);
        break;
      }
      default:
        break;
    }
  }, [props.lightSource, props.height]);

  useEffect(() => {
    switch (props.neumorphType) {
      case type.flat: {
        props.setInset(false);
        props.setNeumorphBackground(props.color);
        break;
      }
      case type.inset: {
        props.setInset(true);
        props.setNeumorphBackground(props.color);
        break;
      }
      case type.convex: {
        props.setInset(false);
        props.setNeumorphBackground(
          `linear-gradient(to ${props.lightSource},${darkenColor},${lightenColor})`
        );
        break;
      }
      case type.concave: {
        props.setInset(false);
        props.setNeumorphBackground(
          `linear-gradient(to ${props.lightSource},${lightenColor},${darkenColor})`
        );
        break;
      }
      default:
        break;
    }
  }, [props.neumorphType,props.color]);

  const style = {
    background: `${props.neumorphBackground}`,
    width: `${props.size}rem`,
    height: `${props.size}rem`,
    borderRadius: `${props.rad}rem`,
    boxShadow: `${props.inset ? "inset" : ""} ${props.whiteVerticalShadow}rem ${
      props.whiteHorizontalShadow
    }rem ${props.blur}rem ${lightenColor}, 
    ${props.inset ? "inset" : ""}   ${props.blackVerticalShadow}rem ${
      props.blackHorizontalShadow
    }rem ${props.blur}rem ${darkenColor}`,
  };

  return (
    <div className={classes.NeumorphDiv}>
      <div className={classes.NeumorphDiv__NeumorphItem} style={style}></div>
    </div>
  );
};

export default NeomorphDiv;
