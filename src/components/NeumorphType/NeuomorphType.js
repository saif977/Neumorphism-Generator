import React, {useState,useEffect} from 'react'
import classes from "./NeumorphType.module.css"

import {type} from "../../Assets/Type"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NeuomorphType({neumorphType,setNeumorphType}) {

  return (
    <div className={classes.NeumorphTypeContainer}>
        <div onClick={()=>setNeumorphType(type.flat)} className={neumorphType===type.flat?classes.NeumorphTypeSelected:""}><div className={classes.unicodeFlat}>&#91;</div> </div>
        <div onClick={()=>setNeumorphType(type.concave)} className={neumorphType===type.concave?classes.NeumorphTypeSelected:""} ><div className={classes.unicodeConcave}>&#40;</div></div>
        <div onClick={()=>setNeumorphType(type.convex)} className={neumorphType===type.convex?classes.NeumorphTypeSelected:""} ><div className={classes.unicodeConvex}>&#40;</div></div>
        <div onClick={()=>setNeumorphType(type.inset)} className={neumorphType===type.inset?classes.NeumorphTypeSelected:""} ><div className={classes.unicodeInset}>&#91;</div> </div>
    </div>
  )
}

export default NeuomorphType