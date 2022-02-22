import React, { useEffect, useLayoutEffect, useRef } from "react";
import classes from "./LightSource.module.css";

import { Directions } from "../Direction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LightSource({ dir, selected, changeLightSource }) {
  const lightSource = useRef(null);

  useEffect(() => {
    if (lightSource && lightSource.current && dir === Directions.topLeft) {
      changeLightSource(lightSource.current);
      console.log(lightSource.current);
      lightSource.current.className = `${classes.Selected} ${classes.LightSourceContainer}`;
    }
    console.log(lightSource.current);
  }, []);

  useLayoutEffect(() => {
    if (selected !== null && selected === lightSource.current)
      lightSource.current.className = `${classes.Selected} ${classes.LightSourceContainer}`;
    else if (lightSource.current !== null)
      lightSource.current.className = `${classes.LightSourceContainer}`;
  });

  return (
    <>
      <div  
          ref={lightSource}
          onClick={(e) => {
            changeLightSource(e.target);
          }}
          data-dir={`${dir}`}
           >
      </div>
    </>
  );
}

export default LightSource;
