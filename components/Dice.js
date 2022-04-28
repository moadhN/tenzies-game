import React from "react";
import './dice.css'

export default function Dice(props) {
    const value = props.value;
    let classNames = ''

    switch (value) {
        case 1:
            classNames = "one-dice el__dice"
            break;
        case 2:
            classNames = "two-dice el__dice"
            break;
        case 3:
            classNames = "three-dice el__dice"
            break;
        case 4:
            classNames = "four-dice el__dice"
            break;
        case 5:
            classNames = "five-dice el__dice"
            break;
        default:
            classNames = "six-dice el__dice"
            break;
    }
    const dieElement = () => {
        const dieArray = []
        for (let i = 0; i < value; i++) {
            dieArray.push(<div className="die"></div>)
        }
        return dieArray
    }

    const diceList = () => {
        return <div className={`${classNames}`}>{dieElement()}</div>
    }
    console.log('class', classNames)
    return (<div className={`dice dice-button ${props.isHeld ? "isHeld" : ""}`} onClick={props.holdDice} >
        <h3 className="dice-number"> {diceList()}</h3>

    </div>)
}


