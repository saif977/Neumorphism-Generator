import React from "react";
import classes from "./Color.module.css";
import { ChromePicker } from "react-color";

function Color({ color, setColor, setShowColor }) {
  return (
    <div className={classes.ColorContainer}>
      <div className={classes.ColorSelector}>
        <ChromePicker
          color={color}
          opacity={true}
          onChange={(color, e) => setColor(color.hex)}
        />
      </div>
      <div
        onClick={() => setShowColor(false)}
        className={classes.ColorCloser}
      ></div>
    </div>
  );
}

export default Color;
