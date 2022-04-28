import React from "react";


export default function Dice(props) {


    return (<div className={`dice dice-button ${props.isHeld ? "isHeld" : ""}`} onClick={props.holdDice} >
        <h3 className="dice-number"> {props.value}</h3>

    </div>)
}


