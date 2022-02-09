import React from "react";

import classes from "./Control.module.css";

import ControlEl from "./ControlElement/ControlElement";

const Control=(props)=>{

    // const  trial=()=>{
    //     console.log(this);
    // }

    return (
        <div className={classes.Control}>
            <ControlEl classFor="sizeControllerContainer"
                       for="size"
                       id="size"
                       type="range" 
                       min="10" 
                       max="30" 
                       step="1" 
                       value={props.size}  
                       change={props.change}
                       />
            
            <ControlEl classFor="radControllerContainer"
                       for="rad"
                       id="rad"
                       type="range" 
                       min="0" 
                       max={props.size/2} 
                       step="1" 
                       value={props.rad} 
                       change={props.change}
                       />
                      
            
            <ControlEl classFor="heightControllerContainer"
                       for="height"
                       id="height" 
                       type="range" 
                       min="0" 
                       max="4" 
                       step="0.01" 
                       value={props.height} 
                       change={props.change}
                       />
            
            <ControlEl classFor="blurControllerContainer"
                       for="blue"
                       id="blur" 
                       type="range" 
                       min="0" 
                       max={'10'} 
                       step="0.001" 
                       value={props.blur} 
                       change={props.change}
                       />
            

        </div>
    );
}

export default Control;