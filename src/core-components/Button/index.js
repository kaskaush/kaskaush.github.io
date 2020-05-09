import React from 'react';

const Button = ({ id, className, onClick, children }) => {
    return (
        <button id={id} onClick={onClick} className={`btn ${className}`}>
            {children}
        </button>
    );
};

export default Button;
