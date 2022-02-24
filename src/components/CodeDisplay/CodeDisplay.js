import React , {useEffect,useRef} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from "./CodeDisplay.module.css"

const CodeDisplay=(props)=>{

    const div=useRef(null);

    const bgLightColor=document.documentElement.style.getPropertyValue("--lightenColor");
    const bgDarkColor=document.documentElement.style.getPropertyValue("--darkenColor");

    const copyHandler=()=>{
        console.log("clicked")
        const select=document.getSelection();
        select.removeAllRanges();
        const range=document.createRange();
        range.selectNode(div.current);
        select.addRange(range);
        document.execCommand("copy");
    }
    
    return(
        <div ref={div} className={classes.codeDisplay_container}>
            <div >
                <pre>
                    <code>
                       <span><span className={classes.CssProperty}>width: </span><span className={classes.CssValue}>{props.size*10}px;</span></span>
                       <span><span className={classes.CssProperty}>height: </span><span className={classes.CssValue}>{props.size*10}px;</span></span>
                       <span><span className={classes.CssProperty}>background-color: </span><span className={classes.CssValue}>{props.neumorphBackground};</span></span>
                       <span><span className={classes.CssProperty}>border-radius: </span><span className={classes.CssValue}>{props.radius*10}px;</span></span>
                       <span><span className={classes.CssProperty}>box-shadow: </span><span className={classes.CssValue}>{props.inset?"inset":null} {props.whiteVerticalShadow}px {props.whiteHorizontalShadow}px {props.boxShadowBlur}px {props.boxShadowColor1} {bgLightColor},</span></span>
                       <span> <span className={classes.CssProperty}></span><span className={classes.CssValue}>           {props.inset?"inset":null} {props.blackVerticalShadow}px {props.blackHorizontalShadow}px {props.boxShadowBlur}px {props.boxShadowColor2} {bgDarkColor};</span></span>
                    </code>
                </pre>
            </div>
            <div className={classes.clipContainer}>
                <FontAwesomeIcon icon="clipboard" className={classes.clipBoard} onClick={copyHandler}/>
            </div>
        </div>
    )
}

export default CodeDisplay;




