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
                       <span>width: {props.size*10}px;</span>
                       <span>height: {props.size*10}px;</span>
                       <span>border-radius: {props.rad*10}px;</span>
                       <span>box-shadow: {props.boxShadowX}px {props.boxShadowY}px {props.boxShadowBlur}px {props.boxShadowColor1},</span>
                       <span>            {-props.boxShadowX}px {-props.boxShadowY}px {props.boxShadowBlur}px {props.boxShadowColor2};</span>
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




