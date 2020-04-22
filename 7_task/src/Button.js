import React from 'react';

const Button = ({ handleClick, text, children }) => {
    return (
       <button onClick={handleClick}>
            {text}
            {children}  
        </button>
    );
};

export default Button;
