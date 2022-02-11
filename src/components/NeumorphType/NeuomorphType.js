import React, {useState,useEffect} from 'react'
import classes from "./NeumorphType.module.css"

import {type} from "../Assets/Type"

function NeuomorphType({setNeumorphType}) {


  return (
    <div className={classes.NeumorphTypeContainer}>
        <div onClick={()=>setNeumorphType(type.flat)}>flat</div>
        <div onClick={()=>setNeumorphType(type.concave)} >conc</div>
        <div onClick={()=>setNeumorphType(type.convex)}>conv</div>
        <div onClick={()=>setNeumorphType(type.inset)} >inset</div>
    </div>
  )
}

export default NeuomorphType