import React, {useState,useEffect} from 'react'
import classes from "./NeumorphType.module.css"

import {type} from "../../Assets/Type"

function NeuomorphType({neumorphType,setNeumorphType}) {

  return (
    <div className={classes.NeumorphTypeContainer}>
        <div onClick={()=>setNeumorphType(type.flat)} className={neumorphType===type.flat?classes.NeumorphTypeSelected:""}>flat</div>
        <div onClick={()=>setNeumorphType(type.concave)} className={neumorphType===type.concave?classes.NeumorphTypeSelected:""} >conc</div>
        <div onClick={()=>setNeumorphType(type.convex)} className={neumorphType===type.convex?classes.NeumorphTypeSelected:""} >conv</div>
        <div onClick={()=>setNeumorphType(type.inset)} className={neumorphType===type.inset?classes.NeumorphTypeSelected:""} >inset</div>
    </div>
  )
}

export default NeuomorphType