import {useState,useEffect} from "react";

const getWindowSize=()=>{
    const {width,height}=window.screen;
    return{
        width,
        height
    }
}

export const useWindowSize=()=>{
    const [windowSize,setWindowSize]=useState(getWindowSize());
    useEffect(()=>{
        const handleWindowSize=()=>{
            setWindowSize(getWindowSize());
        }
        const e=window.addEventListener("resize",handleWindowSize);
        return ()=>{
            window.removeEventListener("resize",e);
        }
    },[])
    return windowSize;
};