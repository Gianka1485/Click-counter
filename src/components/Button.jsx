import React from "react";
import '../styles/Button.css';

function Button({ text, isButtonClick, controlClick }) {
    return(
        <button type="button" className={ `${isButtonClick ? 'button-click' : 'button-restart'} button` }
        onClick={controlClick}>
            {text}
        </button>
    );
}

export default Button;