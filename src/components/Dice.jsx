import React from "react";
import icon from "./../assets/icon-dice.svg";

function Dice({ fetchAdvice }){
    const handleClick = () =>{
        fetchAdvice()
    }
    
    return (
        <>
            <button className="dice" onClick={handleClick}>
                <img src={icon} alt="Dice"/>
            </button>
        </>
    )
}

export default Dice;