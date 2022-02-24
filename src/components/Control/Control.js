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
                       max={`${props. maxNeumorphDivSize}`} 
                       step=".5" 
                       value={props.size}  
                       change={props.change}
                       />
            
            <ControlEl classFor="radControllerContainer"
                       for="radius"
                       id="radius"
                       type="range" 
                       min="0" 
                       max={props.size/2} 
                       step=".5" 
                       value={props.radius} 
                       change={props.change}
                       />
                      
            
            <ControlEl classFor="heightControllerContainer"
                       for="height"
                       id="height" 
                       type="range" 
                       min="0" 
                       max="4" 
                       step="0.001" 
                       value={props.height} 
                       change={props.change}
                       />
            
            <ControlEl classFor="blurControllerContainer"
                       for="blur"
                       id="blur" 
                       type="range" 
                       min="0" 
                       max={'10'} 
                       step="0.0001" 
                       value={props.blur} 
                       change={props.change}
                       />
            

        </div>
    );
}

export default Control;