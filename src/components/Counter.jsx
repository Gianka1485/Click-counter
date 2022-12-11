import React from "react";
import '../styles/Counter.css'

function Counter({ number , delay}) {
    return (
        <div className="count-container" style={{transform: `rotate(${number}deg)`, transition: `${delay}s`}}>{number}</div>
    );
}

export default Counter;