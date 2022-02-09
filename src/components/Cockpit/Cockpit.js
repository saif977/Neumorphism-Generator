import React from "react";

import classes from "./Cockpit.module.css";

const cockpit=()=>{
    return(
        <div className={classes.cockpit}>
            <header className={classes.cockpit__header}>
                <h1 className={classes.cockpit__header__h1}>
                       Neumorpho
                </h1>
                <p className={classes.cockpit__header__p}>
                       Neumorphism css code generator
                </p>
            </header>
        </div>
    );
}

export default cockpit;