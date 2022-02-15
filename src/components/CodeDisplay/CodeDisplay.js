import React , {useEffect,useRef} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from "./CodeDisplay.module.css"

const CodeDisplay=(props)=>{

    const div=useRef(null);

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
                       <span><span className={classes.CssProperty}>border-radius: </span><span className={classes.CssValue}>{props.rad*10}px;</span></span>
                       <span><span className={classes.CssProperty}>box-shadow: </span><span className={classes.CssValue}>{props.boxShadowX}px {props.boxShadowY}px {props.boxShadowBlur}px {props.boxShadowColor1},</span></span>
                       <span> <span className={classes.CssProperty}></span><span className={classes.CssValue}>           {-props.boxShadowX}px {-props.boxShadowY}px {props.boxShadowBlur}px {props.boxShadowColor2};</span></span>
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




