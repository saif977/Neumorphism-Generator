import React from "react";

import classes from "./ControlElement.module.css";

const ControlEl=(props)=>{
    return(
        <div className={classes.classFor}>
                <label for={props.id}>{props.id} : </label>
                <input className={classes.inp}
                       id={props.id}
                       type={props.type} 
                       min={props.min} 
                       max={props.max} 
                       step={props.step} 
                       value={props.value}  
                       onChange={(e)=>{props.change(e,props.id)}}
                       />
            </div>
    )
}

export default ControlEl;